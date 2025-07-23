import { personalInfo, education, workExperience, skills, certifications, professionalAssociations, activities, communityOutreach } from '../../data/resume';
import { getFeaturedProjects } from '../../data/projects';
import PDFDownloadButton from '../../components/PDFDownloadButton';

export const metadata = {
  title: 'About - Mac McCoy | Full-Stack Developer',
  description: 'Learn about Mac McCoy\'s background, education, experience, and technical skills in full-stack web development.',
};

export default function AboutPage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-gray-900">
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
          <div className="mt-8 print:hidden">
            <PDFDownloadButton 
              filename="Travis_McCoy_Resume.pdf"
              className="mx-auto"
            />
          </div>
        </div>
      </div>

      <div id="resume-content" className="max-w-4xl mx-auto py-16 px-4 print:py-4 print:px-2 print:text-sm">
        {/* Professional Summary */}
        <section className="mb-16 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 print:text-xl print:mb-3 print:text-black">
            Professional Summary
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none print:prose-sm">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed print:text-black print:leading-normal">
              {personalInfo.summary}
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16 print:mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 print:text-xl print:mb-4 print:text-black">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6 print:grid-cols-3 print:gap-3">
            {skills.map((skillCategory, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 print:bg-white print:p-2 print:border print:border-gray-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 print:text-sm print:mb-2 print:text-black">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-2 print:gap-1">
                  {skillCategory.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-200 dark:bg-slate-700 text-blue-900 dark:text-gray-100 text-sm rounded-full font-medium border border-blue-300 dark:border-slate-600 print:px-1 print:py-0 print:bg-gray-100 print:text-black print:text-xs print:rounded print:border-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Associations & Community Outreach */}
        <section className="mb-16 print:mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 print:text-xl print:mb-4 print:text-black">
            Professional Associations & Community Outreach
          </h2>
          <div className="grid md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-4">
            {/* Professional Associations */}
            <div>
              <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-400 mb-4 print:text-base print:mb-2 print:text-black">
                Professional Associations
              </h3>
              <div className="space-y-3 print:space-y-1">
                {professionalAssociations.map((association) => (
                  <div 
                    key={association.id}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 print:bg-white print:p-2 print:border print:border-gray-300"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white print:text-sm print:text-black">
                      {association.name}
                    </h4>
                    <p className="text-amber-700 dark:text-amber-400 text-sm print:text-xs print:text-black">
                      {association.status}
                    </p>
                    {association.description && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 print:text-xs print:text-black">
                        {association.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Community Outreach */}
            <div>
              <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-400 mb-4 print:text-base print:mb-2 print:text-black">
                Community Outreach
              </h3>
              <div className="space-y-3 print:space-y-1">
                {communityOutreach.map((community) => (
                  <div 
                    key={community.id}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 print:bg-white print:p-2 print:border print:border-gray-300"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white print:text-sm print:text-black">
                      {community.name}
                    </h4>
                    <p className="text-amber-700 dark:text-amber-400 text-sm print:text-xs print:text-black">
                      {community.status}
                    </p>
                    {community.description && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 print:text-xs print:text-black">
                        {community.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16 print:mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 print:text-xl print:mb-4 print:text-black">
            Professional Experience
          </h2>
          <div className="space-y-8 print:space-y-4">
            {workExperience.map((job) => (
              <div 
                key={job.id}
                className="border-l-4 border-blue-500 pl-6 pb-6 print:border-l-2 print:pl-3 print:pb-3"
              >
                <div className="mb-4 print:mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white print:text-base print:text-black">
                    {job.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium print:text-black print:text-sm">
                    {job.company} {job.location && `• ${job.location}`}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm print:text-black print:text-xs">
                    {job.startDate} - {job.current ? 'Present' : job.endDate}
                  </p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 print:text-black print:text-sm print:mb-2">
                  {job.description}
                </p>
                
                <ul className="space-y-2 mb-4 print:space-y-1 print:mb-2">
                  {job.achievements.map((achievement, index) => (
                    <li 
                      key={index}
                      className="text-gray-600 dark:text-gray-300 flex items-start print:text-black print:text-sm"
                    >
                      <span className="text-blue-500 mr-2 mt-1.5 print:text-black">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                
                {job.technologies && (
                  <div className="flex flex-wrap gap-2 print:gap-1">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded print:px-1 print:py-0 print:bg-gray-100 print:text-black print:text-xs"
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
        <section className="mb-16 print:mb-6 print:hidden">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 print:text-xl print:mb-4 print:text-black">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-3">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 print:bg-white print:p-3 print:border print:border-gray-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 print:text-base print:text-black">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 print:text-black print:text-sm print:mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 print:gap-1 print:mb-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded print:px-1 print:py-0 print:bg-gray-100 print:text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 print:hidden">
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
        <section className="mb-16 print:mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 print:text-xl print:mb-4 print:text-black">
            Education & Training
          </h2>
          {education.map((edu) => (
            <div 
              key={edu.id}
              className="border-l-4 border-green-500 pl-6 mb-6 print:border-l-2 print:pl-3 print:mb-3"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white print:text-base print:text-black">
                {edu.degree}
              </h3>
              <p className="text-green-600 dark:text-green-400 font-medium print:text-black print:text-sm">
                {edu.institution}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 print:text-black print:text-xs print:mb-2">
                {edu.inProgress ? 'Expected Completion: ' : 'Completed: '}{new Date(edu.graduationDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long'
                })}
              </p>
              
              {edu.relevantCoursework && (
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2 print:text-black print:text-sm print:mb-1">
                    Relevant Coursework:
                  </h4>
                  <div className="flex flex-wrap gap-2 print:gap-1">
                    {edu.relevantCoursework.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded print:px-1 print:py-0 print:bg-gray-100 print:text-black"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.leadership && (
                <div className="mt-3 print:mt-1">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2 print:text-black print:text-sm print:mb-1">
                    Leadership:
                  </h4>
                  <ul className="space-y-1 print:space-y-0">
                    {edu.leadership.map((role, index) => (
                      <li
                        key={index}
                        className="text-amber-700 dark:text-amber-400 text-sm print:text-xs print:text-black"
                      >
                        • {role}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Certifications */}
        {certifications.length > 0 && (
          <section className="mb-16 print:mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 print:text-xl print:mb-4 print:text-black">
              Certifications
            </h2>
            <div className="space-y-4 print:space-y-2">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 rounded-lg p-4 print:bg-white print:p-2 print:border print:border-gray-300"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white print:text-black print:text-sm">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 print:text-black print:text-xs">
                      {cert.issuer} • {cert.issueDate}
                    </p>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline print:hidden"
                    >
                      View →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Professional Associations */}
        <section className="mb-16 print:mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 print:text-xl print:mb-4 print:text-black">
            Professional Associations & Memberships
          </h2>
          <div className="space-y-4 print:space-y-2">
            {professionalAssociations.map((association) => (
              <div 
                key={association.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 print:bg-white print:p-2 print:border print:border-gray-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white print:text-black print:text-sm">
                      {association.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm print:text-black print:text-xs">
                      {association.status}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 print:text-black print:text-xs print:mt-0">
                      {association.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activities & Interests */}
        <section className="mb-16 print:mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 print:text-xl print:mb-4 print:text-black">
            Community Activities & Interests
          </h2>
          <div className="space-y-4 print:space-y-2">
            {activities.map((activity) => (
              <div 
                key={activity.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 print:bg-white print:p-2 print:border print:border-gray-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white print:text-black print:text-sm">
                      {activity.name}
                    </h3>
                    <p className="text-green-600 dark:text-green-400 text-sm print:text-black print:text-xs">
                      {activity.status}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 print:text-black print:text-xs print:mt-0">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Outreach */}
        <section className="mb-16 print:mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 print:text-xl print:mb-4 print:text-black">
            Community & Religious Outreach
          </h2>
          <div className="space-y-4 print:space-y-2">
            {communityOutreach.map((community) => (
              <div 
                key={community.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 print:bg-white print:p-2 print:border print:border-gray-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white print:text-black print:text-sm">
                      {community.name}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 text-sm print:text-black print:text-xs">
                      {community.status}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 print:text-black print:text-xs print:mt-0">
                      {community.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Links */}
        <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center print:hidden">
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
