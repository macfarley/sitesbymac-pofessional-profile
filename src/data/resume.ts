import { Education, WorkExperience, Certification, Skill, SoftwareProject } from '../types/resume';

// 📝 PROFESSIONAL RESUME DATA - Travis McCoy
// This is your single source of truth for resume information

export const personalInfo = {
  name: 'Travis "Mac" McCoy',
  title: 'Full Stack Software Engineer, Security & Trust Architect',
  subtitle: 'Security & Compliance',
  location: 'Dayton, OH',
  locationNote: 'Willing to Relocate',
  clearance: 'Security Clearance Eligible (United States Citizen)',
  phone: '(937) 467-9312',
  email: 'mac@sitesbymac.dev',
  website: 'sitesbymac.dev',
  linkedin: 'linkedin.com/in/travis-mccoy-fullstack',
  github: 'github.com/macfarley',
  summary: 'Full-Stack Software Engineer specializing in security, privacy, and ethical system design. I bring a rare hybrid background that blends information security, operational safety, human-behavior analysis, and modern engineering practices. My experience in incident command and threat assessment trained me to think in continuous SWOT-style cycles and translate insights into iterative improvements that fit naturally into Scrum workflows. I\'m the engineer who sees a single form field and asks how to protect the company, improve the user experience, and build long-term trust simultaneously. Focused on designing systems that anticipate misuse, strengthen public confidence, and unify security architecture, Trust & Safety, and privacy-first product design.'
};

export const coreCompetencies = [
  'Security & Compliance',
  'Trust & Safety',
  'Risk Assessment',
  'Incident Command (ICS)',
  'Threat Modeling',
  'Data Minimization',
  'Privacy-First Architecture',
  'WCAG Accessibility',
  'Role-Based Access Control',
  'Cross-Functional Collaboration',
  'Training & Mentorship',
  'Documentation & Audit Readiness'
];

export const languages = [
  { language: 'English', proficiency: 'Native' },
  { language: 'Spanish', proficiency: 'Conversational (corrections/field experience)' },
  { language: 'German', proficiency: 'Basic conversational' },
  { language: 'Arabic', proficiency: 'Reading proficiency (academic study)' }
];

export const education: Education[] = [
  {
    id: 'general-assembly-2025',
    institution: 'General Assembly',
    degree: 'Software Engineering Immersive — Certificate of Completion',
    location: 'New York, NY',
    graduationDate: '2025-08-31',
    inProgress: false,
    notes: 'Project-based full-stack program emphasizing test-driven development, accessibility, and collaborative Git workflows. Focused on ethical system design, agile team practices, and scalable architecture. Built and deployed multiple full-stack applications using modern frameworks, CI/CD pipelines, and accessibility-first principles.'
  },
  {
    id: 'ohio-university',
    institution: 'Ohio University',
    degree: 'Philosophy – Pre-Law Discipline',
    location: 'Athens, OH',
    graduationDate: '2010-12-31',
    inProgress: false,
    notes: 'Coursework included ethics, logic, political theory, comparative religion, international studies, and foreign languages (Arabic and German).'
  },
  {
    id: 'wright-state',
    institution: 'Wright State University',
    degree: 'Undergraduate Coursework',
    location: 'Celina, OH',
    graduationDate: '2009-12-31',
    inProgress: false,
    notes: 'Completed 72 quarter hours as a dual-enrollment student during junior and senior years of high school. Dean\'s List for six quarters • 3.75 cumulative GPA. Completed English Composition sequence and a comprehensive 3-term Western Civilization series emphasizing nomadic pastoralism, cultural drift, and simultaneous regional developments. Took multiple psychology courses and served as Vice President of the Psychology Society — a student-faculty discussion and excursion group.'
  },
  {
    id: 'celina-high',
    institution: 'Celina High School',
    degree: 'Honors Diploma • Top 10%',
    location: 'Celina, OH',
    graduationDate: '2009-05-31',
    inProgress: false,
    notes: 'GPA 3.52 • SAT 1420 (740 Math, 680 Verbal) • ACT 31 • AP Chemistry (5). Captain of the Scholastic Team with five televised WHIO High Q appearances. Ohio Mock Trial Attorney and Junior Engineering Technology and Science (JETS) competition team captain.'
  }
];

export const workExperience: WorkExperience[] = [
  {
    id: 'volunqueer',
    title: 'Junior Developer & Security/Privacy Contributor',
    company: 'VolunQueer — Community Tech Platform',
    location: 'Remote',
    startDate: '2025-11',
    description: 'Contributing to Django/PostgreSQL platform connecting volunteers with community organizations',
    achievements: [
      'SECURITY, PRIVACY & ACCESS CONTROL: Authored guidelines for data minimization, consent-driven onboarding, and Role-Based Access Control (RBAC). Designed privacy-first volunteer profiles with opt-in identity fields, anonymized messaging, and transparent access tiers.',
      'ACCESSIBILITY & FORM DESIGN: Improved form UX by reducing intimidation, clarifying required fields, and aligning components with WCAG. Advocated for inclusive defaults and user autonomy in profile and application flows.',
      'ARCHITECTURE & PLATFORM TRANSITION: Participated in rebasing the platform from AWS and Supabase to a Django/PostgreSQL stack. Gained exposure to legacy infrastructure while contributing to the new backend and deployment pipeline.',
      'DEBUGGING & DEVELOPER EXPERIENCE: Built custom utilities to trace React/Django data flows, improving visibility and reducing time-to-resolution. Supported onboarding and async collaboration through documentation, commit hygiene, and communication templates.',
      'DISTRIBUTED TEAMWORK: Collaborated across time zones using GitHub, Discord, Trello, Google Workspace, and Figma. Provided peer mentorship and helped shape team norms for clarity, safety, and async progress.'
    ],
    technologies: ['Django', 'PostgreSQL', 'TypeScript', 'React', 'Docker', 'AWS', 'WCAG Accessibility', 'Privacy-First Design', 'Security', 'Role-Based Access Control']
  },
  {
    id: 'sites-by-mac',
    title: 'Founder & Full-Stack Developer',
    company: 'Sites by Mac – Freelance Web Development & Consulting',
    location: 'Dayton, OH',
    startDate: '2025-07-01',
    // endDate: null, // Present - omit for current position
    description: 'Freelance web development and consulting services under the Sites by Mac brand',
    achievements: [
      'Built and deployed production-ready applications showcased at sitesbymac.dev and GitHub repositories.',
      'Designed and implemented full-stack solutions using Next.js, React in TypeScript, Tailwind CSS, Django, and Flask.',
      'Published open-source tools and reusable components under MIT license, expanding visibility in developer communities.',
      'Consulted with peers and small teams on branding, UX, and MVP strategy, translating business needs into scalable technical solutions.'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Django', 'Flask', 'Python', 'JavaScript', 'Open Source', 'Consulting']
  },
  {
    id: 'correctional-officer',
    title: 'Correctional Officer V',
    company: 'Texas Department of Criminal Justice — Holliday Unit',
    location: 'Huntsville, TX',
    startDate: '2017-09-01',
    endDate: '2024-10-31',
    description: 'High-security supervision and crisis management in correctional facility environment',
    achievements: [
      'INCIDENT COMMAND & EMERGENCY RESPONSE: Served as on-scene Incident Commander for fires, medical crises, assaults, and disturbances. Directed emergency procedures, secured movement, and delivered SITREPs.',
      'STG INTELLIGENCE: Identified recruitment patterns, prohibited iconography, and indicators of emerging STG activity. Monitored communications and property for unauthorized materials.',
      'SAFETY, VULNERABILITY & DUTY OF CARE: Identified individuals in distress and initiated protective protocols. Provided confidential guidance to individuals hesitant to report safety concerns.',
      'SITUATIONAL AWARENESS & BEHAVIORAL OBSERVATION: Assessed group dynamics and environmental cues to detect early indicators of conflict or risk. Maintained authority and calm under pressure.',
      'FACILITIES & OPERATIONAL CONTINUITY: Created work orders and supervised critical maintenance projects including power loss, HVAC failures, and plumbing emergencies. Ensured continuity during staffing shortages.',
      'KITCHEN OPERATIONS & INVENTORY CONTROL: Supervised 30-person inmate work crews producing ~2,000 meals per shift. Maintained strict inventory controls on tools, equipment, and food supplies.',
      'TRAINING & DOCUMENTATION: Served as primary shift trainer, coaching new officers on communication, boundaries, and real-world operations. Managed confidential records and contributed to ACA accreditation.'
    ],
    technologies: ['Incident Command (ICS)', 'Emergency Response', 'STG Intelligence', 'PREA Compliance', 'Risk Assessment', 'Training & Mentorship', 'Documentation']
  },
  {
    id: 'kitchenaid-factory',
    title: 'Production, QA, and Inventory Technician',
    company: 'KitchenAid / Whirlpool',
    location: 'Greenville, OH',
    startDate: '2015',
    endDate: '2017',
    description: 'Manufacturing operations including assembly, quality testing, and inventory management',
    achievements: [
      'Worked on the KitchenAid Stand Mixer line including robotic machining, QA testing, and end-of-line verification.',
      'Conducted defect logging and cross-team QA reporting to support continuous improvement.',
      'Spearheaded inventory audits, improving supply chain reliability and reducing stock discrepancies.',
      'Applied Lean, Kaizen, and 5S principles to improve workflow efficiency.'
    ],
    technologies: ['Manufacturing Systems', 'Quality Control', 'Inventory Management', 'Lean Manufacturing', '5S', 'Kaizen']
  },
  {
    id: 'gti-greenville',
    title: 'Quality Inspector | Machine Operator',
    company: 'Moriroku North America (formerly GTI)',
    location: 'Greenville, OH',
    startDate: '2012',
    endDate: '2015',
    description: 'Quality inspection and machine operation for automotive component manufacturing',
    achievements: [
      'Maintained a flawless quality record over three years, preventing costly line stoppages.',
      'Inspected injection-molded components for Honda Civic and Accord to maintain Honda Quality standards.',
      'Operated forklifts and completed in-house safety certification.',
      'Used enterprise defect logging, time management, and barcode-based inventory systems.',
      'Every missed defect could cost $10,000 per minute at the Marysville Assembly Plant — I was never the cause of a lost-time defect.'
    ],
    technologies: ['Quality Management Systems', 'Manufacturing Equipment', '5S/Kanban', 'Safety Protocols', 'Forklift Operation']
  }
];

export const softwareProjects: SoftwareProject[] = [
  {
    id: 'stircraft',
    title: 'StirCraft: Professional Cocktail Manager',
    description: 'Full-stack Django application with 245 Python tests + 23 JavaScript tests achieving 100% critical path coverage. Built advanced search, vibe-based filtering, and a data-cleaning pipeline normalizing 400+ cocktails and 325+ ingredients',
    context: 'Team Lead',
    startDate: '2025-08-01',
    endDate: '2025-08-31',
    achievements: [
      'Led three-person team through architecture, task planning, and delivery of full-stack Django application.',
      'Engineered Python data-cleaning pipeline to normalize inconsistent third-party API data.',
      'Designed recipe-forking system enabling derivative recipes with automatic attribution.',
      'Implemented inline formsets, Redis caching, and Heroku deployment.'
    ],
    technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'JavaScript', 'Heroku', 'Redis', 'Team Leadership'],
    liveUrl: 'https://stircraft-app-0dd06cf5d30a.herokuapp.com/',
    githubUrl: 'https://github.com/macfarley/stir-craft',
    featured: true
  },
  {
    id: 'dream-weaver',
    title: 'DreamWeaver: Sleep Tracking Backend',
    description: 'Node.js/Express/MongoDB backend with JWT auth, RBAC, bcrypt hashing, ownership validation, admin safeguards, and comprehensive realistic data seeding system',
    context: 'Completed',
    startDate: '2025-07-15',
    endDate: '2025-07-25',
    achievements: [
      'Built Node.js/Express backend with JWT authentication and role-based access control.',
      'Implemented bcrypt password hashing and ownership validation middleware.',
      'Created comprehensive data seeding system with realistic sleep patterns.',
      'Deployed to production with MongoDB Atlas and Vercel.'
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt', 'Vercel', 'MongoDB Atlas'],
    liveUrl: 'https://dream-weaver-rho.vercel.app/',
    githubUrl: 'https://github.com/macfarley/dream-weaver',
    featured: true
  },
  {
    id: 'happening-here',
    title: 'HappeningHere: Hyperlocal Discovery Engine',
    description: 'LLM-powered platform surfacing grassroots events, free meals, community resources, local sports, festivals, and neighborhood happenings within a zip-code radius',
    context: 'Concept/Prototype',
    startDate: '2025-11-01',
    endDate: '2025-11-01',
    achievements: [
      'Designed accessibility-first discovery platform for community events and resources.',
      'Prototyped LLM-powered event summarization and categorization.',
      'Planned zip-code radius search with SMS handoff for Google Maps links.',
      'Built category-based filtering system for events, meals, sports, and resources.'
    ],
    technologies: ['LLM Integration', 'API Design', 'Accessibility', 'SMS Integration', 'Prototype'],
    featured: false
  },
  {
    id: 'bid-on-this',
    title: 'BidOnThis: Lightweight Auction & Fundraising Tool',
    description: 'QR-based bidding system for community events, schools, and fundraisers with real-time bidding, SMS notifications, and projector-friendly organizer dashboard',
    context: 'Concept/Prototype',
    startDate: '2025-12-01',
    endDate: '2025-12-01',
    achievements: [
      'Designed QR-based authentication and bidding workflow for events.',
      'Prototyped real-time bidding system with SMS winner notifications.',
      'Planned cashless/cashbox payment options and audit trails.',
      'Created projector-friendly dashboard with fundraising goal tracking and sponsor placements.'
    ],
    technologies: ['QR Codes', 'Real-time Systems', 'SMS Integration', 'Event Management', 'Prototype'],
    featured: false
  },
  {
    id: 'office-quartermaster',
    title: 'Office Quartermaster: Tablet-First Inventory Workflow',
    description: 'Tablet-optimized system with QR badge scanning for employee authentication and item checkout, with real-time low-stock alerts and audit-ready usage logs',
    context: 'Concept/Prototype',
    startDate: '2026-01-01',
    endDate: '2026-01-01',
    achievements: [
      'Designed tablet-first UI for QR badge scanning and item checkout.',
      'Prototyped multi-tier approval workflows (e.g., laptops require supervisor approval).',
      'Planned real-time low-stock alerts and consumption anomaly detection.',
      'Created audit-ready usage logs with equipment lifecycle tracking.'
    ],
    technologies: ['QR Codes', 'Tablet UI', 'Inventory Management', 'RBAC', 'Prototype'],
    featured: false
  }
];

export const certifications: Certification[] = [
  {
    id: 'traliant-dei',
    name: 'Diversity, Equity & Inclusion Training',
    issuer: 'Traliant',
    issueDate: '2025'
  },
  {
    id: 'cpr-aed',
    name: 'CPR/AED Certified',
    issuer: 'American Red Cross',
    issueDate: '2023'
  },
  {
    id: 'beto-award',
    name: 'George Beto Excellence Award',
    issuer: 'Texas Department of Criminal Justice',
    issueDate: '2017'
  }
];

export const professionalAssociations = [
  {
    id: 'marc',
    name: 'Men Advocating Real Change',
    status: 'Member',
    description: 'Professional development and advocacy organization'
  },
  {
    id: 'allies-in-tech',
    name: 'Allies in Tech',
    status: 'Member',
    description: 'Supporting diversity and inclusion in technology'
  },
  {
    id: 'out-in-tech',
    name: 'Out in Tech',
    status: 'Member',
    description: 'LGBTQ+ professionals in technology'
  }
];

export const activities = [
  {
    id: 'coffee-coding',
    name: 'Coffee and Coding',
    status: 'Exploring',
    description: 'Local developer meetup and networking group'
  },
  {
    id: 'rose-gauntlet',
    name: 'Rose Gauntlet Foundation',
    status: 'Exploring',
    description: 'Supporting diversity in tabletop gaming'
  },
  {
    id: 'unpub-mentorship',
    name: 'Unpub Tabletop Mentorship',
    status: 'Exploring',
    description: 'Mentoring game designers and developers'
  },
  {
    id: 'dayton-web-dev',
    name: 'Dayton Web Dev Meetup',
    status: 'Member',
    description: 'Local web development community'
  }
];

export const communityOutreach = [
  {
    id: 'mvuu',
    name: 'Miami Valley Unitarian Universalists',
    status: 'Member',
    description: 'Religious community focused on social justice and inclusion'
  },
  {
    id: 'dayton-mercy',
    name: 'Dayton Mercy Society',
    status: 'Volunteer',
    description: 'Local community outreach and support services'
  }
];

export const references = [
  {
    id: 'tor-johnson',
    name: 'Tor Johnson',
    title: 'Software Engineering Instructor',
    company: 'General Assembly',
    email: 'tor.johnson@generalassemb.ly',
    relationship: 'Professor - Software Engineering Immersive Program'
  },
  {
    id: 'joseph-granger',
    name: 'Joseph Granger',
    title: 'Senior Researcher',
    company: 'Lilly Pharmaceuticals',
    email: 'jbgrange13@gmail.com',
    phone: '(419) 953-3100',
    relationship: 'Long-term friend and charity project collaborator'
  },
  {
    id: 'john-laningham',
    name: 'Captain John Laningham (Retired)',
    title: 'Former Captain',
    company: 'Texas Department of Criminal Justice',
    email: 'magicman300@gmail.com',
    relationship: 'Former supervisor'
  },
  {
    id: 'samantha-piedra',
    name: 'Samantha Piedra',
    title: 'Sergeant',
    company: 'Texas Department of Criminal Justice',
    email: 'spiedralujan@gmail.com',
    phone: '(254) 589-2610',
    relationship: 'Former coworker and recruiter'
  },
  {
    id: 'darius-jennings',
    name: 'Darius Jennings',
    title: 'Correctional Officer',
    company: 'Texas Department of Criminal Justice',
    email: 'darius56@icloud.com',
    relationship: 'Former coworker'
  }
];

export const skills: Skill[] = [
  {
    category: 'Languages & Frameworks',
    skills: ['Python', 'Django', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'SQL', 'PostgreSQL', 'FastAPI', 'C#', 'Angular', 'Flutter']
  },
  {
    category: 'Engineering Practices',
    skills: ['Test-Driven Development', 'Object-Oriented Design', 'RESTful APIs', 'Agile/Scrum', 'Code Review', 'Debugging', 'DRY Principles', 'Data Normalization', 'LLM Integration', 'Prompt Engineering']
  },
  {
    category: 'DevOps & Tools',
    skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'AWS', 'Google Workspace', 'Trello', 'Figma', 'Discord']
  },
  {
    category: 'Security & Accessibility',
    skills: ['Threat Modeling', 'Risk Assessment', 'Data Minimization', 'Privacy-First Design', 'WCAG Accessibility', 'Role-Based Access Control', 'Incident Command (ICS)', 'PREA Compliance']
  },
  {
    category: 'Collaboration & Remote Work',
    skills: ['Async Communication', 'Distributed Teams', 'Cross-Functional Collaboration', 'Training & Mentorship', 'Documentation', 'Technical Writing', 'Stakeholder Communication']
  },
  {
    category: 'Administrative',
    skills: ['Microsoft Office', 'Google Workspace', 'Recordkeeping', 'Policy Interpretation', '51 WPM Typing']
  }
];