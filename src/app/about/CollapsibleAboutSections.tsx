'use client';

import { useState } from 'react';
import CollapsibleSection from '../../components/CollapsibleSection';
import { skills, certifications, professionalAssociations, activities, communityOutreach, references } from '../../data/resume';

export default function CollapsibleAboutSections() {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <div className="space-y-4">
      {/* Expand/Collapse All Toggle */}
      <div className="mb-6 flex gap-2 justify-center">
        <button
          onClick={() => setExpandAll(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          Expand All
        </button>
        <button
          onClick={() => setExpandAll(false)}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          Collapse All
        </button>
      </div>

      {/* Professional Summary - Always Visible */}
      <div className="border-l-4 border-blue-500 pl-4 py-2">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Professional Summary</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Full-stack software developer with hands-on Python/Django and JavaScript expertise, combined with 7+ years of quality assurance, process documentation, and team leadership experience. Proven ability to deliver tested, well-documented code while collaborating effectively in distributed teams. Passionate about building accessible, user-centered applications and contributing to open-source projects in the nonprofit and social impact space.
        </p>
      </div>

      <CollapsibleSection 
        title="Featured Projects" 
        defaultCollapsed={expandAll}
        collapsedContent={
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">SitesbyMac.dev — Portfolio & Blog Platform</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Next.js, TypeScript, TailwindCSS, Jest • October 2025</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Built custom blog engine with MDX support and automated syntax highlighting</li>
              <li>Integrated GitHub API for real-time project showcase and portfolio integration</li>
              <li>Achieved 98+ Lighthouse scores across all metrics (performance, accessibility, best practices)</li>
              <li>Live: <a href="https://sitesbymac.dev" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">sitesbymac.dev</a> | <a href="https://github.com/macfarley/sitesbymac-professional-profile" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">StirCraft — Cocktail Discovery Platform</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Django, PostgreSQL, Python, Bootstrap • August 2025 | Team Lead</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Led 3-person agile team using GitHub Projects for sprint planning and collaboration</li>
              <li>Architected database schema with 6 interconnected models and complex relationships</li>
              <li>Designed custom ABV calculation algorithms and recipe forking with attribution tracking</li>
              <li>Achieved 100% test coverage with 57 automated PyTest tests</li>
              <li>Built demo data system with 15+ themed users and 300+ realistic interactions</li>
              <li>Live: <a href="https://stircraft-app-0dd06cf5d30a.herokuapp.com/" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">stircraft-app.herokuapp.com</a> | <a href="https://github.com/macfarley/stir-craft" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">VolunQueer — LGBTQ+ Volunteer Platform</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Django, PostgreSQL, React, TypeScript • Pre-launch (In Development)</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Connecting LGBTQ+ volunteers with community organizations and social impact initiatives</li>
              <li>Participate in strategic migration from AWS Amplify to Django/PostgreSQL stack</li>
              <li>Implement test-driven development practices with comprehensive PyTest coverage</li>
              <li>Adapt React components to Django templates while maintaining WCAG accessibility standards</li>
              <li><a href="https://github.com/macfarley/volunqueer_django" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Griftopedia — Scam Database & Resource Platform</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Django, PostgreSQL, React • Under Construction</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Comprehensive database of common scams, fraud tactics, and prevention strategies</li>
              <li>Educational resource for identifying and avoiding financial/social engineering attacks</li>
              <li>Community-contributed content with expert verification</li>
              <li>Status: Early development phase with architecture planning underway</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Dream Weaver — Sleep Tracking Application</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">MERN Stack, JWT Auth, MongoDB • September 2025</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Full-stack app with role-based access control and user authentication</li>
              <li>60% performance gain via MongoDB optimization and indexing strategies</li>
              <li>Cross-browser testing across 5 platforms (Chrome, Firefox, Safari, Edge, Mobile)</li>
              <li>Live: <a href="https://dream-weaver-rho.vercel.app/" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">dream-weaver.vercel.app</a> | <a href="https://github.com/macfarley/dream-weaver" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Fridge Buddy — Django Food Inventory App</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Django, HTML5, CSS3, SQLite</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Food inventory management across fridge, freezer, pantry, and shopping lists</li>
              <li>Expiration date tracking and category organization to reduce food waste</li>
              <li>Smart organization with semantic URLs and responsive templates</li>
              <li>Planned features: barcode scanning, notifications, analytics, recipe suggestions</li>
              <li><a href="https://github.com/macfarley/fridge-buddy" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a></li>
            </ul>
          </div>
        </div>
      } />

      <CollapsibleSection 
        title="Technical Skills" 
        defaultCollapsed={expandAll}
        collapsedContent={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">{skillGroup.category}</h4>
              <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
                {skillGroup.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      } />

      <CollapsibleSection 
        title="Professional Experience" 
        defaultCollapsed={expandAll}
        collapsedContent={
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">VolunQueer — Junior Django Developer</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Remote (Portland, OR) • November 2025–Present</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Collaborate in distributed team using GitHub Projects, Discord, and Google Meet</li>
              <li>Implement test-driven development with PyTest achieving comprehensive test coverage</li>
              <li>Adapt React components to Django templates maintaining WCAG accessibility standards</li>
              <li>Participate in strategic migration from AWS Amplify to Django/PostgreSQL stack</li>
              <li>Document technical decisions and patterns in shared knowledge base</li>
              <li>Participate in daily standups and sprint ceremonies across multiple time zones</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Texas Department of Criminal Justice — Correctional Officer V</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Huntsville, TX • August 2017–November 2024 (7 years)</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Supervised housing units of 200+ individuals, ensuring compliance with strict policies and schedules</li>
              <li>Maintained flawless accountability records over 7 years with zero audit violations</li>
              <li>Led armed transport of inmates to external medical facilities requiring enhanced security vigilance</li>
              <li>Trained and mentored new staff in communication, reporting, safety protocols, and compliance procedures</li>
              <li>Produced detailed incident reports, maintenance requests, and behavioral documentation</li>
              <li>Led emergency response and coordinated cross-team operations under high-pressure situations</li>
              <li>Achieved consistent certification renewal through continuing education and performance evaluation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">KitchenAid/Whirlpool — Quality Testing & Inventory Auditor</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Greenville, OH • March 2015–June 2017</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Performed systematic QA testing on 700+ units daily, maintaining detailed defect tracking and logging</li>
              <li>Reduced inspection time by 25% through process optimization and 5S methodology</li>
              <li>Contributed to 15% reduction in return rates through enhanced quality control procedures</li>
              <li>Conducted comprehensive inventory audits improving supply chain reliability and accuracy</li>
              <li>Operated robotic-assisted assembly lines under high-volume production targets</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">GTI Greenville Technology — Quality Inspector & Machine Operator</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Greenville, OH • September 2012–January 2015</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Maintained flawless quality record over 3 years, preventing costly line stoppages</li>
              <li>Applied 5S and Kanban systems for workflow optimization and lean manufacturing</li>
              <li>Documented inspections and ensured compliance with manufacturing and safety standards</li>
              <li>Operated precision manufacturing equipment for automotive component production</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Tastemorr Basic Grain — Production & Operations</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Coldwater, OH • November 2010–August 2012</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Operated production equipment in grain processing facility</li>
              <li>Maintained quality standards and food safety protocols</li>
              <li>Managed inventory and supply chain logistics</li>
              <li>Ensured compliance with operational and safety regulations</li>
            </ul>
          </div>
        </div>
      } />

      <CollapsibleSection 
        title="Education & Professional Development" 
        defaultCollapsed={expandAll}
        collapsedContent={
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Software Engineering Immersive</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">General Assembly • Graduated August 2025</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>480-hour intensive full-stack development program</li>
              <li>Coursework: HTML5 & CSS3, JavaScript (ES6+) & TypeScript, React & Next.js, Node.js & Express</li>
              <li>MongoDB & PostgreSQL, Django & Python Web Development, RESTful API Design</li>
              <li>Git & GitHub, Agile/Scrum Workflows, JWT Authentication, Deployment strategies</li>
              <li>Test-Driven Development, Database Design & Optimization, Team Leadership & Project Management</li>
              <li>Developed 4 full-stack CRUD applications with WCAG accessibility and mobile-first responsive design</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Wright State University</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Dayton, OH • 2007–2009</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Non-degree dual enrollment opportunity while in high school</li>
              <li>Social Science and Statistics coursework completed</li>
              <li>Uncompleted Bachelor&apos;s degree in Social Sciences</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Celina High School</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Celina, OH • Graduated 2009</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Honors Diploma recipient</li>
              <li>AP Chemistry: Score 5 (highest possible)</li>
              <li>Extracurriculars: Science club, competitive debate, academic team competitions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Ongoing Technical Education</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Self-Directed Learning • 2023–Present</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Harvard CS50x: Introduction to Computer Science</li>
              <li>Harvard CS50w: Web Programming with Python/JavaScript</li>
              <li>Azure Fundamentals certification (in progress)</li>
              <li>Cloud architecture exploration (AWS, Azure, GCP)</li>
              <li>The Odin Project & FreeCodeCamp advanced modules</li>
              <li>C++, C#, and Angular independent study</li>
            </ul>
          </div>
        </div>
      } />

      <CollapsibleSection 
        title="Certifications & Associations" 
        defaultCollapsed={expandAll}
        collapsedContent={
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Professional Certifications</h4>
            <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
              {certifications.map((cert) => (
                <li key={cert.id}><strong>{cert.name}</strong> — {cert.issuer} ({new Date(cert.issueDate).getFullYear()})</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Professional Associations & Communities</h4>
            <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
              {professionalAssociations.map((assoc) => (
                <li key={assoc.id}><strong>{assoc.name}</strong> — {assoc.description}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Community Engagement & Activities</h4>
            <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
              {activities.map((activity) => (
                <li key={activity.id}><strong>{activity.name}</strong> — {activity.description}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Community Outreach & Volunteering</h4>
            <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
              {communityOutreach.map((org) => (
                <li key={org.id}><strong>{org.name}</strong> ({org.status}) — {org.description}</li>
              ))}
            </ul>
          </div>
        </div>
      } />

      <CollapsibleSection 
        title="References & Mentors" 
        defaultCollapsed={expandAll}
        collapsedContent={
        <div className="space-y-3">
          {references.map((ref) => (
            <div key={ref.id} className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-800 dark:text-gray-200">{ref.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{ref.title} • {ref.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">{ref.relationship}</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                {ref.email && <a href={`mailto:${ref.email}`}>{ref.email}</a>}
                {ref.phone && <> • <a href={`tel:${ref.phone}`}>{ref.phone}</a></>}
              </p>
            </div>
          ))}
        </div>
      } />
    </div>
  );
}
