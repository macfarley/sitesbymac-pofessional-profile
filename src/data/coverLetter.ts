import { references } from './resume';

/**
 * Cover Letter Template Data
 * 
 * This file contains template data for generating cover letters,
 * including references that were moved from the resume to keep
 * the resume within 2 pages.
 */

export const americanEquityCoverLetter = {
  opening: {
    greeting: "Dear American Equity Hiring Team,",
    intro: "I am excited to apply for the IT Intern, Service Transformation position at American Equity. As a recent graduate of General Assembly's Software Engineering Immersive program with a passion for modernizing digital services and creating efficient user experiences, I am eager to contribute to your mission of empowering clients' retirement needs through innovative technology solutions."
  },
  
  body: {
    technicalSkills: "My technical foundation aligns perfectly with the Service Transformation role, particularly in low code/no code technologies and creating single pane of glass user interfaces. I recently completed General Assembly's intensive program where I mastered modern web technologies including React, Next.js, TypeScript, and Node.js. My capstone project, StirCraft, involved designing and implementing a sophisticated web application with complex user interactions, API integrations, and responsive design principles that mirror the requirements gathering and UI design work described in your internship.",
    
    experience: "I have hands-on experience with the tools and methodologies mentioned in your posting, including GitHub for version control, collaborative development workflows, and API testing with Postman. My background includes working with cross-functional teams to gather requirements and translate business needs into technical solutions. During my time at General Assembly, I collaborated remotely across different time zones using video conferencing tools like MS Teams, and I utilized Jira for project management and issue tracking.",
    
    fit: "What particularly draws me to American Equity is your focus on enhancing internal digital services to improve employee efficiency and deliver amazing solutions to your customers. I'm excited about the opportunity to work on meaningful projects that drive measurable business outcomes while gaining experience in cloud infrastructure solutions like MongoDB. As someone who thrives in collaborative environments and enjoys learning new technologies quickly, I am confident I would contribute positively to your internship program and the broader American Equity team."
  },
  
  closing: {
    callToAction: "I would welcome the opportunity to discuss how my technical skills, passion for digital transformation, and eagerness to learn can contribute to American Equity's continued success in empowering retirements nationwide. Thank you for considering my application.",
    signature: "Sincerely,\nTravis M. McCoy"
  }
};

/**
 * References Section for Cover Letters
 * 
 * These references can be included in cover letters or provided
 * separately when requested by employers.
 */
export const coverLetterReferences = {
  title: "PROFESSIONAL REFERENCES",
  subtitle: "Available upon request during the interview process",
  contacts: references
};

/**
 * Helper function to generate a formatted references section
 * for cover letters or separate reference documents
 */
export const formatReferencesForCoverLetter = (): string => {
  let referencesText = `${coverLetterReferences.title}\n`;
  referencesText += `${coverLetterReferences.subtitle}\n\n`;
  
  coverLetterReferences.contacts.forEach(ref => {
    referencesText += `${ref.name}\n`;
    referencesText += `${ref.title} at ${ref.company}\n`;
    referencesText += `Email: ${ref.email}`;
    if (ref.phone) {
      referencesText += ` | Phone: ${ref.phone}`;
    }
    referencesText += `\nRelationship: ${ref.relationship}\n\n`;
  });
  
  return referencesText;
};

/**
 * Template placeholders that can be replaced when generating
 * customized cover letters for specific positions
 */
export const templatePlaceholders = {
  POSITION_TITLE: '[POSITION_TITLE]',
  COMPANY_NAME: '[COMPANY_NAME]',
  HIRING_MANAGER_NAME: '[HIRING_MANAGER_NAME]',
  SPECIFIC_REQUIREMENTS: '[SPECIFIC_REQUIREMENTS]',
  COMPANY_VALUES: '[COMPANY_VALUES]'
};
