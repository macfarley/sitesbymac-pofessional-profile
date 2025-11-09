# Sites by Mac – Professional Portfolio

This is my professional portfolio and consulting website, built with **Next.js 15**, **React with TypeScript**, and **Tailwind CSS**. It showcases my full-stack development expertise, portfolio projects, professional experience, and technical skills.

## 🚀 Features

- **Responsive Design**: Mobile-first with dark/light theme support
- **Accessibility**: WCAG AA compliance with proper ARIA labels and keyboard navigation
- **Dynamic Content**: Projects, skills, and experience loaded from data files
- **Resume System**: ATS-friendly and printer-friendly PDF downloads
- **Collapsible Sections**: Career information organized with expand/collapse functionality
- **Project Showcase**: 6+ featured projects with tech stacks and live demos
- **Performance**: Image optimization, lazy loading, and static generation
- **Continuous Deployment**: Automatic builds and deploys via Vercel

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4 with dark mode
- **Testing**: Jest & React Testing Library
- **Build**: Turbopack
- **Deployment**: Vercel
- **PDF Generation**: WeasyPrint (Python)

## 📁 Project Structure

```
therealmccoyweb/
├── src/
│   ├── app/              # Next.js pages (home, about, projects)
│   ├── components/       # Reusable React components
│   ├── data/            # Content data (projects, resume, skills)
│   ├── types/           # TypeScript interfaces
│   └── utils/           # Helper functions
├── public/
│   ├── assets/
│   │   ├── logos/       # Tech stack and project logos
│   │   ├── screenshots/ # Project screenshots
│   │   └── documents/   # PDFs and certificates
│   └── [Images]        # Favicons, avatars, etc.
├── scripts/             # Build and utility scripts
├── docs/               # Documentation (ARCHITECTURE.md, etc.)
└── [Config files]      # ESLint, Jest, Tailwind, etc.
```

## 🚦 Getting Started

### Development

```bash
# Install dependencies
npm install

# Start dev server (hot reload at http://localhost:3000)
npm run dev

# Run tests
npm test

# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

### Resume Generation

To regenerate PDF versions of your resume:

```bash
# Generate both styled and ATS PDFs
npm run generate-resumes
```

See [docs/RESUME-GENERATION.md](../docs/RESUME-GENERATION.md) for detailed instructions.

## 📖 Documentation

- **[ARCHITECTURE.md](../docs/ARCHITECTURE.md)** - Complete project structure and component documentation
- **[RESUME-GENERATION.md](../docs/RESUME-GENERATION.md)** - How to regenerate resume PDFs
- **[development-log.md](../docs/development-log.md)** - Project history and notes

## 🔗 Live Demo

👉 [sitesbymac.dev](https://sitesbymac.dev)

## 🎯 Key Pages

- **Home** (`/`) - Hero, featured projects, quick links
- **About** (`/about`) - Career summary, skills, experience, education
- **Projects** (`/projects`) - Complete project showcase with filtering
- **Project Details** (`/projects/[id]`) - Detailed project information

## 🌟 Highlights

### Featured Projects
- **StirCraft**: Django cocktail management platform with 100% test coverage
- **SitesbyMac.dev**: This portfolio site built with Next.js
- **Dream Weaver**: Full-stack sleep tracking app with MERN stack
- **VolunQueer**: LGBTQ+ volunteer platform (in development)
- **Fridge Buddy**: Django food inventory management app

### Content
- 30+ technical skills across full-stack development
- 5+ years professional experience documented
- 3+ certifications and professional associations
- Comprehensive education history

## 🔄 Deployment

This site is deployed on **Vercel** with automatic deployments on push to the main branch.

### Deployment Checklist

```bash
# 1. Verify linting passes
npm run lint

# 2. Verify build succeeds
npm run build

# 3. Test locally
npm run build && npm start

# 4. Commit changes
git add .
git commit -m "feat: description of changes"

# 5. Push to main (triggers Vercel deployment)
git push origin main
```

## 📝 Content Management

### Adding a Project

Edit `src/data/projects.ts` and add:

```typescript
{
  id: 'unique-project-id',
  title: 'Project Name',
  description: 'Short description',
  longDescription: 'Detailed description for project page',
  technologies: ['React', 'TypeScript', 'Tailwind'],
  liveUrl: 'https://live-demo.com',  // optional
  githubUrl: 'https://github.com/...',
  imageUrl: '/assets/logos/project.png',
  featured: true,
  completedDate: '2025-11-09'
}
```

### Updating Resume Data

Edit `src/data/resume.ts` to add skills, experience, education, certifications, etc.

## 🎨 Customization

### Tailwind Theme

Edit `tailwind.config.js` to customize:
- Colors (currently amber/orange + cyan accents)
- Typography and spacing
- Dark mode configuration

### Styling

Global styles: `src/app/globals.css`
Component styles: Inline Tailwind classes in components

## 🧪 Testing

```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

## 🚀 Performance

- Image optimization via Next.js Image component
- Lazy loading for project images
- Static site generation where possible
- CSS minification via Tailwind
- Bundle optimization with Turbopack

## 📞 Contact

- **Email**: mac@sitesbymac.dev
- **GitHub**: https://github.com/macfarley
- **LinkedIn**: https://www.linkedin.com/in/travis-mccoy-fullstack
- **Portfolio**: https://sitesbymac.dev

## 📄 License

MIT License - Feel free to use this code structure for your own portfolio!

### What You Can Use
✅ Code structure and components  
✅ Styling and layout patterns  
✅ Technical implementation  
✅ Build configuration  

### What to Replace
❌ Personal information (resume data, projects)  
❌ Images and branding  
❌ Project descriptions  
❌ McAxl™ character and imagery (copyrighted)  

See [LICENSE](LICENSE) for full details.

---

Built with ❤️ using Next.js 15  
*Last updated: November 9, 2025*

