/**
 * Navigation Component - Global site navigation bar
 * 
 * Features:
 * - Responsive layout with brand logo and navigation links
 * - Theme-aware styling that adapts to light/dark modes
 * - Integrated theme toggle functionality
 * - Backdrop blur effect for modern glass morphism design
 * - Hover effects and smooth transitions
 * 
 * Navigation Structure:
 * - Brand: "Sites by Mac" (links to homepage)
 * - Links: Home, About, Projects, McAxl (mascot page), Contact
 * - Theme Toggle: Light/dark mode switcher
 * 
 * Appears on every page via layout.tsx integration.
 */

'use client'; // Enable client-side interactivity for theme toggle

import Link from 'next/link'; // Next.js optimized navigation
import ThemeToggle from './ThemeToggle'; // Theme switching component

export default function Navigation() {
  return (
    // Main navigation bar with glass morphism effect
    <nav className="bg-stone-50/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-amber-600/30 dark:border-cyan-400/50">
      {/* Navigation content container with max width and padding */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Flexbox layout for logo/links distribution */}
        <div className="flex justify-between items-center h-16">
          
          {/* Brand Logo/Name - Left side */}
          <Link 
            href="/" // Link to homepage
            className="text-xl font-bold text-amber-800 dark:text-cyan-400 hover:text-amber-700 dark:hover:text-cyan-300 transition-colors"
          >
            Sites by Mac {/* Business brand name */}
          </Link>
          
          {/* Navigation Links and Theme Toggle - Right side */}
          <div className="flex items-center space-x-8">
            {/* Main navigation links */}
            <div className="flex space-x-8">
              {/* Home link */}
              <Link
                href="/"
                className="text-amber-900 dark:text-gray-100 hover:text-amber-700 dark:hover:text-green-400 transition-colors font-medium"
              >
                Home
              </Link>
              
              {/* About/Resume page link */}
              <Link
                href="/about"
                className="text-amber-900 dark:text-gray-100 hover:text-amber-700 dark:hover:text-green-400 transition-colors font-medium"
              >
                About
              </Link>
              
              {/* Projects portfolio link */}
              <Link
                href="/projects"
                className="text-amber-900 dark:text-gray-100 hover:text-amber-700 dark:hover:text-green-400 transition-colors font-medium"
              >
                Projects
              </Link>
              
              {/* McAxl mascot page link */}
              <Link
                href="/mcaxl"
                className="text-amber-900 dark:text-gray-100 hover:text-amber-700 dark:hover:text-green-400 transition-colors font-medium"
              >
                McAxl
              </Link>
              
              {/* Contact section anchor link */}
              <Link
                href="/#contact"
                className="text-amber-900 dark:text-gray-100 hover:text-amber-700 dark:hover:text-green-400 transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
            
            {/* Theme Toggle Component */}
            <ThemeToggle /> {/* Handles dark/light mode switching */}
          </div>
        </div>
      </div>
    </nav>
  );
}
