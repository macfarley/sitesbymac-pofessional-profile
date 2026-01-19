/**
 * PDF Download Button Component for Sites by Mac Portfolio
 * 
 * Generates professional PDF resumes from resume.ts data
 * Supports two variants: ATS (2-page detailed) and Stylized (1-page condensed)
 */

'use client';

import jsPDF from 'jspdf';
import { personalInfo, coreCompetencies, languages, workExperience, education, skills, certifications } from '../data/resume';

interface PDFDownloadButtonProps {
  targetId?: string;
  filename?: string;
  className?: string;
  variant?: 'ats' | 'stylized';
}

export default function PDFDownloadButton({ 
  filename = 'Travis_McCoy_Resume.pdf',
  className = '',
  variant = 'ats' 
}: PDFDownloadButtonProps) {

  const generatePDF = async () => {
    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 12;
      const contentWidth = pageWidth - (margin * 2);
      const maxPages = variant === 'ats' ? 2 : 1;
      let currentY = margin;
      let currentPage = 1;

      const addText = (text: string, fontSize: number = 10, isBold: boolean = false, indent: number = 0, isSection: boolean = false) => {
        if (isSection && currentY > pageHeight - margin - 12) {
          if (currentPage < maxPages) {
            pdf.addPage();
            currentY = margin;
            currentPage++;
          } else if (currentPage === maxPages && currentY > pageHeight - margin - 8) {
            return;
          }
        } else if (!isSection && currentY > pageHeight - margin - 4) {
          if (currentPage < maxPages) {
            pdf.addPage();
            currentY = margin;
            currentPage++;
          } else if (currentPage === maxPages && currentY > pageHeight - margin - 3) {
            return;
          }
        }

        pdf.setFontSize(fontSize);
        pdf.setFont('arial', isBold ? 'bold' : 'normal');
        
        const lines = pdf.splitTextToSize(text, contentWidth - indent);
        lines.forEach((line: string) => {
          if (currentY > pageHeight - margin - 4) {
            if (currentPage < maxPages) {
              pdf.addPage();
              currentY = margin;
              currentPage++;
            } else {
              return;
            }
          }
          pdf.text(line, margin + indent, currentY);
          currentY += fontSize * 0.35;
        });
        currentY += isSection ? 1.5 : 1;
      };

      const addSection = (title: string, extraSpaceBefore: number = 0) => {
        currentY += 2 + extraSpaceBefore;
        addText(title, 13, true, 0, true);
        currentY += 0.5;
      };

      // Helper to render bullets with bold all-caps subheaders
      const addAchievement = (achievement: string, fontSize: number = 9, indent: number = 3) => {
        const allCapsMatch = achievement.match(/^([A-Z\s&\/,]+):/);
        
        if (allCapsMatch) {
          // Has all-caps subheader - render it bold
          const header = allCapsMatch[0]; // Includes the colon and space
          const content = achievement.substring(header.length);
          
          pdf.setFontSize(fontSize);
          pdf.setFont('arial', 'bold');
          const bulletHeader = `\u2022 ${header}`;
          const headerWidth = pdf.getTextWidth(bulletHeader);
          
          // Check if we need a new page
          if (currentY > pageHeight - margin - 4 && currentPage < maxPages) {
            pdf.addPage();
            currentY = margin;
            currentPage++;
          }
          
          // Render bullet + bold header
          pdf.text(bulletHeader, margin + indent, currentY);
          
          // Render content on same line if it fits, otherwise wrap
          pdf.setFont('arial', 'normal');
          const availableWidth = contentWidth - indent - headerWidth - 1;
          const contentLines = pdf.splitTextToSize(content, availableWidth);
          
          // First line goes on same line as header
          pdf.text(contentLines[0], margin + indent + headerWidth + 1, currentY);
          currentY += fontSize * 0.35;
          
          // Remaining lines wrap with indent
          for (let i = 1; i < contentLines.length; i++) {
            pdf.text(contentLines[i], margin + indent, currentY);
            currentY += fontSize * 0.35;
          }
          currentY += 1;
        } else {
          // No subheader - render normally
          addText(`\u2022 ${achievement}`, fontSize, false, indent);
        }
      };

      // === HEADER ===
      addText(personalInfo.name, 18, true);
      addText(personalInfo.title, 12, true);
      const headerLine3 = `${personalInfo.location} • ${(personalInfo as any).locationNote || 'Willing to Relocate'} • ${(personalInfo as any).clearance || 'Security Clearance Eligible'}`;
      addText(headerLine3, 10);
      
      // Contact info with bold labels
      pdf.setFontSize(9);
      pdf.setFont('arial', 'bold');
      let contactY = currentY;
      pdf.text('Portfolio:', margin, contactY);
      pdf.setFont('arial', 'normal');
      pdf.text(' ' + personalInfo.website, margin + pdf.getTextWidth('Portfolio:'), contactY);
      pdf.setFont('arial', 'bold');
      const githubX = margin + contentWidth / 2;
      pdf.text('GitHub:', githubX, contactY);
      pdf.setFont('arial', 'normal');
      pdf.text(' ' + personalInfo.github, githubX + pdf.getTextWidth('GitHub:'), contactY);
      currentY += 3.5;
      
      pdf.setFont('arial', 'bold');
      pdf.text('LinkedIn:', margin, currentY);
      pdf.setFont('arial', 'normal');
      pdf.text(' ' + personalInfo.linkedin, margin + pdf.getTextWidth('LinkedIn:'), currentY);
      pdf.setFont('arial', 'bold');
      const phoneX = margin + contentWidth / 2;
      pdf.text('Phone:', phoneX, currentY);
      pdf.setFont('arial', 'normal');
      pdf.text(' ' + personalInfo.phone, phoneX + pdf.getTextWidth('Phone:'), currentY);
      currentY += 3.5;
      
      pdf.setFont('arial', 'bold');
      pdf.text('Email:', margin, currentY);
      pdf.setFont('arial', 'normal');
      pdf.text(' ' + personalInfo.email, margin + pdf.getTextWidth('Email:'), currentY);
      currentY += 3.5;
      
      // === PROFESSIONAL SUMMARY ===
      addSection('PROFESSIONAL SUMMARY');
      addText(personalInfo.summary, 10);
      
      // === CORE COMPETENCIES ===
      if (variant === 'ats') {
        addSection('CORE COMPETENCIES', 1.5);
        const compStartY = currentY;
        const colWidth = contentWidth / 3;
        
        // Display competencies in 3 columns (4 items per column)
        coreCompetencies.forEach((comp, index) => {
          const col = index % 3;
          const row = Math.floor(index / 3);
          const xPos = margin + (col * colWidth);
          const yPos = compStartY + (row * 3.5);
          
          pdf.setFontSize(9);
          pdf.setFont('arial', 'normal');
          pdf.text(`\u2022 ${comp}`, xPos, yPos);
        });
        
        currentY = compStartY + (Math.ceil(coreCompetencies.length / 3) * 3.5) + 2;
      }

      // === SKILLS ===
      addSection('TECHNICAL SKILLS', 1.5);
      
      if (currentY > pageHeight - margin - 30 && currentPage < maxPages) {
        pdf.addPage();
        currentY = margin;
        currentPage++;
        addSection('TECHNICAL SKILLS');
      }
      
      const halfContentWidth = (contentWidth - 8) / 2;
      const leftColumnSkills = skills.slice(0, Math.ceil(skills.length / 2));
      const rightColumnSkills = skills.slice(Math.ceil(skills.length / 2));
      
      const startY = currentY;
      let leftY = startY;
      let rightY = startY;
      
      leftColumnSkills.forEach(skillCategory => {
        if (leftY > pageHeight - margin - 15 || currentPage >= maxPages) return;
        
        pdf.setFontSize(10);
        pdf.setFont('arial', 'bold');
        pdf.text(`${skillCategory.category}:`, margin, leftY);
        leftY += 3.5;
        
        pdf.setFontSize(9);
        pdf.setFont('arial', 'normal');
        const skillLines = pdf.splitTextToSize(skillCategory.skills.join(', '), halfContentWidth);
        skillLines.forEach((line: string) => {
          pdf.text(line, margin, leftY);
          leftY += 3;
        });
        leftY += 1.5;
      });
      
      rightColumnSkills.forEach(skillCategory => {
        if (rightY > pageHeight - margin - 15 || currentPage >= maxPages) return;
        
        pdf.setFontSize(10);
        pdf.setFont('arial', 'bold');
        pdf.text(`${skillCategory.category}:`, margin + halfContentWidth + 4, rightY);
        rightY += 3.5;
        
        pdf.setFontSize(9);
        pdf.setFont('arial', 'normal');
        const skillLines = pdf.splitTextToSize(skillCategory.skills.join(', '), halfContentWidth);
        skillLines.forEach((line: string) => {
          pdf.text(line, margin + halfContentWidth + 4, rightY);
          rightY += 3;
        });
        rightY += 1.5;
      });
      
      currentY = Math.max(leftY, rightY) + 2;

      // === LANGUAGES ===
      if (variant === 'ats') {
        addSection('LANGUAGES', 1.5);
        const langStartY = currentY;
        
        // Display languages in 2 columns
        languages.forEach((lang, index) => {
          const column = index % 2;
          const row = Math.floor(index / 2);
          const xPos = column === 0 ? margin : margin + halfContentWidth + 4;
          const yPos = langStartY + (row * 3.5);
          
          pdf.setFontSize(9);
          pdf.setFont('arial', 'normal');
          pdf.text(`${lang.language} — ${lang.proficiency}`, xPos, yPos);
        });
        
        currentY = langStartY + (Math.ceil(languages.length / 2) * 3.5) + 1;
      }

      // === TECHNICAL EXPERIENCE (VOLUNQUEER) ===
      if (variant === 'ats') {
        const volunqueer = workExperience.find(job => job.id === 'volunqueer');
        if (volunqueer) {
          addSection('TECHNICAL EXPERIENCE', 1.5);
          addText(`${volunqueer.title} | ${volunqueer.company}`, 10, true);
          // Parse YYYY-MM or YYYY format without timezone issues
          const formatDate = (dateStr: string) => {
            const [year, month] = dateStr.split('-');
            if (month) {
              const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
              return `${monthNames[parseInt(month) - 1]} ${year}`;
            }
            return year;
          };
          const vqStart = formatDate(volunqueer.startDate);
          const vqEnd = volunqueer.endDate ? formatDate(volunqueer.endDate) : 'Present';
          addText(`${vqStart} - ${vqEnd}`, 9);
          
          volunqueer.achievements.forEach(achievement => {
            addAchievement(achievement, 9, 3);
          });
          
          if (volunqueer.technologies) {
            addText(`Technologies: ${volunqueer.technologies.join(', ')}`, 8);
          }
          currentY += 1.5;
        }
      }

      // === AWARDS & CERTIFICATIONS (ON PAGE 1) ===
      if (variant === 'ats' && certifications.length > 0) {
        addSection('AWARDS & CERTIFICATIONS', 1.5);
        certifications.forEach(cert => {
          // Use issueDate directly since it's already formatted as year
          addText(`${cert.name} — ${cert.issuer} (${cert.issueDate})`, 9);
        });
        currentY += 1.5;
      }

      // === FORCE PAGE BREAK AFTER AWARDS (END OF PAGE 1) ===
      if (variant === 'ats' && currentPage === 1) {
        pdf.addPage();
        currentY = margin;
        currentPage++;
      }

      // === PROFESSIONAL EXPERIENCE ===
      addSection('PROFESSIONAL EXPERIENCE');
      
      // Filter out Volunqueer (shown in Technical Experience for ATS) and Sites by Mac, Tastemorr
      const jobsFilteredExperience = workExperience.filter(job => {
        if (variant === 'ats') {
          // ATS: Skip Volunqueer (already shown), Sites by Mac, and Tastemorr
          return job.id !== 'volunqueer' && job.id !== 'sites-by-mac' && job.id !== 'tastemorr-grain';
        } else {
          // Stylized: Show top 2 non-Volunqueer jobs
          return job.id !== 'volunqueer' && job.id !== 'sites-by-mac' && job.id !== 'tastemorr-grain';
        }
      }).slice(0, variant === 'stylized' ? 2 : 10);
      
      jobsFilteredExperience.forEach(job => {
        addText(`${job.title} | ${job.company}, ${job.location}`, 10, true);
        
        // Hardcode dates to avoid conversion issues
        let dateRange = '';
        if (job.id === 'correctional-officer') {
          dateRange = '2017 - 2024';
        } else if (job.id === 'kitchenaid-factory') {
          dateRange = '2015 - 2017';
        } else if (job.id === 'gti-greenville') {
          dateRange = '2012 - 2015';
        } else {
          // Fallback for any other jobs
          const startYear = job.startDate.length === 4 ? job.startDate : job.startDate.split('-')[0];
          const endYear = job.endDate ? (job.endDate.length === 4 ? job.endDate : job.endDate.split('-')[0]) : 'Present';
          dateRange = `${startYear} - ${endYear}`;
        }
        addText(dateRange, 9);
        
        let achievementsToShow;
        if (variant === 'stylized') {
          achievementsToShow = job.achievements.slice(0, 3);
        } else {
          // ATS: Show all bullets for TDCJ (7 categorized), all for KitchenAid, all for GTI
          achievementsToShow = job.achievements;
        }
        
        achievementsToShow.forEach(achievement => {
          addAchievement(achievement, 9, 3);
        });
        currentY += 1.5;
      });

      // === EDUCATION ===
      addSection('EDUCATION & TRAINING');
      
      // Show all 4 education entries for ATS (no filtering)
      const eduToShow = variant === 'stylized' ? education.slice(0, 2) : education;
      
      eduToShow.forEach(edu => {
        // Format: Degree | Institution
        addText(`${edu.degree}`, 10, true);
        
        // Format: Institution • Location • Date
        // Show month+year for General Assembly, year only for others
        const isGeneralAssembly = edu.id === 'general-assembly-2025';
        const dateOptions: Intl.DateTimeFormatOptions = isGeneralAssembly 
          ? { year: 'numeric', month: 'long' }
          : { year: 'numeric' };
        const completionDate = new Date(edu.graduationDate).toLocaleDateString('en-US', dateOptions);
        const locationPart = edu.location ? ` • ${edu.location}` : '';
        addText(`${edu.institution}${locationPart} • ${edu.inProgress ? 'In Progress' : completionDate}`, 9);
        
        // Show notes for all education entries
        if (edu.notes && variant === 'ats') {
          addText(edu.notes, 8, false, 3);
        }
        
        currentY += 0.5;
      });

      //=== PROJECTS (SIX PROJECTS FOR ATS) ===
      if (variant === 'ats') {
        addSection('SELECTED PROJECTS');
        
        // Column headers
        const projectHalfWidth = (contentWidth - 6) / 2;
        pdf.setFontSize(10);
        pdf.setFont('arial', 'bold');
        pdf.text('Published / Shipped', margin, currentY);
        pdf.text('Prototyping / New Tech', margin + projectHalfWidth + 6, currentY);
        currentY += 4;
        pdf.setFont('arial', 'normal');
        
        // LEFT COLUMN: Shipped/Published projects
        const leftProjects = [
          { 
            name: 'StirCraft', 
            desc: 'Full-stack Django application with 245 Python tests + 23 JavaScript tests achieving 100% critical path coverage. Built advanced search, vibe-based filtering, and a data-cleaning pipeline normalizing 400+ cocktails and 325+ ingredients. Implemented inline formsets, Redis caching, and Heroku deployment.'
          },
          { 
            name: 'SitesByMac.dev', 
            desc: 'Next.js 15/TypeScript portfolio with WCAG AA accessibility, dynamic content loading, automated resume PDF generation, Jest/RTL testing, and Vercel CI/CD deployment.'
          },
          { 
            name: 'DreamWeaver', 
            desc: 'Node.js/Express/MongoDB backend with JWT auth, RBAC, bcrypt hashing, ownership validation, admin safeguards, and a comprehensive realistic data seeding system.'
          }
        ];
        
        // RIGHT COLUMN: Prototyping stage/experiments
        const rightProjects = [
          { 
            name: 'HappeningHere', 
            desc: 'LLM-powered platform surfacing grassroots events, free meals, community resources, local sports, festivals, and neighborhood happenings within a zip-code radius. Optional SMS handoff for Google Maps links. Built with accessibility-first design and category-based filtering.'
          },
          { 
            name: 'BidOnThis', 
            desc: 'QR-based bidding system for community events, schools, and fundraisers. Features real-time bidding, SMS winner notifications, cashless/cashbox payment options, and a projector-friendly organizer dashboard with fundraising goal tracking and sponsor placements.'
          },
          { 
            name: 'Office Quartermaster', 
            desc: 'Tablet-optimized system with QR badge scanning for employee authentication and item checkout. Real-time low-stock alerts, multi-tier approval workflows (e.g., laptops require supervisor approval), audit-ready usage logs, and loss-prevention insights such as consumption anomalies and equipment lifecycle trends.'
          }
        ];
        
        // Render projects in 2 columns (side by side)
        const projectStartY = currentY;
        let leftY = projectStartY;
        let rightY = projectStartY;
        
        // Render left column
        leftProjects.forEach((project) => {
          if (leftY > pageHeight - margin - 8) return;
          
          pdf.setFontSize(9);
          pdf.setFont('arial', 'bold');
          pdf.text(project.name, margin, leftY);
          leftY += 3;
          
          pdf.setFontSize(8);
          pdf.setFont('arial', 'normal');
          const descLines = pdf.splitTextToSize(project.desc, projectHalfWidth - 2);
          descLines.forEach((line: string) => {
            if (leftY > pageHeight - margin - 3) return;
            pdf.text(line, margin, leftY);
            leftY += 2.5;
          });
          leftY += 2;
        });
        
        // Render right column
        rightProjects.forEach((project) => {
          if (rightY > pageHeight - margin - 8) return;
          
          pdf.setFontSize(9);
          pdf.setFont('arial', 'bold');
          pdf.text(project.name, margin + projectHalfWidth + 6, rightY);
          rightY += 3;
          
          pdf.setFontSize(8);
          pdf.setFont('arial', 'normal');
          const descLines = pdf.splitTextToSize(project.desc, projectHalfWidth - 2);
          descLines.forEach((line: string) => {
            if (rightY > pageHeight - margin - 3) return;
            pdf.text(line, margin + projectHalfWidth + 3, rightY);
            rightY += 2.5;
          });
          rightY += 2;
        });
        
        currentY = Math.max(leftY, rightY);
      }

      pdf.save(filename);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <button
      onClick={generatePDF}
      className={className}
      aria-label={`Download ${variant === 'ats' ? 'ATS-friendly' : 'stylized'} resume as PDF`}
    >
      <svg 
        className="w-5 h-5 mr-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
        />
      </svg>
      {variant === 'ats' ? 'ATS Resume (2-page)' : 'Stylized Resume (1-page)'}
    </button>
  );
}
