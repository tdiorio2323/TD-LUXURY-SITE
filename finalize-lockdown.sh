#!/bin/bash
# === TD STUDIOS: tdstudiosny — Finish & Verify Lockdown ===
set -euo pipefail

echo "▶ Step 0: ensure clean deps"
command -v pnpm >/dev/null || { echo "Install pnpm: corepack enable && corepack prepare pnpm@latest --activate"; exit 1; }
pnpm -v >/dev/null

echo "▶ Step 1: ignore mac artifacts & remove from index"
grep -qxF ".DS_Store" .gitignore || printf "\n.DS_Store\npublic/.DS_Store\n" >> .gitignore
git rm -r --cached .DS_Store public/.DS_Store 2>/dev/null || true

echo "▶ Step 2: ensure Husky hooks exist & executable"
test -d .husky || pnpm dlx husky init >/dev/null
chmod +x .husky/* 2>/dev/null || true

echo "▶ Step 3: ensure Secretlint config present"
test -f .secretlintrc.json || cat > .secretlintrc.json <<'JSON'
{
  "rules": [
    { "id": "@secretlint/secretlint-rule-preset-recommend", "options": { "allows": [] } }
  ]
}
JSON
test -f .secretlintignore || cat > .secretlintignore <<'TXT'
node_modules/
.next/
dist/
build/
coverage/
*.png
*.jpg
*.jpeg
*.gif
*.webp
*.mp4
*.mov
*.pdf
*.zip
*.tar
*.tgz
.DS_Store
TXT

echo "▶ Step 4: install/ensure secretlint"
pnpm add -D secretlint @secretlint/secretlint-rule-preset-recommend >/dev/null

echo "▶ Step 5: add scripts to package.json (if missing)"
node - <<'JS'
const fs=require('fs');
const p=JSON.parse(fs.readFileSync('package.json','utf8'));
p.scripts ||= {};
p.scripts["scan:secrets"] = p.scripts["scan:secrets"] || 'secretlint "**/*"';
p.scripts["scan:secrets:staged"] = p.scripts["scan:secrets:staged"] || 'git diff --cached --name-only --diff-filter=ACM | xargs -I{} -r secretlint "{}"';
fs.writeFileSync('package.json', JSON.stringify(p,null,2));
console.log("package.json scripts ensured");
JS

echo "▶ Step 6: pre-commit (secret scan) & pre-push (no push to main + scan)"
cat > .husky/pre-commit <<'SH'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
if ! git diff --cached --name-only --diff-filter=ACM | xargs -I{} -r secretlint "{}"; then
  echo "🚫 Secretlint found potential secrets in staged files."
  exit 1
fi
SH
chmod +x .husky/pre-commit

cat > .husky/pre-push <<'SH'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
branch="$(git rev-parse --abbrev-ref HEAD)"
[ "$branch" = "main" ] && { echo "🚫 Direct pushes to main are blocked. Use feature branch + PR."; exit 1; }
if [ -z "$CI" ]; then
  pnpm -s scan:secrets >/dev/null || { echo "🚫 Pre-push secret scan failed."; exit 1; }
fi
SH
chmod +x .husky/pre-push

echo "▶ Step 7: PR template"
mkdir -p .github
cat > .github/pull_request_template.md <<'MD'
## 🚀 Deployment Notice
Merging to **main** will trigger a production deploy on Vercel.
- [ ] Reviewed preview/tested locally
- [ ] No secrets missing
- [ ] Changelog updated (if applicable)
## Summary
<describe change>
MD

echo "▶ Step 8: CI secret scan workflow"
mkdir -p .github/workflows
cat > .github/workflows/secret-scan.yml <<'YML'
name: 🔒 Secret Scan
on:
  pull_request: { branches: [ main ] }
  push: { branches: [ main ] }
jobs:
  secret-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: corepack enable
      - run: corepack prepare pnpm@latest --activate
      - run: pnpm add -D secretlint @secretlint/secretlint-rule-preset-recommend
      - run: npx secretlint "**/*"
YML

echo "▶ Step 9: commit local changes"
git add -A
git commit -m "chore: finalize manual-control lockdown, Husky guards, secret scanning (local+CI)" || true
git push

echo "▶ Step 10: DELETE stray remote branches already done earlier ✅"
git remote show origin | sed -n '/Remote branches:/,/Local branches configured/p' || true

echo "▶ Step 11: (Optional CLI) apply branch protection to main via API"
read -p "Apply GitHub branch protection via API now? [y/N] " ans
if [ "${ans:-N}" = "y" ] || [ "${ans:-N}" = "Y" ]; then
  read -r -s -p "Paste NEW GitHub token (repo admin): " GH_TOKEN; echo
  REPO_SLUG="tdiorio2323/tdstudiosny"
  curl -sS -X PUT \
    -H "Authorization: Bearer $GH_TOKEN" -H "Accept: application/vnd.github+json" \
    "https://api.github.com/repos/$REPO_SLUG/branches/main/protection" \
    -d '{
      "required_status_checks": null,
      "enforce_admins": true,
      "required_pull_request_reviews": { "require_code_owner_reviews": false, "required_approving_review_count": 1, "dismiss_stale_reviews": true },
      "restrictions": null,
      "allow_deletions": false,
      "allow_force_pushes": false,
      "required_linear_history": true,
      "block_creations": false,
      "required_conversation_resolution": true
    }' >/dev/null && echo "✅ Branch protection applied"
else
  echo "ℹ️ Skipping API; set protection in GitHub UI."
fi

echo "▶ Step 12: quick self-test (will intentionally FAIL, then clean up)"
set +e
echo 'AWS_SECRET_ACCESS_KEY=TESTSECRET' > tmp_secret_test.txt
git add tmp_secret_test.txt
git commit -m "test: secret should be blocked"
block_status=$?
set -e
rm -f tmp_secret_test.txt
git reset >/dev/null
if [ $block_status -ne 0 ]; then
  echo "✅ Pre-commit secret block working"
else
  echo "❌ Secret block did not trigger — check secretlint install & hooks"
fi

echo "🎉 Done. Proceed to UI checklist below."