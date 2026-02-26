import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Enterprise',
  description: 'Operational bottleneck fixes for construction-adjacent and industrial teams: workflow cleanup, mobile field tools, and durable automation systems.',
  alternates: {
    canonical: '/enterprise',
  },
  openGraph: {
    title: 'Enterprise Solutions | Sites by Mac',
    description: 'Business-first workflow fixes for construction, trades, logistics, and industrial operations.',
    url: 'https://sitesbymac.dev/enterprise',
    type: 'website',
  },
};

const whatIBuild = [
  'Mobile-first field tools (Flutter)',
  'Custom automations (Python/FastAPI)',
  'Integrations with existing systems',
  'Dashboards and reporting',
  'Workflow cleanup and process mapping',
];

const problemsISolve = [
  'Lost time from manual scheduling',
  'Paper forms that never get turned in',
  'Inventory that is always off',
  'Safety logs that are inconsistent',
  'Job costing that is scattered',
  'Equipment checkouts that are not tracked',
  'Approvals stuck in text messages',
  'Repetitive office tasks that should be automated',
];

const capabilities = [
  {
    title: 'Operational Automation',
    description:
      'Turn paper trails, text threads, and spreadsheet workarounds into dependable workflows your team can trust.',
  },
  {
    title: 'Mobile-First Field Tools',
    description:
      'Build simple interfaces for phones and tablets that still work in the real world: gloves, dust, and weak signal.',
  },
  {
    title: 'Backend Logic and Integrations',
    description:
      'Connect what you already use: QuickBooks, Google Sheets, email, SMS, and internal inventory workflows.',
  },
  {
    title: 'Rapid Prototyping and Iteration',
    description:
      'Start small, test quickly with real users, and refine the system around how your operation actually runs.',
  },
  {
    title: 'On-Site Discovery and Process Mapping',
    description:
      'Walk the floor, identify bottlenecks, and convert operational chaos into a durable process.',
  },
  {
    title: 'Transparent Pricing Model',
    description:
      'Flat-rate discovery, fixed-scope build, and an optional maintenance retainer when ongoing support is needed.',
  },
];

const caseStudies = [
  {
    problem: 'Crew texted photos and status updates, then office staff retyped everything into reporting sheets.',
    fix: 'Flutter field form + FastAPI endpoint + automatic sync to Google Sheets for office visibility.',
    outcome: 'Removed duplicate entry and recovered an estimated 4-6 admin hours each week.',
  },
  {
    problem: 'Material requests were buried in text threads, causing delays and repeat trips.',
    fix: 'Mobile request workflow with supervisor approvals and structured notifications by SMS/email.',
    outcome: 'Faster approvals and fewer missed material pulls across active jobs.',
  },
  {
    problem: 'Equipment checkouts were tracked loosely, so tools disappeared between jobs.',
    fix: 'Tablet-first checkout log with operator, timestamp, and return status tied to a central backend.',
    outcome: 'Created accountability and reduced time spent tracking missing equipment.',
  },
];

const processSteps = [
  'Free 15-minute call',
  'On-site or remote workflow review',
  'Fixed-scope proposal',
  'Build, test, and iterate',
  'Optional maintenance',
];

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-stone-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-800 text-amber-900 dark:text-gray-100">
      <section className="py-16 px-4 bg-gradient-to-r from-amber-100 to-stone-200 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm sm:text-base font-semibold tracking-wide uppercase text-amber-700 dark:text-cyan-400 mb-4">
            Enterprise Solutions
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            I fix operational bottlenecks for small businesses.
          </h1>
          <p className="text-lg sm:text-xl text-amber-800 dark:text-gray-300 max-w-3xl leading-relaxed">
            You bring me the messy workflow. I bring you the clean, durable system.
            I work with construction-adjacent teams, trades, logistics, and small industrial operations to cut wasted time, reduce errors, and remove recurring admin headaches.
          </p>
          <div className="mt-8 rounded-xl overflow-hidden border border-amber-600/20 dark:border-cyan-400/20 bg-stone-50 dark:bg-gray-900/60 shadow-sm max-w-4xl">
            <Image
              src="/Enterprisebusinesscard.png"
              alt="Enterprise business card with QR code, contact info, and services"
              width={1536}
              height={864}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="rounded-xl border border-amber-600/25 dark:border-cyan-400/25 bg-stone-50/90 dark:bg-gray-800/70 p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-2">{capability.title}</h2>
              <p className="text-amber-800 dark:text-gray-300 leading-relaxed">{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14 px-4 bg-gradient-to-r from-stone-200 to-stone-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
        <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-stone-50 dark:bg-gray-800 p-6 shadow-sm border border-amber-600/20 dark:border-cyan-400/20">
            <h2 className="text-2xl font-bold mb-4">What I build</h2>
            <ul className="space-y-2">
              {whatIBuild.map((item) => (
                <li key={item} className="text-amber-800 dark:text-gray-300">• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-stone-50 dark:bg-gray-800 p-6 shadow-sm border border-amber-600/20 dark:border-cyan-400/20">
            <h2 className="text-2xl font-bold mb-4">Problems I solve</h2>
            <ul className="space-y-2">
              {problemsISolve.map((problem) => (
                <li key={problem} className="text-amber-800 dark:text-gray-300">• {problem}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Example solutions</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <article
                key={study.problem}
                className="rounded-xl bg-stone-50 dark:bg-gray-800 p-6 border border-amber-600/20 dark:border-cyan-400/20 shadow-sm"
              >
                <p className="text-xs uppercase tracking-wide font-semibold text-amber-700 dark:text-cyan-400 mb-3">
                  Case {index + 1}
                </p>
                <p className="font-semibold mb-2">Problem</p>
                <p className="text-amber-800 dark:text-gray-300 mb-4">{study.problem}</p>
                <p className="font-semibold mb-2">Fix</p>
                <p className="text-amber-800 dark:text-gray-300 mb-4">{study.fix}</p>
                <p className="font-semibold mb-2">Outcome</p>
                <p className="text-amber-800 dark:text-gray-300">{study.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gradient-to-r from-stone-200 to-stone-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
        <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2 items-start">
          <div className="rounded-xl bg-stone-50 dark:bg-gray-800 p-6 border border-amber-600/20 dark:border-cyan-400/20 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">How it works</h2>
            <ol className="space-y-3">
              {processSteps.map((step, index) => (
                <li key={step} className="text-amber-800 dark:text-gray-300">
                  <span className="font-semibold text-amber-900 dark:text-gray-100">{index + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-xl bg-stone-50 dark:bg-gray-800 p-6 border border-amber-600/20 dark:border-cyan-400/20 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Contact / QR</h2>
            <p className="text-amber-800 dark:text-gray-300 mb-5 leading-relaxed">
              Use this page in the field as your quick demo link. If a workflow is costing time or money, I can map it and build the fix.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
              <Image
                src="/Enterprisebusinesscard.png"
                alt="Enterprise business card with QR code"
                width={480}
                height={270}
                className="rounded-lg border border-amber-600/20 dark:border-cyan-400/20 bg-white"
              />
              <div className="space-y-3">
                <a
                  href="mailto:mac@sitesbymac.dev?subject=Enterprise%20Workflow%20Review"
                  className="inline-block px-4 py-2 rounded-lg bg-amber-700 dark:bg-cyan-500 text-white dark:text-gray-900 font-medium hover:bg-amber-800 dark:hover:bg-cyan-400 transition-colors"
                >
                  Start with a 15-minute call
                </a>
                <p>
                  <a
                    href="https://sitesbymac.dev/enterprise"
                    className="underline decoration-2 decoration-amber-700/40 dark:decoration-cyan-400/40"
                  >
                    sitesbymac.dev/enterprise
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}