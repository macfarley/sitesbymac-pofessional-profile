# Improvement Roadmap

This roadmap gives a clear path for future improvements, prioritized by impact and confidence.

## Phase 1 — Stability & Documentation Hygiene (Short-Term)

- Keep docs links and structure synchronized after moves/refactors.
- Add a lightweight docs check script (optional) to catch broken internal links.
- Continue normalizing naming conventions in `docs` and `scripts`.

## Phase 2 — Product Clarity & Conversion (Near-Term)

- Refine homepage messaging hierarchy for employer vs client audiences.
- Add route-specific CTA variants where intent differs (`/projects`, `/blog`, `/weddings`).
- Improve contact card telemetry strategy (privacy-safe), if analytics are introduced.

## Phase 3 — Publishing System Maturity (Mid-Term)

- Move mirrored blog content to content files (JSON/MD/MDX) instead of JSX text blocks.
- Add explicit publication metadata per mirrored article (date, source URL, tags).
- Introduce internal linking strategy between blog, projects, and about pages.

## Phase 4 — SEO & Trust Surface Refinement (Mid-Term)

- Expand structured data coverage where high-value and accurate.
- Add image-specific social preview overrides for key landing routes.
- Keep sitemap priorities and change frequencies aligned with actual publishing cadence.

## Phase 5 — Developer Experience (Long-Term)

- Create scripted public-doc generation or consistency checks.
- Add scoped automation for resume/cover-letter pipeline examples.
- Reduce warning noise in tests by improving test mocks for `next/image` behavior.

## Operating Rule

For private/internal methods not suitable for public docs, refer inquiries to:

- [mac@sitesbymac.dev](mailto:mac@sitesbymac.dev)
