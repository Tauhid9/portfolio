# Architecture

## High-Level Architecture
This is a Next.js App Router portfolio application with a client-heavy presentation layer and one server-side API route for contact form email delivery.

## System Design
- Frontend renders a single-page portfolio experience
- Static project/content data is loaded from local TypeScript modules
- Contact form submits to a Next.js route handler
- Route handler sends owner email and sender auto-reply through Gmail/Nodemailer

## Application Layers
### Presentation Layer
- `app/page.tsx`
- `components/sections/*`
- `components/features/*`
- `components/modals/*`

### Content/Data Layer
- `data/projects.ts`
- `data/skills.ts`
- `data/experience.ts`
- `data/education.ts`
- `data/blog.ts`

### Utility Layer
- `lib/site.ts`
- `lib/project-gallery.ts`

### Integration Layer
- `app/api/send-email/route.ts`

## Database Design
There is no database in the current implementation.

### Data Storage Model
- Structured content lives in version-controlled TypeScript arrays/objects
- Assets live under `public/`

## ER Diagram
Not applicable in the current static architecture.

## API Architecture
### `POST /api/send-email`
Request payload:
- `name`
- `email`
- `subject`
- `message`

Behavior:
- Validates required fields
- Sends owner notification email
- Sends auto-reply email
- Returns JSON success or error payload

## Authentication Flow
No user authentication exists in the current product.

## Authorization Model
No user roles or access control exist in the current product.

## Component Hierarchy
```text
app/page.tsx
├── Navigation
├── Hero
├── Projects
│   └── ProjectDetailsModal
├── Skills
├── Experience
├── Education
├── Contact
├── ScrollToTop
└── FloatingWhatsApp
```

## Routing
- `/` main portfolio page
- `/api/send-email` API route

## State Management
- Local component state only
- No global state library
- Project modal and form flows use `useState`

## Service Layer
Minimal service logic exists directly in route handlers and helper modules.

## Repository Pattern
Not applicable yet because there is no database-backed data access layer.

## Data Flow
1. Content modules provide structured data to sections
2. Sections render cards and interactive UI
3. User submits contact form
4. Browser sends JSON request to `/api/send-email`
5. Route validates payload and triggers email delivery

## Deployment Architecture
- Primary target: Vercel
- Static assets served from `public/`
- API route runs as serverless/Node runtime route handler

## Important Decisions
- Keep content local and simple until a CMS is justified
- Use screenshot assets to increase project credibility
- Keep reusable UI primitives separate from feature composition
