import { render, screen } from '@testing-library/react'
import McAxlPage from '../app/mcaxl/page'

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />
  }
})

describe('McAxl Page', () => {
  it('renders without crashing', () => {
    render(<McAxlPage />)
    
    // Check for presence of main content
    expect(document.body).toBeInTheDocument()
  })

  it('displays main heading', () => {
    render(<McAxlPage />)
    
    // Look for main heading content
    const headings = screen.getAllByRole('heading')
    expect(headings.length).toBeGreaterThan(0)
  })

  it('has proper page structure', () => {
    render(<McAxlPage />)
    
    // Should have some content rendered
    expect(document.body.textContent).toBeTruthy()
  })

  it('renders page content', () => {
    render(<McAxlPage />)
    
    // Basic smoke test - page should render something
    const content = document.body
    expect(content).toBeInTheDocument()
    expect(content.children.length).toBeGreaterThan(0)
  })
})
