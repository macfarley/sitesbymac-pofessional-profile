'use client';

import jsPDF from 'jspdf';
import { personalInfo, workExperience, education, skills, certifications, professionalAssociations, communityOutreach, references } from '../data/resume';

interface PDFDownloadButtonProps {
  targetId?: string;
  filename?: string;
  className?: string;
}

export default function PDFDownloadButton({ 
  filename = 'Travis_McCoy_Resume.pdf',
  className = '' 
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
      const margin = 15;
      const contentWidth = pageWidth - (margin * 2);
      let currentY = margin;

      // Helper function to add text with automatic page breaks
      const addText = (text: string, fontSize: number = 10, isBold: boolean = false, indent: number = 0) => {
        if (currentY > pageHeight - margin) {
          pdf.addPage();
          currentY = margin;
        }

        pdf.setFontSize(fontSize);
        pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
        
        const lines = pdf.splitTextToSize(text, contentWidth - indent);
        lines.forEach((line: string) => {
          if (currentY > pageHeight - margin) {
            pdf.addPage();
            currentY = margin;
          }
          pdf.text(line, margin + indent, currentY);
          currentY += fontSize * 0.4; // Reduced line spacing
        });
        currentY += 1.5; // Reduced spacing after blocks
      };

      const addSection = (title: string) => {
        currentY += 2; // Reduced section spacing
        addText(title, 13, true); // Slightly smaller headers
        currentY += 1; // Reduced spacing after headers
      };

      // Header
      addText(personalInfo.name, 18, true);
      addText(`${personalInfo.title} | ${personalInfo.location}`, 12);
      addText(`${personalInfo.phone} | ${personalInfo.email}`, 10);
      addText(`LinkedIn: ${personalInfo.linkedin}`, 10);
      addText(`GitHub: ${personalInfo.github}`, 10);
      
      // Professional Summary
      addSection('PROFESSIONAL SUMMARY');
      addText(personalInfo.summary, 10);

      // Technical Skills - 2 column layout
      addSection('TECHNICAL SKILLS');
      const halfContentWidth = (contentWidth - 10) / 2; // Account for column gap
      
      // Split skills into two columns
      const leftColumnSkills = skills.slice(0, Math.ceil(skills.length / 2));
      const rightColumnSkills = skills.slice(Math.ceil(skills.length / 2));
      
      const startY = currentY;
      let leftY = startY;
      let rightY = startY;
      
      // Left column
      leftColumnSkills.forEach(skillCategory => {
        if (leftY > pageHeight - margin - 20) return; // Stop if near page end
        
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${skillCategory.category}:`, margin, leftY);
        leftY += 3.5;
        
        pdf.setFontSize(8);
        pdf.setFont('helvetica', 'normal');
        const skillLines = pdf.splitTextToSize(skillCategory.skills.join(', '), halfContentWidth);
        skillLines.forEach((line: string) => {
          pdf.text(line, margin, leftY);
          leftY += 3;
        });
        leftY += 2;
      });
      
      // Right column
      rightColumnSkills.forEach(skillCategory => {
        if (rightY > pageHeight - margin - 20) return; // Stop if near page end
        
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
      
      currentY = Math.max(leftY, rightY) + 3;

      // Work Experience
      addSection('PROFESSIONAL EXPERIENCE');
      workExperience.forEach(job => {
        addText(`${job.title} | ${job.company}, ${job.location}`, 10, true);
        addText(`${job.startDate} - ${job.current ? 'Present' : job.endDate}`, 9);
        // Skip job description to save space, go straight to achievements
        job.achievements.forEach(achievement => {
          addText(`• ${achievement}`, 9, false, 3);
        });
        currentY += 1; // Minimal spacing between jobs
      });

      // Force page break before Education section
      pdf.addPage();
      currentY = margin;

      // Education
      addSection('EDUCATION & TRAINING');
      education.forEach(edu => {
        addText(`${edu.degree} | ${edu.institution}`, 10, true);
        addText(`Completed: ${new Date(edu.graduationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}`, 9);
        if (edu.relevantCoursework) {
          addText('Key Coursework:', 9, true);
          addText(edu.relevantCoursework.join(', '), 8, false, 3);
        }
        currentY += 1; // Minimal spacing between education entries
      });

      // Certifications
      if (certifications.length > 0) {
        addSection('CERTIFICATIONS');
        certifications.forEach(cert => {
          addText(`${cert.name} | ${cert.issuer} | ${cert.issueDate}`, 9);
        });
      }

      // Professional Associations - Condensed
      addSection('PROFESSIONAL ASSOCIATIONS');
      professionalAssociations.forEach(assoc => {
        addText(`${assoc.name} - ${assoc.status}`, 9, true);
        // Skip description to save space
      });

      // Community Outreach - Condensed  
      addSection('COMMUNITY OUTREACH');
      communityOutreach.forEach(community => {
        addText(`${community.name} - ${community.status}`, 9, true);
        // Skip description to save space
      });

      // References
      addSection('REFERENCES');
      references.forEach(ref => {
        addText(`${ref.name} | ${ref.title} at ${ref.company}`, 9, true);
        addText(`Email: ${ref.email}`, 9);
      });

      // Download the PDF
      pdf.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <button
      onClick={generatePDF}
      className={`inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium ${className}`}
    >
      <svg 
        className="w-5 h-5 mr-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
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
