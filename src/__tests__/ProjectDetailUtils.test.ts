/**
 * Tests for generateStaticParams and generateMetadata functions from project detail page
 * These are the functions we can test without dealing with the complex async component
 */

import { projects } from '../data/projects'

// Import the functions directly
import { generateStaticParams, generateMetadata } from '../app/projects/[slug]/page'

describe('Project Detail Page Utils', () => {
  describe('generateStaticParams', () => {
    it('returns all project slugs for static generation', async () => {
      const params = await generateStaticParams()
      
      expect(params).toHaveLength(projects.length)
      expect(params[0]).toHaveProperty('slug')
      
      // Check that all project IDs are included
      const slugs = params.map(p => p.slug)
      projects.forEach(project => {
        expect(slugs).toContain(project.id)
      })
    })

    it('generates correct slug format', async () => {
      const params = await generateStaticParams()
      
      params.forEach(param => {
        expect(param.slug).toBeTruthy()
        expect(typeof param.slug).toBe('string')
      })
    })
  })

  describe('generateMetadata', () => {
    it('returns correct metadata for valid project', async () => {
      const testProject = projects[0]
      const params = Promise.resolve({ slug: testProject.id })
      
      const metadata = await generateMetadata({ params })
      
      expect(metadata.title).toBe(testProject.title)
      expect(metadata.description).toBe(testProject.description)
    })

    it('returns default metadata for invalid project', async () => {
      const params = Promise.resolve({ slug: 'invalid-slug' })
      
      const metadata = await generateMetadata({ params })
      
      expect(metadata.title).toBe('Project Not Found')
      expect(metadata.description).toBeUndefined()
    })

    it('handles all valid project slugs', async () => {
      for (const project of projects) {
        const params = Promise.resolve({ slug: project.id })
        const metadata = await generateMetadata({ params })
        
        expect(metadata.title).toContain(project.title)
        expect(metadata.description).toBe(project.description)
      }
    })
  })
})
