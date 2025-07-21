import { PersonalInfo, Education, WorkExperience, Certification, Skill } from '../types/resume';

// 📝 PROFESSIONAL RESUME DATA - Travis M. McCoy
// This is your single source of truth for resume information

export const personalInfo: PersonalInfo = {
  name: 'Travis M. McCoy',
  title: 'Full-Stack Web Developer',
  email: 'travis@sitesbymac.dev',
  phone: '(818) 422-7663',
  location: 'Dayton, OH',
  linkedin: 'http://www.linkedin.com/in/travis-mccoy-fullstack',
  github: 'https://github.com/macfarley?tab=repositories',
  website: 'https://sitesbymac.dev',
  summary: `Passionate Full-Stack Web Developer with expertise in modern web technologies and a strong foundation in both frontend and backend development. Recently completed an intensive coding bootcamp where I mastered JavaScript, React, Node.js, and PostgreSQL. Proven ability to build responsive, user-friendly applications with clean, maintainable code. Strong background in customer service and sales has developed excellent communication skills and attention to detail. Eager to contribute technical skills and collaborative approach to a dynamic development team.`
};

export const education: Education[] = [
  {
    id: 'bootcamp-2024',
    institution: 'UC Berkeley Extension',
    degree: 'Full-Stack Web Development Bootcamp Certificate',
    graduationDate: '2024-12-01',
    relevantCoursework: [
      'JavaScript & ES6+',
      'React & Redux',
      'Node.js & Express',
      'Database Design & PostgreSQL',
      'RESTful APIs',
      'Git & Version Control',
      'Agile Development Methodology',
      'HTML5 & CSS3',
      'Responsive Web Design',
      'Authentication & Authorization',
      'Testing & Debugging',
      'Deployment Strategies'
    ]
  },
  {
    id: 'college-2009',
    institution: 'California State University, Northridge',
    degree: 'Bachelor of Arts',
    field: 'Liberal Studies',
    graduationDate: '2009-05-01'
  }
];

export const workExperience: WorkExperience[] = [
  {
    id: 'dev-2024',
    title: 'Full-Stack Web Developer',
    company: 'Freelance & Personal Projects',
    location: 'Los Angeles, CA',
    startDate: '2024-01-01',
    current: true,
    description: 'Developing modern web applications using JavaScript, React, Node.js, and PostgreSQL',
    achievements: [
      'Built and deployed 5+ full-stack applications including e-commerce platforms, task management systems, and portfolio websites',
      'Implemented responsive design principles achieving 100% mobile compatibility across all projects',
      'Utilized modern deployment platforms (Heroku, Vercel, GitHub Pages) for seamless production deployments',
      'Collaborated effectively using Git version control and Agile development methodologies',
      'Integrated third-party APIs and authentication systems for enhanced functionality',
      'Optimized application performance resulting in improved load times and user experience'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Express', 'HTML/CSS', 'JavaScript', 'MongoDB', 'REST APIs']
  },
  {
    id: 'sales-2018-2024',
    title: 'Sales Representative',
    company: 'Various Retail & Service Companies',
    location: 'Los Angeles, CA',
    startDate: '2018-01-01',
    endDate: '2024-01-01',
    description: 'Customer-focused sales professional with proven track record in relationship building and problem-solving',
    achievements: [
      'Consistently exceeded sales targets by 15-20% through effective customer relationship management',
      'Developed strong communication and interpersonal skills working with diverse customer base',
      'Demonstrated problem-solving abilities by resolving complex customer issues efficiently',
      'Collaborated with team members to improve overall store performance and customer satisfaction',
      'Trained new employees on sales techniques and customer service best practices'
    ],
    technologies: ['CRM Systems', 'Point of Sale Systems', 'Customer Service Tools', 'Inventory Management']
  },
  {
    id: 'customer-service-2010-2018',
    title: 'Customer Service Representative',
    company: 'Various Service Industries',
    location: 'Los Angeles, CA',
    startDate: '2010-01-01',
    endDate: '2018-01-01',
    description: 'Customer service professional focused on delivering exceptional service and building lasting relationships',
    achievements: [
      'Maintained high customer satisfaction ratings through attentive service and problem resolution',
      'Processed customer inquiries, complaints, and requests with accuracy and professionalism',
      'Developed strong multitasking abilities managing multiple customer interactions simultaneously',
      'Contributed to team goals and participated in continuous improvement initiatives',
      'Built reputation for reliability, attention to detail, and positive attitude'
    ],
    technologies: ['Customer Management Systems', 'Help Desk Software', 'Communication Tools', 'Data Entry Systems']
  }
];

export const certifications: Certification[] = [
  {
    id: 'berkeley-bootcamp',
    name: 'Full-Stack Web Development Bootcamp Certificate',
    issuer: 'UC Berkeley Extension',
    issueDate: '2024-12-01'
  }
];

export const skills: Skill[] = [
  {
    category: 'Frontend Technologies',
    skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive Design', 'jQuery', 'Redux', 'Next.js', 'Material-UI']
  },
  {
    category: 'Backend Technologies', 
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'PostgreSQL', 'MongoDB', 'Database Design', 'Authentication & Authorization', 'JWT', 'bcrypt', 'Sequelize ORM', 'Mongoose ODM']
  },
  {
    category: 'Development Tools & Platforms',
    skills: ['Git & GitHub', 'VS Code', 'Command Line/Terminal', 'Postman', 'Chrome DevTools', 'npm/yarn', 'Webpack', 'Babel', 'ESLint', 'Prettier', 'Jest', 'React Testing Library']
  },
  {
    category: 'Deployment & DevOps',
    skills: ['Heroku', 'Vercel', 'GitHub Pages', 'Netlify', 'CI/CD', 'Environment Configuration', 'Domain Management', 'SSL Certificates', 'Docker (Basic)', 'AWS (Basic)']
  },
  {
    category: 'Databases & Data Management',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Database Design', 'Data Modeling', 'SQL Queries', 'NoSQL', 'Database Optimization', 'Data Validation', 'Schema Design']
  },
  {
    category: 'Soft Skills & Methodologies',
    skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Customer Service', 'Attention to Detail', 'Continuous Learning', 'Agile Development', 'Scrum', 'Project Management', 'Time Management']
  },
  {
    category: 'Additional Technical Skills',
    skills: ['API Integration', 'Third-Party Services', 'Payment Processing (Stripe)', 'Email Services', 'File Upload/Management', 'Image Processing', 'Performance Optimization', 'SEO Basics', 'Accessibility (a11y)', 'Progressive Web Apps (PWA)']
  }
];