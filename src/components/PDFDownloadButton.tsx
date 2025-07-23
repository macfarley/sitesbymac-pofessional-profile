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
import { personalInfo, workExperience, education, skills, certifications, professionalAssociations, communityOutreach, references } from '../data/resume';

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
       * - margin: White space around edges (15mm = ~0.6 inches)
       * - contentWidth: Actual usable width for text
       * - currentY: Tracks vertical position as we add content
       * 
       * Cool Pattern: Use consistent margins for professional appearance
       */
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 15;
      const contentWidth = pageWidth - (margin * 2);
      let currentY = margin;

      /**
       * Text Addition Helper Function
       * 
       * This function handles the complex task of adding text with:
       * - Automatic line wrapping
       * - Page break detection and handling
       * - Font size and weight management
       * - Consistent spacing
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
        // For section headers, ensure we have enough space (at least 20mm) or start new page
        if (isSection && currentY > pageHeight - margin - 20) {
          pdf.addPage();
          currentY = margin;
        } else if (!isSection && currentY > pageHeight - margin - 10) {
          // For regular text, page break if less than 10mm space
          pdf.addPage();
          currentY = margin;
        }

        // Font configuration
        pdf.setFontSize(fontSize);
        pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
        
        // Text wrapping and positioning
        const lines = pdf.splitTextToSize(text, contentWidth - indent);
        lines.forEach((line: string) => {
          if (currentY > pageHeight - margin - 5) {
            pdf.addPage();
            currentY = margin;
          }
          pdf.text(line, margin + indent, currentY);
          currentY += fontSize * 0.4; // Line height calculation
        });
        currentY += isSection ? 2 : 1.5; // Different spacing for sections
      };

      /**
       * Section Header Helper Function
       * 
       * Creates consistent section headers throughout the document
       * with protection against orphaning
       * 
       * @param title - The section title (e.g., "PROFESSIONAL EXPERIENCE")
       * 
       * Cool Pattern: All-caps titles with larger font size for hierarchy
       */
      const addSection = (title: string) => {
        currentY += 3; // Section spacing
        addText(title, 13, true, 0, true); // 13pt bold for section headers, marked as section
        currentY += 1; // Space after header
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
      
      // Check if we have enough space for the skills section (at least 40mm)
      if (currentY > pageHeight - margin - 40) {
        pdf.addPage();
        currentY = margin;
        addSection('TECHNICAL SKILLS');
      }
      
      const halfContentWidth = (contentWidth - 10) / 2; // Account for column gap
      
      // Split skills into two equal columns
      const leftColumnSkills = skills.slice(0, Math.ceil(skills.length / 2));
      const rightColumnSkills = skills.slice(Math.ceil(skills.length / 2));
      
      const startY = currentY;
      let leftY = startY;
      let rightY = startY;
      
      // Left column rendering
      leftColumnSkills.forEach(skillCategory => {
        if (leftY > pageHeight - margin - 20) return; // Stop if near page end
        
        // Category name in bold
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${skillCategory.category}:`, margin, leftY);
        leftY += 3.5;
        
        // Skills list in normal weight
        pdf.setFontSize(8);
        pdf.setFont('helvetica', 'normal');
        const skillLines = pdf.splitTextToSize(skillCategory.skills.join(', '), halfContentWidth);
        skillLines.forEach((line: string) => {
          pdf.text(line, margin, leftY);
          leftY += 3;
        });
        leftY += 2;
      });
      
      // Right column rendering (same pattern, different X position)
      rightColumnSkills.forEach(skillCategory => {
        if (rightY > pageHeight - margin - 20) return;
        
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${skillCategory.category}:`, margin + halfContentWidth + 5, rightY);
        rightY += 3.5;
        
        pdf.setFontSize(8);
        pdf.setFont('helvetica', 'normal');
        const skillLines = pdf.splitTextToSize(skillCategory.skills.join(', '), halfContentWidth);
        skillLines.forEach((line: string) => {
          pdf.text(line, margin + halfContentWidth + 5, rightY);
          rightY += 3;
        });
        rightY += 2;
      });
      
      // Continue layout from the bottom of both columns
      currentY = Math.max(leftY, rightY) + 3;

      // === WORK EXPERIENCE SECTION ===
      addSection('PROFESSIONAL EXPERIENCE');
      workExperience.forEach(job => {
        addText(`${job.title} | ${job.company}, ${job.location}`, 10, true);
        addText(`${job.startDate} - ${job.current ? 'Present' : job.endDate}`, 9);
        // Focus on achievements rather than job descriptions for impact
        job.achievements.forEach(achievement => {
          addText(`• ${achievement}`, 9, false, 3); // 3mm indent for bullets
        });
        currentY += 2; // Space between jobs for readability
      });

      // === EDUCATION SECTION ===
      addSection('EDUCATION & TRAINING');
      education.forEach(edu => {
        addText(`${edu.degree} | ${edu.institution}`, 10, true);
        addText(`Completed: ${new Date(edu.graduationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}`, 9);
        if (edu.relevantCoursework) {
          addText('Key Coursework:', 9, true);
          addText(edu.relevantCoursework.join(', '), 8, false, 3);
        }
        currentY += 1;
      });

      // === CERTIFICATIONS SECTION ===
      if (certifications.length > 0) {
        addSection('CERTIFICATIONS');
        certifications.forEach(cert => {
          addText(`${cert.name} | ${cert.issuer} | ${cert.issueDate}`, 9);
        });
      }

      // === PROFESSIONAL ASSOCIATIONS SECTION ===
      // Condensed format to save space while showing involvement
      addSection('PROFESSIONAL ASSOCIATIONS');
      professionalAssociations.forEach(assoc => {
        addText(`${assoc.name} - ${assoc.status}`, 9, true);
      });

      // === COMMUNITY OUTREACH SECTION ===
      addSection('COMMUNITY OUTREACH');
      communityOutreach.forEach(community => {
        addText(`${community.name} - ${community.status}`, 9, true);
      });

      // === REFERENCES SECTION ===
      addSection('REFERENCES');
      references.forEach(ref => {
        addText(`${ref.name} | ${ref.title} at ${ref.company}`, 9, true);
        addText(`Email: ${ref.email}`, 9);
      });

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
