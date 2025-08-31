/**
 * Design System for Sites by Mac Portfolio
 * 
 * Centralized design tokens and utility classes for consistent styling
 * across all components. This system ensures visual harmony and makes
 * future design changes easier to implement.
 */

// Color palette - centralized color definitions
export const colors = {
  // Primary brand colors
  primary: {
    // Amber warm tones for light mode
    light: {
      50: 'amber-50',
      100: 'amber-100', 
      500: 'amber-500',
      600: 'amber-600',
      700: 'amber-700',
      800: 'amber-800',
      900: 'amber-900',
    },
    // Cyan cool tones for dark mode
    dark: {
      300: 'cyan-300',
      400: 'cyan-400',
      500: 'cyan-500',
    }
  },
  
  // Surface colors (backgrounds, cards)
  surface: {
    light: {
      50: 'stone-50',
      100: 'stone-100',
      200: 'stone-200',
    },
    dark: {
      700: 'gray-700',
      800: 'gray-800',
      900: 'gray-900',
    }
  },
  
  // Text colors
  text: {
    light: {
      primary: 'amber-900',
      secondary: 'amber-800',
      muted: 'amber-600',
    },
    dark: {
      primary: 'gray-100',
      secondary: 'gray-300',
      muted: 'gray-500',
    }
  },
  
  // Accent colors for interactive elements
  accent: {
    light: {
      success: 'green-600',
      warning: 'yellow-500',
      error: 'red-600',
    },
    dark: {
      success: 'green-400',
      warning: 'yellow-400', 
      error: 'red-400',
    }
  }
};

// Spacing scale
export const spacing = {
  xs: '0.5rem',  // 8px
  sm: '0.75rem', // 12px
  md: '1rem',    // 16px
  lg: '1.5rem',  // 24px
  xl: '2rem',    // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
};

// Typography scale
export const typography = {
  heading: {
    h1: 'text-3xl sm:text-4xl md:text-5xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-xl font-bold',
    h4: 'text-lg font-semibold',
  },
  body: {
    lg: 'text-lg sm:text-xl',
    base: 'text-base',
    sm: 'text-sm',
    xs: 'text-xs',
  }
};

// Component variants - reusable style combinations
export const components = {
  // Button styles
  button: {
    primary: `
      min-h-[44px] min-w-[44px] px-6 py-3 
      bg-${colors.primary.light[700]} dark:bg-${colors.primary.dark[500]} 
      text-white dark:text-gray-900 
      rounded-lg 
      hover:bg-${colors.primary.light[800]} dark:hover:bg-${colors.primary.dark[400]} 
      focus:bg-${colors.primary.light[800]} dark:focus:bg-${colors.primary.dark[400]} 
      focus:ring-2 focus:ring-${colors.primary.light[500]} dark:focus:ring-${colors.primary.dark[400]} 
      focus:ring-offset-2 focus:ring-offset-${colors.surface.light[50]} dark:focus:ring-offset-gray-900 
      focus:outline-none 
      transition-all duration-200 font-medium shadow-md hover:shadow-lg active:scale-95
    `,
    
    secondary: `
      min-h-[44px] min-w-[44px] px-6 py-3 
      border-2 border-${colors.primary.light[700]} dark:border-${colors.primary.dark[500]} 
      text-${colors.primary.light[700]} dark:text-${colors.primary.dark[400]} 
      bg-transparent rounded-lg 
      hover:bg-${colors.primary.light[700]}/10 dark:hover:bg-${colors.primary.dark[500]}/20 
      hover:border-${colors.primary.light[800]} dark:hover:border-${colors.primary.dark[400]} 
      hover:text-${colors.primary.light[800]} dark:hover:text-${colors.primary.dark[300]} 
      focus:bg-${colors.primary.light[700]}/10 dark:focus:bg-${colors.primary.dark[500]}/20 
      focus:border-${colors.primary.light[800]} dark:focus:border-${colors.primary.dark[400]} 
      focus:text-${colors.primary.light[800]} dark:focus:text-${colors.primary.dark[300]} 
      focus:ring-2 focus:ring-${colors.primary.light[500]} dark:focus:ring-${colors.primary.dark[400]} 
      focus:ring-offset-2 focus:ring-offset-${colors.surface.light[50]} dark:focus:ring-offset-gray-900 
      focus:outline-none 
      transition-all duration-200 font-medium active:scale-95
    `,
    
    ghost: `
      px-4 py-2 
      border border-${colors.primary.light[700]} dark:border-gray-500 
      text-${colors.text.light.primary} dark:text-gray-300 
      rounded-lg 
      hover:bg-${colors.primary.light[50]} dark:hover:bg-gray-700 
      transition-colors font-medium 
      flex items-center gap-2
    `
  },
  
  // Card styles
  card: {
    base: `
      bg-${colors.surface.light[50]} dark:bg-${colors.surface.dark[800]} 
      rounded-lg shadow-lg overflow-hidden 
      transition-transform hover:scale-105 
      border border-${colors.primary.light[600]}/20 dark:border-gray-700 
      hover:border-${colors.primary.light[600]}/40 dark:hover:border-${colors.primary.dark[400]}/50
    `,
    
    interactive: `
      min-h-[88px] min-w-[88px] p-6 
      bg-${colors.surface.light[50]} dark:bg-${colors.surface.dark[700]} 
      border-2 border-${colors.primary.light[600]}/30 dark:border-green-400/50 
      rounded-lg 
      text-${colors.text.light.primary} dark:text-gray-100 
      font-medium 
      hover:border-${colors.primary.light[600]}/60 dark:hover:border-green-400/70 
      hover:bg-${colors.primary.light[50]} dark:hover:bg-green-900/20 
      focus:ring-2 focus:ring-${colors.primary.light[500]} focus:ring-offset-2 focus:outline-none 
      transition-colors shadow-sm 
      flex flex-col items-center group cursor-pointer 
      hover:scale-105 transform transition-transform duration-200
    `
  },
  
  // Layout styles
  layout: {
    section: `
      py-16 px-4 
      bg-${colors.surface.light[100]} dark:bg-${colors.surface.dark[900]}
    `,
    
    sectionAlt: `
      py-16 px-4 
      bg-${colors.surface.light[100]} dark:bg-${colors.surface.dark[800]}
    `,
    
    container: 'max-w-6xl mx-auto',
    containerSmall: 'max-w-4xl mx-auto',
    
    grid: {
      auto: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
      responsive: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
    }
  },
  
  // Navigation styles
  navigation: {
    nav: `
      bg-${colors.surface.light[50]}/95 dark:bg-${colors.surface.dark[900]}/95 
      backdrop-blur-sm shadow-lg 
      border-b border-${colors.primary.light[600]}/30 dark:border-${colors.primary.dark[400]}/50
    `,
    
    link: `
      text-base font-medium 
      text-${colors.text.light.primary} dark:text-${colors.primary.dark[400]} 
      hover:text-${colors.primary.light[700]} dark:hover:text-${colors.primary.dark[300]} 
      focus:text-${colors.primary.light[700]} dark:focus:text-${colors.primary.dark[300]} 
      focus:outline-none focus:ring-2 focus:ring-${colors.primary.light[500]} dark:focus:ring-${colors.primary.dark[400]} 
      focus:ring-offset-2 focus:ring-offset-${colors.surface.light[50]} dark:focus:ring-offset-gray-900 
      transition-colors duration-200 ease-in-out 
      underline decoration-2 decoration-${colors.primary.light[600]}/30 dark:decoration-${colors.primary.dark[400]}/30 
      hover:decoration-${colors.primary.light[700]} dark:hover:decoration-${colors.primary.dark[300]} 
      focus:decoration-${colors.primary.light[700]} dark:focus:decoration-${colors.primary.dark[300]} 
      px-2 py-1 rounded-sm
    `,
    
    brand: `
      text-xl font-bold 
      text-${colors.text.light.primary} dark:text-${colors.primary.dark[400]} 
      hover:text-${colors.primary.light[700]} dark:hover:text-${colors.primary.dark[300]} 
      transition-colors
    `
  },
  
  // Technology badges
  badge: {
    tech: `
      px-3 py-1 
      bg-${colors.primary.light[100]} dark:bg-green-900/30 
      text-${colors.text.light.primary} dark:text-green-300 
      text-sm rounded-full 
      border border-${colors.primary.light[600]}/20 dark:border-green-400/30
    `
  }
};

// Utility functions for building class strings
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Helper function to get consistent spacing
export const getSpacing = (size: keyof typeof spacing): string => spacing[size];

// Helper function to get consistent typography
export const getTypography = (variant: keyof typeof typography.heading | keyof typeof typography.body, type: 'heading' | 'body' = 'body'): string => {
  return type === 'heading' ? typography.heading[variant as keyof typeof typography.heading] : typography.body[variant as keyof typeof typography.body];
};

// Export commonly used class combinations
export const commonStyles = {
  // Gradients
  gradients: {
    primary: `bg-gradient-to-br from-${colors.primary.light[100]} to-${colors.surface.light[200]} dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-800`,
  },
  
  // Text styles with consistent theming
  text: {
    heading: `${typography.heading.h1} text-${colors.text.light.primary} dark:text-gray-100`,
    subheading: `${typography.heading.h2} text-${colors.text.light.primary} dark:text-gray-100`,
    body: `${typography.body.lg} text-${colors.text.light.secondary} dark:text-gray-300`,
    muted: `${typography.body.sm} text-${colors.text.light.muted} dark:text-gray-500`,
  },
  
  // Interactive states
  interactive: {
    scale: 'transition-transform hover:scale-105 active:scale-95',
    fade: 'transition-opacity hover:opacity-80',
    glow: 'transition-shadow hover:shadow-lg',
  }
};

const designSystem = {
  colors,
  spacing,
  typography,
  components,
  commonStyles,
  cn,
  getSpacing,
  getTypography,
};

export default designSystem;
