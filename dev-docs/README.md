# Development Docs (Private Workspace)

Purpose: internal documentation for implementation notes, retrospectives, audits, and archived artifacts.

## Dev-Docs Sitemap

### `audits/` (date-first event records)

- `2026-01-29-ui-background-consistency-audit.md`
- `2026-02-23-dev-docs-structure-audit.md`

### `guides/` (operational playbooks)

- `ETHICAL-SEO-GUIDE.md`
- `RESUME-CONSOLIDATION-GUIDE.md`

### `history/` (chronology and retrospectives)

- `COMMIT-TIMELINE-SEMANTIC.md`
- `WORKING-LOG.md`
- `SITE-EVOLUTION-LESSONS.md`

### `planning/` (forward action plans)

- `2026-02-23-forward-path.md`

### `artifacts/` (reference archives, not source-of-truth)

- `artifacts/resume-development/*`

## Source-of-Truth Rules

- Resume/cover-letter source data is local-only in `src/data/*` (ignored).
- Public-safe reusable templates live in `docs/templates/*`.
- Curated public artifacts live in `public/`.
- Archive files under `dev-docs/artifacts/` are historical references only.

## Maintenance Discipline

1. Put audits in `audits/` with `YYYY-MM-DD-...` naming.
2. Keep one canonical timeline: `history/COMMIT-TIMELINE-SEMANTIC.md`.
3. Keep one rolling notes file: `history/WORKING-LOG.md`.
4. Record major lessons in `history/SITE-EVOLUTION-LESSONS.md`.
5. Avoid duplicate narratives across files; prefer linking to canonical entries.
