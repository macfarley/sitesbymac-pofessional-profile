/**
 * Jest Setup Configuration for Sites by Mac Portfolio
 * 
 * This file runs once before the entire test suite begins.
 * It configures the testing environment with:
 * - Testing Library custom matchers
 * - Next.js component mocks
 * - Browser API mocks
 * - Global test utilities
 * 
 * Key Purpose: Bridge the gap between Jest's Node.js environment
 * and the browser APIs that React components expect
 */

/**
 * Testing Library Jest DOM Matchers
 * 
 * Provides custom Jest matchers for DOM testing:
 * - toBeInTheDocument()
 * - toHaveClass()
 * - toBeVisible()
 * - toHaveAttribute()
 * And many more semantic matchers
 * 
 * Cool Usage: expect(button).toBeInTheDocument()
 */
import '@testing-library/jest-dom'

/**
 * Next.js Router Mock
 * 
 * Mocks the Next.js router for components that use:
 * - useRouter()
 * - router.push()
 * - router.query
 * 
 * Cool Setting: Use 'next-router-mock' for controllable router state
 * Alternative: Manual mock for simpler cases
 */
jest.mock('next/router', () => require('next-router-mock'))

/**
 * Next.js Image Component Mock
 * 
 * Replaces next/image with a standard <img> tag for testing
 * This avoids issues with:
 * - Image optimization APIs not being available in Jest
 * - Complex next/image internals that don't affect test behavior
 * 
 * Cool Setting: The eslint-disable comments prevent false positives
 * for accessibility and Next.js rules in test environment
 */
jest.mock('next/image', () => ({
  __esModule: true,  // Ensures proper ES module compatibility
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />  // Simple img tag with all props passed through
  },
}))

/**
 * Next.js Link Component Mock
 * 
 * Replaces next/Link with a standard <a> tag for testing
 * Preserves href and other props while simplifying the component
 * 
 * Cool Pattern: Destructuring children and href separately ensures
 * they're handled correctly while spreading remaining props
 */
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

/**
 * ResizeObserver Mock
 * 
 * Many modern UI libraries use ResizeObserver to track element size changes
 * Jest's jsdom environment doesn't include this API, so we mock it
 * 
 * Common Use Cases:
 * - Chart libraries (Chart.js, D3)
 * - Responsive component libraries
 * - Custom hooks that track element dimensions
 * 
 * Cool Setting: Return jest.fn() for each method to enable spy assertions
 */
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),      // Mock observing an element
  unobserve: jest.fn(),    // Mock stopping observation
  disconnect: jest.fn(),   // Mock cleanup
}))

/**
 * Window.matchMedia Mock
 * 
 * Essential for testing responsive components and CSS-in-JS libraries
 * that use media queries programmatically
 * 
 * Common Use Cases:
 * - useMediaQuery hooks
 * - Responsive navigation components
 * - Theme detection based on screen size
 * - Libraries like Mantine, Chakra UI
 * 
 * Cool Setting: Set matches: true to test mobile/desktop specific behavior
 */
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,        // Default to desktop/large screen
    media: query,          // The actual query string
    onchange: null,        // Legacy change handler
    addListener: jest.fn(),     // Deprecated but some libraries still use
    removeListener: jest.fn(),  // Deprecated but some libraries still use
    addEventListener: jest.fn(),    // Modern event handling
    removeEventListener: jest.fn(), // Modern event handling
    dispatchEvent: jest.fn(),       // Event dispatch capability
  })),
})

/**
 * Additional Browser API Mocks
 * 
 * Uncomment and customize these as your app grows:
 */

// Mock localStorage for components that use client-side storage
// Object.defineProperty(window, 'localStorage', {
//   value: {
//     getItem: jest.fn(),
//     setItem: jest.fn(),
//     removeItem: jest.fn(),
//     clear: jest.fn(),
//   },
//   writable: true,
// })

// Mock sessionStorage
// Object.defineProperty(window, 'sessionStorage', {
//   value: {
//     getItem: jest.fn(),
//     setItem: jest.fn(),
//     removeItem: jest.fn(),
//     clear: jest.fn(),
//   },
//   writable: true,
// })

// Mock IntersectionObserver for scroll-based components
// global.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
//   observe: jest.fn(),
//   unobserve: jest.fn(),
//   disconnect: jest.fn(),
//   root: null,
//   rootMargin: '',
//   thresholds: [],
// }))

// Mock fetch for API calls (alternative to MSW)
// global.fetch = jest.fn()

// Mock window.scrollTo for navigation tests
// window.scrollTo = jest.fn()

/**
 * ==========================================
 * TESTING UTILITIES & COOL PATTERNS
 * ==========================================
 * 
 * 1. Custom Render Function:
 *    Create a custom render that includes providers:
 *    
 *    const customRender = (ui, options) =>
 *      render(ui, { wrapper: ThemeProvider, ...options })
 * 
 * 2. Mock Data Factories:
 *    Create functions that generate test data:
 *    
 *    const createMockProject = (overrides = {}) => ({
 *      id: 'test-id',
 *      title: 'Test Project',
 *      ...overrides
 *    })
 * 
 * 3. Media Query Testing:
 *    Test responsive behavior:
 *    
 *    window.matchMedia.mockImplementation(query => ({
 *      matches: query === '(max-width: 768px)',
 *      ...defaultMatchMedia
 *    }))
 * 
 * 4. Router Testing:
 *    Test navigation:
 *    
 *    import mockRouter from 'next-router-mock'
 *    mockRouter.push('/test-route')
 *    expect(mockRouter.asPath).toBe('/test-route')
 * 
 * 5. Async Testing Pattern:
 *    
 *    await waitFor(() => {
 *      expect(screen.getByText('Loading...')).not.toBeInTheDocument()
 *    })
 */
