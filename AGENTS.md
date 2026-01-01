# Repository Guidelines

## Project Structure & Module Organization

- `src/app` contains Next.js App Router routes, layouts, and page-level metadata.
- `src/components` holds reusable UI and layout components; keep components small and focused.
- `src/hooks` includes custom React hooks (e.g., `use-*` patterns).
- `src/lib` is for shared helpers and utilities.
- `public` stores static assets (images, OG assets).

## Build, Test, and Development Commands

- `pnpm dev` runs the local dev server (Turbopack) for development.
- `pnpm build` создает production-сборку Next.js.
- `pnpm start` запускает production-сервер после `pnpm build`.
- `pnpm lint` запускает Next.js ESLint проверку.
- `pnpm prettier` форматирует весь репозиторий.

## Coding Style & Naming Conventions

- Use TypeScript and React 19 with Next.js 15 App Router.
- Indentation follows Prettier defaults; run `pnpm prettier` before pushing.
- Components use `PascalCase` filenames and exports (e.g., `HeroSection.tsx`).
- Hooks use `use-*` names (e.g., `use-toast.ts`).
- Keep Tailwind utility order consistent with existing files.

## Testing Guidelines

- No dedicated test framework is configured yet.
- Validate changes with `pnpm lint` and manual QA in `pnpm dev`.
- If you add tests, prefer colocating near the feature and document how to run them.

## Commit & Pull Request Guidelines

- Recent commits follow simple, imperative messages (e.g., `chore: update sitemap`).
- Use short, scoped commit messages; include a `chore:` or `fix:` prefix when helpful.
- PRs should include a concise description, linked issue (if any), and before/after screenshots for UI changes.

## Configuration & Deployment Notes

- SEO metadata is managed in `src/app` layout and page files; update OG images in `public`.
- Deployment targets Vercel; ensure `pnpm build` passes before merging.
