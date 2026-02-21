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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'The Price of Doing Business',
        author: {
          '@type': 'Person',
          name: 'Mac McCoy',
        },
        url: 'https://sitesbymac.dev/blog#price-of-doing-business',
        mainEntityOfPage: 'https://sitesbymac.dev/blog#price-of-doing-business',
        isBasedOn: 'https://medium.com/age-of-awareness/the-price-of-doing-business-b28f05c27003',
        publisher: {
          '@type': 'Organization',
          name: 'SitesByMac.dev',
          url: 'https://sitesbymac.dev',
        },
        articleSection: 'Digital Ethics',
      },
      {
        '@type': 'Article',
        headline: 'I Tried Substack — It Proved My Point',
        author: {
          '@type': 'Person',
          name: 'Mac McCoy',
        },
        url: 'https://sitesbymac.dev/blog#i-tried-substack-it-proved-my-point',
        mainEntityOfPage: 'https://sitesbymac.dev/blog#i-tried-substack-it-proved-my-point',
        isBasedOn: 'https://medium.com/age-of-awareness/i-tried-substack-it-proved-my-point-fa52060fc986',
        publisher: {
          '@type': 'Organization',
          name: 'SitesByMac.dev',
          url: 'https://sitesbymac.dev',
        },
        articleSection: 'Humane Tech',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-stone-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-gradient-to-r from-amber-100 to-stone-200 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700 text-amber-900 dark:text-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">SitesByMac.dev Blog</h1>
          <p className="text-lg sm:text-xl text-amber-800 dark:text-gray-300 mb-6">
            I&apos;m Mac — a privacy-minded digital consultant, writer, and builder of small, human-scale web experiences.
          </p>
          <p className="text-base sm:text-lg text-amber-900 dark:text-gray-200 max-w-3xl mx-auto">
            This space is where my writing lives long-term: grounded in digital ethics, humane technology, and creator autonomy.
            I publish through Medium, especially in Age of Awareness, and mirror that longform work here as the canonical home.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 space-y-8">
        <section className="border-l-4 border-blue-500 pl-4 py-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">Publishing Ecosystem</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I write for readers who care about the real cost of digital systems: who benefits, who gets extracted from, and what it means to build online spaces that
            stay human. Medium helps me reach people now. SitesByMac.dev is where the archive and long-term stewardship live.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://medium.com/age-of-awareness/the-price-of-doing-business-b28f05c27003"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              Read: The Price of Doing Business
            </a>
            <a
              href="https://medium.com/age-of-awareness/i-tried-substack-it-proved-my-point-fa52060fc986"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              Read: I Tried Substack — It Proved My Point
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Featured Essays</h2>
          <div className="mb-6 rounded-lg bg-stone-100 dark:bg-gray-800 border border-amber-600/20 dark:border-cyan-400/20 p-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">On This Page</h3>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>
                <a href="#price-of-doing-business" className="text-blue-600 dark:text-blue-400 hover:underline">
                  The Price of Doing Business
                </a>
              </li>
              <li>
                <a href="#i-tried-substack-it-proved-my-point" className="text-blue-600 dark:text-blue-400 hover:underline">
                  I Tried Substack — It Proved My Point
                </a>
              </li>
              <li>
                <a href="#publishing-mirror-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Publishing & Mirror Policy
                </a>
              </li>
            </ul>
          </div>
          <CollapsibleBlogSections />
        </section>

        <section className="rounded-xl bg-stone-100 dark:bg-gray-800 p-6 border border-amber-600/20 dark:border-cyan-400/20">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">Stay Connected</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Follow on Bluesky for new writing updates, and support this work if it helps you think clearer, build better, or protect your autonomy online.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://bsky.app/profile/sitesbymac.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-colors"
            >
              Follow on Bluesky
            </a>
            <a
              href="https://buymeacoffee.com/macfarley"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition-colors"
            >
              Support on BuyMeACoffee
            </a>
            <a
              href="https://ko-fi.com/sitesbymac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white transition-colors"
            >
              Support on Ko-fi
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
