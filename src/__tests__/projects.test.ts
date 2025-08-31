import { projects, getFeaturedProjects, getProjectById } from '../data/projects'

describe('Projects Data', () => {
  it('exports an array of projects', () => {
    expect(Array.isArray(projects)).toBe(true)
    expect(projects.length).toBeGreaterThan(0)
  })

  it('each project has required properties', () => {
    projects.forEach(project => {
      expect(project).toHaveProperty('id')
      expect(project).toHaveProperty('title')
      expect(project).toHaveProperty('description')
      expect(project).toHaveProperty('technologies')
      expect(project).toHaveProperty('liveUrl')
      expect(project).toHaveProperty('completedDate')
      
      expect(typeof project.id).toBe('string')
      expect(typeof project.title).toBe('string')
      expect(typeof project.description).toBe('string')
      expect(Array.isArray(project.technologies)).toBe(true)
      expect(typeof project.liveUrl).toBe('string')
      expect(typeof project.completedDate).toBe('string')
    })
  })

  it('project IDs are unique', () => {
    const ids = projects.map(p => p.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('featured projects are properly marked', () => {
    const featuredProjects = projects.filter(p => p.featured)
    expect(featuredProjects.length).toBeGreaterThan(0)
  })

  it('StirCraft project is included and properly configured', () => {
    const stircraft = projects.find(p => p.id === 'stircraft')
    expect(stircraft).toBeDefined()
    expect(stircraft?.title).toContain('StirCraft')
    expect(stircraft?.technologies).toContain('Django')
    expect(stircraft?.technologies).toContain('Python')
    expect(stircraft?.technologies).toContain('PostgreSQL')
    expect(stircraft?.featured).toBe(true)
  })

  describe('getFeaturedProjects function', () => {
    it('returns only featured projects', () => {
      const featured = getFeaturedProjects()
      expect(Array.isArray(featured)).toBe(true)
      featured.forEach(project => {
        expect(project.featured).toBe(true)
      })
    })

    it('returns a subset of all projects', () => {
      const featured = getFeaturedProjects()
      expect(featured.length).toBeLessThanOrEqual(projects.length)
    })
  })

  describe('getProjectById function', () => {
    it('returns correct project when ID exists', () => {
      const firstProject = projects[0]
      const foundProject = getProjectById(firstProject.id)
      expect(foundProject).toEqual(firstProject)
    })

    it('returns undefined when ID does not exist', () => {
      const result = getProjectById('non-existent-id')
      expect(result).toBeUndefined()
    })

    it('returns StirCraft project when searching for stircraft', () => {
      const stircraft = getProjectById('stircraft')
      expect(stircraft).toBeDefined()
      expect(stircraft?.title).toContain('StirCraft')
    })
  })

  it('projects have valid technology arrays', () => {
    projects.forEach(project => {
      expect(project.technologies.length).toBeGreaterThan(0)
      project.technologies.forEach(tech => {
        expect(typeof tech).toBe('string')
        expect(tech.length).toBeGreaterThan(0)
      })
    })
  })

  it('projects have valid URLs', () => {
    projects.forEach(project => {
      expect(project.liveUrl).toMatch(/^https?:\/\//)
      if (project.githubUrl) {
        expect(project.githubUrl).toMatch(/^https?:\/\//)
      }
    })
  })

  it('completion dates are valid ISO strings', () => {
    projects.forEach(project => {
      const date = new Date(project.completedDate)
      expect(date).toBeInstanceOf(Date)
      expect(isNaN(date.getTime())).toBe(false)
    })
  })
})
