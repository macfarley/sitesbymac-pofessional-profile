# App State Snapshot

Last updated: 2026-02-23

## Current State (High-Level)

- Navigation includes expanded contact card with direct and social channels.
- Blog route exists with mirrored longform sections and publishing policy messaging.
- SEO stack includes route-level metadata, canonical links, robots/sitemap, and JSON-LD coverage.
- Social preview pipeline includes generated Open Graph and Twitter image routes.
- Weddings page is positioned as a conversion-oriented pitch surface.

## Verification Status

- Latest full build completed successfully.
- Latest full tests previously passed (`npm run test -- --runInBand`), with known non-blocking console warnings from test environment mocks.

## Known Constraints / Technical Notes

- `next lint` invocation may be environment-sensitive in this workspace.
- Open Graph/Twitter image routes use edge runtime, which can affect static generation behavior for those specific routes.
- Identity-specific resume/cover-letter source files are now ignored and local-only.

## Data Privacy Posture

- Personal source data stays in local ignored files under `src/data`.
- Public docs expose only reusable template flow and curated public artifacts.

## Immediate Maintenance Actions

- Keep public docs links aligned after any future file moves.
- Validate tests + build before every push.
- Keep private notes in `dev-docs` and public guidance in `docs`.
