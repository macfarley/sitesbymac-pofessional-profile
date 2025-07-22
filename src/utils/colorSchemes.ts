/**
 * Color Scheme Utility for Sites by Mac Portfolio
 * 
 * This utility provides pre-configured color palettes for rapid theme testing
 * and design iteration. It's designed to work with Tailwind CSS custom color
 * configurations and provides a systematic approach to color scheme switching.
 * 
 * Key Benefits:
 * - Rapid theme prototyping and testing
 * - Consistent color application across components
 * - Easy theme switching for different client preferences
 * - Maintains design system coherence
 * 
 * Usage Pattern:
 * 1. Define custom colors in tailwind.config.js
 * 2. Create schemes using these custom colors
 * 3. Apply schemes by replacing class strings in components
 * 4. Test different moods and branding approaches
 * 
 * Cool Technique: This pattern allows A/B testing different visual styles
 * without touching component logic or restructuring layouts.
 */

/**
 * Color Scheme Configuration Object
 * 
 * Each scheme represents a complete visual theme with:
 * - Semantic naming for different UI elements
 * - Consistent hover states and interactions
 * - Light/dark mode considerations
 * - Brand personality expression through color
 * 
 * Structure Pattern:
 * - name: Human-readable theme identifier
 * - classes: Object mapping UI elements to Tailwind classes
 * 
 * Cool Design Approach: Each scheme tells a different brand story:
 * - Modern: Tech-forward, cutting-edge developer
 * - Heritage: Warm, approachable, experienced professional
 * - Contrast: Creative, bold, design-conscious developer
 */
export const colorSchemes = {
  /**
   * Modern Developer Theme
   * 
   * Personality: Technical, professional, forward-thinking
   * Use Case: Software engineering, full-stack development, tech startups
   * Color Psychology: Cool blues and grays convey trust and innovation
   * 
   * Cool Implementation: Uses dev-* custom color scale for tech branding
   */
  modern: {
    name: 'Modern Developer',
    classes: {
      // Hero section - primary brand impression
      hero: 'bg-gradient-to-br from-dev-900 to-dev-800 text-dev-200',
      heroTitle: 'text-dev-200',          // Main headline color
      heroAccent: 'text-dev-500',         // Name or accent text color
      heroSubtext: 'text-dev-200 opacity-90',  // Subtitle/description color
      
      // Call-to-action buttons - conversion focused
      primaryButton: 'bg-dev-500 text-dev-900 hover:bg-dev-500/90',
      secondaryButton: 'border-dev-500 text-dev-500 hover:bg-dev-500/10',
      
      // Content sections - readability focused
      skillsSection: 'bg-dev-800',
      skillsTitle: 'text-dev-200',
      skillCard: 'bg-dev-900/50 border-dev-500/20 text-dev-200 hover:border-dev-500/40',
      
      // Navigation - usability focused
      nav: 'bg-dev-900/95 border-dev-500/20',      // Semi-transparent for modern feel
      navBrand: 'text-dev-500 hover:text-dev-500/80',
      navLink: 'text-dev-200 hover:text-dev-500'
    }
  },
  
  /**
   * Warm Heritage Theme
   * 
   * Personality: Experienced, approachable, reliable, craftsmanship-focused
   * Use Case: Senior developers, consultants, traditional industries
   * Color Psychology: Warm tones convey experience and trustworthiness
   * 
   * Cool Implementation: Uses heritage-* custom colors for warmth and tradition
   */
  heritage: {
    name: 'Warm Heritage',
    classes: {
      // Hero section - welcoming and professional
      hero: 'bg-gradient-to-br from-heritage-900 to-heritage-700 text-heritage-100',
      heroTitle: 'text-heritage-100',
      heroAccent: 'text-heritage-300',         // Softer accent for warmth
      heroSubtext: 'text-heritage-100 opacity-90',
      
      // Buttons - warm and inviting
      primaryButton: 'bg-heritage-300 text-heritage-900 hover:bg-heritage-300/90',
      secondaryButton: 'border-heritage-300 text-heritage-300 hover:bg-heritage-300/10',
      
      // Content sections - comfortable reading experience
      skillsSection: 'bg-heritage-100',        // Light background for contrast
      skillsTitle: 'text-heritage-900',
      skillCard: 'bg-heritage-500/20 border-heritage-500/30 text-heritage-900 hover:border-heritage-500/50',
      
      // Navigation - classic and stable
      nav: 'bg-heritage-100 border-heritage-500/20',
      navBrand: 'text-heritage-700 hover:text-heritage-500',
      navLink: 'text-heritage-900 hover:text-heritage-500'
    }
  },
  
  /**
   * Creative Contrast Theme
   * 
   * Personality: Bold, creative, design-conscious, innovative
   * Use Case: Frontend developers, UI/UX designers, creative agencies
   * Color Psychology: High contrast conveys creativity and attention to detail
   * 
   * Cool Implementation: Uses contrast-* colors for maximum visual impact
   */
  contrast: {
    name: 'Creative Contrast',
    classes: {
      // Hero section - bold and attention-grabbing
      hero: 'bg-gradient-to-br from-contrast-500 to-contrast-400 text-contrast-100',
      heroTitle: 'text-contrast-100',
      heroAccent: 'text-contrast-300',         // Strong accent for impact
      heroSubtext: 'text-contrast-100 opacity-95',  // High opacity for readability
      
      // Buttons - creative and engaging
      primaryButton: 'bg-contrast-300 text-contrast-900 hover:bg-contrast-300/90',
      secondaryButton: 'border-contrast-300 text-contrast-300 hover:bg-contrast-300/20',
      
      // Content sections - clean and modern
      skillsSection: 'bg-contrast-100',
      skillsTitle: 'text-contrast-900',
      skillCard: 'bg-contrast-400/20 border-contrast-400/30 text-contrast-900 hover:border-contrast-400/50',
      
      // Navigation - sleek and modern
      nav: 'bg-contrast-100 border-contrast-400/20',
      navBrand: 'text-contrast-500 hover:text-contrast-400',
      navLink: 'text-contrast-900 hover:text-contrast-500'
    }
  }
};

/**
 * ==========================================
 * ADVANCED USAGE PATTERNS & COOL TECHNIQUES
 * ==========================================
 * 
 * 1. Dynamic Theme Switching:
 *    const applyTheme = (themeName: keyof typeof colorSchemes) => {
 *      const theme = colorSchemes[themeName]
 *      // Replace classes in components dynamically
 *    }
 * 
 * 2. Component Integration Pattern:
 *    const Hero = ({ theme = 'modern' }) => {
 *      const classes = colorSchemes[theme].classes
 *      return <section className={classes.hero}>...</section>
 *    }
 * 
 * 3. Tailwind Config Integration:
 *    // tailwind.config.js
 *    module.exports = {
 *      theme: {
 *        extend: {
 *          colors: {
 *            dev: { 500: '#3B82F6', 800: '#1E3A8A', 900: '#1E293B' },
 *            heritage: { 100: '#FEF3C7', 300: '#FCD34D', 500: '#F59E0B' },
 *            contrast: { 100: '#F3F4F6', 300: '#D1D5DB', 400: '#9CA3AF' }
 *          }
 *        }
 *      }
 *    }
 * 
 * 4. Theme Context Provider:
 *    const ThemeContext = createContext(colorSchemes.modern)
 *    const useTheme = () => useContext(ThemeContext)
 * 
 * 5. CSS Variable Integration:
 *    :root { --primary: theme('colors.dev.500'); }
 *    .hero { background: var(--primary); }
 * 
 * 6. Design System Token Mapping:
 *    const tokens = {
 *      primary: colorSchemes.modern.classes.primaryButton,
 *      surface: colorSchemes.modern.classes.skillCard
 *    }
 * 
 * 7. A/B Testing Implementation:
 *    const userTheme = userId % 2 === 0 ? 'modern' : 'heritage'
 *    // Track conversion rates by theme
 * 
 * 8. Client Customization:
 *    const createCustomScheme = (brandColors) => ({
 *      name: 'Custom Brand',
 *      classes: generateClassesFromColors(brandColors)
 *    })
 * 
 * 9. Accessibility Considerations:
 *    const validateContrast = (scheme) => {
 *      // Check WCAG compliance for each color combination
 *      // Ensure 4.5:1 ratio for normal text, 3:1 for large text
 *    }
 * 
 * 10. Season/Event Themes:
 *     const holidayScheme = { ...colorSchemes.modern, classes: { ...winterColors } }
 */

/**
 * Example Implementation in Components:
 * 
 * // Replace static classes with scheme classes
 * // Before:
 * <div className="bg-blue-900 text-blue-200">
 * 
 * // After:
 * <div className={colorSchemes.modern.classes.hero}>
 * 
 * // Or with dynamic theme selection:
 * const theme = colorSchemes[selectedTheme] || colorSchemes.modern
 * <div className={theme.classes.hero}>
 */

// Export helper function for easy theme switching
export const getTheme = (themeName: keyof typeof colorSchemes = 'modern') => {
  return colorSchemes[themeName] || colorSchemes.modern;
};

// Export theme names for type safety
export type ThemeName = keyof typeof colorSchemes;

/**
 * Cool Future Enhancements:
 * 
 * 1. Add seasonal themes (spring, summer, fall, winter)
 * 2. Industry-specific themes (finance, healthcare, education)
 * 3. Accessibility themes (high contrast, low vision, color blind friendly)
 * 4. Time-based themes (day/night, working hours)
 * 5. Mood-based themes (energetic, calm, professional, creative)
 * 6. Brand integration themes for different target companies
 * 7. Performance themes (optimize for loading speed vs visual richness)
 * 8. Regional themes (cultural color preferences)
 */
