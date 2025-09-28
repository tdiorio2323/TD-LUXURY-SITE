# Repository Guidelines

This guide helps contributors work efficiently in this Next.js + TypeScript project. Use it as the single source of truth when developing, testing, and submitting changes.

## Project Structure & Module Organization
- `app/` — App Router routes, layouts, and pages. Keep data fetching localized to each route to keep hydration predictable.
- `components/` — Reusable UI imported via `@/components/*`. Expose stable, well-typed props to keep downstream routes easy to refactor.
- `lib/` — Shared hooks/utilities. Side‑effect free; prefer pure, testable helpers.
- `public/` — Static assets. Optimize media; use descriptive filenames for quick audits.
- `tests/` — Playwright specs; baselines in `tests/screenshots/`. Do not commit `test-results/`.

## Build, Test, and Development Commands
- `npm ci` (or `npm install` if CI cache is absent): install deps. Use `npm cache verify` when troubleshooting lockfile drift.
- `npm run dev`: start Next.js dev server (http://localhost:3000) with hot reload.
- `npm run build`: production build; surfaces missing environment variables.
- `npm start`: serve the build locally; validate image optimization and headers.
- `npx playwright test` (`--ui` to debug, `--update-snapshots` to refresh baselines intentionally).

## Coding Style & Naming Conventions
- TypeScript strict: avoid `any`. Colocate interfaces near usage; export explicit types.
- Indent 2 spaces. Order JSX props: structure → modifiers → handlers; alphabetize multi‑line props within each group when practical.
- File names: components PascalCase (e.g., `GlassCard.tsx`); utilities camelCase. Default export mirrors file name.
- Tailwind is mobile‑first. Keep class lists readable and grouped; extract repeated sets into `styles/` utilities when repetition grows.

## Testing Guidelines
- Name specs `*.spec.ts`; use action‑first titles (e.g., “navigates to contact”).
- Assert user‑visible outcomes. Review screenshot diffs before committing updates.
- Before merging UI changes, run `npx playwright test --headed` and attach diffs if visuals change. Do not commit `test-results/`.

## Commit & Pull Request Guidelines
- Conventional commits: `feat(scope): summary` or `fix(scope): summary` (~72 chars, present tense). Scopes mirror route or subsystem directories.
- PRs must state problem, solution, UI impact, linked issue(s), and confirm lint/build/tests pass. Include screenshots or videos for styling shifts.

## Security & Configuration
- Do not commit secrets. Use `.env.local` for local values; ensure required env vars are present (checked during `npm run build`).
- Prefer descriptive env names; document any required configuration in the PR if newly introduced.

