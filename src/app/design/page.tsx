import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Document Wizard',
  description:
    'SitesByMac Document Wizard — AI-assisted, print-optimized HTML document generation. A zero-dependency CLI tool that transforms structured JSON into self-contained, print-ready HTML files.',
  alternates: {
    canonical: '/design',
  },
  openGraph: {
    title: 'Document Wizard | Sites by Mac',
    description:
      'Zero-dependency CLI tool for generating self-contained, print-optimized HTML documents from structured JSON. AI-assisted authoring workflow.',
    url: 'https://sitesbymac.dev/design',
    type: 'website',
  },
};

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const templates = [
  { name: 'Resume', detail: '1–2 pages, modular sections, ATS-safe', icon: '📄', preview: '/wizard-preview-resume.png', download: null },
  { name: 'Cover Letter', detail: 'Letterhead + body + signature block', icon: '✉️', preview: null, download: null },
  { name: 'Project Brief', detail: 'Scope, deliverables, timeline', icon: '📋', preview: null, download: null },
  { name: 'Report', detail: 'Multi-section with ToC and page numbers', icon: '📊', preview: null, download: null },
  { name: 'Proposal', detail: 'Problem → solution → pricing structure', icon: '🤝', preview: null, download: null },
  { name: 'Checklist / Form', detail: 'Print-ready field layout with labels', icon: '☑️', preview: null, download: null },
  { name: 'Branded Email', detail: 'Table layout · inline CSS · Gmail + Outlook safe', icon: '📧', preview: null, download: '/email-templates/email-pizza.html' },
  { name: 'Narrative Email', detail: 'Long-form copy · decorative serif · mobile-responsive', icon: '✍️', preview: null, download: '/email-templates/email-cousin-vinny.html' },
];

const roadmap = [
  'GUI template editor (browser-based)',
  'Drag-and-drop section reordering',
  'CLI integration for email templates',
  'Multi-language / locale support',
  'Theme tokens (brand colors, fonts)',
  'Live print preview panel',
];

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-stone-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-800 text-amber-900 dark:text-gray-100">

      {/* HERO */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-100 to-stone-200 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm sm:text-base font-semibold tracking-wide uppercase text-amber-700 dark:text-cyan-400 mb-4">
            SitesByMac Toolkit · Case Study
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            SitesByMac Document Wizard
          </h1>
          <p className="text-lg sm:text-xl text-amber-800 dark:text-gray-300 max-w-3xl leading-relaxed mb-4">
            AI-assisted, print-optimized HTML document generation.
          </p>
          <p className="text-base text-amber-800 dark:text-gray-300 max-w-3xl leading-relaxed mb-8">
            A zero-dependency CLI tool that transforms AI-generated copy into structured JSON and
            outputs self-contained, print-ready HTML files. No build step. No server. No dependencies.
            Same input always produces the same output.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/macfarley/sitesbymac-document-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-900 dark:bg-cyan-600 text-stone-50 dark:text-gray-950 font-semibold hover:bg-amber-800 dark:hover:bg-cyan-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-700 dark:focus:ring-cyan-400 focus:ring-offset-2"
              aria-label="View Document Wizard repository on GitHub"
            >
              <GitHubIcon />
              View the Repository →
            </a>
          </div>
        </div>
      </section>

      {/* FINISHED PRODUCT */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Finished Product</h2>
          <p className="text-amber-800 dark:text-gray-400 mb-8 text-base">
            A real resume generated by the Wizard — letterhead, structured sections, print button.
          </p>
          <div className="rounded-xl border border-amber-600/25 dark:border-cyan-400/25 overflow-hidden shadow-lg">
            <Image
              src="/wizard-preview-resume.png"
              alt="Document Wizard output: a fully formatted resume with letterhead, summary, skills, and experience sections"
              width={1280}
              height={720}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-14 px-4 bg-gradient-to-r from-stone-200 to-stone-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Why This Exists</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                label: 'The Problem',
                title: 'Traditional tools break formatting',
                body: 'Word and Google Docs produce inconsistent output across machines, printers, and PDF engines. Margin drift, font substitution, and layout collapse are routine. A document that looks right on your screen often prints wrong.',
              },
              {
                label: 'The Gap',
                title: 'AI is fast — layout is still manual',
                body: 'LLMs can produce polished copy in seconds, but getting that copy into a branded, print-ready document still requires manual formatting work in tools that were never designed for programmatic output.',
              },
              {
                label: 'The Solution',
                title: 'Structured JSON + deterministic CSS',
                body: 'The Wizard separates content from layout. You provide structured data; the CSS engine handles spacing, hierarchy, and page-break rules. Same JSON input always produces the same output — predictable, auditable, repeatable.',
              },
              {
                label: 'The Constraint',
                title: 'Zero dependencies by design',
                body: 'No build step, no server, no runtime. The entire toolchain runs in Node and outputs a single HTML file. Drop it anywhere — it works offline and opens in any browser. One Print button converts it to PDF.',
              },
            ].map(({ label, title, body }) => (
              <article
                key={title}
                className="rounded-xl border border-amber-600/25 dark:border-cyan-400/25 bg-stone-50/90 dark:bg-gray-800/70 p-6 shadow-sm"
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 dark:text-cyan-500 mb-2">
                  {label}
                </p>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-amber-800 dark:text-gray-300 text-sm leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Architecture</h2>
          <p className="text-amber-800 dark:text-gray-400 mb-8 text-base">
            Linear pipeline. Each stage has a single responsibility.
          </p>
          <div className="rounded-xl border border-amber-600/25 dark:border-cyan-400/25 bg-stone-50/90 dark:bg-gray-800/70 p-6 shadow-sm overflow-x-auto mb-8">
            <div className="flex items-center gap-0 min-w-max text-sm font-mono">
              {[
                { label: 'AI Copy', sub: 'raw text' },
                { label: 'JSON Mapper', sub: 'structured data' },
                { label: 'CSS Engine', sub: 'layout rules' },
                { label: 'HTML Builder', sub: 'self-contained file' },
                { label: 'Print / PDF', sub: 'final output' },
              ].map((node, i) => (
                <span key={node.label} className="flex items-center gap-0">
                  <span className="flex flex-col items-center px-3 py-2 rounded-lg bg-amber-100 dark:bg-gray-700 border border-amber-600/30 dark:border-cyan-400/30">
                    <span className="font-semibold text-amber-900 dark:text-cyan-300 text-xs">{node.label}</span>
                    <span className="text-amber-700 dark:text-gray-400 text-xs">{node.sub}</span>
                  </span>
                  {i < 4 && (
                    <span className="text-amber-500 dark:text-cyan-600 font-bold mx-1 text-base select-none">→</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Paste AI-generated copy', description: 'Start with raw content from ChatGPT, Claude, or your own prompts. No special formatting required.' },
              { step: '02', title: 'Wizard maps content to JSON', description: 'A structured schema captures headings, sections, contact info, dates, and document metadata.' },
              { step: '03', title: 'CSS engine applies structure', description: 'Spacing, typographic hierarchy, page-count rules, and print overrides are applied algorithmically.' },
              { step: '04', title: 'Output: self-contained HTML', description: 'One file. Embedded styles. One-click Print. Opens anywhere, works offline, prints to PDF.' },
            ].map(({ step, title, description }) => (
              <article key={step} className="rounded-xl border border-amber-600/25 dark:border-cyan-400/25 bg-stone-50/90 dark:bg-gray-800/70 p-6 shadow-sm">
                <p className="text-3xl font-bold text-amber-400 dark:text-cyan-500 mb-3 font-mono">{step}</p>
                <h3 className="text-base font-semibold mb-2">{title}</h3>
                <p className="text-sm text-amber-800 dark:text-gray-400 leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-14 px-4 bg-gradient-to-r from-stone-200 to-stone-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Before → After</h2>
          <p className="text-amber-800 dark:text-gray-400 mb-8 text-base">
            Raw AI output transformed into a structured, print-ready document.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-red-400/40 dark:border-red-500/30 bg-stone-900 dark:bg-gray-950 overflow-hidden shadow-lg">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-red-400/20 bg-red-950/40">
                <span className="text-xs font-mono text-red-400 uppercase tracking-widest">Before — Raw AI Output</span>
              </div>
              <pre className="px-5 py-5 text-xs font-mono text-red-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">{`Travis McCoy
Software Engineer

Summary: I am a full-stack developer
with experience in Django, React, etc.
I worked at TDCJ for 7 years blah blah.

Skills: Python, JS, TypeScript, React...

Experience:
SitesByMac - Founder - June 2025
- built stuff
- did things

Education:
General Assembly 2025
Wright State 2007-2009`}</pre>
            </div>
            <div className="rounded-xl border border-green-400/40 dark:border-green-500/30 bg-stone-900 dark:bg-gray-950 overflow-hidden shadow-lg">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-green-400/20 bg-green-950/40">
                <span className="text-xs font-mono text-green-400 uppercase tracking-widest">After — Wizard Output</span>
              </div>
              <pre className="px-5 py-5 text-xs font-mono text-green-300 leading-relaxed overflow-x-auto">{`<header class="letterhead">
  <h1>Travis "Mac" McCoy</h1>
  <p class="tagline">
    Full-Stack Software Engineer
  </p>
  <div class="contact-row">
    <span>Dayton, OH</span>
    <span>mac@sitesbymac.dev</span>
  </div>
</header>

<section class="content-block">
  <h2>Summary</h2>
  <p class="summary-text"><!-- mapped --></p>
</section>

<section class="content-block">
  <h2>Experience</h2>
  <div class="job"><!-- structured --></div>
</section>

<button onclick="window.print()">
  Print / Save as PDF
</button>`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* JSON SCHEMA */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">JSON Schema</h2>
          <p className="text-amber-800 dark:text-gray-400 mb-8 text-base">
            Content is fully data-driven. Structure is enforced by schema, not convention.
          </p>
          <div className="rounded-xl border border-amber-600/25 dark:border-cyan-400/25 bg-stone-900 dark:bg-gray-950 overflow-hidden shadow-lg">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-amber-600/20 dark:border-cyan-400/20">
              <span className="text-xs font-mono text-amber-400 dark:text-cyan-500 uppercase tracking-widest">resume.json</span>
            </div>
            <pre className="px-5 py-6 text-xs sm:text-sm font-mono text-blue-300 dark:text-blue-400 leading-relaxed overflow-x-auto">{`{
  "template": "resume",
  "meta": {
    "title": "Travis McCoy \u2014 Resume",
    "pages": 1,
    "theme": "professional"
  },
  "header": {
    "name": "Travis \"Mac\" McCoy",
    "tagline": "Full-Stack Software Engineer",
    "contact": {
      "location": "Dayton, OH",
      "email": "mac@sitesbymac.dev",
      "url": "sitesbymac.dev"
    }
  },
  "sections": [
    {
      "heading": "Summary",
      "type": "paragraph",
      "content": "Full-Stack Engineer blending security..."
    },
    {
      "heading": "Experience",
      "type": "jobs",
      "items": [
        {
          "title": "Founder & Developer",
          "org": "SitesByMac",
          "dates": "June 2025\u2013Present",
          "bullets": [ "..." ]
        }
      ]
    },
    {
      "heading": "Education",
      "type": "edu",
      "items": [ { "name": "General Assembly", "year": "2025" } ]
    }
  ]
}`}</pre>
          </div>
        </div>
      </section>

      {/* CSS ENGINE */}
      <section className="py-14 px-4 bg-gradient-to-r from-stone-200 to-stone-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">CSS Layout Engine</h2>
          <p className="text-amber-800 dark:text-gray-400 mb-8 text-base">
            The rules that make print output deterministic.
          </p>
          <div className="rounded-xl border border-amber-600/25 dark:border-cyan-400/25 bg-stone-900 dark:bg-gray-950 overflow-hidden shadow-lg">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-amber-600/20 dark:border-cyan-400/20">
              <span className="text-xs font-mono text-amber-400 dark:text-cyan-500 uppercase tracking-widest">layout-engine.css</span>
            </div>
            <pre className="px-5 py-6 text-xs sm:text-sm font-mono text-purple-300 dark:text-purple-400 leading-relaxed overflow-x-auto">{`/* Page setup \u2014 letter size, zero browser margins */
@page { size: letter; margin: 0; }

/* Screen: constrained to print width for WYSIWYG */
body { max-width: 8.5in; margin: 0 auto; padding: 0.45in 0.5in; }

/* Print overrides \u2014 strip padding, shrink type */
@media print {
  body { padding: 0.35in 0.42in; font-size: 7.8pt; }
  .no-print { display: none !important; }
}

/* Content blocks never break mid-section */
.content-block { page-break-inside: avoid; }

/* Force section starts onto a new page when needed */
.page-break-before { page-break-before: always; }

/* Typographic scale \u2014 enforced, not inherited */
h1 { font-size: 18pt; line-height: 1.15; }
h2 { font-size: 11pt; line-height: 1.2; margin-top: 10pt; }
p, li { font-size: 9pt; line-height: 1.45; }

/* Negative-space minimization for dense layouts */
.job { margin-bottom: 7pt; }
.job-bullets li { margin-bottom: 1.5pt; }`}</pre>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm">
            {[
              { label: 'Page-break control', detail: 'avoid, always — per section' },
              { label: 'Type scale', detail: 'Fixed pt values, not em/rem' },
              { label: 'Print overrides', detail: 'Separate @media print block' },
              { label: 'Density tuning', detail: 'Margin/padding in pt, not px' },
            ].map(({ label, detail }) => (
              <div key={label} className="rounded-lg border border-amber-600/20 dark:border-cyan-400/20 bg-stone-50 dark:bg-gray-800 px-4 py-3">
                <p className="font-semibold text-amber-900 dark:text-cyan-300 text-xs uppercase tracking-wide mb-1">{label}</p>
                <p className="text-amber-800 dark:text-gray-400 text-xs">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLI WORKFLOW */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">CLI Workflow</h2>
          <p className="text-amber-800 dark:text-gray-400 mb-8 text-base">One command. One file out.</p>
          <div className="rounded-xl border border-amber-600/25 dark:border-cyan-400/25 bg-stone-900 dark:bg-gray-950 overflow-hidden shadow-lg">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-amber-600/20 dark:border-cyan-400/20">
              <span className="text-xs font-mono text-amber-400 dark:text-cyan-500 uppercase tracking-widest">terminal</span>
            </div>
            <pre className="px-5 py-6 text-xs sm:text-sm font-mono text-green-300 dark:text-green-400 leading-loose overflow-x-auto">{`# Generate a resume from structured JSON
$ node wizard generate resume.json --template=resume --pages=1

# Generate a cover letter with custom letterhead
$ node wizard generate letter.json --template=cover-letter

# Generate a multi-section project proposal
$ node wizard generate proposal.json --template=report --pages=2

# All commands output a self-contained .html file
\u2192 output/resume_styled.html
\u2192 output/cover_letter.html
\u2192 output/proposal.html`}</pre>
          </div>
        </div>
      </section>

      {/* TEMPLATE GALLERY */}
      <section className="py-14 px-4 bg-gradient-to-r from-stone-200 to-stone-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Template Gallery</h2>
          <p className="text-amber-800 dark:text-gray-400 mb-8 text-base">
            Same pipeline, different schema shapes. Each template is a JSON spec + CSS block.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map(({ name, detail, icon, preview, download }) => (
              <article key={name} className="rounded-xl border border-amber-600/25 dark:border-cyan-400/25 bg-stone-50/90 dark:bg-gray-800/70 p-6 shadow-sm flex flex-col">
                <div className="text-2xl mb-3" aria-hidden="true">{icon}</div>
                <h3 className="font-semibold text-base mb-1">{name}</h3>
                <p className="text-sm text-amber-800 dark:text-gray-400">{detail}</p>
                {preview ? (
                  <div className="mt-4 rounded-lg overflow-hidden border border-amber-400/30 dark:border-cyan-600/20 shadow-sm">
                    <Image
                      src={preview}
                      alt={`${name} template preview`}
                      width={480}
                      height={270}
                      className="w-full h-auto object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="mt-4 h-28 rounded-lg border-2 border-dashed border-amber-400/40 dark:border-cyan-600/30 bg-stone-100 dark:bg-gray-900/50 flex items-center justify-center">
                    <span className="text-xs text-amber-500/60 dark:text-gray-600 font-mono">[ coming soon ]</span>
                  </div>
                )}
                {download && (
                  <a
                    href={download}
                    download
                    className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-amber-900 dark:bg-cyan-600 text-stone-50 dark:text-gray-950 hover:bg-amber-800 dark:hover:bg-cyan-500 transition-colors duration-200 self-start focus:outline-none focus:ring-2 focus:ring-amber-700 dark:focus:ring-cyan-400 focus:ring-offset-1"
                    aria-label={`Download ${name} template HTML`}
                  >
                    ↓ Download template
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Features</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Zero-dependency, browser-native output',
              'JSON-driven content mapping',
              'Algorithmic CSS layout engine',
              'Strict page-count and spacing control',
              'Print-optimized @media print styles',
              'Reusable templates (letterhead, reports, resumes)',
              'Self-contained HTML with embedded assets',
              'Works offline, opens anywhere',
              'Designed for AI-assisted authoring workflows',              'Email-safe templates: table layout, inline CSS, Outlook + Gmail compatible',            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 rounded-lg bg-stone-50 dark:bg-gray-800 border border-amber-600/20 dark:border-cyan-400/20 px-5 py-4 shadow-sm text-sm text-amber-800 dark:text-gray-300 leading-relaxed">
                <span className="mt-0.5 text-amber-500 dark:text-cyan-400 font-bold shrink-0" aria-hidden="true">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-14 px-4 bg-gradient-to-r from-stone-200 to-stone-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Roadmap</h2>
          <p className="text-amber-800 dark:text-gray-400 mb-8 text-base">
            Where the tool is headed — no promises, just direction.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {roadmap.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg bg-stone-50 dark:bg-gray-800 border border-amber-600/20 dark:border-cyan-400/20 px-5 py-4 shadow-sm text-sm text-amber-800 dark:text-gray-300 leading-relaxed">
                <span className="mt-0.5 text-amber-400 dark:text-cyan-600 shrink-0" aria-hidden="true">◦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GITHUB CTA */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Open Source</h2>
          <p className="text-amber-800 dark:text-gray-300 mb-8 max-w-xl mx-auto text-base leading-relaxed">
            Full source, templates, JSON schema, and CSS engine on GitHub.
            Clone it, adapt it, or use it as a reference for your own document pipeline.
          </p>
          <a
            href="https://github.com/macfarley/sitesbymac-document-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-amber-900 dark:bg-cyan-600 text-stone-50 dark:text-gray-950 font-semibold hover:bg-amber-800 dark:hover:bg-cyan-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-700 dark:focus:ring-cyan-400 focus:ring-offset-2"
            aria-label="View Document Wizard repository on GitHub"
          >
            <GitHubIcon />
            View on GitHub →
          </a>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <div className="py-8 px-4 border-t border-amber-600/20 dark:border-cyan-400/20">
        <p className="text-center text-sm text-amber-700 dark:text-gray-500 max-w-2xl mx-auto">
          Part of the SitesByMac.dev toolkit. Built for developers, writers, and anyone who needs
          clean, consistent documents fast.
        </p>
      </div>

    </div>
  );
}
