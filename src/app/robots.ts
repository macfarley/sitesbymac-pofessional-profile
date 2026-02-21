import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://sitesbymac.dev/sitemap.xml',
    host: 'https://sitesbymac.dev',
  };
}
