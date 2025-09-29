#!/bin/bash
# ----- TD STUDIOS: tdstudiosny - Manual Control Lockdown -----
# Requires:
#   - Repo checked out and clean working tree
#   - Git installed
#   - GitHub token with admin rights to this repo (repo admin / branch protection)
#   - jq installed: brew install jq

set -euo pipefail

REPO_SLUG="tdiorio2323/tdstudiosny"
MAIN_BRANCH="main"
EXTRA_BRANCHES=("chore/canonicalize-active" "copilot/fix-017b4136-8b0f-491e-b2e3-a88afa49c5c6")

echo "🔐 Enter a GitHub token with repo admin permissions:"
read -r -s GH_TOKEN
echo

echo "➡️ Fetch & prune…"
git fetch --all --prune

echo "🧹 Delete stray remote branches (if they exist)…"
for b in "${EXTRA_BRANCHES[@]}"; do
  if git ls-remote --heads origin "$b" | grep -q "$b"; then
    echo "  - Deleting origin/$b"
    git push origin --delete "$b" || true
  else
    echo "  - Skipping $b (not found)"
  fi
done

echo "🔒 Protecting '$MAIN_BRANCH' (PRs only, no force-push, linear history)…"
curl -sS -X PUT \
  -H "Authorization: Bearer $GH_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/$REPO_SLUG/branches/$MAIN_BRANCH/protection" \
  -d '{
    "required_status_checks": null,
    "enforce_admins": true,
    "required_pull_request_reviews": {
      "require_code_owner_reviews": false,
      "required_approving_review_count": 1,
      "dismiss_stale_reviews": true
    },
    "restrictions": null,
    "allow_deletions": false,
    "allow_force_pushes": false,
    "required_linear_history": true,
    "block_creations": false,
    "required_conversation_resolution": true
  }' | jq -re '.url? // "ok"'>/dev/null

echo "🧾 Ensuring CODEOWNERS (auto-assign PRs to you)…"
mkdir -p .github
if [ ! -f .github/CODEOWNERS ]; then
  cat > .github/CODEOWNERS <<'EOF'
# Default owner for everything:
*   @tdiorio2323
EOF
  git add .github/CODEOWNERS
  git commit -m "chore: add CODEOWNERS for PR routing" || true
  git push origin "$MAIN_BRANCH" || true
else
  echo "  - CODEOWNERS already present."
fi

echo "🔍 Post-check:"
git remote show origin | sed -n '/Remote branches:/,/Local branches configured/p'

echo "✅ Git/GitHub lockdown complete. Proceed with UI steps below to disconnect v0.app and pin Vercel."