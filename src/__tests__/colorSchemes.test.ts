import { 
  colorSchemes, 
  getTheme,
  type ThemeName
} from '../utils/colorSchemes'

describe('Color Schemes Utility', () => {
  describe('colorSchemes export', () => {
    it('exports all available color schemes', () => {
      expect(colorSchemes).toBeDefined()
      expect(typeof colorSchemes).toBe('object')
      
      // Check that we have the expected themes
      expect(colorSchemes.modern).toBeDefined()
      expect(colorSchemes.heritage).toBeDefined()
      expect(colorSchemes.contrast).toBeDefined()
    })

    it('has correct structure for each scheme', () => {
      Object.values(colorSchemes).forEach(scheme => {
        expect(typeof scheme.name).toBe('string')
        expect(typeof scheme.classes).toBe('object')
        expect(scheme.name.length).toBeGreaterThan(0)
      })
    })
  })

  describe('getTheme function', () => {
    it('returns correct scheme for valid name', () => {
      const modernScheme = getTheme('modern')
      expect(modernScheme).toBeDefined()
      expect(modernScheme.name).toBe('Modern Developer')
    })

    it('returns default scheme for invalid name', () => {
      // @ts-expect-error - Testing invalid input
      const invalidScheme = getTheme('nonexistent')
      expect(invalidScheme).toBeDefined()
      expect(invalidScheme.name).toBe('Modern Developer') // Should default to modern
    })

    it('returns default scheme when no argument provided', () => {
      const defaultScheme = getTheme()
      expect(defaultScheme).toBeDefined()
      expect(defaultScheme.name).toBe('Modern Developer')
    })
  })

  describe('theme names', () => {
    it('returns all available scheme keys', () => {
      const schemeKeys = Object.keys(colorSchemes) as ThemeName[]
      expect(schemeKeys).toContain('modern')
      expect(schemeKeys).toContain('heritage')
      expect(schemeKeys).toContain('contrast')
    })
  })

  describe('scheme structure validation', () => {
    it('each scheme has consistent class categories', () => {
      Object.values(colorSchemes).forEach(scheme => {
        const classes = scheme.classes
        
        // Check for common UI element categories
        expect(classes).toHaveProperty('hero')
        expect(classes).toHaveProperty('heroTitle')
        expect(classes).toHaveProperty('heroAccent')
        expect(classes).toHaveProperty('primaryButton')
        expect(classes).toHaveProperty('secondaryButton')
        expect(classes).toHaveProperty('nav')
        expect(classes).toHaveProperty('navBrand')
        expect(classes).toHaveProperty('navLink')
      })
    })

    it('all class values are non-empty strings', () => {
      Object.values(colorSchemes).forEach(scheme => {
        Object.values(scheme.classes).forEach(classValue => {
          expect(typeof classValue).toBe('string')
          expect(classValue.length).toBeGreaterThan(0)
        })
      })
    })
  })

  describe('theme coherence', () => {
    it('modern theme has tech-focused classes', () => {
      const modern = getTheme('modern')
      expect(modern.name).toBe('Modern Developer')
      
      // Check for dev-* color patterns (tech-focused)
      const heroClasses = modern.classes.hero
      expect(heroClasses).toContain('dev-')
    })

    it('heritage theme has warm classes', () => {
      const heritage = getTheme('heritage')
      expect(heritage.name).toBe('Warm Heritage')
      
      // Check for heritage-* color patterns (warm)
      const heroClasses = heritage.classes.hero
      expect(heroClasses).toContain('heritage-')
    })

    it('contrast theme has bold classes', () => {
      const contrast = getTheme('contrast')
      expect(contrast.name).toBe('Creative Contrast')
      
      // Check for contrast-* color patterns (bold)
      const heroClasses = contrast.classes.hero
      expect(heroClasses).toContain('contrast-')
    })
  })

  describe('theme switching scenarios', () => {
    it('supports all theme names as keys', () => {
      const themeNames: ThemeName[] = ['modern', 'heritage', 'contrast']
      
      themeNames.forEach(themeName => {
        const theme = getTheme(themeName)
        expect(theme).toBeDefined()
        expect(theme.name).toBeTruthy()
        expect(theme.classes).toBeDefined()
      })
    })

    it('provides consistent class structure across themes', () => {
      const themeNames: ThemeName[] = ['modern', 'heritage', 'contrast']
      const classKeys = Object.keys(colorSchemes.modern.classes)
      
      themeNames.forEach(themeName => {
        const theme = getTheme(themeName)
        const currentClassKeys = Object.keys(theme.classes)
        expect(currentClassKeys).toEqual(classKeys)
      })
    })
  })
})
