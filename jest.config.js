/**
 * Jest Configuration for Sites by Mac Portfolio
 * 
 * This configuration sets up Jest testing for a Next.js application with:
 * - Next.js integration via nextJest helper
 * - React Testing Library support
 * - TypeScript compatibility
 * - Coverage reporting
 * - jsdom environment for DOM testing
 * 
 * Key Features:
 * - Automatic Next.js transpilation and module resolution
 * - CSS modules and static asset mocking
 * - Path alias resolution (@/ for src/)
 * - Optimized coverage collection
 */

const nextJest = require('next/jest')

/**
 * Next.js Jest Configuration Helper
 * 
 * This function creates a Jest configuration that:
 * - Handles Next.js-specific features (Image, Link, etc.)
 * - Transpiles TypeScript and JSX
 * - Mocks CSS imports and static assets
 * - Sets up path aliases from next.config.js/tsconfig.json
 * 
 * Cool Setting: The dir: './' tells Next.js where to find your config files
 */
const createJestConfig = nextJest({
  dir: './',  // Path to Next.js app directory
})

/**
 * Custom Jest Configuration
 * 
 * These settings customize the Jest environment specifically for this project
 */
const customJestConfig = {
  /**
   * Setup Files Configuration
   * 
   * setupFilesAfterEnv runs after Jest is initialized but before tests
   * Perfect for:
   * - Configuring Testing Library
   * - Adding custom matchers
   * - Setting up global test utilities
   * 
   * Cool Setting: Use setupFiles (without "AfterEnv") for environment setup
   */
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  /**
   * Test Environment
   * 
   * jsdom simulates a browser environment for DOM testing
   * Essential for React component testing with Testing Library
   * 
   * Alternative: 'node' for API/utility function testing only
   */
  testEnvironment: 'jest-environment-jsdom',
  
  /**
   * Coverage Collection Configuration
   * 
   * Tracks code coverage across the entire src/ directory
   * Excludes files that don't need testing or can't be tested
   * 
   * Cool Setting: Add '!src/pages/api/**' to exclude API routes
   */
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',   // Include all source files
    '!src/**/*.d.ts',             // Exclude TypeScript declaration files
    '!src/app/layout.tsx',        // Exclude Next.js layout (hard to test meaningfully)
    '!src/app/globals.css',       // Exclude CSS files
    '!src/types/**',              // Type definitions
    '!src/app/**/loading.tsx',    // Loading components
    '!src/app/**/not-found.tsx',  // Error pages
    '!src/app/mcaxl/page.tsx',    // Simple static page
  ],
  
  /**
   * Test Path Ignore Patterns
   * 
   * Directories to completely ignore during test discovery
   * 
   * Cool Setting: Add 'cypress/' or 'e2e/' for end-to-end test separation
   */
  testPathIgnorePatterns: [
    '<rootDir>/.next/',         // Next.js build output
    '<rootDir>/node_modules/',  // Dependencies
    // '<rootDir>/cypress/',    // E2E tests (if using Cypress)
  ],
  
  /**
   * Optional: Additional Useful Jest Options
   * 
   * Uncomment and customize these as needed:
   */
  
  // Transform configuration (handled by Next.js, but here for reference)
  // transform: {
  //   '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  // },
  
  // Module name mapping for absolute imports and aliases
  // moduleNameMapping: {
  //   '^@/(.*)$': '<rootDir>/src/$1',
  //   '^~/(.*)$': '<rootDir>/public/$1',
  // },
  
  // Test match patterns (default is good, but here for customization)
  // testMatch: [
  //   '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
  //   '<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}',
  // ],
  
  // Coverage thresholds (enforce minimum coverage)
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  
  // Verbose output for debugging
  // verbose: true,
}

/**
 * Export the complete Jest configuration
 * 
 * createJestConfig merges Next.js defaults with our custom config
 * This ensures Next.js features work properly in tests while
 * maintaining our specific testing requirements
 */
module.exports = createJestConfig(customJestConfig)

/**
 * ==========================================
 * TESTING BEST PRACTICES & COOL PATTERNS
 * ==========================================
 * 
 * 1. Test Organization:
 *    - Co-locate tests: Component.test.tsx next to Component.tsx
 *    - Use __tests__ folders for complex test suites
 *    - Group related tests with describe() blocks
 * 
 * 2. Coverage Strategy:
 *    - Aim for 70%+ coverage on critical business logic
 *    - Don't test implementation details, test behavior
 *    - Focus on user interactions and edge cases
 * 
 * 3. Mock Strategy:
 *    - Mock external dependencies (APIs, libraries)
 *    - Use MSW for API mocking
 *    - Mock Next.js components (Image, Link) when needed
 * 
 * 4. Performance Tips:
 *    - Use --watchAll=false in CI environments
 *    - Limit coverage collection to source files only
 *    - Use --maxWorkers=2 for CI parallelization
 * 
 * 5. Debugging Tests:
 *    - Add 'screen.debug()' to see rendered output
 *    - Use '--verbose' flag for detailed test output
 *    - Set 'testTimeout: 10000' for slow tests
 */
