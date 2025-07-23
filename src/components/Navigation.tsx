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
import { useState } from 'react'; // For managing mobile menu state
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    // Main navigation bar with glass morphism effect
    <nav className="bg-stone-50/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-amber-600/30 dark:border-cyan-400/50">
      {/* Navigation content container with max width and padding */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Flexbox layout for logo/links distribution */}
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo/Name - Left side */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/" // Link to homepage
              className="text-xl font-bold text-amber-800 dark:text-cyan-400 hover:text-amber-700 dark:hover:text-cyan-300 transition-colors"
            >
              Sites by Mac {/* Business brand name */}
            </Link>
            <ThemeToggle />
          </div>

          {/* Desktop Navigation Links - Hidden on small screens */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Main navigation links */}
            <Link 
              href="/" 
              className="text-base font-medium text-amber-800 dark:text-cyan-400 hover:text-amber-700 dark:hover:text-cyan-300 focus:text-amber-700 dark:focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-gray-900 transition-colors duration-200 ease-in-out underline decoration-2 decoration-amber-600/30 dark:decoration-cyan-400/30 hover:decoration-amber-700 dark:hover:decoration-cyan-300 focus:decoration-amber-700 dark:focus:decoration-cyan-300 px-2 py-1 rounded-sm"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-base font-medium text-amber-800 dark:text-cyan-400 hover:text-amber-700 dark:hover:text-cyan-300 focus:text-amber-700 dark:focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-gray-900 transition-colors duration-200 ease-in-out underline decoration-2 decoration-amber-600/30 dark:decoration-cyan-400/30 hover:decoration-amber-700 dark:hover:decoration-cyan-300 focus:decoration-amber-700 dark:focus:decoration-cyan-300 px-2 py-1 rounded-sm"
            >
              About Me
            </Link>
            <Link 
              href="/projects" 
              className="text-base font-medium text-amber-800 dark:text-cyan-400 hover:text-amber-700 dark:hover:text-cyan-300 focus:text-amber-700 dark:focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-gray-900 transition-colors duration-200 ease-in-out underline decoration-2 decoration-amber-600/30 dark:decoration-cyan-400/30 hover:decoration-amber-700 dark:hover:decoration-cyan-300 focus:decoration-amber-700 dark:focus:decoration-cyan-300 px-2 py-1 rounded-sm"
            >
              Projects
            </Link>
            <Link 
              href="/mcaxl" 
              className="text-base font-medium text-amber-800 dark:text-cyan-400 hover:text-amber-700 dark:hover:text-cyan-300 focus:text-amber-700 dark:focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-gray-900 transition-colors duration-200 ease-in-out underline decoration-2 decoration-amber-600/30 dark:decoration-cyan-400/30 hover:decoration-amber-700 dark:hover:decoration-cyan-300 focus:decoration-amber-700 dark:focus:decoration-cyan-300 px-2 py-1 rounded-sm"
            >
              McAxl
            </Link>
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="text-base font-medium text-amber-800 dark:text-cyan-400 hover:text-amber-700 dark:hover:text-cyan-300 focus:text-amber-700 dark:focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-gray-900 transition-colors duration-200 ease-in-out underline decoration-2 decoration-amber-600/30 dark:decoration-cyan-400/30 hover:decoration-amber-700 dark:hover:decoration-cyan-300 focus:decoration-amber-700 dark:focus:decoration-cyan-300 px-2 py-1 rounded-sm"
              aria-expanded={isContactOpen}
              aria-haspopup="true"
            >
              Contact
            </button>
          </div>

          {/* Hamburger Menu Button - Visible on small screens */}
          <button
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-amber-800 dark:text-cyan-400 hover:text-amber-700 dark:hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-gray-900 rounded-md transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {/* Hamburger icon SVG */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links - Shown when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden bg-stone-100 dark:bg-gray-800 p-4 rounded-lg shadow-md mt-4 w-fit ml-auto">
            <ul className="space-y-2 text-right">
              <li>
                <Link 
                  href="/" 
                  className="block text-base font-medium text-amber-800 dark:text-cyan-400 hover:text-amber-700 dark:hover:text-cyan-300 focus:text-amber-700 dark:focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-100 dark:focus:ring-offset-gray-800 transition-colors duration-200 ease-in-out px-3 py-2 rounded underline decoration-2 decoration-amber-600/30 dark:decoration-cyan-400/30 hover:decoration-amber-700 dark:hover:decoration-cyan-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block text-base font-medium text-amber-800 dark:text-cyan-400 hover:text-amber-700 dark:hover:text-cyan-300 focus:text-amber-700 dark:focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-100 dark:focus:ring-offset-gray-800 transition-colors duration-200 ease-in-out px-3 py-2 rounded underline decoration-2 decoration-amber-600/30 dark:decoration-cyan-400/30 hover:decoration-amber-700 dark:hover:decoration-cyan-300"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="block text-base font-medium text-amber-800 dark:text-cyan-400 hover:text-amber-700 dark:hover:text-cyan-300 focus:text-amber-700 dark:focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-100 dark:focus:ring-offset-gray-800 transition-colors duration-200 ease-in-out px-3 py-2 rounded underline decoration-2 decoration-amber-600/30 dark:decoration-cyan-400/30 hover:decoration-amber-700 dark:hover:decoration-cyan-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/mcaxl" 
                  className="block text-base font-medium text-amber-800 dark:text-cyan-400 hover:text-amber-700 dark:hover:text-cyan-300 focus:text-amber-700 dark:focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-100 dark:focus:ring-offset-gray-800 transition-colors duration-200 ease-in-out px-3 py-2 rounded underline decoration-2 decoration-amber-600/30 dark:decoration-cyan-400/30 hover:decoration-amber-700 dark:hover:decoration-cyan-300"
                >
                  McAxl
                </Link>
              </li>
              <li>
                <Link 
                  href="/#contact" 
                  className="block text-base font-medium text-amber-800 dark:text-cyan-400 hover:text-amber-700 dark:hover:text-cyan-300 focus:text-amber-700 dark:focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-100 dark:focus:ring-offset-gray-800 transition-colors duration-200 ease-in-out px-3 py-2 rounded underline decoration-2 decoration-amber-600/30 dark:decoration-cyan-400/30 hover:decoration-amber-700 dark:hover:decoration-cyan-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Contact Dropdown - Shown when Contact button is clicked */}
        {isContactOpen && (
          <div className="bg-stone-100 dark:bg-gray-800 p-4 rounded-lg shadow-md mt-4">
            <Image
              src="/macpro.jpg"
              alt="Travis McCoy"
              width={100}
              height={100}
              className="rounded-full mx-auto mb-4"
            />
            <ul className="space-y-3 text-center">
              <li>
                <a 
                  href="http://www.linkedin.com/in/travis-mccoy-fullstack" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 focus:text-blue-800 dark:focus:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-stone-100 dark:focus:ring-offset-gray-800 transition-colors duration-200 underline decoration-2 decoration-blue-600/50 dark:decoration-blue-400/50 hover:decoration-blue-800 dark:hover:decoration-blue-300 px-2 py-1 rounded"
                  aria-label="Visit LinkedIn profile"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/macfarley?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-base font-medium text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 focus:text-gray-900 dark:focus:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-stone-100 dark:focus:ring-offset-gray-800 transition-colors duration-200 underline decoration-2 decoration-gray-800/50 dark:decoration-gray-200/50 hover:decoration-gray-900 dark:hover:decoration-gray-100 px-2 py-1 rounded"
                  aria-label="Visit GitHub repositories"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="mailto:mac@sitesbymac.dev" 
                  className="block text-base font-medium text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 focus:text-red-800 dark:focus:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-stone-100 dark:focus:ring-offset-gray-800 transition-colors duration-200 underline decoration-2 decoration-red-600/50 dark:decoration-red-400/50 hover:decoration-red-800 dark:hover:decoration-red-300 px-2 py-1 rounded"
                  aria-label="Send email to mac@sitesbymac.dev"
                >
                  mac@sitesbymac.dev
                </a>
              </li>
              <li>
                <span className="block text-base text-gray-800 dark:text-gray-200 px-2 py-1">
                  Text Me: <a href="tel:+19374679312" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-stone-100 dark:focus:ring-offset-gray-800 transition-colors duration-200" aria-label="Call 937-467-9312">(937) 467-9312</a>
                </span>
              </li>
              <li>
                <span className="block text-base text-gray-800 dark:text-gray-200 px-2 py-1">Discord: @macfarley</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
