import { personalInfo, education, workExperience, skills, certifications } from '../../data/resume';
import { getFeaturedProjects } from '../../data/projects';
import PDFDownloadButton from '../../components/PDFDownloadButton';

export const metadata = {
  title: 'About - Mac McCoy | Full Stack Developer',
  description: 'Learn about Mac McCoy\'s background, education, experience, and technical skills in full stack web development.',
};

export default function AboutPage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-amber-100 to-stone-200 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700 text-amber-900 dark:text-gray-100 py-16 px-4 print:bg-white print:text-black print:py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 print:text-3xl print:text-black">
            About {personalInfo.name}
          </h1>
          <p className="text-xl text-amber-800 dark:text-gray-300 mb-6 print:text-gray-600 print:text-lg">
            {personalInfo.title}
          </p>
          <div className="flex justify-center gap-6 text-sm print:text-black">
            <span>{personalInfo.location}</span>
            <span>•</span>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="hover:text-amber-700 dark:hover:text-cyan-400 transition-colors print:text-black print:no-underline"
            >
              {personalInfo.email}
            </a>
            {personalInfo.phone && (
              <>
                <span>•</span>
                <span>{personalInfo.phone}</span>
              </>
            )}
          </div>
          
          {/* PDF Download Button - Hidden in print */}
          <div className="mt-8 print:hidden">
            <PDFDownloadButton 
              targetId="resume-content"
              filename="Travis_McCoy_Resume.pdf"
              className="mx-auto"
            />
          </div>
        </div>
      </div>

      <div id="resume-content" className="max-w-4xl mx-auto py-16 px-4 print:py-8 print:px-0">
        {/* Professional Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Summary
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillCategory, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((job) => (
              <div 
                key={job.id}
                className="border-l-4 border-blue-500 pl-6 pb-6"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {job.company} {job.location && `• ${job.location}`}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {job.startDate} - {job.current ? 'Present' : job.endDate}
                  </p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {job.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {job.achievements.map((achievement, index) => (
                    <li 
                      key={index}
                      className="text-gray-600 dark:text-gray-300 flex items-start"
                    >
                      <span className="text-blue-500 mr-2 mt-1.5">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                
                {job.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    Live Demo →
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:underline text-sm"
                    >
                      Code →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Education & Training
          </h2>
          {education.map((edu) => (
            <div 
              key={edu.id}
              className="border-l-4 border-green-500 pl-6 mb-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {edu.degree}
              </h3>
              <p className="text-green-600 dark:text-green-400 font-medium">
                {edu.institution}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Completed: {new Date(edu.graduationDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long'
                })}
              </p>
              
              {edu.relevantCoursework && (
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Relevant Coursework:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCoursework.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Certifications */}
        {certifications.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {cert.issuer} • {cert.issueDate}
                    </p>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Links */}
        <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Let&apos;s Connect
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Email Me
            </a>
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                LinkedIn
              </a>
            )}
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
