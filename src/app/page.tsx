/**
 * Homepage Component - Main landing page for Sites by Mac portfolio
 * 
 * Features:
 * - Hero section with McAxl mascot and personal introduction
 * - Technologies section with clickable documentation links
 * - Tools & Platforms section with external reference links
 * - Projects grid component integration
 * - Responsive design with dark/light theme support
 * 
 * Each technology/tool icon is clickable and opens official documentation
 * in a new tab for quick developer reference while browsing the portfolio.
 */

import ProjectsGrid from '../components/ProjectsGrid';
import Image from 'next/image';

export default function Home() {
  return (
    // Main container with gradient background that adapts to theme
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-stone-200 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-800 text-amber-900 dark:text-gray-100">
      
      {/* Hero Section - Brand introduction with McAxl mascot */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* McAxl Hero Image - Brand mascot prominently displayed */}
          <div className="mb-8">
            {/* Responsive sizing: 128px mobile, 160px desktop */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
              <Image
                src="/axlotl.png"
                alt="McAxl - SitesByMac.dev mascot"
                fill
                className="object-contain drop-shadow-2xl" // Enhanced shadow for prominence
              />
            </div>
          </div>

          {/* Main heading with name highlighting */}
          <h1 className="text-5xl font-bold text-amber-900 dark:text-gray-100 mb-6">
            Hi, I&apos;m <span className="text-amber-700 dark:text-cyan-400">Mac McCoy</span>
          </h1>
          
          {/* Professional description paragraph */}
          <p className="text-xl text-amber-800 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Full-Stack Web Developer passionate about creating engaging, user-friendly applications 
            with modern technologies like React, TypeScript, and Node.js.
          </p>
          
          {/* Call-to-action buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            {/* Primary CTA - View portfolio projects */}
            <a
              href="#projects"
              className="px-6 py-3 bg-amber-700 dark:bg-cyan-500 text-stone-100 dark:text-gray-900 rounded-lg hover:bg-amber-800 dark:hover:bg-cyan-400 transition-colors font-medium shadow-lg"
            >
              View My Work
            </a>
            {/* Secondary CTA - Contact via email */}
            <a
              href="mailto:travis@sitesbymac.dev"
              className="px-6 py-3 border-2 border-amber-700 dark:border-pink-500 text-amber-700 dark:text-pink-400 rounded-lg hover:bg-amber-700/10 dark:hover:bg-pink-500/20 transition-colors font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Tech & Tools Sections - Interactive reference library */}
      <section className="py-16 px-4 bg-stone-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          
          {/* Technologies Section - Core development stack */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-900 dark:text-gray-100 mb-8">
              Technologies
            </h2>
            {/* Grid of clickable technology icons linking to documentation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                // Each tech object contains name, icon path, and documentation URL
                { name: 'MERN Stack', icon: '/MERN.png', url: 'https://react.dev' },
                { name: 'Python', icon: '/python-logo.png', url: 'https://docs.python.org/3/' },
                { name: 'PostgreSQL', icon: '/Postgresql Logo Png,.png', url: 'https://www.postgresql.org/docs/' },
                { name: 'Django', icon: '/Django_logo.svg', url: 'https://docs.djangoproject.com/' }
              ].map((tech) => (
                // Each technology is a clickable link to its documentation
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer" // Security best practice
                  className="p-6 bg-stone-50 dark:bg-gray-700 border-2 border-amber-600/30 dark:border-green-400/50 rounded-lg text-amber-900 dark:text-gray-100 font-medium hover:border-amber-600/60 dark:hover:border-green-400/70 hover:bg-amber-50 dark:hover:bg-green-900/20 transition-colors shadow-sm flex flex-col items-center group cursor-pointer hover:scale-105 transform transition-transform duration-200"
                >
                  {/* Icon container with fixed dimensions */}
                  <div className="w-12 h-12 mb-3 flex items-center justify-center relative">
                    <Image 
                      src={tech.icon} 
                      alt={tech.name}
                      fill
                      className="object-contain" // Maintains aspect ratio
                    />
                  </div>
                  {/* Technology name label */}
                  <span className="text-center">{tech.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Tools & Platforms Section - Supporting development tools */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-amber-900 dark:text-gray-100 mb-8">
              Tools & Platforms
            </h2>
            {/* Grid of clickable tool icons linking to documentation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                // Each tool object contains name, icon path, and documentation URL
                { name: 'Postman', icon: '/postman.png', url: 'https://learning.postman.com/docs/' },
                { name: 'Trello', icon: '/Trello Logo.png', url: 'https://help.atlassian.com/trello/' },
                { name: 'Heroku', icon: '/heroku.png', url: 'https://devcenter.heroku.com/' },
                { name: 'Vercel', icon: '/vercel.svg', url: 'https://vercel.com/docs' }
              ].map((tool) => (
                // Each tool is a clickable link to its documentation
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer" // Security best practice
                  className="p-4 bg-stone-50 dark:bg-gray-700 border-2 border-amber-600/30 dark:border-green-400/50 rounded-lg text-amber-900 dark:text-gray-100 font-medium hover:border-amber-600/60 dark:hover:border-green-400/70 hover:bg-amber-50 dark:hover:bg-green-900/20 transition-colors shadow-sm flex flex-col items-center group cursor-pointer hover:scale-105 transform transition-transform duration-200"
                >
                  {/* Icon container with fixed dimensions */}
                  <div className="w-10 h-10 mb-3 flex items-center justify-center relative">
                    <Image 
                      src={tool.icon} 
                      alt={tool.name}
                      fill
                      className="object-contain" // Maintains aspect ratio
                    />
                  </div>
                  {/* Tool name label */}
                  <span className="text-center text-sm">{tool.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Portfolio showcase */}
      <div id="projects"> {/* Anchor for "View My Work" button */}
        <ProjectsGrid /> {/* External component handling project display */}
      </div>
    </div>
  );
}
