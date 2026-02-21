'use client';

import { useState } from 'react';
import CollapsibleSection from '../../components/CollapsibleSection';

export default function CollapsibleBlogSections() {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <div className="space-y-4">
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

      <CollapsibleSection
        title="The Price of Doing Business"
        sectionId="price-of-doing-business"
        defaultCollapsed={!expandAll}
        collapsedContent={
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-5">
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">A Quarter Century After Nickel and Dimed</h3>
              <p>
                I didn&apos;t lose a job. I walked away from one. That distinction matters when every step of the hiring process quietly asks workers to absorb more
                risk, more surveillance, and more cost than they were promised.
              </p>
              <p>
                The original posting sounded straightforward. Once I got into onboarding, the details shifted: more physical burden, more personal expense, and more
                expectations that my time and equipment were simply available for corporate use.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">The Bait-and-Switch</h3>
              <p>
                What looked like a basic access-control role turned into perimeter patrol expectations and state-mandated fees that were framed as my responsibility.
                The guard card fee was treated like a payroll timing issue, not what it really is: a business cost pushed down onto labor.
              </p>
              <p>
                Add in mileage, wear on a personal vehicle, and app-based tracking requirements on a personal phone, and the model becomes clear: the worker subsidizes
                the system before a fair paycheck even begins.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">The $11 Surprise</h3>
              <p>
                The published rate and the actual paperwork didn&apos;t match. Buried in onboarding documents was a reduced training wage that was never foregrounded
                before time was already invested. After taxes, fees, and commute costs, the first day wasn&apos;t income; it was extraction.
              </p>
              <p>
                That&apos;s the point where I asked for my documents back and walked. Respectfully, clearly, and without apology.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Same Pattern, Different Uniform</h3>
              <p>
                The same dynamic appears in white-collar tech: unpaid multi-stage take-homes, performative coding gauntlets, relocation pressure, and no structural
                protection if the role disappears at the last second. Different branding, same transfer of risk.
              </p>
              <p>
                Whether it&apos;s physical labor or digital labor, the message is familiar: your life is infinitely flexible, your time is infinitely cheap, and your
                dignity is negotiable.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">The Line in the Sand</h3>
              <p>
                I&apos;m not above honest work. I am above exploitative terms disguised as opportunity. My standards are not attitude; they are survival ethics.
              </p>
              <p>
                If the price of doing business is my privacy, my stability, and my dignity, the deal is off.
              </p>
            </div>

            <p>
              Original publication on Medium:{' '}
              <a
                href="https://medium.com/age-of-awareness/the-price-of-doing-business-b28f05c27003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                The Price of Doing Business
              </a>
            </p>
          </div>
        }
      />

      <CollapsibleSection
        title="I Tried Substack — It Proved My Point"
        sectionId="i-tried-substack-it-proved-my-point"
        defaultCollapsed={!expandAll}
        collapsedContent={
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-5">
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">A Useful Detour</h3>
              <p>
                I didn&apos;t move to Substack because I believed in the platform. I moved because I needed somewhere to place longform writing quickly.
              </p>
              <p>
                Community feedback surfaced what I should have checked first: longstanding concerns about platform governance, incentive structures, and what kinds of
                behavior become normalized when engagement is the core currency.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">When Incentives Clash With Values</h3>
              <p>
                My mission is to build humane, privacy-minded tools that reduce harm and preserve autonomy. That mission doesn&apos;t fit ecosystems that treat creators as
                growth assets and readers as data exhaust.
              </p>
              <p>
                The issue isn&apos;t one brand or one controversy. It&apos;s structural: if the platform rewards outrage, extraction, and lock-in, the culture eventually
                reflects it.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">What I&apos;m Building Instead</h3>
              <p>
                I&apos;m working toward creator-first infrastructure and community-serving tools: practical software that helps people navigate real life without turning
                them into ad targets or engagement units.
              </p>
              <p>
                The direction is explicit: ethical design, sustainable publishing, and independent stewardship over where and how the work lives.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">The Conclusion</h3>
              <p>
                Substack wasn&apos;t the destination. It was a stress test that confirmed the larger thesis: platform convenience is not the same as platform alignment.
              </p>
              <p>
                The work is to build and publish in spaces that keep people central, not captured.
              </p>
            </div>

            <p>
              Original publication on Medium:{' '}
              <a
                href="https://medium.com/age-of-awareness/i-tried-substack-it-proved-my-point-fa52060fc986"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                I Tried Substack — It Proved My Point
              </a>
            </p>
          </div>
        }
      />

      <CollapsibleSection
        title="Publishing & Mirror Policy"
        sectionId="publishing-mirror-policy"
        defaultCollapsed={!expandAll}
        collapsedContent={
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
            <p>
              Medium remains an active distribution channel, especially through Age of Awareness. But from this point forward, new longform pieces are mirrored here so
              SitesByMac.dev becomes the canonical home of my writing.
            </p>
            <p>
              Over time, this section will expand into full mirrored article sections that preserve context while keeping everything rooted in creator-first,
              privacy-minded publishing.
            </p>
          </div>
        }
      />
    </div>
  );
}
