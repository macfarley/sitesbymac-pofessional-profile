# Architecture

## High-Level Structure

- `src/app` — route-based pages and route metadata.
- `src/components` — reusable UI components.
- `src/data` — project and resume content sources.
- `public` — static assets (images, docs, logos).
- `scripts` — generation/utilities.

## Runtime Surfaces

- **Core pages:** `/`, `/about`, `/projects`, `/blog`, `/weddings`.
- **Detail pages:** `/projects/[slug]`.
- **Redirect surfaces:** `/go/[slug]`, `/api/redirects`.
- **SEO surfaces:** `/robots.txt`, `/sitemap.xml`, Open Graph and Twitter image routes.

## Key Documentation-Linked Files

- [App layout metadata](../../src/app/layout.tsx)
- [Home page](../../src/app/page.tsx)
- [Projects index](../../src/app/projects/page.tsx)
- [Project detail page](../../src/app/projects/%5Bslug%5D/page.tsx)
- [Blog page](../../src/app/blog/page.tsx)
- [Navigation](../../src/components/Navigation.tsx)
- [Sitemap route](../../src/app/sitemap.ts)
- [Robots route](../../src/app/robots.ts)

## Private/Internal Methods

For internal architecture methods or unpublished implementation process notes, email:

- [mac@sitesbymac.dev](mailto:mac@sitesbymac.dev)
