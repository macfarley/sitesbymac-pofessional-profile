import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Wedding Planners | Digital Wedding Venues — SitesByMac',
  description:
    'A premium, low-friction digital wedding venue add-on that makes your couples feel cared for — and makes you look exceptional.',
};

const CARD_CLASS =
  'rounded-2xl p-7 border bg-white dark:bg-slate-900 border-rose-100 dark:border-slate-700 shadow-sm';

export default function ForPlannersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-stone-100 dark:from-gray-900 dark:via-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20">

        {/* ── Breadcrumb ── */}
        <nav className="mb-10 text-sm" aria-label="Breadcrumb">
          <Link
            href="/weddings"
            className="text-rose-700 dark:text-rose-400 underline decoration-rose-600/40 hover:text-rose-800 dark:hover:text-rose-300 transition-colors"
          >
            ← Back to SitesByMac Weddings
          </Link>
        </nav>

        {/* ── Hero ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-300 px-4 py-1 text-xs tracking-widest uppercase mb-6 font-semibold">
            For Wedding Planners &amp; Coordinators
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Elevate Your Clients&apos; Experience with a{' '}
            <span className="text-rose-700 dark:text-rose-300">
              Modern Digital Wedding Venue
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A premium, low&#8209;friction add&#8209;on that makes your couples feel
            cared for &mdash; and makes you look exceptional.
          </p>
        </div>

        {/* ── Who I Am ── */}
        <section className="mb-12 rounded-2xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-slate-700 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I&apos;m Mac McCoy &mdash; the creator of SitesByMac.
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I build bespoke digital wedding venues and keepsake sites designed to
            complement the work of professional planners. My background is in
            operations, UX, and building seamless digital experiences that feel
            effortless for both planners and couples.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I&apos;m local to the Dayton/Cincinnati region, and I specialize in
            creating elegant, modern wedding hubs that match the aesthetic and
            emotional tone of each celebration.
          </p>
        </section>

        {/* ── What I Do ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            What I Do
          </h2>
          <div className="w-16 h-0.5 bg-rose-300 dark:bg-rose-700 mb-8" aria-hidden="true" />
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I create{' '}
            <strong className="text-gray-900 dark:text-white">
              custom digital wedding venues
            </strong>{' '}
            &mdash; beautifully designed, mobile&#8209;friendly sites that serve as
            the couple&apos;s central hub before, during, and after the wedding.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">Each site includes:</p>
          <ul className="space-y-3">
            {[
              'A polished, modern landing page',
              'Event details, schedules, and venue information',
              'A curated gallery',
              'Real-time guest photo uploads (moderated for safety)',
              'A permanent digital keepsake after the wedding',
              'Optional palette and theme customization',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span
                  className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center text-rose-700 dark:text-rose-400 text-xs font-bold"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600 dark:text-gray-400 italic">
            Everything is designed to feel premium, intuitive, and aligned with the couple&apos;s style.
          </p>
        </section>

        {/* ── Why Planners Love It ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Why Planners Love It
          </h2>
          <div className="w-16 h-0.5 bg-rose-300 dark:bg-rose-700 mb-8" aria-hidden="true" />
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                n: '1',
                title: "It's a High-Value Add-On with Zero Extra Work",
                body: "You don't have to build anything, manage anything, or troubleshoot anything. I handle the setup, design, hosting, and support. You simply offer it as part of your package — and instantly elevate your service.",
              },
              {
                n: '2',
                title: 'It Makes You Look More Premium',
                body: "Couples love planners who bring them something they didn't even know they wanted. A digital venue feels modern, thoughtful, and luxurious.",
              },
              {
                n: '3',
                title: 'It Reduces Your Workload',
                body: 'No more scattered links, lost PDFs, or guests asking for directions. Everything lives in one beautiful place.',
              },
              {
                n: '4',
                title: 'It Enhances the Wedding Day Experience',
                body: 'Guests can upload photos in real time. Couples get a curated gallery afterward. You get fewer day-of questions and smoother coordination.',
              },
              {
                n: '5',
                title: 'It Becomes a Keepsake',
                body: 'After the wedding, the site transforms into a digital memory book — something couples revisit for years.',
              },
            ].map(({ n, title, body }) => (
              <div key={n} className={CARD_CLASS}>
                <div className="text-xs uppercase tracking-widest text-rose-600 dark:text-rose-400 font-semibold mb-2">
                  {n}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="mb-12 rounded-2xl bg-stone-50 dark:bg-slate-800/60 border border-stone-200 dark:border-slate-700 p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            How It Works
          </h2>
          <div className="w-16 h-0.5 bg-rose-300 dark:bg-rose-700 mb-8" aria-hidden="true" />
          <ol className="space-y-4">
            {[
              'You introduce the digital venue as part of your planning package.',
              'I handle the design, setup, and hosting.',
              'You get a polished link to share with your couple.',
              'Guests upload photos during the event.',
              'After the wedding, the couple receives a permanent keepsake version.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white bg-rose-700 dark:bg-rose-600"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <p className="text-gray-700 dark:text-gray-300 pt-1">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 grid sm:grid-cols-4 gap-4 text-center">
            {[
              'No logins.',
              'No tech headaches.',
              'No maintenance.',
              'Just a beautiful experience.',
            ].map((line) => (
              <div
                key={line}
                className="rounded-xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-slate-700 px-4 py-3 text-sm font-semibold text-rose-700 dark:text-rose-300"
              >
                {line}
              </div>
            ))}
          </div>
        </section>

        {/* ── Partnership Options ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Partnership Options
          </h2>
          <div className="w-16 h-0.5 bg-rose-300 dark:bg-rose-700 mb-8" aria-hidden="true" />
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                title: 'Preferred Planner Pricing',
                body: 'Discounted rates for planners who offer SitesByMac as part of their packages.',
              },
              {
                title: 'White-Label Option',
                body: 'Your branding, your colors, your logo — my engine behind the scenes.',
              },
              {
                title: 'Commission Option',
                body: 'Earn a referral fee for each couple who books a digital venue through you.',
              },
            ].map(({ title, body }) => (
              <div key={title} className={CARD_CLASS}>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── See the Demo ── */}
        <section className="mb-12 rounded-2xl border-2 border-rose-200 dark:border-rose-700/50 bg-white dark:bg-slate-900 p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            See the Demo
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Preview the luxury demo template — palette selector, gallery, event
            details, and all sections exactly as a couple would see them.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-6">
            Buttons are disabled — this is a visual mockup only.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              href="/weddings/demotemplate"
              className="inline-flex items-center gap-2 px-6 py-3 bg-rose-700 hover:bg-rose-800 text-white rounded-xl font-semibold transition-colors shadow"
            >
              Open the Design Mockup
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
            <div className="text-sm text-gray-500 dark:text-gray-400 pt-3 sm:pt-4">
              Or view a{' '}
              <a
                href="https://www.john-and-crystal-may.wedding/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-700 dark:text-rose-400 underline hover:text-rose-800 dark:hover:text-rose-300 transition-colors"
              >
                live client site
              </a>{' '}
              to see the full system in production.
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="text-center rounded-2xl bg-rose-700 dark:bg-rose-800 p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-rose-100 mb-2 max-w-xl mx-auto">
            If you&apos;d like to offer this to your couples, I&apos;d love to talk.
            You can reach me directly or request a partnership intro.
          </p>
          <p className="text-rose-200 font-semibold mb-8">
            Let&apos;s elevate the wedding experience together.
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
        </section>

      </div>
    </div>
  );
}


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
