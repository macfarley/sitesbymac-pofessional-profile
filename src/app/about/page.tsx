import CollapsibleAboutSections from './CollapsibleAboutSections';
import { personalInfo } from '../../data/resume';
import ResumeDownloadButtons from '../../components/ResumeDownloadButtons';

export const metadata = {
  title: 'About - Mac McCoy | Full-Stack Developer',
  description: 'Learn about Mac McCoy\'s background, education, experience, and technical skills in full-stack web development.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-stone-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-800">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-amber-100 to-stone-200 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700 text-amber-900 dark:text-gray-100 py-16 px-4 print:bg-white print:text-black print:py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 print:text-3xl print:text-black">
            About {personalInfo.name}
          </h1>
          <p className="text-lg sm:text-xl text-amber-800 dark:text-gray-300 mb-6 print:text-gray-600 print:text-lg">
            {personalInfo.title}
          </p>
          <div className="flex justify-center gap-4 sm:gap-6 text-base sm:text-sm flex-wrap print:text-black">
            <span>{personalInfo.location}</span>
            <span className="hidden sm:inline">•</span>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 focus:text-blue-800 dark:focus:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-amber-100 dark:focus:ring-offset-gray-800 transition-colors duration-200 underline decoration-2 decoration-blue-600/50 dark:decoration-blue-400/50 hover:decoration-blue-800 dark:hover:decoration-blue-300 print:text-black print:no-underline"
              aria-label="Send email to Travis McCoy"
            >
              {personalInfo.email}
            </a>
            {personalInfo.phone && (
              <>
                <span className="hidden sm:inline">•</span>
                <a 
                  href={`tel:+1${personalInfo.phone.replace(/\D/g, '')}`}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 focus:text-blue-800 dark:focus:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-amber-100 dark:focus:ring-offset-gray-800 transition-colors duration-200 underline decoration-2 decoration-blue-600/50 dark:decoration-blue-400/50 hover:decoration-blue-800 dark:hover:decoration-blue-300 print:text-black print:no-underline"
                  aria-label="Call Travis McCoy"
                >
                  {personalInfo.phone}
                </a>
              </>
            )}
          </div>
          {/* PDF Download Button - Hidden in print */}
          <div className="mt-8 print:hidden flex gap-4 justify-center">
            <ResumeDownloadButtons />
          </div>
        </div>
      </div>
      <div id="resume-content" className="max-w-4xl mx-auto py-16 px-4 print:py-4 print:px-2 print:text-sm">
        <CollapsibleAboutSections />
      </div>
    </div>
  );
}
