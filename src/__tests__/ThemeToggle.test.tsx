import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ThemeToggle from '../components/ThemeToggle'

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 0
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks()
    
    // Reset document classes
    document.documentElement.className = ''
    
    // Reset localStorage mock to return null by default
    ;(localStorageMock.getItem as jest.Mock).mockReturnValue(null)
  })

  it('renders the theme toggle button', async () => {
    render(<ThemeToggle />)
    
    await waitFor(() => {
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      expect(button).toHaveClass('p-2', 'rounded-lg')
    })
  })

  it('starts with light theme by default', async () => {
    ;(localStorageMock.getItem as jest.Mock).mockReturnValue(null)
    
    render(<ThemeToggle />)
    
    // Wait for component to mount and show correct icon
    await waitFor(() => {
      const moonIcon = screen.getByTestId('moon-icon')
      expect(moonIcon).toBeInTheDocument()
    })
  })

  it('starts with saved dark theme from localStorage', async () => {
    ;(localStorageMock.getItem as jest.Mock).mockReturnValue('dark')
    
    render(<ThemeToggle />)
    
    // Wait for component to mount and show correct icon
    await waitFor(() => {
      const sunIcon = screen.getByTestId('sun-icon')
      expect(sunIcon).toBeInTheDocument()
    })
  })

  it('toggles theme when clicked', async () => {
    ;(localStorageMock.getItem as jest.Mock).mockReturnValue(null)
    
    render(<ThemeToggle />)
    
    // Wait for initial render
    await waitFor(() => {
      expect(screen.getByTestId('moon-icon')).toBeInTheDocument()
    })

    const button = screen.getByRole('button')
    
    // Click to toggle to dark mode
    fireEvent.click(button)
    
    // Wait for state update
    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark')
      expect(document.documentElement.classList.contains('dark')).toBe(true)
    })
  })

  it('applies correct styling classes', async () => {
    render(<ThemeToggle />)
    
    await waitFor(() => {
      const button = screen.getByRole('button')
      expect(button).toHaveClass(
        'bg-stone-200',
        'dark:bg-gray-700',
        'hover:bg-stone-300',
        'dark:hover:bg-gray-600'
      )
    })
  })

  it('respects system preference when no saved theme', async () => {
    // Mock system preference for dark mode
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))

    ;(localStorageMock.getItem as jest.Mock).mockReturnValue(null)
    
    render(<ThemeToggle />)
    
    await waitFor(() => {
      // Should show sun icon since system prefers dark
      expect(screen.getByTestId('sun-icon')).toBeInTheDocument()
    })
  })
})
