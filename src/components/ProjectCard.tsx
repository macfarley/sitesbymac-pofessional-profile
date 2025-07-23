import { Project } from '../types/project';
import Image from 'next/image';
import Link from 'next/link';
import githubLogo from '../../public/gitHubLogo.webp';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <div className={`bg-stone-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 border border-amber-600/20 dark:border-gray-700 hover:border-amber-600/40 dark:hover:border-cyan-400/50 ${className}`}>
      {project.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={`/${project.id}Screenshot.png`} // Dynamically load the screenshot based on project ID
            alt={`${project.id === 'slay-the-dagron' ? 'Dagron Screenshot' : project.id === 'phantastic-beasts' ? 'Beasts Screenshot' : project.id === 'dream-weaver' ? 'Dream Screenshot' : 'Project Screenshot'}`} // Properly labeled alt text
            fill
            className="object-cover"
            loading="lazy" // Lazy load project images
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizing
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-900 dark:text-gray-100 mb-2">
          {project.title}
        </h3>
        
        <p className="text-amber-800 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-amber-100 dark:bg-green-900/30 text-amber-800 dark:text-green-300 text-sm rounded-full border border-amber-600/20 dark:border-green-400/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          <Link
            href={`/projects/${project.id}`}
            className="px-4 py-2 bg-amber-700 dark:bg-cyan-500 text-stone-100 dark:text-gray-900 rounded-lg hover:bg-amber-800 dark:hover:bg-cyan-400 transition-colors font-medium"
          >
            View Details
          </Link>
          
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-stone-600 dark:bg-pink-500 text-stone-100 dark:text-gray-100 rounded-lg hover:bg-stone-700 dark:hover:bg-pink-400 transition-colors font-medium"
          >
            Live Demo
          </a>
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-amber-700 dark:border-gray-500 text-amber-800 dark:text-gray-300 rounded-lg hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors font-medium flex items-center gap-2"
            >
              <Image src={githubLogo} alt="GitHub Logo" width={20} height={20} />
              GitHub Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
