import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react'
import ThemeToggle from '../components/ThemeToggle'

// Mock localStorage
const localStorageMock: Storage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 0
};

Object.defineProperty(localStorageMock, 'length', {
  get: jest.fn(() => 0),
});

global.localStorage = localStorageMock;

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks()
    
    // Reset document classes
    document.documentElement.className = ''
  })

  it('renders the theme toggle button', () => {
    render(<ThemeToggle />)
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('p-2', 'rounded-lg')
  })

  it('starts with light theme by default', () => {
    localStorageMock.getItem.mockReturnValue(null)
    
    render(<ThemeToggle />)
    
    // Should show moon icon (for switching to dark mode)
    const moonIcon = screen.getByTestId('moon-icon')
    expect(moonIcon).toBeInTheDocument()
  })

  it('starts with saved theme from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('dark')
    
    render(<ThemeToggle />)
    
    // Should show sun icon (for switching to light mode)
    const sunIcon = screen.getByTestId('sun-icon')
    expect(sunIcon).toBeInTheDocument()
  })

  it('toggles theme when clicked', () => {
    localStorageMock.getItem.mockReturnValue(null)
    
    render(<ThemeToggle />)
    
    const button = screen.getByRole('button')
    
    // Click to toggle to dark mode
    fireEvent.click(button)
    
    // Should save dark theme to localStorage
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark')
    
    // Document should have dark class
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('applies correct hover classes', () => {
    render(<ThemeToggle />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass(
      'hover:bg-amber-100',
      'dark:hover:bg-gray-700'
    )
  })
})
