# Sites by Mac – Portfolio Codebase

Public-facing Next.js portfolio for [sitesbymac.dev](https://sitesbymac.dev), designed as both a live site and a reusable starter for developers building their own professional portfolio.

## Start Here

### If you want to run the site

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

### If you want to contribute

1. Read [docs/README.md](./docs/README.md) for documentation navigation.
2. Read [docs/architecture/SYSTEM-OVERVIEW.md](./docs/architecture/SYSTEM-OVERVIEW.md) for runtime structure.
3. Make your changes in `src/`.
4. Validate locally:

```bash
npm run lint
npm run test -- --runInBand
npm run build
```

### If you want to fork and recreate this for yourself

1. Fork and clone the repo.
2. Replace personal content and branding (see “Forking Checklist” below).
3. Keep the architecture and workflow patterns.
4. Deploy to your own Vercel project.

## Top-Level Repo Rules

The repository root should only hold:

- Functional subfolders (`src`, `public`, `scripts`, `docs`, `dev-docs`, `config`).
- Required configuration files (`package.json`, `tsconfig.json`, `next.config.ts`, lint/test/build configs).
- One public entrypoint README (this file).

## Repository Map

- `src/`: App Router pages, components, data, types, utilities.
- `public/`: Static assets and generated public documents.
- `scripts/`: Generation and maintenance scripts.
- `docs/`: Public documentation for users/contributors.
- `dev-docs/`: Private/internal planning, audits, and historical notes.
- `config/`: Shared or auxiliary configuration.

## Developer Workflow

```bash
npm install
npm run dev
npm run lint
npm run test -- --runInBand
npm run build
```

Primary stack: Next.js (App Router), TypeScript, Tailwind CSS, Jest + React Testing Library.

## Forking Checklist

When reusing this project, replace:

- Resume and profile content in your local data sources.
- Project portfolio entries in `src/data`.
- Images/logos/social card assets in `public/assets`.
- Domain, metadata, social links, and contact points.

Keep:

- Component architecture.
- SEO/schema patterns.
- Testing and build pipeline.
- Documentation structure under `docs/`.

## Documentation Index

- [docs/README.md](./docs/README.md) – docs hub
- [docs/architecture/SYSTEM-OVERVIEW.md](./docs/architecture/SYSTEM-OVERVIEW.md) – architecture overview
- [docs/guides/RESUME-COVERLETTER-PIPELINE.md](./docs/guides/RESUME-COVERLETTER-PIPELINE.md) – resume/cover-letter pipeline
- [docs/planning/CHANGELOG-PUBLIC.md](./docs/planning/CHANGELOG-PUBLIC.md) – public changelog
- [docs/governance/DOCUMENTATION-AUDIT.md](./docs/governance/DOCUMENTATION-AUDIT.md) – markdown placement audit

## License

MIT. See [LICENSE](./LICENSE).

