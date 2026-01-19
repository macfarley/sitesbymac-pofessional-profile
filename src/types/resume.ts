/**
 * Resume Type Definitions for Sites by Mac Portfolio
 * 
 * This file contains TypeScript interfaces for all resume-related data structures.
 * These types power the PDF generation, resume display components, and data validation
 * throughout the application.
 * 
 * Design Philosophy:
 * - Comprehensive coverage of resume sections
 * - Optional fields for flexibility
 * - Structured data for easy manipulation
 * - ATS-friendly field naming
 * 
 * Usage: Import these types in components that display or process resume data
 */

/**
 * Education Interface
 * 
 * Represents educational background including formal degrees, bootcamps,
 * certifications programs, and relevant coursework.
 * 
 * Cool Usage Patterns:
 * - Sort by graduation date: education.sort((a, b) => new Date(b.graduationDate) - new Date(a.graduationDate))
 * - Filter by degree level: education.filter(e => e.degree.includes('Bachelor'))
 * - Group by institution: education.reduce((acc, e) => { ... }, {})
 */
export interface Education {
  id: string;                     // Unique identifier for the education entry
  institution: string;           // School, university, or educational organization name
  degree: string;                // Degree type (Bachelor of Science, Certificate, etc.)
  field?: string;                // Field of study (Computer Science, Web Development, etc.)
  location?: string;             // City and state (Athens, OH)
  graduationDate: string;        // ISO date string or year (YYYY or YYYY-MM-DD)
  inProgress?: boolean;          // Whether the education is currently in progress
  gpa?: string;                  // Grade point average, if relevant and strong
  honors?: string[];             // Academic honors (Dean's List, Magna Cum Laude, etc.)
  leadership?: string[];         // Leadership roles and activities during education
  relevantCoursework?: string[]; // Key courses relevant to target position
  notes?: string;                // Additional notes (test scores, achievements, etc.)
}

/**
 * Work Experience Interface
 * 
 * Represents professional work history with emphasis on achievements
 * and quantifiable results rather than just job descriptions.
 * 
 * Key Features:
 * - Supports current positions with boolean flag
 * - Separates description from achievements for better PDF formatting
 * - Includes location for geographic context
 * - Technologies array for skill tracking
 * 
 * Best Practices:
 * - Use action verbs in achievements
 * - Include quantifiable results where possible
 * - Focus on impact rather than responsibilities
 */
export interface WorkExperience {
  id: string;                    // Unique identifier for the work experience
  title: string;                 // Job title or position name
  company: string;               // Company or organization name
  location?: string;             // City, State or City, Country
  startDate: string;            // Start date (YYYY-MM or YYYY-MM-DD)
  endDate?: string;             // End date (undefined if current position)
  current?: boolean;            // Whether this is the current position
  description: string;          // Brief role description or company context
  achievements: string[];       // Quantifiable accomplishments and impacts
  technologies?: string[];      // Technologies used in this role
}

/**
 * Certification Interface
 * 
 * Represents professional certifications, licenses, and credentials.
 * Includes both active and expired certifications for comprehensive tracking.
 * 
 * Usage Tips:
 * - Include credential IDs for verification
 * - Add URLs for digital badges or verification pages
 * - Track expiration dates for renewal planning
 */
export interface Certification {
  id: string;                    // Unique identifier for the certification
  name: string;                  // Full certification name
  issuer: string;                // Certifying organization or body
  issueDate: string;            // Date certification was earned
  expirationDate?: string;      // Expiration date (if applicable)
  credentialId?: string;        // Unique credential ID for verification
  url?: string;                 // Link to digital badge or verification page
}

/**
 * Skill Interface
 * 
 * Represents technical and professional skills organized by category.
 * This structure enables flexible skill organization and easy filtering.
 * 
 * Cool Organizational Patterns:
 * - By technology type: "Frontend", "Backend", "Database", "DevOps"
 * - By proficiency: "Expert", "Proficient", "Familiar"
 * - By domain: "Web Development", "Data Analysis", "Project Management"
 * 
 * Display Tips:
 * - Use consistent skill naming (React vs ReactJS)
 * - Order skills by proficiency or relevance
 * - Consider skill endorsement tracking for future features
 */
export interface Skill {
  category: string;              // Skill category name (Frontend, Backend, etc.)
  skills: string[];             // Array of specific skills in this category
}

/**
 * Personal Information Interface
 * 
 * Contains core personal and contact information that appears
 * at the top of resumes and throughout the portfolio.
 * 
 * Privacy Considerations:
 * - Phone number is optional for online portfolios
 * - Consider using business addresses for location
 * - Professional email addresses recommended
 * 
 * SEO Benefits:
 * - Name and title help with personal branding
 * - Location helps with local job search optimization
 * - Social links provide credibility and networking
 */
export interface PersonalInfo {
  name: string;                  // Full professional name
  title: string;                 // Professional title or tagline
  email: string;                 // Professional email address
  phone?: string;                // Phone number (optional for privacy)
  location: string;              // City, State or general area
  linkedin?: string;             // LinkedIn profile URL or username
  github?: string;               // GitHub profile URL or username
  website?: string;              // Personal website or portfolio URL
  summary: string;               // Professional summary or elevator pitch
}

/**
 * Additional Resume Interfaces
 * 
 * These interfaces support extended resume sections and can be added as needed:
 */

/**
 * Professional Association Interface
 * 
 * For tracking memberships in professional organizations
 */
export interface ProfessionalAssociation {
  id: string;                    // Unique identifier
  name: string;                  // Organization name
  status: string;                // Membership status (Member, Officer, etc.)
  startDate?: string;           // When membership began
  endDate?: string;             // When membership ended (if applicable)
  description?: string;         // Role or involvement description
  website?: string;             // Organization website
}

/**
 * Community Outreach Interface
 * 
 * For volunteer work, community involvement, and social impact activities
 */
export interface CommunityOutreach {
  id: string;                    // Unique identifier
  name: string;                  // Organization or activity name
  role?: string;                // Role or position held
  status: string;               // Current status (Active, Alumni, etc.)
  startDate?: string;           // When involvement began
  endDate?: string;             // When involvement ended (if applicable)
  description?: string;         // Description of involvement or impact
  website?: string;             // Organization website
}

/**
 * Reference Interface
 * 
 * For professional references with contact information
 * 
 * Best Practices:
 * - Always get permission before listing someone as a reference
 * - Keep reference information current
 * - Consider including relationship context
 */
export interface Reference {
  id: string;                    // Unique identifier
  name: string;                  // Full name of the reference
  title: string;                 // Their professional title
  company: string;               // Their current company or organization
  email: string;                 // Contact email address
  phone?: string;                // Contact phone number (optional)
  relationship?: string;         // How you know them (Former Manager, Colleague, etc.)
  yearsKnown?: number;          // How long you've known them professionally
}

/**
 * Software Project Interface
 * 
 * For significant software development projects that demonstrate technical skills.
 * Separate from work experience to highlight development capabilities.
 * 
 * Design Philosophy:
 * - Focus on technical achievements and complexity
 * - Include deployment and testing information
 * - Highlight technologies and methodologies used
 * - Show progression and growth in skills
 */
export interface SoftwareProject {
  id: string;                    // Unique identifier for the project
  title: string;                 // Project name
  description: string;           // Brief project description
  context: string;              // Context (coursework, personal, freelance, etc.)
  startDate: string;            // Project start date
  endDate: string;              // Project completion date
  achievements: string[];       // Key technical accomplishments
  technologies: string[];       // Technologies, frameworks, and tools used
  liveUrl?: string;             // Live deployment URL
  githubUrl?: string;           // Source code repository URL
  featured?: boolean;           // Whether to highlight this project
}

/**
 * Cover Letter Interface
 * 
 * For customizable cover letter templates that can be adapted for different job applications.
 * Supports dynamic content generation based on job descriptions.
 */
export interface CoverLetter {
  id: string;                    // Unique identifier for the cover letter template
  title: string;                 // Descriptive title (e.g., "KBR Junior Software Engineer")
  company: string;              // Target company name
  position: string;             // Target position title
  jobId?: string;               // Job posting ID (optional)
  date: string;                 // Date the cover letter was created
  content: string;              // Full cover letter text
}

/**
 * ==========================================
 * TYPE USAGE PATTERNS & COOL TECHNIQUES
 * ==========================================
 * 
 * 1. Type Guards for Runtime Validation:
 *    function isValidEducation(obj: any): obj is Education {
 *      return obj && typeof obj.institution === 'string' && typeof obj.degree === 'string'
 *    }
 * 
 * 2. Partial Types for Form Editing:
 *    type EducationForm = Partial<Education> & { institution: string; degree: string }
 * 
 * 3. Omit Types for API Responses:
 *    type PublicPersonalInfo = Omit<PersonalInfo, 'phone' | 'email'>
 * 
 * 4. Union Types for Status Fields:
 *    type MembershipStatus = 'Active' | 'Alumni' | 'Officer' | 'Board Member'
 * 
 * 5. Array Type Utilities:
 *    type SkillCategory = Skill['category']  // Extract just the category type
 *    type AllSkills = Skill['skills'][number]  // Extract individual skill type
 * 
 * 6. Date Validation Patterns:
 *    const isValidDate = (date: string): boolean => !isNaN(Date.parse(date))
 * 
 * 7. Resume Data Validation:
 *    const validateResume = (data: unknown): data is { personalInfo: PersonalInfo, ... } => { ... }
 * 
 * 8. Type-Safe Data Fetching:
 *    const fetchEducation = async (): Promise<Education[]> => { ... }
 */
