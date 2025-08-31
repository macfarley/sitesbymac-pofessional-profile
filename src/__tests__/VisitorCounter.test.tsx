import { render, screen, waitFor } from '@testing-library/react'
import VisitorCounter from '../components/VisitorCounter'

// Mock localStorage
const localStorageMock = (() => {
  let store: { [key: string]: string } = {}
  
  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key]
    }),
    clear: jest.fn(() => {
      store = {}
    }),
    length: 0,
    key: jest.fn()
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true
})

describe('VisitorCounter Component', () => {
  beforeEach(() => {
    localStorageMock.clear()
    jest.clearAllMocks()
  })

  it('renders visitor counter with default retro style', async () => {
    render(<VisitorCounter />)
    
    await waitFor(() => {
      expect(screen.getByText(/visitors/i)).toBeInTheDocument()
    })
  })

  it('displays visitor count for new visitor', async () => {
    localStorageMock.getItem.mockReturnValue(null)
    
    render(<VisitorCounter />)
    
    await waitFor(() => {
      const counterElement = screen.getByText(/visitors/i)
      expect(counterElement).toBeInTheDocument()
    })
    
    // Should store visitor data for new visitor
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'sitesbymac_visitor_data',
      expect.any(String)
    )
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'sitesbymac_visitor_count',
      expect.any(String)
    )
  })

  it('does not increment count for returning visitor', async () => {
    localStorageMock.getItem.mockReturnValue('existing-session-id')
    
    render(<VisitorCounter />)
    
    await waitFor(() => {
      expect(screen.getByText(/visitors/i)).toBeInTheDocument()
    })
    
    // Should not create new visitor data for returning visitor
    expect(localStorageMock.setItem).not.toHaveBeenCalledWith(
      'sitesbymac_visitor_data',
      expect.any(String)
    )
  })

  it('applies custom className when provided', () => {
    const customClass = 'custom-counter-class'
    const { container } = render(<VisitorCounter className={customClass} />)
    
    const counterElement = container.firstChild as HTMLElement
    expect(counterElement).toHaveClass(customClass)
  })

  it('shows loading state initially', () => {
    render(<VisitorCounter />)
    
    // Component should show some content while loading
    expect(screen.getByText(/visitors/i)).toBeInTheDocument()
  })

  it('handles localStorage errors gracefully', async () => {
    // Mock localStorage to throw an error
    localStorageMock.getItem.mockImplementation(() => {
      throw new Error('localStorage not available')
    })
    
    render(<VisitorCounter />)
    
    await waitFor(() => {
      expect(screen.getByText(/visitors/i)).toBeInTheDocument()
    })
    
    // Should not crash and still render
    expect(screen.getByText(/visitors/i)).toBeInTheDocument()
  })

  it('renders with modern style when specified', async () => {
    render(<VisitorCounter style="modern" />)
    
    await waitFor(() => {
      expect(screen.getByText(/visitors/i)).toBeInTheDocument()
    })
  })

  it('renders with minimal style when specified', async () => {
    render(<VisitorCounter style="minimal" />)
    
    await waitFor(() => {
      expect(screen.getByText(/visitors/i)).toBeInTheDocument()
    })
  })

  it('supports animated counting when enabled', async () => {
    render(<VisitorCounter animated={true} />)
    
    await waitFor(() => {
      expect(screen.getByText(/visitors/i)).toBeInTheDocument()
    })
  })

  it('supports non-animated counting when disabled', async () => {
    render(<VisitorCounter animated={false} />)
    
    await waitFor(() => {
      expect(screen.getByText(/visitors/i)).toBeInTheDocument()
    })
  })

  it('generates unique session IDs for different visits', () => {
    localStorageMock.getItem.mockReturnValue(null)
    
    // Render first time
    const { unmount } = render(<VisitorCounter />)
    
    // Get the first session ID from visitor data
    const firstCall = localStorageMock.setItem.mock.calls.find(
      call => call[0] === 'sitesbymac_visitor_data'
    )
    const firstVisitorData = firstCall?.[1] ? JSON.parse(firstCall[1]) : null
    const firstSessionId = firstVisitorData?.sessionId
    
    unmount()
    jest.clearAllMocks()
    localStorageMock.getItem.mockReturnValue(null)
    
    // Render second time
    render(<VisitorCounter />)
    
    // Get the second session ID from visitor data
    const secondCall = localStorageMock.setItem.mock.calls.find(
      call => call[0] === 'sitesbymac_visitor_data'
    )
    const secondVisitorData = secondCall?.[1] ? JSON.parse(secondCall[1]) : null
    const secondSessionId = secondVisitorData?.sessionId
    
    // Session IDs should be different
    expect(firstSessionId).toBeDefined()
    expect(secondSessionId).toBeDefined()
    expect(firstSessionId).not.toBe(secondSessionId)
  })
})
