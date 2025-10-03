# Repository Guidelines

## Project Structure & Module Organization
- `app/` owns App Router routes, layouts, and route-specific data fetching; keep server data loaders close to each page to avoid unintended re-hydration.
- `components/` hosts shared UI imported via `@/components/*`; expose well-typed props and prefer composition over deep prop drilling.
- `lib/` stores pure hooks and utilities; keep side effects out so helpers stay easy to unit test.
- `public/` contains static assets; use descriptive filenames and optimize images before committing.
- `tests/` holds Playwright specs and `tests/screenshots/` baselines; never commit `test-results/` output.

## Build, Test, and Development Commands
- `npm ci` installs exact lockfile versions; fall back to `npm install` only when caches miss.
- `npm run dev` starts the Next.js dev server on http://localhost:3000 with hot reload.
- `npm run build` compiles the production build and surfaces missing env vars.
- `npm start` serves the production bundle locally to validate optimized assets and headers.
- `npx playwright test` runs end-to-end specs (`--headed` for debugging, `--update-snapshots` to refresh approved screenshots).

## Coding Style & Naming Conventions
- TypeScript strict mode: avoid `any`, colocate interfaces near usage, and export explicit types.
- Indent with two spaces; in JSX, order props as structure → modifiers → handlers and alphabetize within each group when practical.
- Components use PascalCase filenames (e.g., `CartDrawer.tsx`); utilities use camelCase; default exports mirror the file name.
- Tailwind is mobile-first; group class tokens logically and extract repeats into `styles/` helpers when duplication grows.

## Testing Guidelines
- Name specs `*.spec.ts` with action-first titles (e.g., `navigates to contact`).
- Assert user-visible outcomes and review screenshot diffs before approving updates.
- Run `npx playwright test --headed` prior to merging UI or layout changes.

## Commit & Pull Request Guidelines
- Follow Conventional Commits such as `feat(app): add cart summary` or `fix(lib): guard null params` (<=72 chars, present tense).
- PR descriptions must state problem, solution, UI impact, linked issues, and confirm lint/build/tests pass; attach screenshots or videos for visual changes.

## Security & Configuration
- Never commit secrets; store local overrides in `.env.local` and document new env vars in the PR.
- Use descriptive env names and let `npm run build` verify required configuration before shipping.
