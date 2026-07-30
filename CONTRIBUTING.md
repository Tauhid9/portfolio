# Contributing

## Development Workflow
1. Clone the repository
2. Install dependencies with `pnpm install`
3. Copy `.env.example` to `.env.local`
4. Start work on a dedicated branch
5. Run validation before submitting changes

## Branch Strategy
- `main`: stable branch
- `feature/*`: new features
- `fix/*`: bug fixes
- `docs/*`: documentation work
- `codex/*`: AI-assisted implementation branches

## Commit Guidelines
- Use short imperative messages
- Keep unrelated changes out of the same commit

## Pull Request Process
- Summarize what changed and why
- Include validation commands run
- Mention any environment or deployment implications
- Update docs for behavioral or structural changes

## Code Review Process
- Review for correctness, clarity, and maintainability
- Watch for accidental content regressions
- Ensure screenshots and asset references still resolve

## Testing Requirements
Run:
```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Coding Standards
- TypeScript-first
- Minimal duplication
- Consistent Tailwind class usage
- Avoid dead imports, dead props, and dead assets

## Best Practices
- Prefer local inspection over assumptions
- Keep the site performant and visually cohesive
- Document important decisions as they happen
