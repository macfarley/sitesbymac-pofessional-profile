# Repository Sitemap

This file explains where core pieces of the app live and what each area is responsible for.

## Top-Level Layout

- `src/app` — Next.js App Router routes, metadata routes, and page entry points.
- `src/components` — reusable UI components used across routes.
- `src/data` — site content and identity-specific content sources.
- `src/__tests__` — Jest + React Testing Library test suite.
- `public` — static assets (images, PDFs, logos, generated HTML snapshots).
- `scripts` — generation and automation scripts (resume and application utilities).
- `docs` — tracked, public documentation.
- `dev-docs` — private/untracked working documentation and internal notes.

## Route Surfaces (`src/app`)

- `/` — portfolio landing page.
- `/about` — long-form personal/professional profile.
- `/projects` — project catalog.
- `/projects/[slug]` — project details.
- `/blog` — mirrored writing and publishing hub.
- `/weddings` — conversion-focused wedding pitch page.
- `/mcaxl` — mascot/brand personality page.
- `/go/[slug]` — redirect route for project shortlinks.
- `/api/redirects` — redirect metadata endpoint.
- `/robots.txt` — robots metadata route.
- `/sitemap.xml` — sitemap metadata route.
- `/opengraph-image` + `/twitter-image` — generated social card routes.

## Data & Content Boundaries

- Identity-specific content (local-only, ignored):
  - `src/data/resume.ts`
  - `src/data/cover-letter.ts`
  - `src/data/coverLetter.ts`
- Reusable public templates:
  - `docs/templates/resume.clean.example.json`
  - `docs/templates/cover-letter.clean.example.json`
- Public curated artifacts:
  - `public/resume_ats.pdf`
  - `public/resume_styled.pdf`

## Documentation Layout (`docs`)

- `architecture/` — architecture maps and app state.
- `guides/` — implementation and workflow guides.
- `planning/` — changelog and roadmap.
- `governance/` — policy and documentation audit.
- `templates/` — reusable clean JSON templates.
