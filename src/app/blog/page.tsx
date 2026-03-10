import CollapsibleBlogSections from './CollapsibleBlogSections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - SitesByMac.dev',
  description: 'Longform writing by Mac on digital ethics, humane tech, and creator autonomy, mirrored from Medium and published with a creator-first mission.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog - SitesByMac.dev',
    description: 'Longform writing by Mac on digital ethics, humane tech, and creator autonomy.',
    url: 'https://sitesbymac.dev/blog',
    siteName: 'SitesByMac.dev',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - SitesByMac.dev',
    description: 'Longform writing by Mac on digital ethics, humane tech, and creator autonomy.',
  },
};

export default function BlogPage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SitesByMac.dev',
    url: 'https://sitesbymac.dev',
    description: 'Privacy-minded digital consulting, writing, and creator-first web publishing by Mac.',
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mac McCoy',
    url: 'https://sitesbymac.dev',
    sameAs: [
      'https://bsky.app/profile/sitesbymac.bsky.social',
      'https://medium.com/@sitesbymac',
      'https://buymeacoffee.com/macfarley',
      'https://ko-fi.com/sitesbymac',
    ],
    jobTitle: 'Digital Consultant and Writer',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-stone-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <div className="bg-gradient-to-r from-amber-100 to-stone-200 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700 text-amber-900 dark:text-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">SitesByMac.dev Blog</h1>
          <p className="text-lg sm:text-xl text-amber-800 dark:text-gray-300 mb-6">
            I’m Mac — a privacy-minded digital consultant and writer. This blog is the canonical home for my longform work on digital ethics, humane technology, and creator autonomy.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 space-y-8">
        <details className="border-l-4 border-blue-500 pl-4 py-2">
          <summary className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 cursor-pointer">Publishing Ecosystem</summary>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I write for readers who care about the real cost of digital systems: who benefits, who gets extracted from, and what it means to build online spaces that
            stay human. Medium helps me reach people now. SitesByMac.dev is where the archive and long-term stewardship live.
          </p>
        </details>

        <CollapsibleBlogSections />
      </div>

      <footer className="text-center py-6">
        <p className="text-gray-600 dark:text-gray-400">
          Part of the Sites by Mac ecosystem. Home · About · Sitemap
        </p>
      </footer>
    </div>
  );
}
