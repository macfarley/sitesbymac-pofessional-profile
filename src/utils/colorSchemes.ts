// Color scheme switching utility
// You can use this to quickly test different palettes

export const colorSchemes = {
  modern: {
    name: 'Modern Developer',
    classes: {
      hero: 'bg-gradient-to-br from-dev-900 to-dev-800 text-dev-200',
      heroTitle: 'text-dev-200',
      heroAccent: 'text-dev-500',
      heroSubtext: 'text-dev-200 opacity-90',
      primaryButton: 'bg-dev-500 text-dev-900 hover:bg-dev-500/90',
      secondaryButton: 'border-dev-500 text-dev-500 hover:bg-dev-500/10',
      skillsSection: 'bg-dev-800',
      skillsTitle: 'text-dev-200',
      skillCard: 'bg-dev-900/50 border-dev-500/20 text-dev-200 hover:border-dev-500/40',
      nav: 'bg-dev-900/95 border-dev-500/20',
      navBrand: 'text-dev-500 hover:text-dev-500/80',
      navLink: 'text-dev-200 hover:text-dev-500'
    }
  },
  
  heritage: {
    name: 'Warm Heritage',
    classes: {
      hero: 'bg-gradient-to-br from-heritage-900 to-heritage-700 text-heritage-100',
      heroTitle: 'text-heritage-100',
      heroAccent: 'text-heritage-300',
      heroSubtext: 'text-heritage-100 opacity-90',
      primaryButton: 'bg-heritage-300 text-heritage-900 hover:bg-heritage-300/90',
      secondaryButton: 'border-heritage-300 text-heritage-300 hover:bg-heritage-300/10',
      skillsSection: 'bg-heritage-100',
      skillsTitle: 'text-heritage-900',
      skillCard: 'bg-heritage-500/20 border-heritage-500/30 text-heritage-900 hover:border-heritage-500/50',
      nav: 'bg-heritage-100 border-heritage-500/20',
      navBrand: 'text-heritage-700 hover:text-heritage-500',
      navLink: 'text-heritage-900 hover:text-heritage-500'
    }
  },
  
  contrast: {
    name: 'Creative Contrast',
    classes: {
      hero: 'bg-gradient-to-br from-contrast-500 to-contrast-400 text-contrast-100',
      heroTitle: 'text-contrast-100',
      heroAccent: 'text-contrast-300',
      heroSubtext: 'text-contrast-100 opacity-95',
      primaryButton: 'bg-contrast-300 text-contrast-900 hover:bg-contrast-300/90',
      secondaryButton: 'border-contrast-300 text-contrast-300 hover:bg-contrast-300/20',
      skillsSection: 'bg-contrast-100',
      skillsTitle: 'text-contrast-900',
      skillCard: 'bg-contrast-400/20 border-contrast-400/30 text-contrast-900 hover:border-contrast-400/50',
      nav: 'bg-contrast-100 border-contrast-400/20',
      navBrand: 'text-contrast-500 hover:text-contrast-400',
      navLink: 'text-contrast-900 hover:text-contrast-500'
    }
  }
};

// To switch schemes, just import this and replace the current classes
// Example: Replace 'bg-dev-900' with colorSchemes.heritage.classes.hero
