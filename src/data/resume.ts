import { Education, WorkExperience, Certification, Skill, SoftwareProject } from '../types/resume';

// 📝 PROFESSIONAL RESUME DATA - Travis McCoy
// This is your single source of truth for resume information

export const personalInfo = {
  name: 'Travis M. McCoy',
  title: 'Full-Stack Developer',
  location: 'Dayton, OH 45342',
  phone: '(937) 467-9312',
  email: 'mac@sitesbymac.dev',
  website: 'https://sitesbymac.dev',
  linkedin: 'http://www.linkedin.com/in/travis-mccoy-fullstack',
  github: 'https://github.com/macfarley',
  summary: 'Full-Stack Developer with hands-on experience building and deploying production-ready applications using Python, Django, React, and modern JavaScript frameworks. Strong foundation in algorithms, data structures, and test-driven development, with current upskilling in C++, C#, and Angular. Passionate about software craftsmanship, problem-solving, and building inclusive, user-centered applications.'
};

export const education: Education[] = [
  {
    id: 'general-assembly-2025',
    institution: 'General Assembly',
    degree: 'Software Engineering Immersive',
    graduationDate: '2025-08-31',
    inProgress: false,
    relevantCoursework: [
      'HTML5 & CSS3',
      'JavaScript (ES6+) & TypeScript',
      'React & Next.js',
      'Node.js & Express',
      'MongoDB & PostgreSQL', 
      'Django & Python Web Development',
      'RESTful API Design',
      'Git & GitHub',
      'Agile/Scrum Workflows',
      'JWT Authentication',
      'Deployment (Vercel, Netlify, Heroku)',
      'Python & Flask',
      'Modular Code Architecture',
      'Secure Web App Fundamentals',
      'Team Leadership & Project Management',
      'Test-Driven Development',
      'Database Design & Optimization'
    ]
  },
  {
    id: 'independent-study',
    institution: 'Self-Directed Learning',
    degree: 'Continuing independent study in C++, C#, Angular, and Flutter',
    graduationDate: '2025-12-31',
    inProgress: true
  },
  {
    id: 'future-education',
    institution: 'Future Formal Education',
    degree: 'Expected to re-enroll in formal degree-track education Fall 2026',
    graduationDate: '2026-12-31',
    inProgress: false
  }
];

export const workExperience: WorkExperience[] = [
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
    company: 'Texas Department of Criminal Justice – Holliday Transfer Facility',
    location: 'Huntsville, TX',
    startDate: '2017-09-01',
    endDate: '2024-10-01',
    description: 'High-security supervision and crisis management in correctional facility environment',
    achievements: [
      'Supervised housing units of 200+ individuals, ensuring compliance with strict policies and schedules.',
      'Maintained flawless accountability records over 7 years, never delaying mandatory counts.',
      'Trained and mentored new staff in communication, reporting, and safety protocols.',
      'Produced detailed reports (incident logs, maintenance requests, behavioral interventions).',
      'Led emergency response and coordinated cross-team operations under pressure.'
    ],
    technologies: ['Crisis Management', 'Team Leadership', 'Safety Protocols', 'Documentation Systems']
  },
  {
    id: 'kitchenaid-factory',
    title: 'Assembly | Testing & Inventory Auditor',
    company: 'KitchenAid Distribution Center (Whirlpool)',
    location: 'Greenville, OH',
    startDate: '2015-03-01',
    endDate: '2017-06-01',
    description: 'Manufacturing operations including assembly, quality testing, and inventory management',
    achievements: [
      'Conducted QA testing and logged defect data for cross-team review.',
      'Spearheaded inventory audits, improving supply chain reliability.',
      'Operated robotic-assisted assembly lines under high-volume targets.'
    ],
    technologies: ['Manufacturing Systems', 'Quality Control', 'Inventory Management', 'Data Logging']
  },
  {
    id: 'gti-greenville',
    title: 'Quality Inspector | Machine Operator',
    company: 'GTI Greenville Technology Inc. (Moriroku Network)',
    location: 'Greenville, OH',
    startDate: '2012-09-01',
    endDate: '2015-01-01',
    description: 'Quality inspection and machine operation for automotive component manufacturing',
    achievements: [
      'Maintained a flawless quality record over 3 years, preventing costly line stoppages.',
      'Applied 5S and Kanban systems for workflow optimization.',
      'Documented inspections and ensured compliance with manufacturing standards.'
    ],
    technologies: ['Quality Management Systems', 'Manufacturing Equipment', '5S/Kanban', 'Safety Protocols']
  },
  {
    id: 'tastemorr-grain',
    title: 'Production & Operations',
    company: 'Tastemorr Basic Grain',
    location: 'Coldwater, OH',
    startDate: '2010-11-01',
    endDate: '2012-08-01',
    description: 'Production and operations in grain processing facility',
    achievements: [
      'Operated production equipment and maintained quality standards.',
      'Managed inventory and supply chain logistics.',
      'Ensured compliance with safety and operational protocols.'
    ],
    technologies: ['Production Equipment', 'Inventory Management', 'Quality Control', 'Safety Protocols']
  }
];

export const softwareProjects: SoftwareProject[] = [
  {
    id: 'stircraft',
    title: 'StirCraft: Professional Cocktail Manager',
    description: 'Sophisticated Django web application for cocktail enthusiasts, bartenders, and culinary professionals',
    context: 'Team Lead',
    startDate: '2025-08-01',
    endDate: '2025-08-31',
    achievements: [
      'Architected and implemented a production-ready Django application with 6 database models and advanced relationships.',
      'Designed ABV calculation algorithms, recipe forking with attribution tracking, and intelligent tag management.',
      'Implemented 57 automated tests achieving 100% critical path coverage.',
      'Built demo data system with 15+ themed users and 300+ interactions.'
    ],
    technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'JavaScript', 'Heroku', 'PIL/Pillow', 'django-taggit', 'Team Leadership', 'Project Management'],
    liveUrl: 'https://stircraft-app-0dd06cf5d30a.herokuapp.com/',
    githubUrl: 'https://github.com/macfarley/stir-craft',
    featured: true
  },
  {
    id: 'dream-weaver',
    title: 'Dream Weaver: Sleep Tracking Application',
    description: 'Full-stack MERN application for tracking and analyzing sleep patterns with data visualization',
    context: 'Individual Project',
    startDate: '2025-07-15',
    endDate: '2025-07-25',
    achievements: [
      'Developed full-stack MERN application with authentication, data persistence, and responsive design.',
      'Implemented mood correlation and pattern analysis features.',
      'Designed data visualization dashboard using modern JS charting libraries.',
      'Created RESTful API with MongoDB for efficient storage and retrieval.'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'CSS3', 'Vercel', 'MongoDB Atlas'],
    liveUrl: 'https://dream-weaver-rho.vercel.app/',
    githubUrl: 'https://github.com/macfarley/dream-weaver',
    featured: true
  }
];

export const certifications: Certification[] = [
  {
    id: 'general-assembly',
    name: 'Software Engineering Immersive Certificate',
    issuer: 'General Assembly',
    issueDate: '2025-08-31',
    url: '/GA-Certificate.pdf'
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
  },
  {
    id: 'dod-8570-iat',
    name: 'DoD 8570 IAT Level II',
    issuer: 'Eligible',
    issueDate: '2025-12-31' // Future date for eligibility
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
    category: 'Programming',
    skills: ['Python', 'JavaScript/TypeScript', 'React', 'Django', 'Next.js', 'Node.js', 'Flask', 'C++ (coursework)', 'C# (in progress)', 'Angular (in progress)']
  },
  {
    category: 'Software Engineering',
    skills: ['Algorithms & Data Structures', 'RESTful API Design', 'Test-Driven Development', 'CI/CD', 'Unit & Integration Testing']
  },
  {
    category: 'Platforms & Tools',
    skills: ['AWS (familiar)', 'Docker', 'Git/GitHub', 'Postman', 'Agile/Scrum']
  },
  {
    category: 'Collaboration',
    skills: ['Technical Documentation', 'Team Leadership', 'Training & Mentorship']
  },
  {
    category: 'Deployment & Hosting',
    skills: ['Vercel', 'Netlify', 'Heroku', 'PostgreSQL Production', 'Static Generation', 'SSL Certificates', 'WhiteNoise', 'Domain Management']
  }
];