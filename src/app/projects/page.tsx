import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Mac McCoy projects in web engineering, humane technology, and creator-first digital systems.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | Sites by Mac',
    description: 'A portfolio of modern web applications and mission-driven builds by Mac McCoy.',
    url: 'https://sitesbymac.dev/projects',
    type: 'website',
  },
};

export default function ProjectsPage() {
  // Sort projects in reverse chronological order (newest first)
  const sortedProjects = [...projects].sort((a, b) => 
    new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime()
  );

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Projects by Mac McCoy',
    itemListElement: sortedProjects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://sitesbymac.dev/projects/${project.id}`,
      name: project.title,
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-stone-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-800 py-16 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of web applications I&apos;ve built using modern technologies like React, TypeScript, Node.js, and more.
          </p>
        </div>
        
        {/* 2x2 grid on desktop, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
