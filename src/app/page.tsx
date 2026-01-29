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

import Image from 'next/image';
import dynamic from 'next/dynamic';

// Lazy load ProjectsGrid for better initial page performance
const LazyProjectsGrid = dynamic(() => import('../components/ProjectsGrid'), {
  loading: () => (
    <section className="py-16 px-4 bg-gradient-to-r from-stone-200 to-stone-300 dark:bg-gradient-to-r dark:from-gray-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-900 dark:text-gray-100 mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-stone-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-pulse"
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-600"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 w-16 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
});

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
                priority // Load immediately - above the fold
                sizes="(max-width: 768px) 128px, 160px" // Responsive sizing optimization
              />
            </div>
          </div>

          {/* Main heading with name highlighting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 dark:text-gray-100 mb-6">
            Hi, I&apos;m <span className="text-amber-700 dark:text-cyan-400">Mac McCoy</span>
          </h1>
          
          {/* Professional description paragraph */}
          <p className="text-lg sm:text-xl text-amber-800 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Web Developer passionate about creating engaging, user-friendly applications 
            with modern technologies like React, TypeScript, and Node.js.
          </p>
          
          {/* Call-to-action buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            {/* Primary CTA - View portfolio projects */}
            <a
              href="#projects"
              className="min-h-[44px] min-w-[44px] px-6 py-3 bg-amber-700 dark:bg-cyan-500 text-white dark:text-gray-900 rounded-lg hover:bg-amber-800 dark:hover:bg-cyan-400 focus:bg-amber-800 dark:focus:bg-cyan-400 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-gray-900 focus:outline-none transition-all duration-200 font-medium shadow-md hover:shadow-lg active:scale-95"
              aria-label="Navigate to portfolio projects section"
            >
              View My Work
            </a>
            {/* Secondary CTA - Contact via email */}
            <a
              href="mailto:travis@sitesbymac.dev"
              className="min-h-[44px] min-w-[44px] px-6 py-3 border-2 border-amber-700 dark:border-cyan-500 text-amber-700 dark:text-cyan-400 bg-transparent rounded-lg hover:bg-amber-700/10 dark:hover:bg-cyan-500/20 hover:border-amber-800 dark:hover:border-cyan-400 hover:text-amber-800 dark:hover:text-cyan-300 focus:bg-amber-700/10 dark:focus:bg-cyan-500/20 focus:border-amber-800 dark:focus:border-cyan-400 focus:text-amber-800 dark:focus:text-cyan-300 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-gray-900 focus:outline-none transition-all duration-200 font-medium active:scale-95"
              aria-label="Send email to travis@sitesbymac.dev"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Tech & Tools Sections - Interactive reference library */}
      <section className="py-16 px-4 bg-gradient-to-r from-stone-200 to-stone-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
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
                { name: 'PostgreSQL', icon: '/postgresqlLogo.png', url: 'https://www.postgresql.org/docs/' },
                { name: 'Django', icon: '/Django_logo.svg', url: 'https://docs.djangoproject.com/' }
              ].map((tech) => (
                // Each technology is a clickable link to its documentation
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer" // Security best practice
                  className="min-h-[88px] min-w-[88px] p-6 bg-stone-50 dark:bg-gray-700 border-2 border-amber-600/30 dark:border-green-400/50 rounded-lg text-amber-900 dark:text-gray-100 font-medium hover:border-amber-600/60 dark:hover:border-green-400/70 hover:bg-amber-50 dark:hover:bg-green-900/20 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none transition-colors shadow-sm flex flex-col items-center group cursor-pointer hover:scale-105 transform transition-transform duration-200"
                  aria-label={`Open ${tech.name} documentation in new tab`}
                >
                  {/* Icon container with larger dimensions for 44px minimum */}
                  <div className="w-16 h-16 mb-3 flex items-center justify-center relative">
                    <Image 
                      src={tech.icon} 
                      alt={`${tech.name} technology logo`} 
                      fill 
                      className="object-contain" // Maintains aspect ratio and fills container
                      loading="lazy" // Lazy load for better performance
                      sizes="64px" // Optimize for actual display size
                    />
                  </div>
                  <span className="text-center text-sm" aria-hidden="true">{tech.name}</span>
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
                { name: 'Trello', icon: '/trelloLogo.webp', url: 'https://help.atlassian.com/trello/' },
                { name: 'Heroku', icon: '/heroku.png', url: 'https://devcenter.heroku.com/' },
                { name: 'Vercel', icon: '/vercelLogo.png', url: 'https://vercel.com/docs' }
              ].map((tool) => (
                // Each tool is a clickable link to its documentation
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer" // Security best practice
                  className="min-h-[88px] min-w-[88px] p-4 bg-stone-50 dark:bg-gray-700 border-2 border-amber-600/30 dark:border-green-400/50 rounded-lg text-amber-900 dark:text-gray-100 font-medium hover:border-amber-600/60 dark:hover:border-green-400/70 hover:bg-amber-50 dark:hover:bg-green-900/20 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none transition-colors shadow-sm flex flex-col items-center group cursor-pointer hover:scale-105 transform transition-transform duration-200"
                  aria-label={`Open ${tool.name} documentation in new tab`}
                >
                  {/* Icon container with larger dimensions for 44px minimum */}
                  <div className="w-14 h-14 mb-3 flex items-center justify-center relative">
                    <Image 
                      src={tool.icon} 
                      alt={`${tool.name} platform logo`} 
                      fill 
                      className="object-contain" // Maintains aspect ratio and fills container
                      loading="lazy" // Lazy load for better performance
                      sizes="56px" // Optimize for actual display size
                    />
                  </div>
                  <span className="text-center text-sm" aria-hidden="true">{tool.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Portfolio showcase */}
      <div id="projects"> {/* Anchor for "View My Work" button */}
        <LazyProjectsGrid /> {/* Lazy-loaded component for better performance */}
      </div>

      {/* Clean Footer */}
      <footer className="py-8 px-4 bg-stone-200 dark:bg-gray-900 border-t border-amber-600/20 dark:border-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          {/* Copyright and Fun Footer Text */}
          <div className="text-sm text-amber-800 dark:text-gray-400 space-y-2">
            <p>© 2025 Mac McCoy | Sites by Mac | Built with Next.js & TypeScript</p>
            <p className="text-xs text-amber-600 dark:text-gray-500 font-mono">
              🦎 Powered by McAxl™ | Crafted with passion and pixels
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
