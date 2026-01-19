'use client';

import PDFDownloadButton from './PDFDownloadButton';

export default function ResumeDownloadButtons() {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      <PDFDownloadButton 
        filename="Travis_McCoy_Resume_ATS.pdf"
        variant="ats"
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      />
      <a 
        href="/resume_styled.pdf"
        download="Travis_McCoy_Resume_Stylized.pdf"
        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        <span>Stylized Resume</span>
      </a>
    </div>
  );
}
