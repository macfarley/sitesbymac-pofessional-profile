import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'stircraft',
    title: 'StirCraft: Professional Cocktail Manager',
    description: 'A sophisticated Django web application for cocktail enthusiasts, bartenders, and culinary professionals. Led team development with comprehensive recipe management, social features, and professional deployment.',
    longDescription: 'StirCraft is a comprehensive cocktail recipe management platform that transforms how you discover, create, and share cocktail recipes. Built with Django and modern web technologies, it offers recipe creation with precise measurements, social features including user profiles and custom lists, ABV calculation, recipe forking with attribution tracking, advanced search and filtering, and professional-grade deployment on Heroku. Led a team of developers in creating this production-ready application with 57 comprehensive tests, 6 core database models with advanced relationships, and sophisticated demo data generation for presentations.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'JavaScript', 'Heroku', 'PIL/Pillow', 'django-taggit'],
    liveUrl: 'https://stircraft-app-0dd06cf5d30a.herokuapp.com/',
    githubUrl: 'https://github.com/macfarley/stir-craft',
    featured: true,
    completedDate: '2025-08-27',
    imageUrl: '/stircraft-screenshot.png'
  },
  {
    id: 'phantastic-beasts',
    title: 'Phantastic Beasts',
    description: 'A full-stack web application showcasing fantasy creatures with interactive features.',
    longDescription: 'A comprehensive fantasy creature database built with modern web technologies. Features user authentication, creature browsing, and detailed creature information.',
    technologies: ['MongoDB', 'EJS', 'Heroku'],
    liveUrl: 'https://phantastic-beasts-d585c0bc1aa9.herokuapp.com/',
    githubUrl: 'https://github.com/macfarley/Phantastic-Beasts',
    featured: true,
    completedDate: '2024-12-01',
    imageUrl: '/beastsScreenshot.png'
  },
  {
    id: 'slay-the-dagron',
    title: 'Slay The Dagron',
    description: 'An interactive browser-based game with engaging gameplay mechanics.',
    longDescription: 'A fun, interactive game built with vanilla JavaScript and modern web APIs. Features game state management, responsive design, and engaging user interactions.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'GitHub Pages'],
    liveUrl: 'https://macfarley.github.io/slay-the-dagron/',
    githubUrl: 'https://github.com/macfarley/slay-the-dagron',
    featured: true,
    completedDate: '2024-11-15',
    imageUrl: '/dagronScreenshot.png'
  },
  {
    id: 'dream-weaver',
    title: 'Dream Weaver',
    description: 'A creative web application with modern UI/UX design.',
    longDescription: 'A beautifully designed web application focusing on user experience and modern design patterns. Built with React and deployed on Vercel for optimal performance.',
    technologies: ['React', 'Vite', 'MongoDB', 'Node.js', 'Heroku', 'Vercel'],
    liveUrl: 'https://dream-weaver-rho.vercel.app/',
    githubUrl: 'https://github.com/macfarley/dream-weaver',
    featured: true,
    completedDate: '2024-10-20',
    imageUrl: '/dreamScreenshot.png'
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
