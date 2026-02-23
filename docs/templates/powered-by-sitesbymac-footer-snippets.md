# Powered by Sites by Mac — Footer Snippets

Reusable copy/paste attribution snippets you can drop into any project.

## Option A: Plain HTML footer

```html
<footer style="padding: 1rem; text-align: center; font-size: 0.95rem; opacity: 0.9;">
  This app is powered by
  <a href="https://sitesbymac.dev" target="_blank" rel="noopener noreferrer">
    SitesByMac.dev
  </a>
  — see more from this creator.
</footer>
```

## Option B: React / Next.js component markup

```tsx
<footer className="py-4 text-center text-sm text-gray-600 dark:text-gray-300">
  This app is powered by{' '}
  <a
    href="https://sitesbymac.dev"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:no-underline"
  >
    SitesByMac.dev
  </a>{' '}
  — see more from this creator.
</footer>
```

## Option C: Markdown-only surfaces

```md
This app is powered by [SitesByMac.dev](https://sitesbymac.dev) — see more from this creator.
```

## Option D: Copyable TSX component file

If you want a one-file drop-in for React/Next projects, copy this file into your target repo:

- `src/components/PoweredByFooter.tsx`

Behavior:

- Hidden at first.
- As users scroll near the bottom of the page, it reveals and expands.
- At full reveal, it reaches roughly 30% of viewport height.
- Includes Home/About/Sitemap links and “connected app” context copy.

Usage example:

```tsx
import PoweredByFooter from '@/components/PoweredByFooter';

export default function Layout() {
  return (
    <>
      <main>{/* app content */}</main>
      <PoweredByFooter />
    </>
  );
}
```

Optional tracked link:

```tsx
<PoweredByFooter showTrackingParams />
```

Optional reveal threshold (default is `0.8`, meaning reveal starts around 80% page scroll):

```tsx
<PoweredByFooter revealStart={0.75} />
```

## Optional UTM Tracking Version

Use this when you want click attribution in analytics:

`https://sitesbymac.dev/?utm_source=project-footer&utm_medium=attribution&utm_campaign=creator-network`

Example (HTML):

```html
<footer>
  This app is powered by
  <a
    href="https://sitesbymac.dev/?utm_source=project-footer&utm_medium=attribution&utm_campaign=creator-network"
    target="_blank"
    rel="noopener noreferrer"
  >
    SitesByMac.dev
  </a>
  — see more from this creator.
</footer>
```
