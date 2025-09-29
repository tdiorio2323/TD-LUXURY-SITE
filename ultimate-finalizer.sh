#!/usr/bin/env bash
# === TD STUDIOS · tdstudiosny · One-Shot Finalizer ===
# Automates: cleanup, .gitignore, Husky guards, Secretlint (local+CI),
# CODEOWNERS, PR template, .vercelignore, delete extra branches,
# and apply branch protection via gh CLI (preferred) or API token fallback.

set -euo pipefail

REPO_SLUG="tdiorio2323/tdstudiosny"
MAIN_BRANCH="main"
EXTRA_BRANCHES=("chore/canonicalize-active" "copilot/fix-017b4136-8b0f-491e-b2e3-a88afa49c5c6")

say() { printf "\n\033[1m%s\033[0m\n" "$*"; }

# 0) Preflight
say "▶ Preflight"
command -v git >/dev/null || { echo "git not found"; exit 1; }
command -v node >/dev/null || { echo "node not found"; exit 1; }
if ! command -v pnpm >/dev/null; then
  echo "pnpm not found — run: corepack enable && corepack prepare pnpm@latest --activate"
  exit 1
fi
git fetch --all --prune >/dev/null

# 1) .gitignore & remove Mac cruft from index
say "▶ Ignore macOS artifacts & untrack them"
grep -qxF ".DS_Store" .gitignore || printf "\n.DS_Store\npublic/.DS_Store\n" >> .gitignore
git rm -r --cached .DS_Store public/.DS_Store 2>/dev/null || true

# 2) .vercelignore for cleaner, faster deploys
say "▶ Ensure .vercelignore"
cat > .vercelignore <<'IGN'
.DS_Store
Thumbs.db
node_modules
.git
.vscode
.idea
coverage
*.log
.next/cache
.next/static/chunks/*.map
.env
.env.*
tmp
dist
build
IGN

# 3) CODEOWNERS (auto-assign PRs to you)
say "▶ Ensure CODEOWNERS"
mkdir -p .github
cat > .github/CODEOWNERS <<'OWN'
# Default owner for everything:
*   @tdiorio2323
OWN

# 4) PR template (reminds prod deploy on merge)
say "▶ Ensure PR template"
cat > .github/pull_request_template.md <<'MD'
## 🚀 Deployment Notice
Merging to **main** triggers a production deploy on Vercel.
- [ ] Reviewed preview/tested locally
- [ ] No secrets missing
- [ ] Changelog updated (if applicable)

## Summary
<describe change>
MD

# 5) Husky + local guards (block direct push to main; pre-commit secret scan)
say "▶ Husky guardrails"
test -d .husky || pnpm dlx husky init >/dev/null
# pre-commit: scan only staged files with secretlint (we add secretlint below)
cat > .husky/pre-commit <<'H1'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
if ! git diff --cached --name-only --diff-filter=ACM | xargs -I{} -r secretlint "{}"; then
  echo "🚫 Secretlint found potential secrets in staged files."
  exit 1
fi
H1
chmod +x .husky/pre-commit
# pre-push: prevent local pushes to main + quick full scan
cat > .husky/pre-push <<'H2'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
branch="$(git rev-parse --abbrev-ref HEAD)"
[ "$branch" = "main" ] && { echo "🚫 Direct pushes to main are blocked. Use feature branch + PR."; exit 1; }
if [ -z "$CI" ]; then
  pnpm -s scan:secrets >/dev/null || { echo "🚫 Pre-push secret scan failed."; exit 1; }
fi
H2
chmod +x .husky/pre-push

# 6) Secretlint (local) + config + scripts
say "▶ Secretlint (local) + config"
pnpm add -D secretlint @secretlint/secretlint-rule-preset-recommend >/dev/null
cat > .secretlintrc.json <<'J'
{
  "rules": [
    { "id": "@secretlint/secretlint-rule-preset-recommend", "options": { "allows": [] } }
  ]
}
J
cat > .secretlintignore <<'I'
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
I
node - <<'JS'
const fs=require('fs'); const p=JSON.parse(fs.readFileSync('package.json','utf8'));
p.scripts ||= {};
p.scripts["scan:secrets"]=p.scripts["scan:secrets"]||'secretlint "**/*"';
p.scripts["scan:secrets:staged"]=p.scripts["scan:secrets:staged"]||'git diff --cached --name-only --diff-filter=ACM | xargs -I{} -r secretlint "{}"';
fs.writeFileSync('package.json', JSON.stringify(p,null,2));
console.log("package.json scripts ensured");
JS

# 7) CI secret scan (GitHub Actions)
say "▶ GitHub Actions: CI secret scan"
mkdir -p .github/workflows
cat > .github/workflows/secret-scan.yml <<'Y'
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
Y

# 8) Delete extra remote branches (idempotent)
say "▶ Deleting extra remote branches (if present)"
for b in "${EXTRA_BRANCHES[@]}"; do
  if git ls-remote --heads origin "$b" | grep -q "$b"; then
    echo " - deleting origin/$b"
    git push origin --delete "$b" || true
  else
    echo " - $b not found (ok)"
  fi
done

# 9) Commit everything (if anything changed)
say "▶ Commit & push repo changes (if any)"
git add -A
git commit -m "chore: finalize lockdown (guards, secret scanning local+CI, cleanup, PR template, vercelignore)" || true
git push || true

# 10) Branch protection — prefer gh CLI; fallback to API token prompt
say "▶ Apply branch protection to 'main'"
if command -v gh >/dev/null; then
  echo "Using GitHub CLI (gh)…"
  gh api \
    -X PUT \
    -H "Accept: application/vnd.github+json" \
    "/repos/${REPO_SLUG}/branches/${MAIN_BRANCH}/protection" \
    -f required_status_checks='null' \
    -F enforce_admins=true \
    -f required_pull_request_reviews='{"require_code_owner_reviews":false,"required_approving_review_count":1,"dismiss_stale_reviews":true}' \
    -f restrictions='null' \
    -F allow_deletions=false \
    -F allow_force_pushes=false \
    -F required_linear_history=true \
    -F block_creations=false \
    -F required_conversation_resolution=true >/dev/null && echo "✅ Branch protection applied via gh"
else
  echo "gh CLI not found — falling back to API token prompt."
  read -r -s -p "Paste NEW GitHub token (repo admin): " GH_TOKEN; echo
  curl -sS -X PUT \
    -H "Authorization: Bearer $GH_TOKEN" \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/repos/${REPO_SLUG}/branches/${MAIN_BRANCH}/protection" \
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
    }' >/dev/null && echo "✅ Branch protection applied via API"
fi

# 11) Quick verify
say "▶ Verify"
echo "- Remote branches summary:"
git remote show origin | sed -n '/Remote branches:/,/Local branches configured/p' || true

echo "- Protection JSON (key bits):"
curl -s -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/${REPO_SLUG}/branches/${MAIN_BRANCH}/protection" \
  | node -e 'let d="";process.stdin.on("data",c=>d+=c).on("end",()=>{try{const j=JSON.parse(d);console.log({enforce_admins:j.enforce_admins?.enabled, required_linear_history:j.required_linear_history?.enabled, reviews:j.required_pull_request_reviews?.required_approving_review_count});}catch{console.log("ok")}})'

say "🎉 Done. Finish with the short UI checklist below."