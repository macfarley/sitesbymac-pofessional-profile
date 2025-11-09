/**
 * Project Type Definitions for Sites by Mac Portfolio
 * 
 * This file defines TypeScript interfaces for project-related data structures.
 * These types ensure type safety across the application and provide excellent
 * IntelliSense support in VS Code.
 * 
 * Key Benefits:
 * - Compile-time type checking prevents runtime errors
 * - Auto-completion for object properties
 * - Clear documentation of data structure expectations
 * - Easier refactoring with IDE support
 * 
 * Usage Pattern: Import these types in components that work with project data
 */

/**
 * Main Project Interface
 * 
 * Represents a single portfolio project with all necessary metadata
 * for display, navigation, and filtering throughout the application.
 * 
 * Required Fields:
 * @param id - Unique identifier, used for routing (/projects/[id])
 * @param title - Display name of the project
 * @param description - Brief summary for project cards (aim for 1-2 sentences)
 * @param technologies - Array of tech stack items (React, Node.js, etc.)
 * @param liveUrl - URL to the live demo or deployed application
 * @param completedDate - ISO date string for sorting and display
 * 
 * Optional Fields:
 * @param longDescription - Detailed project description for individual project pages
 * @param githubUrl - Link to source code repository
 * @param imageUrl - Screenshot or project preview image
 * @param featured - Whether to highlight in featured projects section
 * 
 * Cool Usage Examples:
 * - Filter featured projects: projects.filter(p => p.featured)
 * - Sort by date: projects.sort((a, b) => new Date(b.completedDate) - new Date(a.completedDate))
 * - Group by technology: projects.reduce((acc, p) => { ... }, {})
 */
export interface Project {
  id: string;                    // URL-safe identifier (e.g., 'my-awesome-project')
  title: string;                 // Human-readable project name
  description: string;           // Short description for cards and previews
  longDescription?: string;      // Detailed description for project detail pages
  technologies: string[];        // Tech stack (e.g., ['React', 'TypeScript', 'Tailwind'])
  liveUrl?: string;             // Live demo URL (can be relative for proxy rewrites)
  githubUrl?: string;           // Source code repository URL
  imageUrl?: string;            // Project screenshot or preview image path
  featured?: boolean;           // Whether to show in featured projects section
  completedDate: string;        // ISO date string (YYYY-MM-DD) for sorting
}

/**
 * Experience Interface
 * 
 * Represents work experience or significant projects with time-based information.
 * This can be used for both professional work history and major personal projects.
 * 
 * Key Differences from Project:
 * - Includes company information for work experience
 * - Has start/end date range instead of single completion date
 * - More focused on professional timeline than showcase presentation
 * 
 * Usage Context:
 * - Work experience sections in resume/about pages
 * - Timeline components showing career progression
 * - Professional project history distinct from portfolio projects
 */
export interface Experience {
  id: string;                    // Unique identifier for the experience
  title: string;                 // Job title or project role
  company?: string;              // Company name (optional for personal projects)
  description: string;           // Role description or project summary
  technologies: string[];        // Technologies used in this role/project
  startDate: string;            // ISO date string for when the experience began
  endDate?: string;
}
