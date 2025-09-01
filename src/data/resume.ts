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
  summary: 'Full-stack developer with a decade of leadership experience in high-pressure environments, now specializing in Django, Python, and modern web technologies. As team lead for StirCraft, I architected a production-ready platform with 6 database models, 57 comprehensive tests, and advanced features like recipe forking and ABV calculation. My systematic approach and proven ability to manage teams of 30+ people drives reliable API design, maintainable architectures, and applications that combine technical excellence with meaningful user experiences.'
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
    id: 'ohio-university',
    institution: 'Ohio University',
    degree: 'International Relations (Pre-Law)',
    field: 'International Relations',
    graduationDate: '2010-12-01',
    leadership: [
      'Vice President, Athens Wargamers - Tabletop Role Playing and Collaborative Story Telling'
    ]
  },
  {
    id: 'wright-state',
    institution: 'Wright State University',
    degree: 'Political Science (Dual Enrollment)',
    field: 'Political Science',
    graduationDate: '2009-12-01',
    gpa: '3.75',
    leadership: [
      'Secretary of Psychology Society - Organized Excursions for the Discussion and Study Group'
    ]
  },
  {
    id: 'celina-high',
    institution: 'Celina High School',
    degree: 'Honors Diploma',
    graduationDate: '2009-06-01',
    leadership: [
      'Captain of Scholastic Quiz Bowl Team - Led a 4-Week Run on High Q (WHIO Television Channel 7)'
    ]
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

export const softwareProjects: SoftwareProject[] = [
  {
    id: 'stircraft',
    title: 'StirCraft: Professional Cocktail Manager',
    description: 'Sophisticated Django web application for cocktail enthusiasts, bartenders, and culinary professionals',
    context: 'General Assembly Capstone Project - Team Lead',
    startDate: '2025-08-01',
    endDate: '2025-08-31',
    achievements: [
      'Led a team of developers in architecting and implementing a production-ready Django web application with 6 core database models, advanced relationships, and comprehensive social features.',
      'Designed sophisticated business logic including automatic ABV calculation algorithms, recipe forking with attribution tracking, and intelligent tag management systems.',
      'Implemented comprehensive testing strategy resulting in 57 tests with 100% critical path coverage, ensuring code reliability and maintainability.',
      'Created advanced demo data generation system with 15+ themed users, 316 total favorites, and realistic social interaction patterns for professional presentations.',
      'Architected and deployed production-ready application on Heroku with PostgreSQL database, static file management via WhiteNoise, and professional deployment pipeline.',
      'Developed complex UI components including bulk operations, dynamic forms with real-time validation, AJAX-powered interfaces, and WCAG AA accessible design.',
      'Integrated TheCocktailDB API for professional recipe data import and established robust data seeding infrastructure with 209 sample cocktails.',
      'Led code reviews, sprint planning, and agile development practices while maintaining strict quality standards and comprehensive documentation.'
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
    context: 'General Assembly Individual Project',
    startDate: '2025-07-15',
    endDate: '2025-07-25',
    achievements: [
      'Developed full-stack MERN application with user authentication, data persistence, and responsive design.',
      'Implemented comprehensive sleep tracking features with mood correlation and pattern analysis.',
      'Created intuitive data visualization dashboard using modern JavaScript charting libraries.',
      'Designed and implemented RESTful API with MongoDB for efficient data storage and retrieval.',
      'Deployed production application on Vercel with MongoDB Atlas backend integration.',
      'Applied modern UI/UX principles with responsive design optimized for mobile and desktop use.'
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
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Django', 'React', 'Next.js', 'Node.js', 'Express', 'Flask']
  },
  {
    category: 'Frontend & Styling',
    skills: ['HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Tailwind CSS', 'Responsive Design', 'WCAG Accessibility', 'AJAX']
  },
  {
    category: 'Backend & Databases',
    skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Django ORM', 'RESTful API Design', 'JWT Authentication', 'Database Migrations', 'API Integration']
  },
  {
    category: 'Development Tools',
    skills: ['Git/GitHub', 'VS Code', 'Postman', 'Jest', 'Django Testing Framework', 'Environment Variables', 'PIL/Pillow', 'ESLint']
  },
  {
    category: 'Deployment & Hosting',
    skills: ['Vercel', 'Netlify', 'Heroku', 'PostgreSQL Production', 'Static Generation', 'SSL Certificates', 'WhiteNoise', 'Domain Management']
  },
  {
    category: 'Project Management & Testing',
    skills: ['Agile/Scrum', 'Team Leadership', 'Code Reviews', 'Sprint Planning', 'Technical Documentation', 'Unit Testing', 'Integration Testing', 'TDD']
  },
  {
    category: 'Leadership & Communication',
    skills: ['Crisis Management', 'Team Leadership', 'Developer Mentoring', 'Technical Communication', 'Conflict Resolution', 'Public Speaking']
  }
];