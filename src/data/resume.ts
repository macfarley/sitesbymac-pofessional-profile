import { Education, WorkExperience, Certification, Skill } from '../types/resume';

// 📝 PROFESSIONAL RESUME DATA - Travis McCoy
// This is your single source of truth for resume information

export const personalInfo = {
  name: 'Travis M. McCoy',
  title: 'Full-Stack Developer',
  location: 'Dayton, OH 45342',
  phone: '(937) 467-9312',
  email: 'mac@sitesbymac.dev',
  website: 'https://sitesbymac.dev',
  linkedin: 'https://www.linkedin.com/in/travis-mccoy-630775b9/',
  github: 'https://github.com/macfarley',
  summary: 'Full-stack developer with hands-on experience building responsive web apps and RESTful APIs using React, Next.js, Node.js and modern JavaScript/TypeScript toolchains. Led end-to-end development of DreamWeaver, a sleep-tracking application, in a remote Agile cohort. Seven years as a Corrections Officer cultivated leadership, crisis management, and process-driven documentation skills. Combines technical rigor with operational discipline to deliver thoughtful, user-centered solutions.'
};

export const education: Education[] = [
  {
    id: 'general-assembly-2025',
    institution: 'General Assembly',
    degree: 'Software Engineering Immersive',
    graduationDate: '2025-08-01',
    relevantCoursework: [
      'HTML5 & CSS3',
      'JavaScript (ES6+) & TypeScript',
      'React & Next.js',
      'Node.js & Express',
      'MongoDB & PostgreSQL', 
      'RESTful API Design',
      'Git & GitHub',
      'Agile/Scrum Workflows',
      'JWT Authentication',
      'Deployment (Vercel, Netlify, Heroku)',
      'Python & Flask',
      'Modular Code Architecture',
      'Secure Web App Fundamentals'
    ]
  },
  {
    id: 'ohio-university',
    institution: 'Ohio University',
    degree: 'International Relations (Pre-Law)',
    field: 'International Relations',
    graduationDate: '2010-12-01'
  },
  {
    id: 'wright-state',
    institution: 'Wright State University',
    degree: 'Political Science (Dual Enrollment)',
    field: 'Political Science',
    graduationDate: '2009-12-01',
    gpa: '3.75'
  },
  {
    id: 'celina-high',
    institution: 'Celina High School',
    degree: 'Honors Diploma',
    graduationDate: '2009-06-01'
  }
];

export const workExperience: WorkExperience[] = [
  {
    id: 'correctional-officer',
    title: 'Correctional Officer V',
    company: 'Texas Department of Criminal Justice - Holliday Transfer Facility',
    location: 'TX',
    startDate: '2017-09-01',
    endDate: '2024-10-01',
    description: 'High-security supervision and crisis management in correctional facility environment',
    achievements: [
      'Supervised high-security housing units and conducted wellness checks.',
      'Led suicide-watch interventions and emergency escort teams; CPR/AED certified.',
      'Trained staff in communication, de-escalation, and safety drills.',
      'Implemented physical security protocols and identified potential social engineering threats.',
      'Learned operational Spanish for daily communications with inmates of diverse backgrounds.',
      'Was instrumental in maintaining American Correctional Association Accreditation through meticulous report generation.',
      'Managed a team of 30 inmates to produce 2200 meals while maintaining inventory control (ingredients) and materiel control of sensitive tools (knives, anything that could be made a weapon) and maintained strict cleanliness and food safety standards during white-glove inspections of the kitchen.'
    ],
    technologies: ['Crisis Management', 'Team Leadership', 'Safety Protocols', 'Documentation Systems']
  },
  {
    id: 'kitchenaid-factory',
    title: 'Assembly, Testing & Inventory Auditor',
    company: 'KitchenAid Factory Distribution Center',
    location: 'Greenville, OH',
    startDate: '2015-09-01',
    endDate: '2017-08-01',
    description: 'Manufacturing operations including assembly, quality testing, and inventory management',
    achievements: [
      'Operated robotic-assisted metal machining and electronic assembly lines under high-volume targets.',
      'Conducted QA testing and logged defect data for cross-team review.',
      'Led inventory audits that strengthened supply chain reliability and reduced discrepancies.',
      'Maintained production quality standards in high-volume manufacturing environment.'
    ],
    technologies: ['Manufacturing Systems', 'Quality Control', 'Inventory Management', 'Data Logging']
  },
  {
    id: 'gti-greenville',
    title: 'Quality Inspector / Machine Operator',
    company: 'GTI Greenville Technology Inc. (Moriroku Network)',
    location: 'Greenville, OH',
    startDate: '2012-06-01',
    endDate: '2015-08-01',
    description: 'Quality inspection and machine operation for automotive component manufacturing',
    achievements: [
      'In 3 years never caused a lost-time quality problem by sending inferior parts, saving Moriroku $10k per minute (the supplier got charged for work stoppage on the auto assembly line).',
      'Operated injection-molding machinery and Dukane sonic welders.',
      'Applied 5S and Kanban systems for workflow optimization.',
      'Managed forklift logistics and completed OSHA-style safety training.',
      'Maintained strict quality standards for automotive industry requirements.'
    ],
    technologies: ['Quality Management Systems', 'Manufacturing Equipment', '5S/Kanban', 'Safety Protocols']
  }
];

export const certifications: Certification[] = [
  {
    id: 'general-assembly',
    name: 'Software Engineering Immersive',
    issuer: 'General Assembly',
    issueDate: '2025-08-01'
  },
  {
    id: 'cpr-aed',
    name: 'CPR/AED Certified',
    issuer: 'American Red Cross',
    issueDate: '2024-01-01'
  },
  {
    id: 'traliant-dei',
    name: 'Diversity, Equity & Inclusion Training',
    issuer: 'Traliant',
    issueDate: '2025-01-01'
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
  },
  {
    id: 'mentorcruise',
    name: 'MentorCruise',
    status: 'Member',
    description: 'Professional mentorship platform'
  },
  {
    id: 'boy-scouts',
    name: 'Boy Scouts of America',
    status: 'Former Life Scout - Troop 69, Order of the Arrow',
    description: 'Currently seeking service opportunities with Troop 236 in Kettering'
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
    id: 'joseph-granger',
    name: 'Joseph Granger',
    title: 'Senior Researcher',
    company: 'Lilly Pharmaceuticals',
    email: 'jbgrange13@gmail.com',
    relationship: 'Long-term friend and charity project collaborator'
  },
  {
    id: 'john-laningham',
    name: 'Captain John Laningham (Retired)',
    title: 'Former Captain',
    company: 'Texas Department of Criminal Justice',
    email: 'magicman23@gmail.com',
    relationship: 'Former supervisor'
  },
  {
    id: 'samantha-piedra',
    name: 'Samantha Piedra',
    title: 'Sergeant',
    company: 'Former TDCJ Colleague',
    email: 'spiedralujan@gmail.com',
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
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'React', 'Next.js', 'Node.js', 'Express', 'Flask']
  },
  {
    category: 'Markup & Styling',
    skills: ['HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Tailwind CSS', 'Markdown', 'MDX', 'Responsive Design']
  },
  {
    category: 'Databases & APIs',
    skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'SQL joins and aggregations', 'RESTful API Design', 'JWT Authentication']
  },
  {
    category: 'Tooling & Deployment',
    skills: ['Git/GitHub', 'VS Code', 'Postman', 'Vercel', 'Netlify', 'Heroku', 'Domain Management', 'SSL Certificates']
  },
  {
    category: 'Quality & Testing',
    skills: ['ESLint', 'Prettier', 'Jest (basic)', 'WCAG accessibility principles', 'Environment variables security']
  },
  {
    category: 'Workflow & Collaboration',
    skills: ['Agile/Scrum', 'Jira (project management)', 'Trello (Kanban)', 'Zoom', 'Microsoft Teams', 'Slack', 'Discord', 'Figma', 'Draw.io diagrams', 'Technical documentation']
  },
  {
    category: 'Leadership & Soft Skills',
    skills: ['Crisis de-escalation', 'Team leadership & training', 'Conflict resolution', 'Process documentation', 'Public speaking', 'Attention to detail', 'Policy enforcement']
  },
  {
    category: 'Security & Risk Management',
    skills: ['Physical Security protocols', 'Social Engineering awareness', 'Risk assessment', 'Incident response', 'Security documentation', 'Threat identification']
  },
  {
    category: 'Additional Experience',
    skills: ['Manufacturing operations', 'Quality control', 'Inventory management', 'Safety protocols', 'OSHA compliance']
  }
];