import { references } from './resume';

/**
 * Cover Letter Template Data
 * 
 * This file contains template data for generating cover letters,
 * including references that were moved from the resume to keep
 * the resume within 2 pages.
 */

export const coverLetterTemplate = {
  opening: {
    greeting: "Dear Hiring Manager,",
    intro: "I am writing to express my strong interest in the [POSITION_TITLE] position at [COMPANY_NAME]. With my background in full-stack development and proven leadership experience, I am excited about the opportunity to contribute to your team's success."
  },
  
  body: {
    technicalSkills: "As a full-stack developer specializing in Django, Python, and modern web technologies, I recently led the development of StirCraft, a sophisticated cocktail management platform. This project showcased my ability to architect production-ready applications with 6 core database models, 57 comprehensive tests, and advanced features like recipe forking with attribution tracking and automatic ABV calculation algorithms.",
    
    leadership: "My leadership experience spans both technical and operational environments. I have successfully managed development teams through complex projects using Agile methodologies, while also leading operational teams of 30+ people in high-pressure situations. This combination of technical expertise and proven leadership makes me uniquely qualified to contribute to both individual projects and team initiatives.",
    
    impact: "My systematic approach to problem-solving, developed through a decade of experience in manufacturing and corrections, translates directly into reliable API design, maintainable code architectures, and applications that combine technical excellence with meaningful user experiences."
  },
  
  closing: {
    callToAction: "I would welcome the opportunity to discuss how my technical skills and leadership experience can contribute to [COMPANY_NAME]'s continued success. Thank you for your time and consideration.",
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
