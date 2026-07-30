# CLAUDE.md

## Project Context
This is a personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion. It includes locally managed content and a Gmail-backed contact form route.

## Development Workflow
1. Read adjacent files before editing
2. Prefer small, understandable diffs
3. Keep documentation synchronized with implementation
4. Validate with lint, typecheck, and build where possible

## Preferred Architecture
- Static content in `data/`
- View composition in `components/sections`
- Reusable utilities in `lib/`
- Minimal server-side logic

## Development Philosophy
- Trustworthy portfolio content over marketing fluff
- Premium UI without needless complexity
- Simplicity first, abstraction second

## Commands
```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm ci
```

## Build Process
- Next.js production build via `pnpm build`
- Static assets served from `public/`
- Contact API route compiled with the app

## Testing Workflow
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`

Note: `pnpm test` currently runs type checking and is not yet a full unit/integration suite.

## Common Tasks
- Add or edit project entries in `data/projects.ts`
- Update screenshots in `public/projects/`
- Adjust metadata in `lib/site.ts`
- Update contact copy or validation in `components/sections/contact.tsx` and `app/api/send-email/route.ts`

## Repository Rules
- Never commit secrets
- Do not delete real project screenshots without checking references
- Preserve folder clarity

## AI Working Guidelines
- Read before writing
- Keep edits non-destructive
- Preserve current visual language
- Update docs when setup or workflow changes

## Code Generation Preferences
- TypeScript-first
- Simple React patterns
- Avoid unnecessary helpers or wrappers
- Prefer readable Tailwind over clever indirection

## Project-Specific Constraints
- No database currently exists
- Content is static-data-driven
- Gmail contact delivery requires environment variables
- Real screenshots are preferred over placeholders
