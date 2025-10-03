#!/usr/bin/env bash
set -euo pipefail

# 0) cd to repo root
if git rev-parse --show-toplevel >/dev/null 2>&1; then
  cd "$(git rev-parse --show-toplevel)"
else
  echo "Not in a git repo. cd into your project first." >&2
  exit 1
fi

# 1) quick context print
echo "── TD STUDIOS • Session Resume ──"
echo "Repo: $(basename "$PWD")"
echo "Branch: $(git rev-parse --abbrev-ref HEAD)"
echo "Latest commit:"
git --no-pager log -1 --pretty='format:%h %s  (%cr by %an)'
echo

# 2) create seed files if missing
mkdir -p .claude-seed
[ -f .claude-seed/seed.txt ] || cat > .claude-seed/seed.txt <<'SEED'
SESSION SEED (paste this in Claude after /init)

Context:
- Project: tdstudiosny (Next.js on Vercel)
- Domains: tdstudiosny.com (A → 76.76.21.21), www → cname.vercel-dns.com
- Redirects: www → apex 301 in next.config.mjs
- Build stamp: NEXT_PUBLIC_BUILD_TIME injected by scripts/build-with-timestamp.mjs
- Deploys: prod from main only

Last verified:
- curl -I shows Vercel + PRERENDER + age:0
- DNS dig resolves correctly

Next tasks (edit below per session):
- [ ] UI/UX polish: hero, nav, footer
- [ ] Performance: images audit, route-level caching
- [ ] SEO: <Head> tags, og images, sitemap/robots
- [ ] Analytics: GA4, basic events
- [ ] Content: homepage sections

Commands to rehydrate context:
- Read(next.config.mjs)
- Read(package.json)
- Read(app/layout.tsx)  or  Read(app/page.tsx)
- Read/Write(PROJECT_NOTES.md)  ← running session log
SEED

# 3) ensure PROJECT_NOTES.md exists and append a new session header
ts="$(date -u +'%Y-%m-%d %H:%M:%SZ')"
if ! [ -f PROJECT_NOTES.md ]; then
  cat > PROJECT_NOTES.md <<'MD'
# TD STUDIOS — Project Notes

Purpose: lightweight, repo-local scratchpad Claude can read every session.
Keep entries short, check in important changes, and paste relevant snippets here.

## Session Log
MD
fi

{
  echo
  echo "### ${ts} — Session Start"
  echo "- Context reset. Use \`/init\` then paste .claude-seed/seed.txt."
  echo "- Targets this session:"
  echo "  - [ ] "
} >> PROJECT_NOTES.md

# 4) sanity checks (non-fatal)
echo
echo "Checks:"
command -v node >/dev/null && echo "• node $(node -v)" || echo "• node not found"
command -v pnpm >/dev/null && echo "• pnpm $(pnpm -v)" || echo "• pnpm not found"
[ -f .env.local ] && echo "• .env.local present" || echo "• .env.local missing (ok if not needed)"
[ -f next.config.mjs ] && echo "• next.config.mjs present" || echo "• next.config.mjs missing"

# 5) print Claude bootstrap instructions
cat <<'TIP'

Next in Claude (inside this repo):
  1) Run:  codex
  2) Type: /init
  3) Paste contents of .claude-seed/seed.txt
  4) Then: Read(next.config.mjs), Read(package.json), Read(PROJECT_NOTES.md)
  5) State today's targets. Work.

Optional local verify:
  pnpm build && vercel --prod
  curl -I https://tdstudiosny.com | sed -n '1,12p'
  dig +short tdstudiosny.com A
  dig +short www.tdstudiosny.com CNAME
TIP
