#!/usr/bin/env node

/**
 * ATS Resume Generator
 * Generates a clean, 2-page ATS-friendly resume HTML from resume.ts data
 * 
 * Usage: node scripts/generate-resume-ats.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Since we can't directly import .ts, we'll read and parse the data
// For now, this is a template generator that you can customize
const generateATSResume = () => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travis "Mac" McCoy - Full-Stack Developer</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Calibri', 'Arial', sans-serif;
            font-size: 11pt;
            line-height: 1.4;
            color: #000;
            background: #fff;
            max-width: 8.5in;
            margin: 0 auto;
            padding: 0.5in;
        }

        .header {
            text-align: center;
            margin-bottom: 0.3in;
            border-bottom: 2px solid #000;
            padding-bottom: 10pt;
        }

        h1 {
            font-size: 18pt;
            font-weight: bold;
            margin-bottom: 6pt;
        }

        .contact-info {
            font-size: 10pt;
            line-height: 1.3;
        }

        h2 {
            font-size: 13pt;
            font-weight: bold;
            border-bottom: 1.5pt solid #333;
            margin-top: 14pt;
            margin-bottom: 8pt;
            padding-bottom: 2pt;
        }

        h3 {
            font-size: 11pt;
            font-weight: bold;
            margin-top: 8pt;
            margin-bottom: 4pt;
        }

        .job-header, .project-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2pt;
        }

        .job-title {
            font-weight: bold;
        }

        .company {
            font-style: italic;
        }

        .dates {
            font-style: italic;
            font-size: 10pt;
        }

        ul {
            margin-left: 20pt;
            margin-bottom: 8pt;
        }

        li {
            margin-bottom: 3pt;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6pt 12pt;
            margin-bottom: 8pt;
        }

        .skill-category {
            margin-bottom: 6pt;
        }

        .skill-category strong {
            display: block;
            margin-bottom: 2pt;
        }

        .skill-list {
            font-size: 10pt;
            line-height: 1.3;
        }

        .education-item {
            margin-bottom: 6pt;
        }

        .page-break {
            page-break-before: always;
        }

        @media print {
            body {
                padding: 0.5in;
            }
            
            .page-break {
                page-break-before: always;
            }
        }

        @media screen {
            body {
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
                margin: 20px auto;
            }
        }
    </style>
</head>
<body>
    <!-- HEADER -->
    <header class="header">
        <h1>Travis "Mac" McCoy</h1>
        <div class="contact-info">
            Dayton, OH (Willing to relocate US/Canada) | (937) 467-9312<br>
            mac@sitesbymac.dev | <a href="https://sitesbymac.dev">sitesbymac.dev</a><br>
            <a href="https://github.com/macfarley">github.com/macfarley</a> | 
            <a href="https://linkedin.com/in/travis-mccoy-fullstack">linkedin.com/in/travis-mccoy-fullstack</a>
        </div>
    </header>

    <!-- SUMMARY -->
    <section>
        <h2>Professional Summary</h2>
        <p>Security & Compliance professional transitioning into full-stack development. Seven years of high-stakes correctional operations including incident command, threat assessment, emergency response, and training. Technical experience with Python, Django, TypeScript React, SQL, Docker, accessibility, and privacy-first design. Strong communicator, mentor, and systems thinker focused on community-driven, ethical, and inclusive technology.</p>
    </section>

    <!-- TECHNICAL SKILLS -->
    <section>
        <h2>Technical Skills</h2>
        <div class="skills-grid">
            <div class="skill-category">
                <strong>Technical:</strong>
                <div class="skill-list">Python, Django, JavaScript, TypeScript, React, Next.js, SQL, REST APIs, Git, CI/CD, Testing, Debugging Utilities, Docker, AWS (developing), FastAPI, C#, Angular, Flutter</div>
            </div>
            <div class="skill-category">
                <strong>Security & Privacy:</strong>
                <div class="skill-list">Threat Modeling, Risk Assessment, Access Control Design, Data Minimization, Consent-Driven Flows, WCAG Accessibility</div>
            </div>
            <div class="skill-category">
                <strong>Operational:</strong>
                <div class="skill-list">Incident Command, Emergency Response, Behavioral Observation, PREA Compliance, Documentation, Audit Readiness</div>
            </div>
            <div class="skill-category">
                <strong>Administrative:</strong>
                <div class="skill-list">Microsoft Office, Google Workspace, Recordkeeping, Policy Interpretation, 51 WPM Typing</div>
            </div>
        </div>
    </section>

    <!-- PROFESSIONAL EXPERIENCE -->
    <section>
        <h2>Professional Experience</h2>

        <div class="experience-item">
            <div class="job-header">
                <div>
                    <span class="job-title">Junior Developer & Security/Privacy Contributor</span> — 
                    <span class="company">Volunqueer</span>
                </div>
                <span class="dates">2025–Present</span>
            </div>
            <div style="font-size: 10pt; margin-bottom: 4pt;">Remote</div>
            <ul>
                <li>Contributed to Django/PostgreSQL platform connecting volunteers with community organizations.</li>
                <li>Supported migration from AWS/Supabase to Dockerized Django-served TypeScript React.</li>
                <li>Built debugging utilities to trace React/Django data flows.</li>
                <li>Authored security, privacy, and data-minimization guidelines.</li>
                <li>Led architecture discussions for consent-driven volunteer profiles.</li>
                <li>Improved accessibility and reduced form intimidation.</li>
                <li>Collaborated through GitHub issues, PRs, and async communication.</li>
            </ul>
        </div>

        <div class="experience-item">
            <div class="job-header">
                <div>
                    <span class="job-title">Correctional Officer V</span> — 
                    <span class="company">Texas Department of Criminal Justice</span>
                </div>
                <span class="dates">2017–2024</span>
            </div>
            <div style="font-size: 10pt; margin-bottom: 4pt;">Huntsville, TX</div>
            <ul>
                <li>Served as on-scene Incident Commander for fires, medical crises, assaults, and disturbances.</li>
                <li>Directed emergency procedures and delivered concise situation reports.</li>
                <li>Identified STG activity, prohibited materials, and recruitment indicators.</li>
                <li>Initiated protective protocols for vulnerable individuals.</li>
                <li>Maintained situational awareness to detect early conflict indicators.</li>
                <li>Conducted inspections and generated maintenance work orders.</li>
                <li>Supervised 30-person kitchen crews producing ~2,000 meals per shift.</li>
                <li>Trained new officers and applied CPR/AED during real emergencies.</li>
                <li>Contributed to ACA accreditation through audits and documentation.</li>
            </ul>
        </div>

        <div class="experience-item">
            <div class="job-header">
                <div>
                    <span class="job-title">Production & QA Technician</span> — 
                    <span class="company">KitchenAid Distribution Center (Whirlpool)</span>
                </div>
                <span class="dates">2015–2017</span>
            </div>
            <div style="font-size: 10pt; margin-bottom: 4pt;">Greenville, OH</div>
            <ul>
                <li>Worked on KitchenAid Stand Mixer line including robotic machining and QA testing.</li>
                <li>Applied Lean, Kaizen, and 5S principles.</li>
            </ul>
        </div>

        <div class="experience-item">
            <div class="job-header">
                <div>
                    <span class="job-title">Quality Technician</span> — 
                    <span class="company">GTI Greenville Technology Inc. (Moriroku Network)</span>
                </div>
                <span class="dates">2012–2015</span>
            </div>
            <div style="font-size: 10pt; margin-bottom: 4pt;">Greenville, OH</div>
            <ul>
                <li>Inspected auto-grade injection-molded components for Honda models.</li>
                <li>Maintained Kanban flow and 5S organization.</li>
            </ul>
        </div>
    </section>

    <!-- PAGE BREAK -->
    <div class="page-break"></div>

    <!-- SOFTWARE PROJECTS -->
    <section>
        <h2>Software Projects</h2>

        <div class="experience-item">
            <div class="project-header">
                <div>
                    <span class="job-title">StirCraft</span> — 
                    <span style="font-style: italic;">Django Cocktail Discovery & Social Sharing App</span>
                </div>
                <span class="dates">2025</span>
            </div>
            <div style="font-size: 10pt; margin-bottom: 4pt;">
                <a href="https://stircraft-app-0dd06cf5d30a.herokuapp.com/">stircraft-app-0dd06cf5d30a.herokuapp.com</a> | 
                <a href="https://github.com/macfarley/stir-craft">github.com/macfarley/stir-craft</a>
            </div>
            <ul>
                <li>Architected and implemented production-ready Django application with 6 database models and advanced relationships.</li>
                <li>Designed ABV calculation algorithms, recipe forking with attribution tracking, and intelligent tag management.</li>
                <li>Implemented 57 automated tests achieving 100% critical path coverage.</li>
                <li>Built demo data system with 15+ themed users and 300+ interactions.</li>
            </ul>
            <div style="font-size: 10pt; margin-top: 4pt;"><strong>Technologies:</strong> Django, Python, PostgreSQL, Bootstrap, JavaScript, Heroku, AJAX</div>
        </div>

        <div class="experience-item">
            <div class="project-header">
                <div>
                    <span class="job-title">DreamWeaver</span> — 
                    <span style="font-style: italic;">Sleep Journaling & Tracking Tool</span>
                </div>
                <span class="dates">2025</span>
            </div>
            <div style="font-size: 10pt; margin-bottom: 4pt;">
                <a href="https://dream-weaver-rho.vercel.app/">dream-weaver-rho.vercel.app</a> | 
                <a href="https://github.com/macfarley/dream-weaver">github.com/macfarley/dream-weaver</a>
            </div>
            <ul>
                <li>Developed full-stack MERN application with authentication, data persistence, and responsive design.</li>
                <li>Implemented mood correlation and pattern analysis features.</li>
                <li>Designed data visualization dashboard using modern JS charting libraries.</li>
            </ul>
            <div style="font-size: 10pt; margin-top: 4pt;"><strong>Technologies:</strong> React, Vite, Node.js, Express, MongoDB, JavaScript, CSS3, Vercel</div>
        </div>

        <div class="experience-item">
            <div class="project-header">
                <div>
                    <span class="job-title">Silent Auction App</span> — 
                    <span style="font-style: italic;">Mobile Bidding Platform</span>
                </div>
                <span class="dates">In Development</span>
            </div>
            <p style="font-size: 10pt; margin-bottom: 4pt;">Mobile-friendly bidding platform for community fundraisers featuring QR lookup, organizer dashboard, real-time bids, and SMS updates.</p>
            <div style="font-size: 10pt; margin-top: 4pt;"><strong>Technologies:</strong> Flutter, FastAPI, Spring Boot, QR Codes, SMS Integration</div>
        </div>

        <div class="experience-item">
            <div class="project-header">
                <div>
                    <span class="job-title">Office Quartermaster</span> — 
                    <span style="font-style: italic;">Inventory Management System</span>
                </div>
                <span class="dates">In Development</span>
            </div>
            <p style="font-size: 10pt; margin-bottom: 4pt;">Lightweight inventory management for small offices and clinics with role-based access and reporting.</p>
            <div style="font-size: 10pt; margin-top: 4pt;"><strong>Technologies:</strong> Angular, C#, .NET, Role-Based Access Control</div>
        </div>
    </section>

    <!-- EDUCATION -->
    <section>
        <h2>Education</h2>

        <div class="education-item">
            <div class="job-header">
                <div>
                    <strong>General Assembly</strong> — Software Engineering Immersive
                </div>
                <span class="dates">2025</span>
            </div>
            <div style="font-size: 10pt; margin-top: 2pt;">480-hour intensive program covering: HTML5/CSS3, JavaScript/TypeScript, React/Next.js, Node.js/Express, MongoDB/PostgreSQL, Django/Python, REST APIs, Git, Agile/Scrum, JWT Auth, Deployment (Vercel/Netlify/Heroku), TDD, Database Design</div>
        </div>

        <div class="education-item">
            <div class="job-header">
                <div>
                    <strong>Ohio University</strong> — Undergraduate Coursework
                </div>
                <span class="dates">2009–2010</span>
            </div>
        </div>

        <div class="education-item">
            <div class="job-header">
                <div>
                    <strong>Wright State University — Lake Campus</strong> — Dual-Enrollment Coursework
                </div>
                <span class="dates">2007–2009</span>
            </div>
            <div style="font-size: 10pt; margin-top: 2pt;">72 quarter hours, Dean's List</div>
        </div>

        <div class="education-item">
            <div class="job-header">
                <div>
                    <strong>Celina High School</strong> — Honors Diploma, Top 10%
                </div>
                <span class="dates">2009</span>
            </div>
        </div>
    </section>

    <!-- CERTIFICATIONS & AWARDS -->
    <section>
        <h2>Certifications & Awards</h2>
        <ul>
            <li><strong>Software Engineering Immersive Certificate</strong> — General Assembly (2025)</li>
            <li><strong>George Beto Excellence Award</strong> — Texas Department of Criminal Justice (2017)</li>
            <li><strong>CPR/AED Certified</strong> — American Red Cross (2024)</li>
            <li><strong>Firearms Recertification</strong> — Texas Department of Criminal Justice (2024)</li>
            <li><strong>Ratatype Silver Typing Certification</strong> — 51 WPM (2025)</li>
        </ul>
    </section>

    <!-- PROFESSIONAL ASSOCIATIONS -->
    <section>
        <h2>Professional Associations</h2>
        <div style="font-size: 10pt;">
            Men Advocating Real Change • Allies in Tech • Out in Tech • Dayton Web Dev Meetup • Miami Valley Unitarian Universalists • Dayton Mercy Society (Volunteer)
        </div>
    </section>
</body>
</html>`;

  return html;
};

// Write to public folder
const outputPath = path.join(__dirname, '..', 'public', 'resume_ats.html');
const html = generateATSResume();

fs.writeFileSync(outputPath, html, 'utf8');
console.log('✅ ATS Resume generated:', outputPath);
console.log('📄 Open in browser to review formatting and convert to PDF');
