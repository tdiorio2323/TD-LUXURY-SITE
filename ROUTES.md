# TD Studios — Routes

## Primary
- `/` — Home
- `/work` — Case studies
- `/services` — Design | Development | Web Experience (tabs via `?tab=design|dev|web`)
- `/pricing` — Packages (Starter, Pro, Elite) + FAQ
- `/process` — 5-step method
- `/resources` — Hub
  - `/resources/premade-designs` — Catalog
- `/contact` — Form
- `/book` — Calendly
- `/support` — ChatKit support
- `/legal` — Terms + Privacy

## Dynamic (internal)
- `/[client]/signin`
- `/clients/[client]`

## APIs
- `POST /api/contact`
- `POST /api/chatkit/session`

## SEO
- Canonical per page
- JSON-LD: Organization, Service, BreadcrumbList, FAQ
- OG/Twitter per route

## Notes
- `www → root` 301
- `/web` removed; merged into `/services`
- `/social` removed
- `premade-designs` relocated under `/resources`

## Acceptance
- All routes build and render without console errors
- Nav and footer link to new structure
- Lighthouse ≥ 90 on static pages
