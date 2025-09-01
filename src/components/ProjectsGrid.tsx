import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
  // Sort projects in reverse chronological order (newest first)
  const sortedProjects = [...projects].sort((a, b) => 
    new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime()
  );

  return (
    <section className="py-16 px-4 bg-stone-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-900 dark:text-gray-100 mb-12">
          Featured Projects
        </h2>
        
        {/* 2x2 grid on desktop, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
