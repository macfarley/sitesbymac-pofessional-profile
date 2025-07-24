import { Project } from '../types/project';

export const projects: Project[] = [
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
