import { render, screen, fireEvent } from '@testing-library/react'
import Navigation from '../components/Navigation'

// Mock the ThemeToggle component
jest.mock('../components/ThemeToggle', () => {
  return function MockThemeToggle() {
    return <div data-testid="theme-toggle">Theme Toggle Mock</div>
  }
})

describe('Navigation Component', () => {
  it('renders the brand logo/link', () => {
    render(<Navigation />)
    
    const brandLink = screen.getByRole('link', { name: /sites by mac/i })
    expect(brandLink).toBeInTheDocument()
    expect(brandLink).toHaveAttribute('href', '/')
  })

  it('renders desktop navigation links', () => {
    render(<Navigation />)
    
    expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about me/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /mcaxl/i })).toBeInTheDocument()
  })

  it('renders theme toggle component', () => {
    render(<Navigation />)
    
    const themeToggle = screen.getByTestId('theme-toggle')
    expect(themeToggle).toBeInTheDocument()
  })

  it('shows contact button and toggles dropdown', () => {
    render(<Navigation />)
    
    const contactButton = screen.getByRole('button', { name: /contact/i })
    expect(contactButton).toBeInTheDocument()
    expect(contactButton).toHaveAttribute('aria-expanded', 'false')
    
    // Click to open contact dropdown
    fireEvent.click(contactButton)
    expect(contactButton).toHaveAttribute('aria-expanded', 'true')
    
    // Check contact info appears
    expect(screen.getByRole('link', { name: /visit linkedin profile/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /visit github repositories/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /send email to mac@sitesbymac.dev/i })).toBeInTheDocument()
  })

  it('shows mobile menu button and toggles mobile navigation', () => {
    render(<Navigation />)
    
    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i })
    expect(menuButton).toBeInTheDocument()
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    
    // Click to open mobile menu
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    
    // Mobile navigation should appear with all links
    const mobileLinks = screen.getAllByRole('link', { name: /home/i })
    expect(mobileLinks.length).toBeGreaterThan(1) // Desktop + mobile versions
  })

  it('has correct navigation link attributes', () => {
    render(<Navigation />)
    
    const homeLink = screen.getByRole('link', { name: /^home$/i })
    expect(homeLink).toHaveAttribute('href', '/')
    
    const aboutLink = screen.getByRole('link', { name: /about me/i })
    expect(aboutLink).toHaveAttribute('href', '/about')
    
    const projectsLink = screen.getByRole('link', { name: /projects/i })
    expect(projectsLink).toHaveAttribute('href', '/projects')
  })

  it('contact dropdown has external links with proper attributes', () => {
    render(<Navigation />)
    
    // Open contact dropdown
    const contactButton = screen.getByRole('button', { name: /contact/i })
    fireEvent.click(contactButton)
    
    const linkedinLink = screen.getByRole('link', { name: /visit linkedin profile/i })
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
    
    const githubLink = screen.getByRole('link', { name: /visit github repositories/i })
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('displays profile image in contact dropdown', () => {
    render(<Navigation />)
    
    // Open contact dropdown
    const contactButton = screen.getByRole('button', { name: /contact/i })
    fireEvent.click(contactButton)
    
    const profileImage = screen.getByAltText('Travis McCoy')
    expect(profileImage).toBeInTheDocument()
  })

  it('closes contact dropdown when clicked again', () => {
    render(<Navigation />)
    
    const contactButton = screen.getByRole('button', { name: /contact/i })
    
    // Open dropdown
    fireEvent.click(contactButton)
    expect(contactButton).toHaveAttribute('aria-expanded', 'true')
    
    // Close dropdown
    fireEvent.click(contactButton)
    expect(contactButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when clicked again', () => {
    render(<Navigation />)
    
    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i })
    
    // Open menu
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    
    // Close menu
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
