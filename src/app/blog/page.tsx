import CollapsibleBlogSections from './CollapsibleBlogSections';
import type { Metadata } from 'next';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

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

const mediumArticles: BlogPost[] = [
  {
    title: 'Medium Article 1',
    date: '2026-01-01',
    tags: ['ethics', 'technology'],
    summary: 'An exploration of ethical technology practices.',
    content: 'Full content of Medium Article 1.',
    source: 'https://medium.com/example-article-1',
  },
  {
    title: 'Medium Article 2',
    date: '2026-02-01',
    tags: ['autonomy', 'creators'],
    summary: 'How creators can maintain autonomy in the digital age.',
    content: 'Full content of Medium Article 2.',
    source: 'https://medium.com/example-article-2',
  },
];

async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDirectory = path.join(process.cwd(), 'blog');
  const files = await fs.promises.readdir(blogDirectory);

  return Promise.all(
    files.map(async (fileName) => {
      const filePath = path.join(blogDirectory, fileName);
      const fileContents = await fs.promises.readFile(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        title: data.title,
        date: new Date(data.date).toLocaleDateString(), // Format date as a string
        tags: data.tags,
        summary: data.summary,
        content,
        source: data.source || null, // Include source link if available
      };
    })
  );
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Medium Articles</h2>
          {mediumArticles.map((article, index) => (
            <article key={index} id={`medium-article-${index}`} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{article.date}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{article.summary}</p>
              {article.source && (
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">
                  Originally published on <a href={article.source} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">{new URL(article.source).hostname}</a>
                </p>
              )}
              <details>
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Read Article</summary>
                <div className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {article.content}
                </div>
              </details>
            </article>
          ))}
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Blog Posts</h2>
          {posts.map((post, index) => (
            <article key={index} id={`post-${index}`} className="mb-6">
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
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            This blog serves as the canonical home for my longform work. For developer-specific content, I publish on platforms like Hashnode and Dev.to. For philosophical and long-form content, I use Medium. These platforms allow me to reach different audiences while maintaining a creator-first mission.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Medium remains an active distribution channel, especially through Age of Awareness. But from this point forward, new longform pieces are mirrored here so
            SitesByMac.dev becomes the canonical home of my writing. Over time, this section will expand into full mirrored article sections that preserve context while keeping everything rooted in creator-first, privacy-minded publishing.
          </p>
        </section>
      </div>
    </div>
  );
}
