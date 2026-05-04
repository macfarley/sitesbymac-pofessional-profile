import { render, screen } from '@testing-library/react'
import Home from '../app/page'

// Mock the ProjectsGrid component since it might have complex dependencies
jest.mock('../components/ProjectsGrid', () => {
  return function MockProjectsGrid() {
    return <div data-testid="projects-grid">Projects Grid Mock</div>
  }
})

// Mock VisitorCounter component
jest.mock('../components/VisitorCounter', () => {
  return function MockVisitorCounter() {
    return <div data-testid="visitor-counter">Visitor Counter Mock</div>
  }
})

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', { 
      name: /full-service technomancer/i 
    })
    expect(heading).toBeInTheDocument()
  })

  it('displays the McAxl mascot', () => {
    render(<Home />)
    
    const mascot = screen.getByAltText('McAxl - SitesByMac.dev mascot')
    expect(mascot).toBeInTheDocument()
  })

  it('shows the services section', () => {
    render(<Home />)
    
    const servicesHeading = screen.getByRole('heading', { 
      name: /what i do/i 
    })
    expect(servicesHeading).toBeInTheDocument()
    
    expect(screen.getByText('Digital Design')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Technical Writing')).toBeInTheDocument()
    expect(screen.getAllByText('Digital Marketing').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Fractional CTO').length).toBeGreaterThan(0)
    expect(screen.getByText('White-Glove Support')).toBeInTheDocument()
  })

  it('shows the packages section', () => {
    render(<Home />)
    
    const packagesHeading = screen.getByRole('heading', { 
      name: /packages/i 
    })
    expect(packagesHeading).toBeInTheDocument()
    
    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('Growth')).toBeInTheDocument()
    expect(screen.getByText('Operations')).toBeInTheDocument()
  })

  it('has call-to-action buttons', () => {
    render(<Home />)
    
    const servicesButton = screen.getByRole('link', { 
      name: /navigate to the services section/i 
    })
    const contactButton = screen.getByRole('link', { 
      name: /send email to mac@sitesbymac.dev$/i 
    })
    
    expect(servicesButton).toBeInTheDocument()
    expect(contactButton).toBeInTheDocument()
    expect(contactButton).toHaveAttribute('href', 'mailto:mac@sitesbymac.dev')
    expect(servicesButton).toHaveAttribute('href', '#services')
  })

  it('renders the projects section', () => {
    render(<Home />)
    
    const projectsGrid = screen.getByTestId('projects-grid')
    expect(projectsGrid).toBeInTheDocument()
  })

  it('shows the how i work section', () => {
    render(<Home />)
    
    const howHeading = screen.getByRole('heading', {
      name: /how i work/i
    })
    expect(howHeading).toBeInTheDocument()
    expect(screen.getByText('Discovery')).toBeInTheDocument()
    expect(screen.getByText('Ongoing Support')).toBeInTheDocument()
  })

  it('does not render legacy page-level footer', () => {
    render(<Home />)

    expect(screen.queryByText(/Powered by McAxl™/)).not.toBeInTheDocument()
  })
})
