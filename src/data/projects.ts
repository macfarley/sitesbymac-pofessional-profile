import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'stircraft',
    title: 'StirCraft: Mixology Discovery Application',
    description: 'A full-stack Django mixology discovery application for exploring, saving, and sharing cocktail recipes. Team-led build with social features, robust data modeling, accessibility, and production deployment.',
    longDescription: 'StirCraft is a full-stack mixology discovery application designed to help users discover, organize, and share cocktail recipes. As team lead, I architected and delivered a production-ready Django platform featuring six core relational models, recipe workflows with measurements and ABV logic, attribution-aware forking, and social discovery features such as profiles, custom lists, favorites, and public feeds. The app includes advanced search and filtering, dynamic AJAX interactions, WCAG AA accessibility practices, and strong test coverage on critical paths. Deployment included Heroku + PostgreSQL configuration, static asset handling, environment management, and seeded demo datasets for realistic product walkthroughs.',
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
    title: 'DreamWeaver: Dream Journaling & Mindfulness App',
    description: 'A full-stack dream journaling and mindfulness application with polished frontend UX, complete MongoDB CRUD workflows, and role-based access control.',
    longDescription: 'DreamWeaver is a dream journaling and mindfulness application built with a strong full-stack foundation. It provides a polished frontend experience backed by Node/Express APIs and MongoDB persistence with complete CRUD operations for user-created journal content. The platform includes JWT authentication, role-based access control, bcrypt-based credential security, and ownership validation to enforce safe data boundaries. Deployed to Vercel and MongoDB Atlas with production-oriented architecture and maintainability in mind.',
    technologies: ['React', 'Vite', 'MongoDB', 'Node.js', 'Express', 'JWT', 'RBAC', 'bcrypt', 'Vercel'],
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
    liveUrl: 'https://volunqueer.example.com',
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
    liveUrl: 'https://fridgebuddy.example.com',
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
