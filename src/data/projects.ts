import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'stircraft',
    title: 'StirCraft: Professional Cocktail Manager',
    description: 'A sophisticated Django web application for cocktail enthusiasts, bartenders, and culinary professionals. Team lead for production-ready platform with comprehensive social features, advanced database relationships, and professional deployment.',
    longDescription: 'StirCraft is a comprehensive cocktail recipe management platform that transforms how you discover, create, and share cocktail recipes. As team lead, I architected this production-ready Django application featuring: 6 core database models with advanced relationships; Recipe management with precise measurements, ABV calculation, and forking with attribution tracking; Social features including user profiles, custom lists, favorites system, and public discovery feed; Advanced search and filtering with intelligent tag management; AJAX-powered UI with bulk operations, dynamic forms, and WCAG AA accessibility; Comprehensive testing with 57 tests achieving 100% critical path coverage; Professional deployment on Heroku with PostgreSQL, static file management, and environment configuration; Sophisticated demo data system with 15+ themed users, 316 total favorites, and 209 professional cocktails with metadata.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'JavaScript', 'Heroku', 'PIL/Pillow', 'django-taggit', 'Team Leadership', 'Agile/Scrum'],
    liveUrl: 'https://stircraft-app-0dd06cf5d30a.herokuapp.com/',
    githubUrl: 'https://github.com/macfarley/stir-craft',
    featured: true,
    completedDate: '2025-08-27',
    imageUrl: '/StirCraftLiveScreenshot.png'
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
  },
  {
    id: 'volunqueer',
    title: 'VolunQueer',
    description: 'LGBTQ+ volunteer platform connecting community members with social impact initiatives.',
    longDescription: 'VolunQueer is an inclusive platform designed to connect LGBTQ+ volunteers with community organizations and social impact initiatives. Built with Django and PostgreSQL, this pre-launch application focuses on test-driven development practices, WCAG accessibility standards, and strategic migration from AWS Amplify. Features include volunteer profile management, opportunity discovery, organizational matching, and comprehensive volunteer tracking. The project emphasizes team collaboration, accessibility compliance, and robust testing with PyTest coverage.',
    technologies: ['Django', 'PostgreSQL', 'React', 'TypeScript', 'Python', 'Test-Driven Development', 'WCAG Accessibility'],
    githubUrl: 'https://github.com/macfarley/volunqueer_django',
    featured: true,
    completedDate: '2025-11-09',
    imageUrl: '/VQcolorLogo.png'
  },
  {
    id: 'fridge-buddy',
    title: 'Fridge Buddy 🥗',
    description: 'Smart food inventory management application for reducing food waste.',
    longDescription: 'Fridge Buddy is a Django web application designed to help users manage food inventory across multiple containers (fridge, freezer, pantry, shopping lists). Track expiration dates, organize items by categories, and reduce food waste with intelligent organization. Features include global food catalog with nutritional data, container management with semantic URLs, class-based views for CRUD operations, and responsive Django templates. Current development focuses on complete template implementation, user authentication, smart expiration notifications, and advanced features like barcode scanning, recipe suggestions, and meal planning integration.',
    technologies: ['Django', 'Python', 'SQLite', 'HTML5', 'CSS3', 'Pipenv', 'Class-Based Views'],
    githubUrl: 'https://github.com/macfarley/fridge-buddy',
    featured: true,
    completedDate: '2025-11-09',
    imageUrl: '/fridgebuddy.png'
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
