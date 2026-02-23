'use client';

import { useState } from 'react';
import CollapsibleSection from '../../components/CollapsibleSection';
import { skills, certifications, professionalAssociations, activities, communityOutreach, references } from 'src/data/resume.public';

export default function CollapsibleAboutSections() {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <div className="space-y-4">
      {/* Expand/Collapse All Toggle */}
      <div className="mb-6 flex gap-2 justify-center">
        <button
          onClick={() => setExpandAll(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          Expand All
        </button>
        <button
          onClick={() => setExpandAll(false)}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          Collapse All
        </button>
      </div>

      {/* Professional Summary - Always Visible */}
      <div className="border-l-4 border-blue-500 pl-4 py-2">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">My Personal Journey</h3>
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
          <p>
            I&apos;m Travis &quot;Mac&quot; McCoy — a full-stack software engineer with a background that doesn&apos;t fit neatly into any one box. I build systems that protect people, anticipate misuse, and make technology feel safer, more human, and more honest.
          </p>
          <p>
            But the path here wasn&apos;t linear. It wasn&apos;t clean. And it definitely wasn&apos;t boring.
          </p>
          <p>
            This page is the long version — the version for people who want to understand not just what I build, but <strong>why</strong> I build it.
          </p>
        </div>
      </div>

      <CollapsibleSection 
        title="From Philosophy to Production Lines to Prison Yards" 
        defaultCollapsed={!expandAll}
        collapsedContent={
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
          <p>
            I started my academic life in the <strong>Philosophy–Pre‑Law discipline</strong> at Ohio University, studying ethics, logic, political theory, comparative religion, international studies, and foreign languages. I was fascinated by how people make decisions, how systems shape behavior, and how power structures can either protect or harm.
          </p>
          <p>
            Before that, I spent my junior and senior years of high school taking <strong>72 quarter hours</strong> of college coursework at Wright State University — English Composition, a three‑term deep dive into Western Civilization (with an emphasis on nomadic pastoralists and cultural drift), and enough psychology courses to become <strong>Vice President of the Psychology Society</strong>. I captained the Scholastic Team, appeared on WHIO&apos;s <em>High Q</em> five times, competed in Ohio Mock Trial as an attorney, and led a JETS engineering team.
          </p>
          <p>
            Then life took a turn.
          </p>
          <p>
            I spent years working in manufacturing — <strong>GTI Greenville Technology</strong>, <strong>KitchenAid/Whirlpool</strong>, and <strong>Tastemorr Basic Grain</strong> — learning quality control, defect logging, inventory systems, and the reality that a single missed defect could cost $10,000 per minute on the Honda line. That pressure taught me precision, accountability, and the value of systems that don&apos;t fail silently.
          </p>
          <p>
            Those lessons would matter later.
          </p>
        </div>
      } />

      <CollapsibleSection 
        title="⚠️ Seven Years in High-Security Corrections" 
        defaultCollapsed={!expandAll}
        collapsedContent={
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
            <p className="font-bold text-yellow-800 dark:text-yellow-300">Trigger Warning</p>
            <p className="text-sm text-yellow-700 dark:text-yellow-400">This section discusses my time working in a prison environment. No graphic detail, but the reality of the work is included.</p>
          </div>
          <p>
            From 2017 to 2024, I served as a <strong>Senior Correctional Officer (COV)</strong> with the Texas Department of Criminal Justice. It was the hardest job I&apos;ve ever had — physically, mentally, and ethically.
          </p>
          <p>
            I supervised housing units of 200+ people, maintained flawless accountability records, and served as an on‑scene Incident Commander for emergencies. I learned to read group dynamics, identify early signs of conflict, and make decisions under pressure that affected hundreds of lives.
          </p>
          <p>
            And I witnessed things that stay with you:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>racial tension erupting into sudden, brutal violence</strong>, the kind that starts with a slur and ends with improvised weapons</li>
            <li><strong>sexual exploitation and coercion</strong>, including images of women being traded as currency</li>
            <li><strong>an elderly man with dementia being targeted</strong>, robbed, and assaulted because he couldn&apos;t defend himself</li>
            <li><strong>people weaponizing vulnerability</strong>, preying on mental illness, addiction, loneliness, and fear</li>
            <li><strong>the constant threat of escalation</strong>, where a single misunderstanding could ripple into a unit‑wide incident</li>
          </ul>
          <p>
            You don&apos;t walk away from that unchanged.
          </p>
          <p>
            I learned to:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>read a room in seconds</li>
            <li>detect tension before it ignited</li>
            <li>de‑escalate situations that could have turned deadly</li>
            <li>protect people who had no one else protecting them</li>
            <li>enforce fairness in a place where fairness was often seen as weakness</li>
            <li>stay calm when everyone else was losing control</li>
          </ul>
          <p>
            This wasn&apos;t theoretical.<br />
            This was <strong>real‑time threat modeling</strong>, <strong>behavioral analysis</strong>, and <strong>risk mitigation</strong> under conditions most people will never experience.
          </p>
          <p>
            And it shaped my entire philosophy around security, privacy, trust, harm reduction, ethical system design, and user protection.
          </p>
          <p>
            Because I&apos;ve seen what happens when systems fail the people inside them.
          </p>
        </div>
      } />

      <CollapsibleSection 
        title="Rebuilding My Life — Literally and Professionally" 
        defaultCollapsed={!expandAll}
        collapsedContent={
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
          <p>
            In 2025, I made a decision that changed everything.
          </p>
          <p>
            At my peak, I weighed <strong>524 pounds</strong>. I was exhausted, stressed, and carrying the weight of years spent in high‑stakes environments. With the help of a doctor and nutritionist, I committed to a <strong>lower‑carb, sustainable eating plan</strong> and started going to the gym <strong>4–5 days a week</strong>.
          </p>
          <p>
            As of my last weigh‑in, I&apos;m at <strong>420 pounds</strong> — over a hundred pounds down, with more to go.
          </p>
          <p>
            This isn&apos;t a &quot;before and after&quot; story.<br />
            It&apos;s a <strong>during</strong> story. A process. A commitment.
          </p>
          <p>
            At the same time, I pivoted into tech full‑time.
          </p>
          <p>
            I completed the <strong>Software Engineering Immersive at General Assembly</strong>, built multiple full‑stack applications, and rediscovered the part of myself that loves systems, logic, and building things that make people&apos;s lives easier.
          </p>
          <p>
            I founded <strong>Sites by Mac</strong>, joined <strong>VolunQueer</strong> as a Junior Developer and Security/Privacy contributor, and began shaping my long‑term path toward <strong>Security Architecture</strong>, <strong>Trust & Safety</strong>, and <strong>organizational governance</strong>.
          </p>
        </div>
      } />

      <CollapsibleSection 
        title="Why Security & Trust Architecture?" 
        defaultCollapsed={!expandAll}
        collapsedContent={
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
          <p>
            Because I&apos;ve seen what happens when systems are designed without thinking about:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>misuse</li>
            <li>power dynamics</li>
            <li>user vulnerability</li>
            <li>privacy</li>
            <li>safety</li>
            <li>unintended consequences</li>
          </ul>
          <p>
            I&apos;m the engineer who looks at a single form field and thinks:
          </p>
          <p className="italic pl-4 border-l-4 border-blue-500">
            &quot;How could this be abused? How do we prevent that? How do we protect the user? How do we protect the organization? And how do we do it without making the experience worse?&quot;
          </p>
          <p>
            My background in corrections, philosophy, manufacturing, and engineering all converge here.
          </p>
          <p>
            I build systems that:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>anticipate misuse</li>
            <li>reduce harm</li>
            <li>protect user autonomy</li>
            <li>minimize data collection</li>
            <li>strengthen trust</li>
            <li>and scale safely</li>
          </ul>
          <p>
            This is the work I&apos;m meant to be doing.
          </p>
        </div>
      } />

      <CollapsibleSection 
        title="Values & Principles" 
        defaultCollapsed={!expandAll}
        collapsedContent={
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Protect the Vulnerable First</h4>
            <p>Systems fail the vulnerable first. I design to prevent that.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Privacy Is a Human Right</h4>
            <p>Collect less. Store less. Expose less.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Anticipate Misuse Before It Happens</h4>
            <p>Every feature is a potential attack surface.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Accessibility Is Non‑Negotiable</h4>
            <p>If your platform excludes people, it&apos;s broken.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Calm Is a Leadership Skill</h4>
            <p>Stability is contagious.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Transparency Builds Trust</h4>
            <p>People trust what they understand.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Growth Is a Daily Practice</h4>
            <p>Professionally, personally, physically — I&apos;m always in motion.</p>
          </div>
        </div>
      } />

      <CollapsibleSection 
        title="Passions & Advocacies" 
        defaultCollapsed={!expandAll}
        collapsedContent={
        <ul className="text-gray-700 dark:text-gray-300 list-disc ml-6 space-y-1">
          <li>Ethical technology</li>
          <li>Community tech & mutual aid</li>
          <li>LGBTQ+ advocacy</li>
          <li>Education & mentorship</li>
          <li>Health & personal transformation</li>
          <li>Privacy‑first design</li>
          <li>Trust & Safety as a discipline</li>
        </ul>
      } />

      <CollapsibleSection 
        title="Featured Projects" 
        defaultCollapsed={!expandAll}
        collapsedContent={
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">SitesbyMac.dev — Portfolio & Blog Platform</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Next.js, TypeScript, TailwindCSS, Jest • October 2025</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Built custom blog engine with MDX support and automated syntax highlighting</li>
              <li>Integrated GitHub API for real-time project showcase and portfolio integration</li>
              <li>Achieved 98+ Lighthouse scores across all metrics (performance, accessibility, best practices)</li>
              <li>Live: <a href="https://sitesbymac.dev" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">sitesbymac.dev</a> | <a href="https://github.com/macfarley/sitesbymac-professional-profile" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">StirCraft — Cocktail Discovery Platform</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Django, PostgreSQL, Python, Bootstrap • August 2025 | Team Lead</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Led 3-person agile team using GitHub Projects for sprint planning and collaboration</li>
              <li>Architected database schema with 6 interconnected models and complex relationships</li>
              <li>Designed custom ABV calculation algorithms and recipe forking with attribution tracking</li>
              <li>Achieved 100% test coverage with 57 automated PyTest tests</li>
              <li>Built demo data system with 15+ themed users and 300+ realistic interactions</li>
              <li>Live: <a href="https://stircraft-app-0dd06cf5d30a.herokuapp.com/" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">stircraft-app.herokuapp.com</a> | <a href="https://github.com/macfarley/stir-craft" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">VolunQueer — LGBTQ+ Volunteer Platform</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Django, PostgreSQL, React, TypeScript • Pre-launch (In Development)</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Connecting LGBTQ+ volunteers with community organizations and social impact initiatives</li>
              <li>Participate in strategic migration from AWS Amplify to Django/PostgreSQL stack</li>
              <li>Implement test-driven development practices with comprehensive PyTest coverage</li>
              <li>Adapt React components to Django templates while maintaining WCAG accessibility standards</li>
              <li><a href="https://github.com/macfarley/volunqueer_django" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Griftopedia — Scam Database & Resource Platform</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Django, PostgreSQL, React • Under Construction</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Comprehensive database of common scams, fraud tactics, and prevention strategies</li>
              <li>Educational resource for identifying and avoiding financial/social engineering attacks</li>
              <li>Community-contributed content with expert verification</li>
              <li>Status: Early development phase with architecture planning underway</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">DreamWeaver — Dream Journaling & Mindfulness App</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">MERN Stack, JWT Auth, MongoDB • September 2025</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Full-stack app with role-based access control and user authentication</li>
              <li>60% performance gain via MongoDB optimization and indexing strategies</li>
              <li>Cross-browser testing across 5 platforms (Chrome, Firefox, Safari, Edge, Mobile)</li>
              <li>Live: <a href="https://dream-weaver-rho.vercel.app/" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">dream-weaver.vercel.app</a> | <a href="https://github.com/macfarley/dream-weaver" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Fridge Buddy — Django Food Inventory App</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Django, HTML5, CSS3, SQLite</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Food inventory management across fridge, freezer, pantry, and shopping lists</li>
              <li>Expiration date tracking and category organization to reduce food waste</li>
              <li>Smart organization with semantic URLs and responsive templates</li>
              <li>Planned features: barcode scanning, notifications, analytics, recipe suggestions</li>
              <li><a href="https://github.com/macfarley/fridge-buddy" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a></li>
            </ul>
          </div>
        </div>
      } />

      <CollapsibleSection 
        title="Future Projects & Why They Matter" 
        defaultCollapsed={!expandAll}
        collapsedContent={
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p className="italic">Below is the full suite of tools I&apos;m building or planning — each one rooted in a real problem I&apos;ve witnessed.</p>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-1">HappeningHere — Hyperlocal Discovery Engine</h4>
            <p className="text-sm mb-1">A tool to surface community events, free meals, LGBTQ+ meetups, and local resources without relying on algorithms or social media silos.</p>
            <p className="text-sm italic"><strong>Why:</strong> Community shouldn&apos;t require detective work.</p>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-1">BidOnThis — Lightweight Auction & Fundraising Tool</h4>
            <p className="text-sm mb-1">A QR‑based silent auction system for schools, theaters, and nonprofits.</p>
            <p className="text-sm italic"><strong>Why:</strong> Small organizations deserve powerful tools that don&apos;t drain their budget.</p>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-1">Office Quartermaster — Tablet‑First Inventory Workflow</h4>
            <p className="text-sm mb-1">A modern, audit‑ready equipment checkout and tracking system.</p>
            <p className="text-sm italic"><strong>Why:</strong> Lost equipment is a financial, operational, and security risk.</p>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-1">Griftopedia — Scam & Fraud Knowledge Base</h4>
            <p className="text-sm mb-1">A community‑contributed database of scams, fraud tactics, and prevention strategies.</p>
            <p className="text-sm italic"><strong>Why:</strong> Education is the strongest defense against exploitation.</p>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-1">McAxl Trainer — Self‑Care & Emotional Regulation App</h4>
            <p className="text-sm mb-1">A gentle, gamified self‑care companion featuring my axolotl mascot.</p>
            <p className="text-sm italic"><strong>Why:</strong> Mental health tools should feel supportive, not clinical.</p>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-1">Silent Auction Suite (Expanded)</h4>
            <p className="text-sm mb-1">Raffles, ticketing, donor tracking, sponsor visibility, analytics.</p>
            <p className="text-sm italic"><strong>Why:</strong> Grassroots fundraising deserves modern infrastructure.</p>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-1">Med‑Tech Lite Tools</h4>
            <p className="text-sm mb-1">Privacy‑first symptom trackers, triage assistants, and patient prep tools.</p>
            <p className="text-sm italic"><strong>Why:</strong> Better patient data → better outcomes.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2 mt-6">
            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">NotALawyer — A Legal Aid Bridge for Adult Children Caring for Aging Parents</h4>
            
            <h5 className="font-bold text-gray-800 dark:text-gray-200 mt-3 mb-1">The Problem</h5>
            <p className="text-sm mb-2">
              Many families face a moment where a parent can no longer manage their finances or medical decisions. And suddenly, adult children discover they legally can&apos;t access accounts, make payments, request statements, talk to providers, manage benefits, or intervene in emergencies — without the right paperwork.
            </p>
            <p className="text-sm mb-2">
              This is overwhelming even in the best circumstances — and devastating in the worst.
            </p>

            <h5 className="font-bold text-gray-800 dark:text-gray-200 mt-3 mb-1">My Personal Story</h5>
            <p className="text-sm mb-2">
              My mom lost her apartment after an &quot;online boyfriend&quot; scammer convinced her to hand over financial information. She couldn&apos;t pay rent. She was confused, embarrassed, and vulnerable — and I was suddenly responsible for everything.
            </p>
            <p className="text-sm mb-2">
              My fiancée is living a parallel version of this with her mother: a care facility that doesn&apos;t communicate clearly, financial decisions piling up, and the emotional weight of becoming the decision‑maker for someone who once made decisions for her.
            </p>
            <p className="text-sm mb-2">
              Different families. Same problem.
            </p>

            <h5 className="font-bold text-gray-800 dark:text-gray-200 mt-3 mb-1">The Solution: NotALawyer.com</h5>
            <p className="text-sm mb-2">
              A <strong>legal aid bridge</strong> that:
            </p>
            <ul className="text-sm list-disc ml-6 mb-2 space-y-1">
              <li>explains what documents families typically need</li>
              <li>walks them through the process in plain language</li>
              <li>uses no‑save image‑to‑text tools to help prepare paperwork</li>
              <li>organizes everything into a clean packet</li>
              <li>connects them with verified elder law professionals</li>
            </ul>
            <p className="text-sm mb-2">
              Not legal advice — just <strong>clarity</strong>, <strong>structure</strong>, and <strong>connection</strong>.
            </p>

            <h5 className="font-bold text-gray-800 dark:text-gray-200 mt-3 mb-1">Why It Matters</h5>
            <p className="text-sm">
              Because families deserve support. Because elder law shouldn&apos;t be a mystery. Because dignity matters — for aging parents and the children who suddenly become caregivers.
            </p>
          </div>

          <div className="border-t-2 border-gray-300 dark:border-gray-600 pt-4 mt-6">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">The Thread That Connects Everything</h4>
            <p className="mb-2">Every project I build has the same DNA:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>reduce harm</li>
              <li>increase autonomy</li>
              <li>empower communities</li>
              <li>protect vulnerable people</li>
              <li>design ethically</li>
              <li>build trust</li>
            </ul>
            <p className="mt-3 font-bold">
              I don&apos;t build apps.<br />
              I build <strong>systems that protect people</strong>.
            </p>
            <p className="mt-2">
              And that&apos;s the work I&apos;m here to do.
            </p>
          </div>
        </div>
      } />

      <CollapsibleSection 
        title="Technical Skills" 
        defaultCollapsed={!expandAll}
        collapsedContent={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">{skillGroup.category}</h4>
              <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
                {skillGroup.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      } />

      <CollapsibleSection 
        title="Professional Experience" 
        defaultCollapsed={!expandAll}
        collapsedContent={
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">VolunQueer — Junior Django Developer</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Remote (Portland, OR) • November 2025–Present</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Collaborate in distributed team using GitHub Projects, Discord, and Google Meet</li>
              <li>Implement test-driven development with PyTest achieving comprehensive test coverage</li>
              <li>Adapt React components to Django templates maintaining WCAG accessibility standards</li>
              <li>Participate in strategic migration from AWS Amplify to Django/PostgreSQL stack</li>
              <li>Document technical decisions and patterns in shared knowledge base</li>
              <li>Participate in daily standups and sprint ceremonies across multiple time zones</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Texas Department of Criminal Justice — Correctional Officer V</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Huntsville, TX • August 2017–November 2024 (7 years)</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Supervised housing units of 200+ individuals, ensuring compliance with strict policies and schedules</li>
              <li>Maintained flawless accountability records over 7 years with zero audit violations</li>
              <li>Led armed transport of inmates to external medical facilities requiring enhanced security vigilance</li>
              <li>Trained and mentored new staff in communication, reporting, safety protocols, and compliance procedures</li>
              <li>Produced detailed incident reports, maintenance requests, and behavioral documentation</li>
              <li>Led emergency response and coordinated cross-team operations under high-pressure situations</li>
              <li>Achieved consistent certification renewal through continuing education and performance evaluation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">KitchenAid/Whirlpool — Quality Testing & Inventory Auditor</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Greenville, OH • March 2015–June 2017</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Performed systematic QA testing on 700+ units daily, maintaining detailed defect tracking and logging</li>
              <li>Reduced inspection time by 25% through process optimization and 5S methodology</li>
              <li>Contributed to 15% reduction in return rates through enhanced quality control procedures</li>
              <li>Conducted comprehensive inventory audits improving supply chain reliability and accuracy</li>
              <li>Operated robotic-assisted assembly lines under high-volume production targets</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">GTI Greenville Technology — Quality Inspector & Machine Operator</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Greenville, OH • September 2012–January 2015</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Maintained flawless quality record over 3 years, preventing costly line stoppages</li>
              <li>Applied 5S and Kanban systems for workflow optimization and lean manufacturing</li>
              <li>Documented inspections and ensured compliance with manufacturing and safety standards</li>
              <li>Operated precision manufacturing equipment for automotive component production</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Tastemorr Basic Grain — Production & Operations</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Coldwater, OH • November 2010–August 2012</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Operated production equipment in grain processing facility</li>
              <li>Maintained quality standards and food safety protocols</li>
              <li>Managed inventory and supply chain logistics</li>
              <li>Ensured compliance with operational and safety regulations</li>
            </ul>
          </div>
        </div>
      } />

      <CollapsibleSection 
        title="Education & Professional Development" 
        defaultCollapsed={!expandAll}
        collapsedContent={
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Software Engineering Immersive — Certificate of Completion</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">General Assembly • New York, NY • August 2025</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Project-based full-stack program emphasizing test-driven development, accessibility, and collaborative Git workflows</li>
              <li>Focused on ethical system design, agile team practices, and scalable architecture</li>
              <li>Built and deployed multiple full-stack applications using modern frameworks, CI/CD pipelines, and accessibility-first principles</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Philosophy – Pre-Law Discipline</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Ohio University • Athens, OH • 2010</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Coursework included ethics, logic, political theory, comparative religion, international studies, and foreign languages (Arabic and German)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Undergraduate Coursework</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Wright State University • Celina, OH • 2009</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Completed 72 quarter hours as a dual-enrollment student during junior and senior years of high school</li>
              <li>Dean&apos;s List for six quarters • 3.75 cumulative GPA</li>
              <li>Completed English Composition sequence and a comprehensive 3-term Western Civilization series emphasizing nomadic pastoralism, cultural drift, and simultaneous regional developments</li>
              <li>Took multiple psychology courses and served as Vice President of the Psychology Society — a student-faculty discussion and excursion group</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Honors Diploma • Top 10%</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Celina High School • Celina, OH • 2009</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>GPA 3.52 • SAT 1420 (740 Math, 680 Verbal) • ACT 31 • AP Chemistry (5)</li>
              <li>Captain of the Scholastic Team with five televised WHIO High Q appearances</li>
              <li>Ohio Mock Trial Attorney and Junior Engineering Technology and Science (JETS) competition team captain</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 dark:text-blue-400">Ongoing Technical Education</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Self-Directed Learning • 2023–Present</p>
            <ul className="text-gray-700 dark:text-gray-300 text-sm mt-2 ml-4 list-disc space-y-1">
              <li>Harvard CS50x: Introduction to Computer Science</li>
              <li>Harvard CS50w: Web Programming with Python/JavaScript</li>
              <li>Azure Fundamentals certification (in progress)</li>
              <li>Cloud architecture exploration (AWS, Azure, GCP)</li>
              <li>The Odin Project & FreeCodeCamp advanced modules</li>
              <li>C++, C#, and Angular independent study</li>
            </ul>
          </div>
        </div>
      } />

      <CollapsibleSection 
        title="Certifications & Associations" 
        defaultCollapsed={!expandAll}
        collapsedContent={
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Professional Certifications</h4>
            <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
              {certifications.map((cert) => (
                <li key={cert.id}><strong>{cert.name}</strong> — {cert.issuer} ({new Date(cert.issueDate).getFullYear()})</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Professional Associations & Communities</h4>
            <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
              {professionalAssociations.map((assoc) => (
                <li key={assoc.id}><strong>{assoc.name}</strong> — {assoc.description}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Community Engagement & Activities</h4>
            <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
              {activities.map((activity) => (
                <li key={activity.id}><strong>{activity.name}</strong> — {activity.description}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Community Outreach & Volunteering</h4>
            <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
              {communityOutreach.map((org) => (
                <li key={org.id}><strong>{org.name}</strong> ({org.status}) — {org.description}</li>
              ))}
            </ul>
          </div>
        </div>
      } />

      <CollapsibleSection 
        title="References & Mentors" 
        defaultCollapsed={!expandAll}
        collapsedContent={
        <div className="space-y-3">
          {references.map((ref) => (
            <div key={ref.id} className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-800 dark:text-gray-200">{ref.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{ref.title} • {ref.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">{ref.relationship}</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                {ref.email && <a href={`mailto:${ref.email}`}>{ref.email}</a>}
                {ref.phone && <> • <a href={`tel:${ref.phone}`}>{ref.phone}</a></>}
              </p>
            </div>
          ))}
        </div>
      } />
    </div>
  );
}
