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
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About Me</Link>
            <Link href="/projects" className="nav-link">Projects</Link>
            <Link href="/mcaxl" className="nav-link">McAxl</Link>
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="nav-link"
            >
              Contact
            </button>
          </div>

          {/* Hamburger Menu Button - Visible on small screens */}
          <button
            className="md:hidden text-amber-800 dark:text-cyan-400 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger icon SVG */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links - Shown when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden bg-stone-100 dark:bg-gray-800 p-4 rounded-lg shadow-md mt-4 w-fit ml-auto">
            <ul className="space-y-2 text-right">
              <li>
                <Link href="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link href="/about" className="nav-link">About Me</Link>
              </li>
              <li>
                <Link href="/projects" className="nav-link">Projects</Link>
              </li>
              <li>
                <Link href="/mcaxl" className="nav-link">McAxl</Link>
              </li>
              <li>
                <Link href="/#contact" className="nav-link">Contact</Link>
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
            <ul className="space-y-2 text-center">
              <li>
                <a href="http://www.linkedin.com/in/travis-mccoy-fullstack" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/macfarley?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:mac@sitesbymac.dev" className="text-red-600 hover:underline">
                  mac@sitesbymac.dev
                </a>
              </li>
              <li>
                <span className="text-gray-800 dark:text-gray-200">Text Me: 9374679312</span>
              </li>
              <li>
                <span className="text-gray-800 dark:text-gray-200">Discord: @macfarley</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
