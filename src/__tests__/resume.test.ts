import { 
  personalInfo, 
  education, 
  workExperience, 
  certifications, 
  skills 
} from '../data/resume'

describe('Resume Data', () => {
  describe('Personal Info', () => {
    it('has all required personal information fields', () => {
      expect(personalInfo).toHaveProperty('name')
      expect(personalInfo).toHaveProperty('title')
      expect(personalInfo).toHaveProperty('location')
      expect(personalInfo).toHaveProperty('phone')
      expect(personalInfo).toHaveProperty('email')
      expect(personalInfo).toHaveProperty('website')
      expect(personalInfo).toHaveProperty('linkedin')
      expect(personalInfo).toHaveProperty('github')
      expect(personalInfo).toHaveProperty('summary')
    })

    it('has valid contact information', () => {
      expect(personalInfo.email).toMatch(/^.+@.+\..+$/)
      expect(personalInfo.website).toMatch(/^https?:\/\//)
      expect(personalInfo.linkedin).toMatch(/^https?:\/\//)
      expect(personalInfo.github).toMatch(/^https?:\/\//)
      expect(personalInfo.phone).toMatch(/^\(\d{3}\) \d{3}-\d{4}$/)
    })

    it('includes security and trust focus in summary', () => {
      expect(personalInfo.summary).toContain('security')
      expect(personalInfo.summary).toContain('privacy')
    })
  })

  describe('Education', () => {
    it('is an array with education entries', () => {
      expect(Array.isArray(education)).toBe(true)
      expect(education.length).toBeGreaterThan(0)
    })

    it('has General Assembly entry with relevant coursework', () => {
      const ga = education.find(e => e.institution === 'General Assembly')
      expect(ga).toBeDefined()
      expect(ga?.relevantCoursework).toBeDefined()
      expect(ga?.relevantCoursework).toContain('Django & Python Web Development')
      expect(ga?.relevantCoursework).toContain('Team Leadership & Project Management')
    })

    it('each education entry has required fields', () => {
      education.forEach(edu => {
        expect(edu).toHaveProperty('id')
        expect(edu).toHaveProperty('institution')
        expect(edu).toHaveProperty('degree')
        expect(edu).toHaveProperty('graduationDate')
      })
    })
  })

  describe('Work Experience', () => {
    it('is an array with work experience entries', () => {
      expect(Array.isArray(workExperience)).toBe(true)
      expect(workExperience.length).toBeGreaterThan(0)
    })

    it('includes Sites by Mac freelance experience', () => {
      const sitesByMac = workExperience.find(exp => exp.id === 'sites-by-mac')
      expect(sitesByMac).toBeDefined()
      expect(sitesByMac?.title).toContain('Founder & Full-Stack Developer')
      expect(sitesByMac?.company).toContain('Sites by Mac')
      expect(sitesByMac?.technologies).toContain('Next.js')
      expect(sitesByMac?.technologies).toContain('Django')
    })

    it('each work experience has required fields', () => {
      workExperience.forEach(exp => {
        expect(exp).toHaveProperty('id')
        expect(exp).toHaveProperty('title')
        expect(exp).toHaveProperty('company')
        expect(exp).toHaveProperty('startDate')
        expect(exp).toHaveProperty('description')
        expect(exp).toHaveProperty('achievements')
        expect(exp).toHaveProperty('technologies')
        
        expect(Array.isArray(exp.achievements)).toBe(true)
        expect(Array.isArray(exp.technologies)).toBe(true)
      })
    })

    it('work experience is ordered by most recent first', () => {
      for (let i = 0; i < workExperience.length - 1; i++) {
        const current = new Date(workExperience[i].startDate)
        const next = new Date(workExperience[i + 1].startDate)
        expect(current.getTime()).toBeGreaterThanOrEqual(next.getTime())
      }
    })
  })

  describe('Certifications', () => {
    it('is an array with certification entries', () => {
      expect(Array.isArray(certifications)).toBe(true)
      expect(certifications.length).toBeGreaterThan(0)
    })

    it('each certification has required fields', () => {
      certifications.forEach(cert => {
        expect(cert).toHaveProperty('id')
        expect(cert).toHaveProperty('name')
        expect(cert).toHaveProperty('issuer')
        expect(cert).toHaveProperty('issueDate')
      })
    })

    it('includes General Assembly certification', () => {
      const ga = certifications.find(cert => cert.issuer === 'General Assembly')
      expect(ga).toBeDefined()
    })
  })

  describe('Skills', () => {
    it('is an array with skill categories', () => {
      expect(Array.isArray(skills)).toBe(true)
      expect(skills.length).toBeGreaterThan(0)
    })

    it('includes enhanced skills from StirCraft project', () => {
      const languagesFrameworks = skills.find(s => s.category === 'Languages & Frameworks')
      expect(languagesFrameworks?.skills).toContain('Django')

      const engineering = skills.find(s => s.category === 'Engineering Practices')
      expect(engineering).toBeDefined()
      expect(engineering?.skills).toContain('Test-Driven Development')

      const devops = skills.find(s => s.category === 'DevOps & Tools')
      expect(devops?.skills).toContain('Git')
    })

    it('each skill category has required structure', () => {
      skills.forEach(skillCategory => {
        expect(skillCategory).toHaveProperty('category')
        expect(skillCategory).toHaveProperty('skills')
        expect(Array.isArray(skillCategory.skills)).toBe(true)
        expect(skillCategory.skills.length).toBeGreaterThan(0)
      })
    })

    it('includes comprehensive technology coverage', () => {
      const allSkills = skills.flatMap(s => s.skills)
      
      // Frontend technologies
      expect(allSkills).toContain('React')
      expect(allSkills).toContain('JavaScript')
      expect(allSkills).toContain('TypeScript')
      expect(allSkills).toContain('Next.js')

      // Backend technologies
      expect(allSkills).toContain('Python')
      expect(allSkills).toContain('Django')

      // Platforms and tools
      expect(allSkills).toContain('Git')
      expect(allSkills).toContain('Docker')
    })
  })
})
