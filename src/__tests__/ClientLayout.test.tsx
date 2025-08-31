import { render, screen } from '@testing-library/react'
import ClientLayout from '../components/ClientLayout'

// Mock Navigation component
jest.mock('../components/Navigation', () => {
  return function MockNavigation() {
    return <nav data-testid="navigation">Navigation Mock</nav>
  }
})

// Mock ThemeProvider
jest.mock('../contexts/ThemeContext', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="theme-provider">{children}</div>
  )
}))

describe('ClientLayout Component', () => {
  it('renders navigation component', () => {
    render(
      <ClientLayout>
        <div>Test Content</div>
      </ClientLayout>
    )
    
    expect(screen.getByTestId('navigation')).toBeInTheDocument()
  })

  it('renders children content', () => {
    render(
      <ClientLayout>
        <div>Test Content</div>
      </ClientLayout>
    )
    
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('wraps content in ThemeProvider', () => {
    render(
      <ClientLayout>
        <div>Test Content</div>
      </ClientLayout>
    )
    
    expect(screen.getByTestId('theme-provider')).toBeInTheDocument()
  })

  it('renders navigation before children', () => {
    render(
      <ClientLayout>
        <div>Test Content</div>
      </ClientLayout>
    )
    
    const navigation = screen.getByTestId('navigation')
    const content = screen.getByText('Test Content')
    
    // Navigation should come before content in DOM order
    expect(navigation.compareDocumentPosition(content) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })
})
