import { notFound } from 'next/navigation';
import { projects } from '../../../data/projects';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Mac Farley Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-100 to-stone-200 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700 text-amber-900 dark:text-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/projects"
            className="inline-flex items-center text-amber-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-cyan-400 mb-6 transition-colors"
          >
            ← Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            {project.description}
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-stone-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors font-medium"
            >
              View Live Site
            </a>
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Project Image */}
          {project.imageUrl && (
            <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                About This Project
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
                
                {/* You can add more detailed project information here */}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                  Key Features
                </h3>
                <ul className="text-gray-600 dark:text-gray-300">
                  <li>Modern, responsive design</li>
                  <li>Optimized performance</li>
                  <li>Cross-browser compatibility</li>
                  <li>Mobile-friendly interface</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Project Details
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <div>
                    <span className="font-medium">Completed:</span>
                    <br />
                    {new Date(project.completedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  
                  <div>
                    <span className="font-medium">Type:</span>
                    <br />
                    Web Application
                  </div>
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Links
                </h3>
                <div className="space-y-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    Live Demo
                  </a>
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-stone-50 dark:hover:bg-gray-700 transition-colors text-center"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Projects */}
      <div className="bg-stone-50 dark:bg-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Other Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 2)
              .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  href={`/projects/${otherProject.id}`}
                  className="group block bg-stone-50 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                      {otherProject.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {otherProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {otherProject.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
