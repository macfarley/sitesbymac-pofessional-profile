/**
 * PDF Download Button Component for Sites by Mac Portfolio
 *
 * Serves pre-generated resume PDFs from /public to avoid runtime dependence
 * on private source data files.
 */

'use client';

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
  const href = variant === 'ats' ? '/resume_ats.pdf' : '/resume_styled.pdf';
  const label = variant === 'ats' ? 'ATS Resume (2-page)' : 'Stylized Resume (1-page)';

  return (
    <a
      href={href}
      download={filename}
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
      {label}
    </a>
  );
}
