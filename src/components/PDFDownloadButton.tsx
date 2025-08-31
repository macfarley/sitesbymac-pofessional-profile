/**
 * PDF Download Button Component for Sites by Mac Portfolio
 * 
 * This component generates and downloads a professional PDF resume using jsPDF.
 * It's designed to create a clean, ATS-friendly resume format that's optimized
 * for both human readers and applicant tracking systems.
 * 
 * Key Features:
 * - Programmatic PDF generation (no DOM rendering required)
 * - Automatic page breaks and text wrapping
 * - Two-column skills layout for space efficiency
 * - Professional typography and spacing
 * - Data-driven content from resume.ts
 * 
 * Technical Approach:
 * - Uses jsPDF for direct PDF creation (faster than DOM-to-PDF)
 * - Calculates layout mathematically for consistent results
 * - Handles text overflow and pagination automatically
 * - Optimized for A4 paper size with proper margins
 */

'use client';

import jsPDF from 'jspdf';
import { personalInfo, workExperience, education, skills, certifications, professionalAssociations, activities } from '../data/resume';
import { WorkExperience } from '../types/resume';

/**
 * Component Props Interface
 * 
 * @param targetId - Currently unused, kept for future DOM-based generation
 * @param filename - Name of the downloaded PDF file
 * @param className - Additional CSS classes for styling the button
 */
interface PDFDownloadButtonProps {
  targetId?: string;
  filename?: string;
  className?: string;
}

export default function PDFDownloadButton({ 
  filename = 'Travis_McCoy_Resume.pdf',
  className = '' 
}: PDFDownloadButtonProps) {
  /**
   * PDF Generation Function
   * 
   * This is the core function that creates the entire PDF document.
   * It uses a programmatic approach rather than converting HTML to PDF
   * for better control over layout and typography.
   * 
   * Cool Technical Details:
   * - Calculates all positions mathematically
   * - Uses helper functions for consistent spacing
   * - Implements automatic page breaks
   * - Handles text wrapping with jsPDF's splitTextToSize
   */
  const generatePDF = async () => {
    try {
      /**
       * PDF Configuration
       * 
       * These settings create a standard A4 resume format:
       * - Portrait orientation (tall, not wide)
       * - Millimeter units for precise positioning
       * - A4 format (210 x 297 mm) - international standard
       * 
       * Cool Setting: Use 'letter' format for US-specific resumes
       */
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      /**
       * Layout Constants
       * 
       * These values control the overall document layout:
       * - pageWidth/Height: Available space for content
       * - margin: White space around edges (12mm = ~0.47 inches for tighter margins)
       * - contentWidth: Actual usable width for text
       * - currentY: Tracks vertical position as we add content
       * - maxPages: Strict 2-page limit
       * 
       * Cool Pattern: Use tighter margins for maximum content density
       */
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 12; // Reduced from 15mm for more space
      const contentWidth = pageWidth - (margin * 2);
      const maxPages = 2; // Strict 2-page limit
      let currentY = margin;
      let currentPage = 1;

      /**
       * Text Addition Helper Function
       * 
       * This function handles the complex task of adding text with:
       * - Automatic line wrapping
       * - Page break detection and handling (optimized for 2-page filling)
       * - Font size and weight management
       * - Balanced spacing for full page utilization
       * - Section break protection
       * 
       * @param text - The text content to add
       * @param fontSize - Size in points (10pt = standard body text)
       * @param isBold - Whether to use bold font weight
       * @param indent - Left indentation in mm (for bullet points)
       * @param isSection - Whether this is a section header (prevents orphaning)
       * 
       * Cool Technical Detail: Uses splitTextToSize for automatic wrapping
       */
      const addText = (text: string, fontSize: number = 10, isBold: boolean = false, indent: number = 0, isSection: boolean = false) => {
        // More lenient page break logic - allow more content per page
        if (isSection && currentY > pageHeight - margin - 12) {
          if (currentPage < maxPages) {
            pdf.addPage();
            currentY = margin;
            currentPage++;
          } else if (currentPage === maxPages && currentY > pageHeight - margin - 8) {
            return; // Only skip if really at the very bottom of page 2
          }
        } else if (!isSection && currentY > pageHeight - margin - 6) {
          // For regular text, be more aggressive about filling pages
          if (currentPage < maxPages) {
            pdf.addPage();
            currentY = margin;
            currentPage++;
          } else if (currentPage === maxPages && currentY > pageHeight - margin - 4) {
            return; // Only skip if at very bottom of page 2
          }
        }

        // Font configuration
        pdf.setFontSize(fontSize);
        pdf.setFont('arial', isBold ? 'bold' : 'normal');
        
        // Text wrapping and positioning
        const lines = pdf.splitTextToSize(text, contentWidth - indent);
        lines.forEach((line: string) => {
          if (currentY > pageHeight - margin - 4) {
            if (currentPage < maxPages) {
              pdf.addPage();
              currentY = margin;
              currentPage++;
            } else {
              return; // Skip only if we're truly at the bottom of page 2
            }
          }
          pdf.text(line, margin + indent, currentY);
          currentY += fontSize * 0.35; // Maintain tight line height
        });
        currentY += isSection ? 1.5 : 1; // Maintain compact spacing
      };

      /**
       * Section Header Helper Function
       * 
       * Creates consistent section headers throughout the document
       * with protection against orphaning and tighter spacing
       * 
       * @param title - The section title (e.g., "PROFESSIONAL EXPERIENCE")
       * 
       * Cool Pattern: All-caps titles with larger font size for hierarchy
       */
      const addSection = (title: string) => {
        currentY += 2; // Reduced section spacing (from 3)
        addText(title, 13, true, 0, true); // 13pt bold for section headers, marked as section
        currentY += 0.5; // Reduced space after header (from 1)
      };

      /**
       * DOCUMENT CONTENT GENERATION
       * 
       * The following sections build the resume content in order:
       * 1. Header with contact information
       * 2. Professional summary
       * 3. Technical skills (two-column layout)
       * 4. Work experience with achievements
       * 5. Education and training
       * 6. Certifications
       * 7. Professional associations
       * 8. Community outreach
       * 9. References
       */

      // === HEADER SECTION ===
      // Uses larger fonts for name and title for visual hierarchy
      addText(personalInfo.name, 18, true);  // 18pt for name - largest font
      addText(`${personalInfo.title} | ${personalInfo.location}`, 12);  // 12pt for title
      addText(`Profile: ${personalInfo.website}`, 11, true);  // 11pt bold for profile website
      addText(`${personalInfo.phone} | ${personalInfo.email}`, 10);     // 10pt for contact
      addText(`LinkedIn: ${personalInfo.linkedin}`, 10);
      addText(`GitHub: ${personalInfo.github}`, 10);
      
      // === PROFESSIONAL SUMMARY ===
      addSection('PROFESSIONAL SUMMARY');
      addText(personalInfo.summary, 10);

      // === TECHNICAL SKILLS SECTION ===
      // This section uses a two-column layout to maximize space efficiency
      addSection('TECHNICAL SKILLS');
      
      /**
       * Two-Column Skills Layout
       * 
       * Cool Technical Implementation:
       * - Calculates half-width for each column
       * - Splits skills array into two equal parts
       * - Tracks Y position for each column independently
       * - Uses the maximum Y position to continue layout
       * - Ensures enough space or starts new page
       * 
       * This pattern can be reused for any two-column content
       */
      
      // Check if we have enough space for the skills section (at least 30mm)
      if (currentY > pageHeight - margin - 30) {
        if (currentPage < maxPages) {
          pdf.addPage();
          currentY = margin;
          currentPage++;
          addSection('TECHNICAL SKILLS');
        }
      }
      
      const halfContentWidth = (contentWidth - 8) / 2; // Account for column gap (reduced from 10)
      
      // Split skills into two equal columns
      const leftColumnSkills = skills.slice(0, Math.ceil(skills.length / 2));
      const rightColumnSkills = skills.slice(Math.ceil(skills.length / 2));
      
      const startY = currentY;
      let leftY = startY;
      let rightY = startY;
      
      // Left column rendering
      leftColumnSkills.forEach(skillCategory => {
        if (leftY > pageHeight - margin - 15 || currentPage >= maxPages) return; // Stop if near page end or page limit
        
        // Category name in bold
        pdf.setFontSize(10);
        pdf.setFont('arial', 'bold');
        pdf.text(`${skillCategory.category}:`, margin, leftY);
        leftY += 3.5; // Tighter spacing (reduced from 4)
        
        // Skills list in normal weight
        pdf.setFontSize(9); // Slightly smaller font (reduced from 10)
        pdf.setFont('arial', 'normal');
        const skillLines = pdf.splitTextToSize(skillCategory.skills.join(', '), halfContentWidth);
        skillLines.forEach((line: string) => {
          pdf.text(line, margin, leftY);
          leftY += 3; // Tighter line spacing (reduced from 3.5)
        });
        leftY += 1.5; // Reduced spacing between categories (from 2)
      });
      
      // Right column rendering (same pattern, different X position)
      rightColumnSkills.forEach(skillCategory => {
        if (rightY > pageHeight - margin - 15 || currentPage >= maxPages) return;
        
        pdf.setFontSize(10);
        pdf.setFont('arial', 'bold');
        pdf.text(`${skillCategory.category}:`, margin + halfContentWidth + 4, rightY); // Reduced gap from 5 to 4
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
      
      // Continue layout from the bottom of both columns
      currentY = Math.max(leftY, rightY) + 2; // Reduced spacing (from 3)

      /**
       * Calculate Space Needed for Job Entry
       * 
       * This helper function estimates how much vertical space a complete job entry will need
       * to prevent splitting job entries across pages. It accounts for text wrapping.
       * 
       * @param job - The work experience job object
       * @returns estimated height in mm
       */
      const calculateJobHeight = (job: WorkExperience) => {
        let height = 0;
        
        // Title line (with text wrapping consideration)
        pdf.setFontSize(10);
        pdf.setFont('arial', 'bold');
        const titleLines = pdf.splitTextToSize(`${job.title} | ${job.company}, ${job.location}`, contentWidth);
        height += titleLines.length * 4;
        
        // Date line
        height += 3.5;
        
        // Achievement lines (with text wrapping)
        pdf.setFontSize(9);
        pdf.setFont('arial', 'normal');
        job.achievements.forEach(achievement => {
          const achievementLines = pdf.splitTextToSize(`• ${achievement}`, contentWidth - 3);
          height += achievementLines.length * 3.6;
        });
        
        height += 3; // Spacing after job
        return height;
      };

      // === WORK EXPERIENCE SECTION ===
      addSection('PROFESSIONAL EXPERIENCE');
      workExperience.forEach(job => {
        // Calculate space needed for this entire job entry
        const jobHeight = calculateJobHeight(job);
        
        // Check if we have enough space for the complete job entry
        if (currentY + jobHeight > pageHeight - margin - 10) {
          if (currentPage < maxPages) {
            pdf.addPage();
            currentY = margin;
            currentPage++;
          }
        }
        
        addText(`${job.title} | ${job.company}, ${job.location}`, 10, true);
        addText(`${job.startDate} - ${job.current ? 'Present' : job.endDate}`, 9);
        // Show more achievements for the first job (StirCraft), fewer for others
        const achievementsToShow = job.id === 'stircraft-team-lead' ? job.achievements.slice(0, 6) : job.achievements.slice(0, 3);
        achievementsToShow.forEach(achievement => {
          addText(`• ${achievement}`, 9, false, 3); // 3mm indent for bullets
        });
        currentY += 1.5; // Space between jobs
      });

      // === EDUCATION SECTION ===
      addSection('EDUCATION & TRAINING');
      education.forEach(edu => {
        // Calculate space needed for this education entry
        let eduHeight = 6; // Base height for degree + date lines
        if (edu.relevantCoursework) {
          eduHeight += 4; // Additional height for coursework section
          const courseworkLines = pdf.splitTextToSize(edu.relevantCoursework.join(', '), contentWidth - 3);
          eduHeight += courseworkLines.length * 2.8;
        }
        if (edu.leadership) {
          eduHeight += 3; // Header for leadership section
          eduHeight += edu.leadership.length * 3;
        }
        eduHeight += 1.5; // Spacing
        
        // Check if we have enough space for the complete education entry
        if (currentY + eduHeight > pageHeight - margin - 10) {
          if (currentPage < maxPages) {
            pdf.addPage();
            currentY = margin;
            currentPage++;
          }
        }
        
        addText(`${edu.degree} | ${edu.institution}`, 10, true);
        addText(`${edu.inProgress ? 'Expected Completion: ' : 'Completed: '}${new Date(edu.graduationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}`, 9);
        if (edu.relevantCoursework) {
          addText('Key Coursework:', 9, true);
          // Show more coursework for General Assembly, less for others
          const courseworkToShow = edu.id === 'general-assembly-2025' ? edu.relevantCoursework : edu.relevantCoursework.slice(0, 5);
          addText(courseworkToShow.join(', '), 8, false, 3);
        }
        if (edu.leadership) {
          addText('Leadership:', 9, true);
          edu.leadership.forEach(role => {
            addText(`• ${role}`, 9, false, 3);
          });
        }
        currentY += 0.5; // Spacing between education entries
      });

      // === CERTIFICATIONS SECTION ===
      if (certifications.length > 0) {
        addSection('CERTIFICATIONS');
        certifications.forEach(cert => {
          addText(`${cert.name} | ${cert.issuer} | ${cert.issueDate}`, 9);
        });
      }

      // === PROFESSIONAL ASSOCIATIONS SECTION ===
      addSection('PROFESSIONAL ASSOCIATIONS');
      professionalAssociations.slice(0, 3).forEach(association => { // Show top 3 associations
        addText(`${association.name} - ${association.status}`, 9);
      });

      // === ACTIVITIES & INTERESTS SECTION ===
      addSection('ACTIVITIES & INTERESTS');
      activities.slice(0, 2).forEach(activity => { // Show top 2 activities
        addText(`${activity.name} - ${activity.status}`, 9);
      });

      // === REFERENCES SECTION ===
      // Always include references, even if it's at the very bottom of page 2
      addSection('REFERENCES');
      addText('References available upon request.', 10);

      /**
       * PDF Download
       * 
       * The save() method triggers the browser's download functionality
       * with the specified filename. The PDF is generated entirely in
       * memory before download.
       */
      pdf.save(filename);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      // In production, you might want to show a user-friendly error message
    }
  };

  /**
   * Button Component Render
   * 
   * Returns a styled button with:
   * - PDF download icon (SVG)
   * - Hover effects
   * - Accessible design
   * - Custom styling support via className prop
   * 
   * Cool Pattern: The SVG icon is inline for better performance
   * and styling control compared to external icon libraries
   */
  return (
    <button
      onClick={generatePDF}
      className={`inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium ${className}`}
      aria-label="Download resume as PDF file"
    >
      {/* PDF Download Icon - Heroicons outline style */}
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
      Download PDF Resume
    </button>
  );
}
