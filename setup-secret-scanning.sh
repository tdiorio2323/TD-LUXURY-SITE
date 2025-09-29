#!/bin/bash
# === TD STUDIOS: Secret Scanning Guardrails (Secretlint + Husky) ===
set -euo pipefail

# 0) Ensure pnpm + husky
if ! command -v pnpm >/dev/null 2>&1; then
  echo "pnpm not found; install via: corepack enable && corepack prepare pnpm@latest --activate"
  exit 1
fi

# 1) Dev deps
pnpm add -D secretlint @secretlint/secretlint-rule-preset-recommend @secretlint/formatter-stylish

# 2) Project scripts (add if missing)
if [ -f package.json ]; then
  node - <<'JS'
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json','utf8'));
pkg.scripts ||= {};
pkg.scripts["scan:secrets"] = pkg.scripts["scan:secrets"] || "secretlint \"**/*\" -f @secretlint/formatter-stylish --maskSecrets";
pkg.scripts["scan:secrets:staged"] = pkg.scripts["scan:secrets:staged"] || "git diff --cached --name-only --diff-filter=ACM | xargs -I{} -r secretlint \"{}\" -f @secretlint/formatter-stylish --maskSecrets";
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
console.log("✔ Added scripts: scan:secrets, scan:secrets:staged");
JS
fi

# 3) Secretlint config (broad coverage + a few safe custom rules)
mkdir -p .config
cat > .secretlintrc.json <<'JSON'
{
  "rules": [
    {
      "id": "@secretlint/secretlint-rule-preset-recommend",
      "options": {
        "allows": [
          "GITHUB_TOKEN=ghp_exampleexampleexampleexample0000",
          "API_KEY=example"
        ]
      }
    }
  ]
}
JSON

# 4) Ignore noisy paths from scanning (build outputs, images, etc.)
cat > .secretlintignore <<'TXT'
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

# 5) Ensure secrets aren't tracked
grep -qE '(^|/)\.env(\.|$)|^\.env' .gitignore 2>/dev/null || {
  printf "\n# Secrets\n.env\n.env.*\n" >> .gitignore
  git add .gitignore || true
}

# 6) Install Husky if not already
[ -d .husky ] || pnpm dlx husky init >/dev/null

# 7) Pre-commit hook: block secrets on staged files
cat > .husky/pre-commit <<'SH'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Scan only staged files to keep it fast
if ! git diff --cached --name-only --diff-filter=ACM | xargs -I{} -r secretlint "{}" -f @secretlint/formatter-stylish --maskSecrets; then
  echo
  echo "🚫 Secretlint found potential secrets in staged files."
  echo "    • Remove/rotate secrets or add safe test strings to .secretlintrc.json allows[]"
  echo "    • For binary/irrelevant files, add a path/pattern to .secretlintignore"
  echo
  exit 1
fi
SH
chmod +x .husky/pre-commit

# 8) Optional: pre-push guard (defense in depth)
cat > .husky/pre-push <<'SH'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Block direct pushes to main
branch="$(git rev-parse --abbrev-ref HEAD)"
if [ "$branch" = "main" ]; then
  echo "🚫 Direct pushes to main are blocked. Use feature branch + PR."
  exit 1
fi

# Run a quick full-tree scan; skip in CI for speed
if [ -z "$CI" ]; then
  if ! pnpm -s scan:secrets >/dev/null; then
    echo
    echo "🚫 Pre-push secret scan failed. Fix findings or update .secretlintignore/allow list."
    echo
    exit 1
  fi
fi
SH
chmod +x .husky/pre-push

# 9) Quick self-test instructions (printed)
cat <<'OUT'

✅ Secret scanning is now active.

Useful commands:
  pnpm scan:secrets          # full repo scan (masked output)
  pnpm scan:secrets:staged   # just staged files (same as pre-commit)

If you hit a false positive:
  • Prefer removing the string or replacing with a safe placeholder.
  • Or add a narrow exception in .secretlintrc.json "allows": [ "EXACT_TEST_VALUE" ]
  • Or ignore a file/path in .secretlintignore (use sparingly).

Pro tip:
  Rotate any real keys that ever appeared in Git history.
  Add `.env`, `.env.*` to CI/Vercel UI as environment variables (never commit them).

OUT