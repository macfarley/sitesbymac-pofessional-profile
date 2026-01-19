import { render, screen } from '@testing-library/react'
import Projects from '../app/projects/page'

// Mock the ProjectCard component
jest.mock('../components/ProjectCard', () => {
  return function MockProjectCard({ project }: { project: { id: string; title: string } }) {
    return <div data-testid={`project-card-${project.id}`}>{project.title}</div>
  }
})

// Mock the projects data
jest.mock('../data/projects', () => ({
  projects: [
    { id: 'test-1', title: 'Test Project 1' },
    { id: 'test-2', title: 'Test Project 2' }
  ]
}))

describe('Projects Page', () => {
  it('renders without crashing', () => {
    render(<Projects />)
    expect(document.body).toBeInTheDocument()
  })

  it('displays page heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('My Projects')).toBeInTheDocument()
  })

  it('displays page description', () => {
    render(<Projects />)
    expect(screen.getByText(/a showcase of web applications/i)).toBeInTheDocument()
  })

  it('has proper page structure', () => {
    render(<Projects />)
    const container = screen.getByText('My Projects').closest('div')?.parentElement?.parentElement
    expect(container).toHaveClass('min-h-screen')
  })

  it('renders projects grid', () => {
    render(<Projects />)
    const grid = screen.getByText('My Projects').closest('div')?.parentElement?.querySelector('.grid')
    expect(grid).toBeInTheDocument()
    expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2')
  })

  it('renders project cards', () => {
    render(<Projects />)
    expect(screen.getByTestId('project-card-test-1')).toBeInTheDocument()
    expect(screen.getByTestId('project-card-test-2')).toBeInTheDocument()
  })
})
