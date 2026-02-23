# Documentation Audit (Markdown)

Audit date: **2026-02-22**

## Scope

This audit covers every `.md` file found in the repository (excluding dependency/build folders such as `.venv`, `.next`, and `node_modules`).

For each file below:

- **Current location** = where it is now
- **Recommended location** = where it should live long-term
- **References** = code/docs it describes, with embedded links where appropriate

## Inventory and Placement Matrix

| File | Tracking State | What It Describes | Current Location | Recommended Location | References |
|---|---|---|---|---|---|
| [README.md](../../README.md) | tracked | Public project overview, setup, stack, deployment, content management | Root | Keep in root | [Global styles](../../src/app/globals.css), [Projects data](../../src/data/projects.ts), [Resume data](../../src/data/resume.ts), [Tailwind config](../../tailwind.config.js), [Public docs hub](../README.md) |
| `dev-docs/2026-01-29-background-consistency-fix.md` | untracked | Detailed internal background/color iteration log | `dev-docs` (private) | Keep private/untracked or summarize publicly in [Public Changelog](../planning/CHANGELOG-PUBLIC.md) | References multiple UI files including [Home](../../src/app/page.tsx), [Weddings](../../src/app/weddings/page.tsx), [McAxl](../../src/app/mcaxl/page.tsx), [Globals](../../src/app/globals.css) |
| `dev-docs/DEVELOPMENT-TIMELINE.md` | untracked | Semantic timeline of commits and feature groups | `dev-docs` (private) | Keep private/untracked; expose high-level timeline in [Public Changelog](../planning/CHANGELOG-PUBLIC.md) | Includes refs to [Navigation](../../src/components/Navigation.tsx), [Blog](../../src/app/blog/page.tsx), [SEO routes](../../src/app/sitemap.ts) |
| `dev-docs/Ethical-SEO.md` | untracked | Long-form ethical SEO strategy and principles | `dev-docs` (private) | Keep private/untracked; publish policy-level guidance in [Documentation Policy](./PUBLIC-DOCS-POLICY.md) | Conceptual reference for [Layout metadata](../../src/app/layout.tsx), [Sitemap](../../src/app/sitemap.ts), [Robots](../../src/app/robots.ts) |
| [dev-docs/README.md](../../dev-docs/README.md) | tracked | Internal dev-docs archive description | `dev-docs` | Move intent to [Public docs README](../README.md) and keep internal details private | Documentation-organization metadata only |
| [dev-docs/RESUME-CONSOLIDATION.md](../../dev-docs/RESUME-CONSOLIDATION.md) | tracked | Deep internal resume consolidation process | `dev-docs` | Prefer private/untracked; publish sanitized workflow in [Resume/Cover Letter Pipeline](../guides/RESUME-COVERLETTER-PIPELINE.md) | [Resume source data](../../src/data/resume.ts) |
| `dev-docs/development-log.md` | untracked | Working/private development notes and snapshots | `dev-docs` (private) | Keep private/untracked; mirror public-safe highlights to [Public Changelog](../planning/CHANGELOG-PUBLIC.md) | References many files including [Blog](../../src/app/blog/page.tsx), [Layout](../../src/app/layout.tsx), [Weddings](../../src/app/weddings/page.tsx) |
| [dev-docs/resume-development/README_resume_import.md](../../dev-docs/resume-development/README_resume_import.md) | tracked | Internal resume import notes | `dev-docs/resume-development` | Prefer private/untracked; summarize public-safe parts in [Resume/Cover Letter Pipeline](../guides/RESUME-COVERLETTER-PIPELINE.md) | Resume workflow notes |
| [dev-docs/resume-development/resume_ats.md](../dev-docs/resume-development/resume_ats.md) | tracked | ATS-oriented resume content draft | `dev-docs/resume-development` | Keep private/untracked unless intentionally published as portfolio content | Resume content reference |
| [dev-docs/resume-development/resume_from_copilot.md](../dev-docs/resume-development/resume_from_copilot.md) | tracked | Alternate resume draft + outbound profile links | `dev-docs/resume-development` | Keep private/untracked unless intentionally published | External profile links and resume content drafts |

## Public vs Private Recommendation

### Public (tracked) should live in `docs/`

- [docs/README.md](../README.md)
- [docs/architecture/SYSTEM-OVERVIEW.md](../architecture/SYSTEM-OVERVIEW.md)
- [docs/guides/RESUME-COVERLETTER-PIPELINE.md](../guides/RESUME-COVERLETTER-PIPELINE.md)
- [docs/planning/CHANGELOG-PUBLIC.md](../planning/CHANGELOG-PUBLIC.md)
- [docs/governance/PUBLIC-DOCS-POLICY.md](./PUBLIC-DOCS-POLICY.md)
- [docs/governance/DOCUMENTATION-AUDIT.md](./DOCUMENTATION-AUDIT.md)

### Private/untracked should remain in `dev-docs/`

- Internal methods, process notes, drafts, and unpublished strategies
- If a public reader needs details from private docs, direct them to:
  - [mac@sitesbymac.dev](mailto:mac@sitesbymac.dev)

## Findings

1. Root README previously pointed to missing/broken docs paths; this should be aligned to `./docs/*` links.
2. `dev-docs` currently contains a mix of tracked and untracked markdown artifacts.
3. A public-only docs surface now exists and should be treated as the canonical public documentation layer.
