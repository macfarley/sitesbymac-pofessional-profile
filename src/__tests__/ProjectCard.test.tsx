import { render, screen } from '@testing-library/react'
import ProjectCard from '../components/ProjectCard'
import { Project } from '../types/project'

// Mock project data for testing
const mockProject: Project = {
  id: 'test-project',
  title: 'Test Project',
  description: 'This is a test project for unit testing',
  technologies: ['React', 'TypeScript', 'Jest'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/test/repo',
  imageUrl: '/test-image.png',
  completedDate: '2024-01-01',
  featured: true
}

const mockProjectWithoutOptionalFields: Project = {
  id: 'minimal-project',
  title: 'Minimal Project',
  description: 'A minimal project without optional fields',
  technologies: ['JavaScript'],
  liveUrl: 'https://minimal.com',
  completedDate: '2024-01-01'
}

describe('ProjectCard Component', () => {
  it('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} />)
    
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('This is a test project for unit testing')).toBeInTheDocument()
  })

  it('displays technology tags', () => {
    render(<ProjectCard project={mockProject} />)
    
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Jest')).toBeInTheDocument()
  })

  it('renders project image when imageUrl is provided', () => {
    render(<ProjectCard project={mockProject} />)
    
    const image = screen.getByAltText('Test Project screenshot')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src')
  })

  it('does not render image when imageUrl is not provided', () => {
    render(<ProjectCard project={mockProjectWithoutOptionalFields} />)
    
    const image = screen.queryByAltText(/screenshot/)
    expect(image).not.toBeInTheDocument()
  })

  it('renders View Details link with correct href', () => {
    render(<ProjectCard project={mockProject} />)
    
    const detailsLink = screen.getByRole('link', { name: /view details/i })
    expect(detailsLink).toBeInTheDocument()
    expect(detailsLink).toHaveAttribute('href', '/projects/test-project')
  })

  it('renders Live Demo link with correct attributes', () => {
    render(<ProjectCard project={mockProject} />)
    
    const liveLink = screen.getByRole('link', { name: /live demo/i })
    expect(liveLink).toBeInTheDocument()
    expect(liveLink).toHaveAttribute('href', 'https://example.com')
    expect(liveLink).toHaveAttribute('target', '_blank')
    expect(liveLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders GitHub Repository link when githubUrl is provided', () => {
    render(<ProjectCard project={mockProject} />)
    
    const githubLink = screen.getByRole('link', { name: /github repository/i })
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test/repo')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('does not render GitHub Repository link when githubUrl is not provided', () => {
    render(<ProjectCard project={mockProjectWithoutOptionalFields} />)
    
    const githubLink = screen.queryByRole('link', { name: /github repository/i })
    expect(githubLink).not.toBeInTheDocument()
  })

  it('renders GitHub logo in GitHub link', () => {
    render(<ProjectCard project={mockProject} />)
    
    const githubLogo = screen.getByAltText('GitHub Logo')
    expect(githubLogo).toBeInTheDocument()
  })

  it('applies custom className when provided', () => {
    const customClass = 'custom-test-class'
    const { container } = render(<ProjectCard project={mockProject} className={customClass} />)
    
    const cardElement = container.firstChild as HTMLElement
    expect(cardElement).toHaveClass(customClass)
  })

  it('has proper hover and accessibility classes', () => {
    const { container } = render(<ProjectCard project={mockProject} />)
    
    const cardElement = container.firstChild as HTMLElement
    expect(cardElement).toHaveClass('hover:scale-105')
    expect(cardElement).toHaveClass('transition-transform')
  })

  it('displays all technology tags for a project with many technologies', () => {
    const projectWithManyTechs: Project = {
      ...mockProject,
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Jest', 'Tailwind CSS']
    }
    
    render(<ProjectCard project={projectWithManyTechs} />)
    
    projectWithManyTechs.technologies.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument()
    })
  })
})
