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
- 🔗 **Smart Project Redirects**: User-friendly URLs that redirect to live project demos with analytics tracking
- 📱 **Mobile Navigation**: Hamburger menu for seamless mobile experience
- 🎮 **Retro Visitor Counter**: Nostalgic web counter with unique visitor tracking (localStorage-based, privacy-friendly)
- 📊 **Redirect Management**: Built-in dashboard for testing and monitoring project URLs

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **PDF Generation**: jsPDF
- **URL Redirects**: Next.js Middleware with analytics tracking
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

## Project URL Redirects

This portfolio includes a sophisticated URL redirect system that creates user-friendly, shareable links for all projects. Instead of sharing long Heroku or Vercel URLs, you can use branded short links that redirect visitors while tracking analytics.

### Available URL Patterns

**Short Links** (Easy to remember and share):
```
https://sitesbymac.dev/go/stircraft        → StirCraft cocktail app
https://sitesbymac.dev/app/dream-weaver    → Dream Weaver application  
https://sitesbymac.dev/demo/slay-the-dagron → Slay The Dagron game
https://sitesbymac.dev/live/phantastic-beasts → Phantastic Beasts site
```

**Project Links** (Consistent format):
```
https://sitesbymac.dev/projects/stircraft/live
https://sitesbymac.dev/projects/dream-weaver/live
https://sitesbymac.dev/projects/slay-the-dagron/live
https://sitesbymac.dev/projects/phantastic-beasts/live
```

**Legacy Support** (For backwards compatibility):
```
https://sitesbymac.dev/stircraft    → StirCraft
https://sitesbymac.dev/beasts       → Phantastic Beasts
https://sitesbymac.dev/dagron       → Slay The Dagron
https://sitesbymac.dev/dreams       → Dream Weaver
```

### Analytics Tracking

All redirects automatically include UTM parameters for comprehensive analytics:
- **utm_source**: Redirect type (go-link, project-live, app-link, etc.)
- **utm_medium**: redirect
- **utm_campaign**: portfolio-redirect
- **utm_content**: Project ID
- **utm_term**: Date stamp

### Redirect Management

- **Dashboard**: Visit `/redirects` to test and monitor all redirect URLs
- **API**: `/api/redirects` provides JSON data of all available redirects
- **Documentation**: `/api/redirects?format=html` shows user-friendly documentation

### Technical Implementation

The redirect system uses Next.js middleware for optimal performance:
- **Zero latency**: Redirects happen at the edge
- **Automatic updates**: Syncs with project data changes
- **Security**: Rate limiting and proper headers
- **Monitoring**: Built-in health checks and logging

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

### 5. Nostalgic Features
The portfolio includes a retro visitor counter for that classic web nostalgia:
- **Privacy-friendly**: Uses localStorage, no external tracking
- **Unique visitors only**: Doesn't count refreshes or repeat visits
- **Three styles**: Retro (terminal green), Modern (gradient), Minimal (clean)
- **Animated counting**: Satisfying count-up effect to final number
- **Cross-platform**: Tracks visits from any source (social, search, direct)

```tsx
// Usage examples:
<VisitorCounter style="retro" />     // Classic green terminal style
<VisitorCounter style="modern" />    // Gradient background
<VisitorCounter style="minimal" />   // Clean and subtle
```

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
- **VisitorCounter**: Nostalgic web counter with three visual styles (retro, modern, minimal)
- **Redirect Middleware**: Smart URL routing with analytics tracking
- **Redirect Dashboard**: Management interface for testing and monitoring project URLs

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
