import Image from "next/image";
import Link from "next/link";

export default function McAxlPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="/axlotl.png"
              alt="McAxl the Web-Wrangling Axolotl"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-5xl font-bold text-amber-800 dark:text-amber-400 mb-4">
            Meet McAxl
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
            The electric-blue axolotl who keeps SitesByMac.dev swimming smoothly
          </p>
        </div>

        {/* Personality Profile */}
        <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-800 dark:text-amber-400 mb-6 flex items-center">
            🎨 Personality Profile
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="font-semibold text-stone-800 dark:text-stone-200">Species</h3>
                <p className="text-stone-600 dark:text-stone-300">Axolotl (rare electric-blue variant)</p>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="font-semibold text-stone-800 dark:text-stone-200">Occupation</h3>
                <p className="text-stone-600 dark:text-stone-300">Full-stack pond developer at SitesByMac.dev</p>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="font-semibold text-stone-800 dark:text-stone-200">Catchphrase</h3>
                <p className="text-stone-600 dark:text-stone-300 font-italic">&ldquo;Just deploy it&mdash;I&rsquo;ll float the diff.&rdquo;</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="font-semibold text-stone-800 dark:text-stone-200">Specialties</h3>
                <ul className="text-stone-600 dark:text-stone-300 space-y-1">
                  <li>• Semantic markup</li>
                  <li>• Underwater form validation</li>
                  <li>• Debugging with bubble breakpoints</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="font-semibold text-stone-800 dark:text-stone-200">Accessories</h3>
                <p className="text-stone-600 dark:text-stone-300">Goggles, tiny code laptop, Tailwind CSS cape</p>
              </div>
            </div>
          </div>
        </div>

        {/* McAxl's Philosophy */}
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-800 dark:text-amber-400 mb-6">
            🌊 The McAxl Way
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-stone-700 dark:text-stone-300 mb-4">
              Just like axolotls can regenerate their limbs, McAxl believes in the power of 
              <strong className="text-amber-700 dark:text-amber-400"> resilient code</strong> that can 
              adapt, recover, and evolve. He represents the core values that drive every project at SitesByMac.dev:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🔄</div>
                <h3 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Resilience</h3>
                <p className="text-sm text-stone-600 dark:text-stone-300">
                  Like regenerating limbs, code that bounces back from errors
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🔍</div>
                <h3 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Curiosity</h3>
                <p className="text-sm text-stone-600 dark:text-stone-300">
                  Always exploring new technologies and better solutions
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Creativity</h3>
                <p className="text-sm text-stone-600 dark:text-stone-300">
                  Building story-driven experiences that connect with users
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-amber-800 dark:text-amber-400 mb-6">
            ⚡ McAxl Fun Facts
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
              <p className="text-stone-600 dark:text-stone-300">
                Has the swagger of a Scottish tech mascot with just enough edge to moonlight in a synth-punk band
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">💧</span>
              <p className="text-stone-600 dark:text-stone-300">
                Prefers aquatic development environments but can work on land when needed
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎯</span>
              <p className="text-stone-600 dark:text-stone-300">
                Specializes in mentoring junior developers and volunteer work
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🌙</span>
              <p className="text-stone-600 dark:text-stone-300">
                Thrives in both light and dark mode environments
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
