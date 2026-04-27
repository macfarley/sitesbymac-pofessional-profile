import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Wedding Planners | Digital Wedding Venues — SitesByMac',
  description:
    'Partner with SitesByMac to offer your clients a Digital Wedding Venue — frictionless photo uploads, permanent keepsakes, and zero extra work for you.',
};

const LINK_CLASS =
  'text-rose-700 dark:text-rose-300 underline decoration-rose-600/40 dark:decoration-rose-300/40 hover:text-rose-800 dark:hover:text-rose-200 transition-colors';

const CARD_CLASS =
  'rounded-2xl p-8 border bg-white dark:bg-slate-900 border-rose-100 dark:border-slate-700 shadow-sm';

export default function ForPlannersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-stone-100 dark:from-gray-900 dark:via-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20">

        {/* ── Breadcrumb ── */}
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <Link href="/weddings" className={LINK_CLASS}>
            ← Back to SitesByMac Weddings
          </Link>
        </nav>

        {/* ── Hero ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-300 px-4 py-1 text-xs tracking-widest uppercase mb-6 font-semibold">
            For Wedding Planners & Coordinators
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Give Your Clients a{' '}
            <span className="text-rose-700 dark:text-rose-300">
              Digital Wedding Venue
          </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A bespoke wedding website — custom domain, real-time photo uploads,
            permanent legacy archive — that enhances your package without adding
            a single task to your plate.
          </p>
        </div>

        {/* ── Live Demo Callout ── */}
        <div className="rounded-2xl border-2 border-rose-200 dark:border-rose-700/50 bg-white dark:bg-slate-900 p-8 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest text-rose-700 dark:text-rose-400 font-semibold mb-2">
                Live Client Site
              </p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                John &amp; Crystal — NASCAR-Themed Wedding
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This is a real, working wedding site built for a blue-collar couple
                who wanted their dream NASCAR theme. It demonstrates the{' '}
                <strong>underlying functionality</strong> — photo uploads, real-time
                gallery, custom domain, event details — that can be reskinned to{' '}
                <em>any</em> aesthetic: garden romance, modern minimalist, coastal
                chic, or anything your clients imagine.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                The theme is theirs. The infrastructure is what you're selling.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 shrink-0">
              <a
                href="https://www.john-and-crystal-may.wedding/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-rose-700 hover:bg-rose-800 text-white rounded-xl font-semibold transition-colors shadow"
              >
                View Live Site
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <Link
                href="/weddings/demotemplate"
                className="text-sm text-rose-700 dark:text-rose-400 underline hover:text-rose-800 dark:hover:text-rose-300 transition-colors"
              >
                Or browse the design mockup →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Value Proposition ── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            Why It Elevates Your Packages
          </h2>
          <div className="w-16 h-0.5 bg-rose-300 dark:bg-rose-700 mx-auto mb-10" aria-hidden="true" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className={CARD_CLASS}>
              <div className="text-2xl mb-3" aria-hidden="true">✨</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Elevates Client Experience
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Couples get a custom domain, a professionally designed site, and a
                living gallery — far beyond a generic template. It reflects well on
                you as the planner who thought of everything.
              </p>
            </div>
            <div className={CARD_CLASS}>
              <div className="text-2xl mb-3" aria-hidden="true">📦</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Differentiates Your Packages
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Add a &ldquo;Digital Venue&rdquo; tier to your offering. It&apos;s a
                tangible, high-perceived-value add-on that competitors don&apos;t have
                and couples immediately understand.
              </p>
            </div>
            <div className={CARD_CLASS}>
              <div className="text-2xl mb-3" aria-hidden="true">♾️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Permanent Keepsake
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                One year after the wedding, the interactive elements wind down and the
                site becomes a lightweight, permanent legacy — photos, vows, and story
                preserved forever at no extra cost to the couple.
              </p>
            </div>
            <div className={CARD_CLASS}>
              <div className="text-2xl mb-3" aria-hidden="true">📸</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Real-Time Guest Gallery
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Guests scan a QR code, upload directly from their phones — no app
                download, no account. Photos flow into a moderated gallery in
                real time. Vendors and bridal party get their own upload access.
              </p>
            </div>
            <div className={CARD_CLASS}>
              <div className="text-2xl mb-3" aria-hidden="true">🤝</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Zero Friction for Planners
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                You hand the couple&apos;s details to me. I handle the domain, the
                build, the photo pipeline, and the sunset strategy. You take the
                credit — I stay behind the scenes.
              </p>
            </div>
            <div className={CARD_CLASS}>
              <div className="text-2xl mb-3" aria-hidden="true">🎨</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Any Aesthetic, Same Infrastructure
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                NASCAR. Garden romance. Black-tie minimalist. The theme is always
                custom to the couple. The live demo proves the underlying system
                works — we just dress it differently every time.
              </p>
            </div>
          </div>
        </section>

        {/* ── Pricing Tiers ── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            Transparent Pricing
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            All packages include a custom domain for 1 year and a permanent legacy
            archive. Deposits secure the date; balance due on launch.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-rose-100 dark:border-slate-700 shadow-sm">
            <table className="w-full text-left border-separate border-spacing-0 text-sm">
              <thead>
                <tr className="bg-rose-50 dark:bg-slate-800 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="px-5 py-4 rounded-tl-2xl">Feature</th>
                  <th className="px-5 py-4">The Elopement</th>
                  <th className="px-5 py-4">Premier Nuptials</th>
                  <th className="px-5 py-4 rounded-tr-2xl">The Royal Wedding</th>
                </tr>
              </thead>
              <tbody className="text-gray-800 dark:text-gray-200 divide-y divide-rose-50 dark:divide-slate-800">
                {[
                  ['Investment', '$499', '$1,499', '$2,499'],
                  ['Deposit', '$100', '$300', '$500'],
                  ['Core', 'Custom micro-site', 'Full multi-page site', 'Comprehensive digital estate'],
                  ['Photo Bucket', 'QR-access uploads', 'High-res archive', 'Priority support + curation'],
                  ['Role-Based Access', '—', 'Vendor / bridal party', 'Granular permissions'],
                  ['Coordination', 'Digital program', 'Interactive calendar', 'Full itinerary engine'],
                  ['Media', 'Vows and text', 'Highlight clips', 'Full video integration'],
                  ['Legacy', 'Static archive', 'Enhanced media vault', 'Permanent digital home'],
                ].map(([feature, ...tiers]) => (
                  <tr key={feature} className="bg-white dark:bg-slate-900">
                    <td className="px-5 py-3 font-semibold">{feature}</td>
                    {tiers.map((val, i) => (
                      <td key={i} className="px-5 py-3">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Commission / White-label ── */}
        <section className="mb-16 rounded-2xl bg-stone-100 dark:bg-slate-800/60 border border-stone-200 dark:border-slate-700 p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Referral &amp; White-Label Options
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you&apos;d prefer to bundle the digital venue directly into your
            packages, we can discuss a referral arrangement or a white-label
            setup where your branding is front and center. Let&apos;s talk about
            what works for your business model.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <li>Flat referral fee per booked couple</li>
            <li>Revenue-share on higher tiers</li>
            <li>White-label builds under your brand</li>
            <li>Preferred-partner pricing for planners with multiple bookings</li>
          </ul>
        </section>

        {/* ── CTA ── */}
        <section className="text-center rounded-2xl bg-rose-700 dark:bg-rose-800 p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Partner?
          </h2>
          <p className="text-rose-100 mb-8 max-w-xl mx-auto">
            Send me a message and we&apos;ll figure out the best way to add a
            Digital Wedding Venue to your planner packages — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mac@sitesbymac.dev?subject=Planner%20Partnership%20Inquiry"
              className="px-8 py-3 bg-white text-rose-700 font-semibold rounded-full hover:bg-rose-50 transition-colors shadow"
            >
              Email mac@sitesbymac.dev
            </a>
            <a
              href="tel:+19374679312"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Call (937) 467-9312
            </a>
          </div>
          <p className="mt-6 text-rose-200 text-sm">
            Or{' '}
            <Link href="/weddings" className="underline text-white hover:text-rose-100">
              return to the Weddings overview
            </Link>{' '}
            to see full service details.
          </p>
        </section>

      </div>
    </div>
  );
}
