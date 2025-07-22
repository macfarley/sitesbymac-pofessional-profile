import { Education, WorkExperience, Certification, Skill } from '../types/resume';

// 📝 PROFESSIONAL RESUME DATA - Travis McCoy
// This is your single source of truth for resume information

export const personalInfo = {
  name: 'Travis M. McCoy',
  title: 'Full Stack Developer',
  location: 'Dayton, OH 45342',
  phone: '(937) 467-9312',
  email: 'mac@sitesbymac.dev',
  linkedin: 'https://www.linkedin.com/in/travis-mccoy-630775b9/',
  github: 'https://github.com/macfarley',
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
      'Supervised high-security housing units and conducted wellness checks',
      'Led suicide-watch interventions and emergency escort teams; CPR/AED certified',
      'Trained staff in communication, de-escalation, and safety drills',
      'Learned operational Spanish for daily communications with inmates of diverse backgrounds',
      'Was instrumental in maintaining American Correctional Association Accreditation through meticulous report generation',
      'Managed a team of 30 inmates to produce 2200 meals while maintaining inventory control (ingredients) and materiel control of sensitive tools (knives, anything that could be made a weapon) and maintained strict cleanliness and food safety standards during white-glove inspections of the kitchen'
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
      'Operated robotic-assisted metal machining and electronic assembly lines under high-volume targets',
      'Conducted QA testing and logged defect data for cross-team review',
      'Led inventory audits that strengthened supply chain reliability and reduced discrepancies',
      'Maintained production quality standards in high-volume manufacturing environment'
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
      'In 3 years never caused a lost-time quality problem by sending inferior parts, saving Moriroku $10k per minute (the supplier got charged for work stoppage on the auto assembly line)',
      'Operated injection-molding machinery and Dukane sonic welders',
      'Applied 5S and Kanban systems for workflow optimization',
      'Managed forklift logistics and completed OSHA-style safety training',
      'Maintained strict quality standards for automotive industry requirements'
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
    skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'SQL joins and aggregations', 'RESTful API design', 'JWT authentication']
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
    skills: ['Agile/Scrum', 'Jira', 'Trello (Kanban)', 'Zoom', 'Microsoft Teams', 'Draw.io diagrams', 'Technical documentation']
  },
  {
    category: 'Leadership & Soft Skills',
    skills: ['Crisis de-escalation', 'Team leadership & training', 'Conflict resolution', 'Process documentation', 'Public speaking']
  },
  {
    category: 'Additional Experience',
    skills: ['Manufacturing operations', 'Quality control', 'Inventory management', 'Safety protocols', 'OSHA compliance']
  }
];