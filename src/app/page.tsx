/**
 * Homepage Component - Main landing page for Sites by Mac portfolio
 * 
 * Features:
 * - Hero section with McAxl mascot and personal introduction
 * - Technologies section with clickable documentation links
 * - Tools & Platforms section with external reference links
 * - Projects grid component integration
 * - Responsive design with dark/light theme support
 * 
 * Each technology/tool icon is clickable and opens official documentation
 * in a new tab for quick developer reference while browsing the portfolio.
 */

import Image from 'next/image';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Full-Service Technomancer for Small Businesses | Sites by Mac',
  description: 'Mac McCoy builds and maintains the digital infrastructure that keeps your business running — websites, workflows, content, onboarding, and ongoing support.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sites by Mac — Full-Service Technomancer',
    description: 'Digital systems, design, development, automation, and white-glove support for small businesses.',
    url: 'https://sitesbymac.dev/',
    type: 'website',
  },
};

// Lazy load ProjectsGrid for better initial page performance
const LazyProjectsGrid = dynamic(() => import('../components/ProjectsGrid'), {
  loading: () => (
    <section className="py-16 px-4 bg-gradient-to-r from-stone-200 to-stone-300 dark:bg-gradient-to-r dark:from-gray-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-900 dark:text-gray-100 mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-stone-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-pulse"
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-600"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 w-16 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
});

export default function Home() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mac McCoy',
    url: 'https://sitesbymac.dev',
    jobTitle: 'Full-Service Technomancer — Digital Systems, Design, Development, and White-Glove Support',
    sameAs: [
      'https://bsky.app/profile/sitesbymac.bsky.social',
      'https://medium.com/@sitesbymac',
      'https://github.com/macfarley',
    ],
  };

  const services = [
    { icon: '◈', title: 'Digital Design', description: 'Branding, layout systems, UI/UX, landing pages, templates, and visual consistency across platforms.' },
    { icon: '⌨', title: 'Web Development', description: 'Modern, fast, maintainable sites built with Next.js, TypeScript, Tailwind, and CMS integrations.' },
    { icon: '✎', title: 'Technical Writing', description: 'Documentation, SOPs, onboarding guides, knowledge bases, proposals, and client-facing materials.' },
    { icon: '◉', title: 'Digital Marketing', description: 'SEO, content strategy, Google Analytics 4 setup, funnels, email templates, and local search optimization.' },
    { icon: '⚙', title: 'Fractional CTO', description: 'Tech stack selection, workflow automation, system integration, and ongoing technical oversight.' },
    { icon: '✦', title: 'White-Glove Support', description: 'Onboarding, training, troubleshooting, updates, and continuous improvement — handled personally.' },
  ];

  const steps = [
    { step: '01', title: 'Discovery', description: 'We map your workflows, pain points, and goals.' },
    { step: '02', title: 'Systems Design', description: 'I architect the digital infrastructure your business actually needs.' },
    { step: '03', title: 'Build & Implement', description: 'Websites, automations, documentation, and tools — delivered cleanly and professionally.' },
    { step: '04', title: 'Onboarding & Training', description: 'I walk you and your team through everything, step by step.' },
    { step: '05', title: 'Ongoing Support', description: 'You get a single point of contact for updates, fixes, and improvements.' },
  ];

  const differentiators = [
    { title: 'One person, not a rotating cast', description: 'You get consistent communication and a single point of accountability.' },
    { title: 'Technical and operational background', description: 'Seven years in regulated, high-volume environments means reliability, structure, and documentation-driven delivery.' },
    { title: 'Systems thinking', description: "You don't just get built things — you get workflows designed to make your business run smoother." },
    { title: 'Clear communication', description: "Technical writing is part of the service, not an afterthought. You always know what's happening and why." },
  ];

  const packages = [
    { name: 'Starter', tagline: 'Get your digital presence off the ground.', includes: ['Custom website', 'Basic onboarding', 'Go-live support'], featured: false },
    { name: 'Growth', tagline: 'Build a foundation that compounds over time.', includes: ['Website + documentation', 'Marketing setup', 'SEO + analytics', 'Training materials'], featured: true },
    { name: 'Operations', tagline: 'Your full digital department, handled.', includes: ['Full digital infrastructure', 'Fractional CTO', 'Ongoing support retainer', 'Continuous improvement'], featured: false },
  ];

  const capabilities = [
    { area: 'Web Systems', items: ['Document Wizard', 'Listings System', 'Portfolio Sites', 'Landing Pages'] },
    { area: 'Documentation & Writing', items: ['SOPs', 'Onboarding Guides', 'Client Handbooks', 'Process Docs'] },
    { area: 'Digital Marketing', items: ['SEO Setups', 'Email Templates', 'Analytics Dashboards', 'Local Search'] },
    { area: 'Automation & Workflows', items: ['Form Pipelines', 'CMS Integrations', 'Lead Alerts', 'Internal Tools'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-stone-200 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-800 text-amber-900 dark:text-gray-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      
      {/* Hero Section - Brand introduction with McAxl mascot */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* McAxl Hero Image - Brand mascot prominently displayed */}
          <div className="mb-8">
            {/* Responsive sizing: 128px mobile, 160px desktop */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
              <Image
                src="/axlotl.png"
                alt="McAxl - SitesByMac.dev mascot"
                fill
                className="object-contain drop-shadow-2xl" // Enhanced shadow for prominence
                priority // Load immediately - above the fold
                sizes="(max-width: 768px) 128px, 160px" // Responsive sizing optimization
              />
            </div>
          </div>

          <p className="text-sm font-semibold tracking-widest uppercase text-amber-600 dark:text-cyan-400 mb-4">
            Sites by Mac
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 dark:text-gray-100 mb-4">
            Full-Service Technomancer{' '}
            <span className="text-amber-700 dark:text-cyan-400">for Small Businesses</span>
          </h1>
          <p className="text-lg sm:text-xl text-amber-800 dark:text-gray-300 mb-3 max-w-2xl mx-auto">
            Digital systems, design, development, automation, and white-glove support.
          </p>
          <p className="text-base text-amber-700 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            I build and maintain the digital infrastructure that keeps your business running — websites, workflows, content, onboarding, and ongoing support, all handled for you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#services"
              className="min-h-[44px] min-w-[44px] px-6 py-3 bg-amber-700 dark:bg-cyan-500 text-white dark:text-gray-900 rounded-lg hover:bg-amber-800 dark:hover:bg-cyan-400 focus:bg-amber-800 dark:focus:bg-cyan-400 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-gray-900 focus:outline-none transition-all duration-200 font-medium shadow-md hover:shadow-lg active:scale-95"
              aria-label="Navigate to the services section"
            >
              See What I Do
            </a>
            <a
              href="mailto:mac@sitesbymac.dev"
              className="min-h-[44px] min-w-[44px] px-6 py-3 border-2 border-amber-700 dark:border-cyan-500 text-amber-700 dark:text-cyan-400 bg-transparent rounded-lg hover:bg-amber-700/10 dark:hover:bg-cyan-500/20 hover:border-amber-800 dark:hover:border-cyan-400 hover:text-amber-800 dark:hover:text-cyan-300 focus:bg-amber-700/10 dark:focus:bg-cyan-500/20 focus:border-amber-800 dark:focus:border-cyan-400 focus:text-amber-800 dark:focus:text-cyan-300 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-gray-900 focus:outline-none transition-all duration-200 font-medium active:scale-95"
              aria-label="Send email to mac@sitesbymac.dev"
            >
              Work With Me
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES — What I Do */}
      <section id="services" className="py-16 px-4 bg-gradient-to-r from-stone-200 to-stone-300 dark:from-gray-800 dark:to-slate-700">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 dark:text-gray-100 mb-3">
            What I Do
          </h2>
          <p className="text-center text-amber-700 dark:text-gray-400 mb-12 max-w-xl mx-auto">
            Six interconnected disciplines, delivered as a unified service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 bg-stone-50 dark:bg-gray-700 border border-amber-600/20 dark:border-cyan-400/20 rounded-lg hover:border-amber-600/50 dark:hover:border-cyan-400/50 transition-colors"
              >
                <div className="text-2xl mb-3 text-amber-700 dark:text-cyan-400" aria-hidden="true">{service.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-amber-900 dark:text-gray-100">{service.title}</h3>
                <p className="text-sm text-amber-800 dark:text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 dark:text-gray-100 mb-3">
            How I Work
          </h2>
          <p className="text-center text-amber-700 dark:text-gray-400 mb-12 max-w-xl mx-auto">
            A process-driven approach that treats your business like a system, not a project.
          </p>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.step} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-amber-700 dark:bg-cyan-500 text-white dark:text-gray-900 flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-lg text-amber-900 dark:text-gray-100 mb-1">{step.title}</h3>
                  <p className="text-amber-800 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="py-16 px-4 bg-gradient-to-r from-stone-200 to-stone-300 dark:from-gray-800 dark:to-slate-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 dark:text-gray-100 mb-3">
            Why Work With Me
          </h2>
          <p className="text-center text-amber-700 dark:text-gray-400 mb-12 max-w-xl mx-auto">
            What sets a technomancer apart from a freelancer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="p-6 bg-stone-50 dark:bg-gray-700 rounded-lg border border-amber-600/20 dark:border-cyan-400/20">
                <h3 className="font-bold text-amber-900 dark:text-gray-100 mb-2">✦ {item.title}</h3>
                <p className="text-sm text-amber-800 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO — Capabilities Overview */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 dark:text-gray-100 mb-3">
            Portfolio
          </h2>
          <p className="text-center text-amber-700 dark:text-gray-400 mb-12 max-w-xl mx-auto">
            Work organized by capability.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {capabilities.map((cap) => (
              <div key={cap.area} className="p-5 bg-stone-50 dark:bg-gray-700 rounded-lg border border-amber-600/20 dark:border-cyan-400/20">
                <h3 className="font-bold text-sm text-amber-700 dark:text-cyan-400 uppercase tracking-wide mb-3">{cap.area}</h3>
                <ul className="space-y-1">
                  {cap.items.map((item) => (
                    <li key={item} className="text-sm text-amber-800 dark:text-gray-300">→ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Analytics Showcase */}
          <div className="mt-10 p-6 bg-stone-50 dark:bg-gray-700 rounded-lg border border-amber-600/20 dark:border-cyan-400/20">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <h3 className="font-bold text-amber-900 dark:text-gray-100 mb-2">
                  Google Analytics 4 — Wired Up and Watching
                </h3>
                <p className="text-sm text-amber-800 dark:text-gray-300 leading-relaxed mb-3">
                  I set up GA4 for clients from scratch — measurement IDs, event tracking, and realtime dashboards so you can actually see who&apos;s coming to your site, where they came from, and what they&apos;re doing. This site runs GA4 live.
                </p>
                <p className="text-xs text-amber-600 dark:text-gray-400">
                  Setup includes: property configuration, data stream, goal/conversion events, and a walkthrough so you know how to read it.
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-72">
                <div className="relative w-full h-44 rounded-md overflow-hidden border border-amber-600/30 dark:border-cyan-400/30 bg-stone-200 dark:bg-gray-600">
                  <Image
                    src="/images/screenshots/ga4-realtime.png"
                    alt="Google Analytics 4 realtime dashboard showing live visitor activity on sitesbymac.dev"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 288px"
                  />
                </div>
                <p className="text-xs text-center text-amber-600 dark:text-gray-400 mt-2">
                  Realtime view — sitesbymac.dev
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <div id="projects">
        <LazyProjectsGrid />
      </div>

      {/* PACKAGES */}
      <section className="py-16 px-4 bg-gradient-to-r from-stone-200 to-stone-300 dark:from-gray-800 dark:to-slate-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 dark:text-gray-100 mb-3">
            Packages
          </h2>
          <p className="text-center text-amber-700 dark:text-gray-400 mb-12 max-w-xl mx-auto">
            Services structured as products. No mystery, no surprise scope.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`p-6 bg-stone-50 dark:bg-gray-700 rounded-lg border-2 transition-transform ${pkg.featured ? 'md:scale-105 shadow-lg border-amber-700 dark:border-cyan-400' : 'border-amber-600/40 dark:border-cyan-400/40'}`}
              >
                <h3 className="font-bold text-xl text-amber-900 dark:text-gray-100 mb-1">{pkg.name}</h3>
                <p className="text-sm text-amber-700 dark:text-gray-400 mb-4">{pkg.tagline}</p>
                <ul className="space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="text-sm text-amber-800 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-amber-600 dark:text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-amber-700 dark:text-gray-400 mt-8">
            Not sure which fits? Let&apos;s talk through your situation.
          </p>
        </div>
      </section>

      {/* ABOUT MAC */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 dark:text-gray-100 mb-4">About Mac</h2>
          <p className="text-amber-800 dark:text-gray-300 mb-4 leading-relaxed">
            Systems thinker. Documentation-driven. Seven years in regulated, high-volume operations — now bringing that same precision and rigor to digital work for small businesses.
          </p>
          <p className="text-amber-700 dark:text-gray-400 mb-8 leading-relaxed">
            I blend technical depth with creative execution, communicate clearly at every step, and stay involved in the tech community. The &ldquo;technomancer&rdquo; identity isn&apos;t a brand — it&apos;s how I actually work.
          </p>
          <a
            href="/about"
            className="min-h-[44px] min-w-[44px] inline-block px-6 py-3 border-2 border-amber-700 dark:border-cyan-500 text-amber-700 dark:text-cyan-400 rounded-lg hover:bg-amber-700/10 dark:hover:bg-cyan-500/20 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-gray-900 focus:outline-none transition-all duration-200 font-medium active:scale-95"
            aria-label="Navigate to the full About page"
          >
            Full Background
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-stone-200 to-stone-300 dark:from-gray-800 dark:to-slate-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 dark:text-gray-100 mb-4">
            Work With Me
          </h2>
          <p className="text-amber-800 dark:text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto">
            Ready to get your digital infrastructure handled? Reach out and I&apos;ll get back to you within one business day.
          </p>
          <a
            href="mailto:mac@sitesbymac.dev"
            className="inline-block min-h-[44px] px-8 py-4 bg-amber-700 dark:bg-cyan-500 text-white dark:text-gray-900 rounded-lg hover:bg-amber-800 dark:hover:bg-cyan-400 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-gray-900 focus:outline-none transition-all duration-200 font-medium text-lg shadow-md hover:shadow-lg active:scale-95"
            aria-label="Send email to mac@sitesbymac.dev to start a conversation"
          >
            Start the Conversation
          </a>
          <p className="mt-4 text-sm text-amber-700 dark:text-gray-400">
            mac@sitesbymac.dev — I respond personally.
          </p>
        </div>
      </section>
    </div>
  );
}
