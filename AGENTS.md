# AGENTS.md

## Project Overview
This repository powers Tauhid Hasan Chowdhury's professional portfolio site. It is a Next.js App Router project that mixes static content, interactive project galleries, and a simple contact API route.

## Current Project Status
As of July 30, 2026, the portfolio is functional and actively being refined for long-term maintainability, richer documentation, and cleaner repository standards.

## Coding Philosophy
- Prefer clarity over cleverness
- Keep portfolio content trustworthy and specific
- Use local static data unless complexity clearly demands a backend
- Preserve polished UI without introducing unnecessary abstraction

## Architecture Principles
- Keep section components focused and composable
- Keep reusable UI primitives in `components/ui`
- Keep content in `data/`
- Keep feature-specific helpers in `lib/`

## Repository Structure
- `app/`: routes, layout, and API handlers
- `components/`: UI building blocks, sections, and modals
- `data/`: structured content
- `lib/`: helpers and site config
- `public/`: static images and icons

## Folder Responsibilities
- `components/sections`: full-width homepage sections
- `components/features`: reusable feature components
- `components/modals`: overlay experiences
- `components/ui`: shared low-level UI pieces

## Coding Standards
- TypeScript-first
- Prefer simple, readable React components
- Keep Tailwind class usage organized and intentional
- Do not introduce dead props or unused imports

## Naming Conventions
- Components: PascalCase
- Helpers/functions: camelCase
- Constants: UPPER_SNAKE_CASE for true constants
- Data arrays/types: descriptive and explicit

## Component Guidelines
- One clear responsibility per component
- Avoid oversized section files unless layout logic truly belongs together
- Promote reusable behavior only after duplication is real

## API Conventions
- Return JSON with clear `success` or `error` semantics
- Validate required inputs at the route boundary
- Do not trust raw form input

## Database Conventions
No database is present. Do not invent a database layer unless a feature clearly requires it.

## Error Handling Rules
- Fail early on invalid request payloads
- Return user-safe API errors
- Log actionable server-side errors only

## Logging Strategy
- Minimal console logging only
- Do not log secrets or full sensitive payloads

## Security Guidelines
- Never commit real credentials
- Use `.env.local` locally and deployment secrets in hosting provider settings
- Sanitize any user-generated content used in email templates or HTML

## Performance Expectations
- Keep project screenshots optimized
- Avoid bloated dependencies
- Prefer static data and fast initial render

## Accessibility Expectations
- Use semantic headings
- Ensure interactive controls have labels
- Maintain keyboard-close behavior in modals
- Preserve color contrast when restyling

## UI/UX Consistency Rules
- Use existing border radius, shadow, and spacing language
- Keep cards and modals visually premium but restrained
- Do not introduce random visual styles per section

## Design System Rules
- Favor the existing cyan/blue accent system
- Reuse current card, border, and muted surface patterns
- Avoid purple-heavy defaults unless the surrounding UI already uses them

## State Management Rules
- Use local state unless there is a strong reason for shared state
- Avoid adding global state libraries casually

## Testing Expectations
- Run `pnpm lint`
- Run `pnpm typecheck`
- Run `pnpm build`
- Add tests when touching logic-heavy areas

## Git Workflow
- Branch from the default branch for isolated work
- Keep commits focused
- Avoid mixing unrelated cleanup with feature work unless explicitly requested

## Branch Naming Conventions
- `codex/<task-name>`
- `feature/<task-name>`
- `fix/<task-name>`
- `docs/<task-name>`

## Commit Message Format
- Imperative and concise
- Examples:
  - `Refine skills section layout`
  - `Add portfolio repository documentation`
  - `Fix supporting skills card visibility`

## Pull Request Checklist
- Scope is clear
- No unrelated files included
- Docs updated if behavior changed
- Environment or deployment impacts noted
- Validation commands listed

## Deployment Workflow
- Validate locally with `pnpm validate`
- Push to default branch or deployment branch
- Deploy via Vercel
- Verify contact form environment variables

## Definition of Done
- Feature or fix works
- Code is readable
- No obvious dead code introduced
- Docs stay in sync
- Validation completed or limitation clearly noted

## AI Agents SHOULD Do
- Read nearby files before editing
- Preserve existing architectural simplicity
- Keep portfolio copy accurate
- Update docs when behavior, setup, or structure changes
- Ask before deleting important user content when uncertain

## AI Agents SHOULD NOT Do
- Commit secrets
- Replace real screenshots with generic placeholders
- Rewrite large sections without understanding the current design language
- Add heavy infrastructure without clear need

## Files Requiring Extra Caution
- `data/projects.ts`
- `data/experience.ts`
- `data/skills.ts`
- `app/api/send-email/route.ts`
- `lib/site.ts`
- `components/modals/project-details-modal.tsx`

## Ask for Confirmation Before
- Removing large content sections
- Changing project ordering or public-facing personal information
- Replacing contact workflow provider
- Introducing a database, CMS, or authentication layer

## How New Features Should Be Implemented
- Prefer extending the existing section/component/data structure
- Keep new assets inside `public/`
- Add docs if setup or behavior changes

## How Bugs Should Be Fixed
- Reproduce from code and UI evidence first
- Apply the smallest correct fix
- Validate the affected area

## How Refactoring Should Be Performed
- Preserve behavior
- Keep diffs reviewable
- Update docs if structure changes

## Documentation Sync Rule
Any change that affects setup, architecture, content structure, workflows, or contributor expectations must update the relevant documentation in the same change set.
