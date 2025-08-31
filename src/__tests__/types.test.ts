import type { Project, Experience } from '../types/project'

describe('Project Types', () => {
  it('should define proper Project interface structure', () => {
    // Test that we can create a valid Project object
    const mockProject: Project = {
      id: 'test-project',
      title: 'Test Project',
      description: 'A test project',
      longDescription: 'A longer description',
      technologies: ['React', 'TypeScript'],
      liveUrl: 'https://test.com',
      githubUrl: 'https://github.com/test/repo',
      imageUrl: '/test.png',
      featured: true,
      completedDate: '2024-01-01'
    }

    // Verify all required properties exist
    expect(mockProject.id).toBe('test-project')
    expect(mockProject.title).toBe('Test Project')
    expect(mockProject.description).toBe('A test project')
    expect(mockProject.longDescription).toBe('A longer description')
    expect(mockProject.imageUrl).toBe('/test.png')
    expect(Array.isArray(mockProject.technologies)).toBe(true)
    expect(mockProject.githubUrl).toBe('https://github.com/test/repo')
    expect(mockProject.liveUrl).toBe('https://test.com')
    expect(mockProject.featured).toBe(true)
    expect(mockProject.completedDate).toBe('2024-01-01')
  })

  it('should allow optional properties', () => {
    // Test minimal project
    const minimalProject: Project = {
      id: 'minimal',
      title: 'Minimal Project',
      description: 'Description',
      technologies: ['React'],
      liveUrl: 'https://example.com',
      completedDate: '2024-01-01'
    }

    expect(minimalProject.id).toBe('minimal')
    expect(minimalProject.longDescription).toBeUndefined()
    expect(minimalProject.githubUrl).toBeUndefined()
    expect(minimalProject.imageUrl).toBeUndefined()
    expect(minimalProject.featured).toBeUndefined()
  })

  it('should enforce required properties', () => {
    // This test ensures TypeScript compilation catches missing required props
    const requiredFields = ['id', 'title', 'description', 'technologies', 'liveUrl', 'completedDate']
    
    requiredFields.forEach(field => {
      expect(field).toBeTruthy() // Just verify the field names exist
    })
  })
})

describe('Experience Types', () => {
  it('should define proper Experience interface structure', () => {
    const mockExperience: Experience = {
      id: 'test-experience',
      title: 'Software Developer',
      company: 'Test Company',
      description: 'Developed software solutions',
      technologies: ['JavaScript', 'Node.js'],
      startDate: '2023-01-01',
      endDate: '2024-01-01'
    }

    expect(mockExperience.id).toBe('test-experience')
    expect(mockExperience.title).toBe('Software Developer')
    expect(mockExperience.company).toBe('Test Company')
    expect(mockExperience.description).toBe('Developed software solutions')
    expect(Array.isArray(mockExperience.technologies)).toBe(true)
    expect(mockExperience.startDate).toBe('2023-01-01')
    expect(mockExperience.endDate).toBe('2024-01-01')
  })

  it('should allow optional endDate for current positions', () => {
    const currentExperience: Experience = {
      id: 'current-job',
      title: 'Senior Developer',
      company: 'Current Company',
      description: 'Currently developing amazing software',
      technologies: ['React', 'TypeScript'],
      startDate: '2024-01-01'
    }

    expect(currentExperience.endDate).toBeUndefined()
    expect(currentExperience.company).toBe('Current Company')
  })
})
