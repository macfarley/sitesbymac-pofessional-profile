import CollapsibleBlogSections from './CollapsibleBlogSections';
import type { Metadata } from 'next';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

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

interface BlogPost {
  title: string;
  date: string;
  tags: string[];
  summary: string;
  content: string;
  source?: string;
}

async function getMarkdownBlogPosts() {
  const blogDirectory = path.join(process.cwd(), 'blog');
  const files = await fs.promises.readdir(blogDirectory);

  return Promise.all(
    files.map(async (fileName) => {
      const filePath = path.join(blogDirectory, fileName);
      const fileContents = await fs.promises.readFile(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        title: data.title,
        date: new Date(data.date).toISOString(),
        tags: data.tags,
        content,
        source: data.source,
      };
    })
  );
}

export default async function BlogPage() {
  const posts = await getMarkdownBlogPosts();
  posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

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
        {posts.map((post, index) => (
          <article key={index} id={`post-${index}`} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{new Date(post.date).toLocaleDateString()}</p>
            <details>
              <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Read Full Article</summary>
              <div className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                {post.content}
              </div>
            </details>
            {post.source && (
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-4">
                Originally published on <a href={post.source} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">{new URL(post.source).hostname}</a>
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
