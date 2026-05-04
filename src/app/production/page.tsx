import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Production Portfolio — SitesByMac.dev',
  description:
    'A production-minded portfolio: HTML email templates, QA debugging case studies, document generation, and responsive landing pages. Built for real delivery.',
  alternates: {
    canonical: '/production',
  },
  openGraph: {
    title: 'Production Portfolio | SitesByMac.dev',
    description:
      'Real production work: email templates, QA debugging write-ups, document generation CLI, and responsive landing pages.',
    url: 'https://sitesbymac.dev/production',
    type: 'website',
  },
};

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline ml-1 opacity-70" aria-hidden="true">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
);

export default function ProductionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-stone-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-800 text-amber-900 dark:text-gray-100">

      {/* HERO */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-100 to-stone-200 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm sm:text-base font-semibold tracking-wide uppercase text-amber-700 dark:text-cyan-400 mb-4">
            Atkins Digital · Production Portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            Production-Ready Work
          </h1>
          <p className="text-lg sm:text-xl text-amber-800 dark:text-gray-300 max-w-3xl leading-relaxed">
            This page shows the work I care most about: things that ship, things that document real failure modes, and things that generate real output. Code that reaches end users. QA that finds the silent edge case. Tooling that saves teams hours.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto py-16 px-4 space-y-12">

        {/* HTML EMAIL TEMPLATES */}
        <section>
          <h2 className="text-2xl font-bold mb-2">HTML Email Templates</h2>
          <p className="text-amber-800 dark:text-gray-400 mb-6 max-w-2xl">
            Built with table-based layout, inline CSS, and Outlook conditional comments. Tested across Gmail, Outlook, and mobile clients. Zero framework dependencies.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="rounded-xl border border-amber-600/25 dark:border-cyan-400/25 bg-stone-50/90 dark:bg-gray-800/70 p-6 shadow-sm flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-3xl" aria-hidden="true">📧</span>
                <div>
                  <h3 className="font-semibold text-lg">Branded Email — Pizza</h3>
                  <p className="text-sm text-amber-700 dark:text-gray-400 mt-1">
                    Table layout · inline CSS · Gmail + Outlook safe · Outlook conditional comments · mobile-responsive
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-auto flex-wrap">
                <a
                  href="/email-templates/email-pizza.html"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-900 dark:bg-cyan-600 text-stone-50 dark:text-gray-950 font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Download
                </a>
                <a
                  href="/email-templates/email-pizza.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-700/40 dark:border-cyan-400/40 font-semibold text-sm hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors"
                >
                  Preview
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-amber-600/25 dark:border-cyan-400/25 bg-stone-50/90 dark:bg-gray-800/70 p-6 shadow-sm flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-3xl" aria-hidden="true">✍️</span>
                <div>
                  <h3 className="font-semibold text-lg">Narrative Email — Cousin Vinny</h3>
                  <p className="text-sm text-amber-700 dark:text-gray-400 mt-1">
                    Long-form copy · decorative serif · mobile-responsive · inline CSS
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-auto flex-wrap">
                <a
                  href="/email-templates/email-cousin-vinny.html"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-900 dark:bg-cyan-600 text-stone-50 dark:text-gray-950 font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Download
                </a>
                <a
                  href="/email-templates/email-cousin-vinny.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-700/40 dark:border-cyan-400/40 font-semibold text-sm hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors"
                >
                  Preview
                </a>
              </div>
            </div>

          </div>
          <p className="mt-4 text-sm text-amber-700 dark:text-gray-500">
            Full template gallery and Document Wizard write-up →{' '}
            <Link href="/design" className="underline hover:text-amber-900 dark:hover:text-cyan-300 transition-colors">
              /design
            </Link>
          </p>
        </section>

        {/* QA CASE STUDY */}
        <section>
          <h2 className="text-2xl font-bold mb-2">QA Case Study: Supabase Silent Failure</h2>
          <p className="text-amber-800 dark:text-gray-400 mb-6 max-w-2xl">
            A real production debugging write-up. Supabase migrations were silently discarding work with no error output — I found it, documented it, and published the fix so others wouldn't lose their morning.
          </p>
          <Link
            href="/blog/supabase-migrations"
            className="inline-block rounded-xl border border-amber-600/25 dark:border-cyan-400/25 bg-stone-50/90 dark:bg-gray-800/70 p-6 shadow-sm hover:shadow-md hover:border-amber-600/50 dark:hover:border-cyan-400/50 transition-all max-w-2xl w-full"
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl" aria-hidden="true">🔍</span>
              <div>
                <h3 className="font-semibold text-lg">Supabase Migrations: The Silent Failure That Wasted My Morning</h3>
                <p className="text-sm text-amber-700 dark:text-gray-400 mt-1">
                  Supabase · Postgres · Debugging · Mar 2026
                </p>
              </div>
            </div>
            <p className="text-amber-800 dark:text-gray-300 text-sm leading-relaxed mb-4">
              Real debugging. Real production failure. Real write-up — a failure mode in Supabase migrations that silently discards your work with no errors, and how to avoid it.
            </p>
            <span className="text-sm font-semibold text-amber-900 dark:text-cyan-400 underline">
              Read the case study
              <ExternalLinkIcon />
            </span>
          </Link>
        </section>

        {/* DOCUMENT WIZARD */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Document Wizard CLI</h2>
          <p className="text-amber-800 dark:text-gray-400 mb-6 max-w-2xl">
            A zero-dependency Node.js CLI that transforms structured JSON into self-contained, print-optimized HTML. Resume, cover letter, proposal, email — one tool, consistent output, no runtime.
          </p>
          <Link
            href="/design"
            className="inline-block rounded-xl border border-amber-600/25 dark:border-cyan-400/25 bg-stone-50/90 dark:bg-gray-800/70 p-6 shadow-sm hover:shadow-md hover:border-amber-600/50 dark:hover:border-cyan-400/50 transition-all max-w-2xl w-full"
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl" aria-hidden="true">⚙️</span>
              <div>
                <h3 className="font-semibold text-lg">SitesByMac Document Wizard</h3>
                <p className="text-sm text-amber-700 dark:text-gray-400 mt-1">
                  Node.js · Zero dependencies · Print-optimized HTML · AI-assisted authoring
                </p>
              </div>
            </div>
            <p className="text-amber-800 dark:text-gray-300 text-sm leading-relaxed mb-4">
              Full case study: architecture decisions, JSON schema design, CSS engine, CLI workflow, template gallery, and the complete before/after story of how this replaced a manual 45-minute process.
            </p>
            <span className="text-sm font-semibold text-amber-900 dark:text-cyan-400 underline">
              View full case study
              <ExternalLinkIcon />
            </span>
          </Link>
        </section>

        {/* STIRCRAFT */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Responsive Landing Page: StirCraft</h2>
          <p className="text-amber-800 dark:text-gray-400 mb-6 max-w-2xl">
            Full-stack team project: production deployment on Heroku + PostgreSQL, responsive Django templates, accessibility-first design, and a seeded demo dataset for realistic product walkthroughs.
          </p>
          <Link
            href="/projects/stircraft"
            className="inline-block rounded-xl border border-amber-600/25 dark:border-cyan-400/25 bg-stone-50/90 dark:bg-gray-800/70 p-6 shadow-sm hover:shadow-md hover:border-amber-600/50 dark:hover:border-cyan-400/50 transition-all max-w-2xl w-full"
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl" aria-hidden="true">🍹</span>
              <div>
                <h3 className="font-semibold text-lg">StirCraft: Mixology Discovery Application</h3>
                <p className="text-sm text-amber-700 dark:text-gray-400 mt-1">
                  Django · Python · PostgreSQL · Heroku · Team Lead · Aug 2025
                </p>
              </div>
            </div>
            <p className="text-amber-800 dark:text-gray-300 text-sm leading-relaxed mb-4">
              Led a team of four to design, build, and deploy a full-stack cocktail discovery platform. Production-deployed with real data, real users, and a full QA pass before launch.
            </p>
            <span className="text-sm font-semibold text-amber-900 dark:text-cyan-400 underline">
              View project
              <ExternalLinkIcon />
            </span>
          </Link>
        </section>

      </div>

      {/* FOOTER CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-amber-100 to-stone-200 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">See the full portfolio</h2>
          <p className="text-amber-800 dark:text-gray-300 mb-8 text-lg">
            More projects, client work, and context on the process behind the work.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg bg-amber-900 dark:bg-cyan-600 text-stone-50 dark:text-gray-950 font-semibold hover:opacity-90 transition-opacity"
            >
              All Projects
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-lg border border-amber-700/40 dark:border-cyan-400/40 font-semibold hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors"
            >
              About Mac
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
