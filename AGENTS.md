# Repository Guidelines

## Project Structure & Module Organization
- `app/` App Router routes, layouts, and route-specific data loaders; keep server loaders near pages to avoid unintended re-hydration.
- `components/` Shared UI via `@/components/*`; expose well-typed props and prefer composition over deep prop drilling.
- `lib/` Pure hooks/utilities only (no side effects) to keep helpers easy to unit test.
- `public/` Static assets; use descriptive filenames and optimize images before committing.
- `tests/` Playwright specs and `tests/screenshots/` baselines; never commit `test-results/`.

## Build, Test, and Development Commands
- `npm ci` Install exact lockfile versions (use `npm install` only if caches miss).
- `npm run dev` Start Next.js dev server at http://localhost:3000 with hot reload.
- `npm run build` Create production build; fails fast on missing env vars.
- `npm start` Serve the production bundle locally to validate optimized assets and headers.
- `npx playwright test` Run E2E specs (`--headed` to debug, `--update-snapshots` to refresh baselines).

## Coding Style & Naming Conventions
- TypeScript strict: avoid `any`, colocate interfaces near usage, and export explicit types.
- Indentation: two spaces. In JSX, order props as structure → modifiers → handlers; alphabetize within each group when practical.
- Filenames: components in PascalCase (e.g., `CartDrawer.tsx`); utilities in camelCase; default export mirrors file name.
- Tailwind: mobile-first; group class tokens logically and extract repeats into `styles/` helpers as duplication grows.

## Testing Guidelines
- Name specs `*.spec.ts` with action-first titles (e.g., `navigates to contact`).
- Assert user-visible outcomes; review screenshot diffs before approving updates.
- Run `npx playwright test --headed` before merging UI or layout changes.

## Commit & Pull Request Guidelines
- Use Conventional Commits (e.g., `feat(app): add cart summary`, `fix(lib): guard null params`); keep subject ≤72 chars, present tense.
- PRs state problem, solution, UI impact, linked issues, and confirm lint/build/tests pass; attach screenshots or videos for visual changes.

## Security & Configuration
- Never commit secrets. Store local overrides in `.env.local`; document new env vars in PRs.
- Prefer descriptive env names; let `npm run build` verify required configuration before shipping.

## Agent Notes
- Scope applies to the entire repo. When editing, follow naming/style rules above, keep changes minimal and focused, and avoid unrelated refactors.
- Keep helpers in `lib/` pure and colocate data loaders with pages in `app/`.
