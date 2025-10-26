import { CoverLetter } from '../types/resume';

// 📄 COVER LETTER DATA - Travis McCoy
// This contains customizable cover letter templates

export const coverLetters: CoverLetter[] = [
  {
    id: 'kbr-junior-software-engineer',
    title: 'KBR Junior Software Engineer',
    company: 'KBR National Security Solutions',
    position: 'Junior Software Engineer',
    jobId: 'R2113805',
    date: 'October 26, 2025',
    content: `Dear Hiring Manager,

I am applying for the Junior Software Engineer position (R2113805) with KBR. My background combines disciplined service in high-security operations with hands-on software engineering experience, making me well-suited to contribute to mission IT and defense systems that protect national security.

Through General Assembly's Software Engineering Immersive, I designed and deployed production-ready applications using Python, Django, React, and modern JavaScript frameworks. My projects demonstrate applied algorithmic thinking, including automated ABV calculation logic and pattern analysis features. I am currently expanding my skills into C++ and C#, and I am actively pursuing DoD 8570 IAT Level II certification to align with defense industry requirements.

Prior to my transition into software engineering, I served seven years as a Correctional Officer V with the Texas Department of Criminal Justice. In that role, I supervised high-security housing units, trained staff, and produced detailed compliance reports, all while maintaining a flawless record of accountability. This experience honed my ability to operate under pressure, follow strict protocols, and ensure zero loss of custody — qualities directly applicable to secure software development and defense operations.

I am a native-born U.S. citizen, with both parents also U.S. citizens, and I maintain a clean criminal record. I was fingerprinted and extensively background-checked by the Texas Department of Public Safety as a condition of employment. I have no foreign ties and have only traveled to Canada, making me fully eligible for a U.S. government security clearance.

I am eager to bring my technical skills, disciplined execution, and commitment to mission-driven work to KBR's National Security Solutions team. Thank you for considering my application. I look forward to the opportunity to discuss how my background can support KBR's mission to protect national security.

Sincerely,
Travis M. McCoy`
  }
];

// Template for generating customized cover letters
export const generateCoverLetter = (
  jobDescription: string,
  company: string,
  position: string,
  jobId?: string
): string => {
  // This is a placeholder for future AI-powered customization
  // For now, return the KBR template as a base
  return coverLetters[0].content
    .replace('KBR National Security Solutions', company)
    .replace('Junior Software Engineer', position)
    .replace('(R2113805)', jobId ? `(${jobId})` : '');
};