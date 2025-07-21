/**
 * ThemeToggle Component - Dark/Light mode switcher
 * 
 * Features:
 * - Persistent theme storage in localStorage
 * - System theme preference detection as fallback
 * - Smooth transitions between light and dark modes
 * - Sun/Moon icons that change based on current theme
 * - Hydration-safe rendering to prevent SSR mismatches
 * 
 * Theme Management:
 * - Adds/removes 'dark' class on document.documentElement
 * - Tailwind CSS uses this class for dark mode styling
 * - Saves user preference to localStorage for persistence
 * - Respects system preference if no saved preference exists
 * 
 * Used in Navigation component for global theme control.
 */

'use client'; // Enable client-side functionality for localStorage and DOM manipulation

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  // State Management
  const [isDark, setIsDark] = useState(false); // Current theme state
  const [mounted, setMounted] = useState(false); // Hydration safety flag

  // Theme Initialization Effect - Runs once on component mount
  useEffect(() => {
    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    // Detect system theme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Determine initial theme state
    let shouldBeDark = false;
    if (savedTheme === 'dark') {
      shouldBeDark = true; // User explicitly chose dark mode
    } else if (savedTheme === 'light') {
      shouldBeDark = false; // User explicitly chose light mode
    } else {
      // No saved preference, respect system preference
      shouldBeDark = prefersDark;
    }
    
    // Update component state
    setIsDark(shouldBeDark);
    
    // Apply theme to document for CSS styling
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    console.log('Toggling theme to:', newTheme ? 'dark' : 'light');
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      console.log('Added dark class, classes:', document.documentElement.classList.toString());
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      console.log('Added light class, classes:', document.documentElement.classList.toString());
    }
    
    // Force a repaint to ensure styles update
    document.documentElement.style.colorScheme = newTheme ? 'dark' : 'light';
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="p-2 w-9 h-9 bg-stone-200 dark:bg-gray-700 rounded-lg">
        <div className="w-5 h-5"></div>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-stone-200 dark:bg-gray-700 text-amber-900 dark:text-gray-100 hover:bg-stone-300 dark:hover:bg-gray-600 transition-colors border border-amber-600/20 dark:border-cyan-400/20"
        aria-label="Toggle theme"
      >
        {isDark ? (
          // Sun icon for light mode
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="sun-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          // Moon icon for dark mode
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="moon-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>
      {/* Debug info */}
      {/* <div className="text-xs mt-2">
        <div className="dark:text-red-500 text-green-500">
          Dark mode test: {isDark ? 'DARK' : 'LIGHT'}
        </div>
      </div> */}
    </div>
  );
}
