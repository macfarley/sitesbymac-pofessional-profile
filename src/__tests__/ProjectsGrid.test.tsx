import { render, screen } from '@testing-library/react'
import ProjectsGrid from '../components/ProjectsGrid'

// Mock ProjectCard component
jest.mock('../components/ProjectCard', () => {
  return function MockProjectCard({ project }: { project: { id: string; title: string; description: string } }) {
    return (
      <div data-testid={`project-card-${project.id}`}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    )
  }
})

// Mock projects data
jest.mock('../data/projects', () => ({
  projects: [
    {
      id: 'test-project-1',
      title: 'Test Project 1',
      description: 'First test project',
      technologies: ['React'],
      liveUrl: 'https://example.com',
      completedDate: '2024-01-01'
    },
    {
      id: 'test-project-2',
      title: 'Test Project 2',
      description: 'Second test project',
      technologies: ['Vue'],
      liveUrl: 'https://example2.com',
      completedDate: '2024-02-01'
    }
  ]
}))

describe('ProjectsGrid Component', () => {
  it('renders the featured projects heading', () => {
    render(<ProjectsGrid />)
    expect(screen.getByText('Featured Projects')).toBeInTheDocument()
  })

  it('renders project cards for each project', () => {
    render(<ProjectsGrid />)
    
    expect(screen.getByTestId('project-card-test-project-1')).toBeInTheDocument()
    expect(screen.getByTestId('project-card-test-project-2')).toBeInTheDocument()
  })

  it('displays project titles and descriptions', () => {
    render(<ProjectsGrid />)
    
    expect(screen.getByText('Test Project 1')).toBeInTheDocument()
    expect(screen.getByText('First test project')).toBeInTheDocument()
    expect(screen.getByText('Test Project 2')).toBeInTheDocument()
    expect(screen.getByText('Second test project')).toBeInTheDocument()
  })

  it('has proper grid layout classes', () => {
    const { container } = render(<ProjectsGrid />)
    
    const gridContainer = container.querySelector('.grid')
    expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-2')
  })

  it('has proper section styling', () => {
    const { container } = render(<ProjectsGrid />)
    
    const section = container.querySelector('section')
    expect(section).toHaveClass('py-16', 'px-4', 'bg-stone-100', 'dark:bg-gray-900')
  })
})
