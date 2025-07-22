# Sites by Mac - Professional Portfolio

A modern, responsive portfolio website built with Next.js and TypeScript, showcasing my web development skills and projects. This site serves multiple purposes: advancing my TypeScript and Next.js expertise, demonstrating capabilities to potential employers, and attracting freelance clients.

## Purpose & Goals

This portfolio was created to:
- **Skill Development**: Practice and master TypeScript, Next.js, and modern web development patterns
- **Career Advancement**: Showcase technical abilities to potential employers
- **Freelance Opportunities**: Provide a professional presence for client acquisition
- **Personal Branding**: Establish a cohesive online identity as "Sites by Mac"

## Features

- 🎨 **Responsive Design**: Mobile-first approach with dark/light theme support
- ♿ **WCAG Compliant**: Accessibility-focused with 44px touch targets, proper ARIA labels, and keyboard navigation
- 📄 **PDF Resume Generation**: Dynamic PDF creation using jsPDF
- 🚀 **Performance Optimized**: Next.js Image optimization and efficient loading
- 🔗 **Project Demos**: Integrated live project demonstrations via proxy rewrites
- 📱 **Mobile Navigation**: Hamburger menu for seamless mobile experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **PDF Generation**: jsPDF
- **Deployment**: Vercel
- **Domain**: Porkbun DNS management

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Building Your Own Portfolio

Want to create a similar portfolio? Here's how:

### 1. Setup
```bash
npx create-next-app@latest your-portfolio --typescript --tailwind --eslint
cd your-portfolio
npm install jspdf
```

### 2. Key Structure
```
src/
├── app/                    # App router pages
├── components/            # Reusable UI components
├── data/                  # Resume and project data
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

### 3. Essential Files to Customize
- `src/data/resume.ts` - Your personal/professional information
- `src/data/projects.ts` - Your project showcase data
- `src/components/PDFDownloadButton.tsx` - Resume PDF generation logic
- `public/` - Replace with your own images and assets

### 4. WCAG Compliance Tips
- Use `min-h-[44px] min-w-[44px]` for all clickable elements
- Add `aria-label` attributes for screen readers
- Include `focus:ring-2` classes for keyboard navigation
- Provide descriptive alt text for all images

## Project Recovery & Setup

To set up this project on a new device:

### 1. Clone the Repository
```bash
git clone https://github.com/macfarley/sitesbymac-pofessional-profile.git
cd sitesbymac-pofessional-profile
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file if needed for any environment variables.

### 4. Development
```bash
npm run dev
```

### 5. Deploy to Vercel
```bash
npm run build
# Push to GitHub, Vercel will auto-deploy
```

### 6. Domain Configuration
- Update DNS settings in Porkbun to point to Vercel
- Configure custom domain in Vercel dashboard

## Project Structure Explained

- **`/src/app/`**: Next.js App Router pages (landing, about, projects)
- **`/src/components/`**: Reusable React components with TypeScript
- **`/src/data/`**: Centralized data management for resume and projects
- **`/src/types/`**: TypeScript interfaces for type safety
- **`/public/`**: Static assets (images, logos, files)

## Key Components

- **Navigation**: Responsive nav with mobile hamburger menu
- **ThemeToggle**: Dark/light mode switching
- **ProjectCard**: Reusable project display component
- **PDFDownloadButton**: Dynamic resume PDF generation

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript fundamentals
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - web accessibility standards

## Contact

Built by Mac McCoy - [mac@sitesbymac.dev](mailto:mac@sitesbymac.dev)

## License

MIT License - Feel free to use this code structure for your own portfolio!

**Please note**: While the code structure is open source, the personal content (resume data, project descriptions, images, and branding) belongs to Mac McCoy. When using this template:

✅ **You can freely use:**
- Code structure and components
- Styling and layout patterns  
- Technical implementation
- Build configuration

❌ **Please replace with your own:**
- Personal information in `/src/data/resume.ts`
- Project data in `/src/data/projects.ts`
- Images in `/public/` directory
- Branding and content
- McAxl character and associated imagery (copyrighted by Mac McCoy)

**Special Note**: McAxl™ and all associated imagery are the exclusive intellectual property of Mac McCoy and are protected by copyright in perpetuity throughout all known and unknown universes. Please replace with your own mascot/branding.

See the [LICENSE](LICENSE) file for full details.

---

*This portfolio demonstrates modern web development practices while serving as a practical tool for career advancement and client acquisition.*
