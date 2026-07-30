# Security Policy

## Security Considerations
- This project includes a server-side email route and relies on secrets for Gmail integration
- Static content is public by design, but credentials must never be committed

## Secrets Management
- Use `.env.local` for local development
- Use hosting-provider environment variable management for deployed environments
- Never commit live values to `.env.example`

## Authentication
There is no end-user authentication in the current portfolio application.

## Authorization
There is no role-based authorization in the current portfolio application.

## Environment Variables
- `NEXT_PUBLIC_SITE_URL`
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`

## Responsible Disclosure
If you discover a security issue:
1. Do not open a public issue with exploit details
2. Contact the repository owner privately
3. Provide reproduction steps and impact summary
4. Allow time for remediation before public disclosure
