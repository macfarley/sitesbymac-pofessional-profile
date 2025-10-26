import { references } from './resume';

/**
 * Cover Letter Template Data
 * 
 * This file contains template data for generating cover letters,
 * including references that were moved from the resume to keep
 * the resume within 2 pages.
 */

export const seatGeekCoverLetter = {
  opening: {
    greeting: "Dear SeatGeek Hiring Team,",
    intro: "I am excited to apply for the Software Engineering Internship position at SeatGeek. As a passionate developer with a strong foundation in full-stack development and a commitment to continuous learning, I am eager to contribute to your innovative platform that connects fans with live events."
  },
  
  body: {
    technicalSkills: "My technical journey has equipped me with expertise in modern web technologies including React, Next.js, TypeScript, and Node.js. I recently completed General Assembly's Software Engineering Immersive program, where I built production-ready applications with comprehensive testing suites and advanced features. My portfolio includes StirCraft, a sophisticated cocktail management platform with 6 database models, 57 tests, and complex algorithms for recipe attribution and ABV calculations.",
    
    passion: "What draws me to SeatGeek is your mission to make live events more accessible and enjoyable for fans worldwide. I'm particularly impressed by your technical challenges in handling high-traffic event data, real-time inventory management, and creating seamless user experiences across multiple platforms. These challenges align perfectly with my interest in scalable systems and user-centric design.",
    
    fit: "As someone who has led teams through complex projects and managed high-pressure operations, I understand the importance of collaboration, rapid iteration, and delivering reliable solutions. I'm committed to resuming formal degree-track education while continuing my independent study in technologies like C++, C#, Angular, and Flutter to expand my technical toolkit."
  },
  
  closing: {
    callToAction: "I would love the opportunity to discuss how my technical skills, passion for event technology, and dedication to continuous learning can contribute to SeatGeek's mission. Thank you for considering my application.",
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
