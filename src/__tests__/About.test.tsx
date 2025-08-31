import { render, screen } from '@testing-library/react'
import About from '../app/about/page'

// Mock the PDFDownloadButton component
jest.mock('../components/PDFDownloadButton', () => {
  return function MockPDFDownloadButton() {
    return <button data-testid="pdf-download-button">Download Resume PDF</button>
  }
})

describe('About Page', () => {
  it('renders without crashing', () => {
    render(<About />)
    // Look for any content instead of main role
    expect(document.body).toContainElement(screen.getByText(/About Travis M. McCoy/i))
  })

  it('displays professional summary section', () => {
    render(<About />)
    expect(screen.getByText(/professional summary/i)).toBeInTheDocument()
  })

  it('includes PDF download button', () => {
    render(<About />)
    expect(screen.getByTestId('pdf-download-button')).toBeInTheDocument()
  })

  it('displays technical skills section', () => {
    render(<About />)
    expect(screen.getByText(/technical skills/i)).toBeInTheDocument()
  })

  it('includes StirCraft team leadership experience', () => {
    render(<About />)
    const stirCraftElements = screen.getAllByText(/stircraft/i)
    expect(stirCraftElements.length).toBeGreaterThan(0)
    
    const teamLeadElements = screen.getAllByText(/team lead/i)
    expect(teamLeadElements.length).toBeGreaterThan(0)
  })

  it('shows Django and Python skills', () => {
    render(<About />)
    const djangoElements = screen.getAllByText(/django/i)
    expect(djangoElements.length).toBeGreaterThan(0)
    
    const pythonElements = screen.getAllByText(/python/i)
    expect(pythonElements.length).toBeGreaterThan(0)
  })

  it('displays General Assembly education', () => {
    render(<About />)
    const gaElements = screen.getAllByText(/general assembly/i)
    expect(gaElements.length).toBeGreaterThan(0)
  })

  it('has contact information', () => {
    render(<About />)
    expect(screen.getByText(/mac@sitesbymac.dev/)).toBeInTheDocument()
    expect(screen.getByText(/\(937\) 467-9312/)).toBeInTheDocument()
  })

  it('displays multiple skill categories', () => {
    render(<About />)
    expect(screen.getByText(/Languages & Frameworks/i)).toBeInTheDocument()
  })
})
