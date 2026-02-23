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
      name: /hi, i'm mac mccoy/i 
    })
    expect(heading).toBeInTheDocument()
  })

  it('displays the McAxl mascot', () => {
    render(<Home />)
    
    const mascot = screen.getByAltText('McAxl - SitesByMac.dev mascot')
    expect(mascot).toBeInTheDocument()
  })

  it('shows the technologies section', () => {
    render(<Home />)
    
    const techHeading = screen.getByRole('heading', { 
      name: /technologies/i 
    })
    expect(techHeading).toBeInTheDocument()
    
    // Check for specific technologies
    expect(screen.getByText('MERN Stack')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
    expect(screen.getByText('Django')).toBeInTheDocument()
  })

  it('shows the tools & platforms section', () => {
    render(<Home />)
    
    const toolsHeading = screen.getByRole('heading', { 
      name: /tools & platforms/i 
    })
    expect(toolsHeading).toBeInTheDocument()
    
    // Check for specific tools
    expect(screen.getByText('Postman')).toBeInTheDocument()
    expect(screen.getByText('Heroku')).toBeInTheDocument()
    expect(screen.getByText('Vercel')).toBeInTheDocument()
  })

  it('has call-to-action buttons', () => {
    render(<Home />)
    
    const viewWorkButton = screen.getByRole('link', { 
      name: /navigate to portfolio projects section/i 
    })
    const contactButton = screen.getByRole('link', { 
      name: /send email to travis@sitesbymac.dev/i 
    })
    
    expect(viewWorkButton).toBeInTheDocument()
    expect(contactButton).toBeInTheDocument()
    expect(contactButton).toHaveAttribute('href', 'mailto:travis@sitesbymac.dev')
    expect(viewWorkButton).toHaveAttribute('href', '#projects')
  })

  it('renders the projects section', () => {
    render(<Home />)
    
    const projectsGrid = screen.getByTestId('projects-grid')
    expect(projectsGrid).toBeInTheDocument()
  })

  it('has technology links that open in new tabs', () => {
    render(<Home />)
    
    // Check MERN Stack link
    const mernLink = screen.getByRole('link', { 
      name: /open mern stack documentation in new tab/i 
    })
    expect(mernLink).toBeInTheDocument()
    expect(mernLink).toHaveAttribute('href', 'https://react.dev')
    expect(mernLink).toHaveAttribute('target', '_blank')
    expect(mernLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has tools links that open in new tabs', () => {
    render(<Home />)
    
    // Check Postman link
    const postmanLink = screen.getByRole('link', { 
      name: /open postman documentation in new tab/i 
    })
    expect(postmanLink).toBeInTheDocument()
    expect(postmanLink).toHaveAttribute('href', 'https://learning.postman.com/docs/')
    expect(postmanLink).toHaveAttribute('target', '_blank')
  })

  it('does not render legacy page-level footer', () => {
    render(<Home />)

    expect(screen.queryByText(/Powered by McAxl™/)).not.toBeInTheDocument()
  })
})
