import CollapsibleBlogSections from './CollapsibleBlogSections';
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

export async function getStaticProps() {
  const blogDirectory = path.join(process.cwd(), 'blog');
  const files = fs.readdirSync(blogDirectory);

  const posts = files.map((fileName) => {
    const filePath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title,
      date: data.date,
      tags: data.tags,
      summary: data.summary,
      content,
      source: data.source || null, // Include source link if available
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function BlogPage({ posts }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-stone-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-800">
      <div className="bg-gradient-to-r from-amber-100 to-stone-200 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700 text-amber-900 dark:text-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">SitesByMac.dev Blog</h1>
          <p className="text-lg sm:text-xl text-amber-800 dark:text-gray-300 mb-6">
            I’m Mac — a privacy-minded digital consultant and writer. This blog is the canonical home for my longform work on digital ethics, humane technology, and creator autonomy.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 space-y-8">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Blog Posts</h2>
          {posts.map((post, index) => (
            <article key={index} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{post.date}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{post.summary}</p>
              {post.source && (
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">
                  Originally published on <a href={post.source} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">{new URL(post.source).hostname}</a>
                </p>
              )}
              <details>
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Read Post</summary>
                <div className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {post.content}
                </div>
              </details>
            </article>
          ))}
        </section>

        <section className="border-t border-gray-300 dark:border-gray-700 pt-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">Publishing Ecosystem</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This blog serves as the canonical home for my longform work. For developer-specific content, I publish on platforms like Hashnode and Dev.to. For philosophical and long-form content, I use Medium. These platforms allow me to reach different audiences while maintaining a creator-first mission.
          </p>
        </section>
      </div>

      <footer className="text-center py-6">
        <p className="text-gray-600 dark:text-gray-400">
          Part of the Sites by Mac ecosystem. Home · About · Sitemap
        </p>
      </footer>
    </div>
  );
}
