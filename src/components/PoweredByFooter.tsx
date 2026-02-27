'use client';

import { useEffect, useState } from 'react';

interface PoweredByFooterProps {
  className?: string;
  homeUrl?: string;
  creatorLabel?: string;
  showTrackingParams?: boolean;
  revealStart?: number;
  aboutHref?: string;
  sitemapHref?: string;
}

export default function PoweredByFooter({
  className = '',
  homeUrl = 'https://sitesbymac.dev',
  creatorLabel = 'SitesByMac.dev',
  showTrackingParams = false,
  revealStart = 0.8,
  aboutHref = '/about',
  sitemapHref = '/sitemap.xml',
}: PoweredByFooterProps) {
  const [revealProgress, setRevealProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const totalScrollable = document.documentElement.scrollHeight - viewportHeight;

      if (totalScrollable <= 0) {
        setRevealProgress(0);
        return;
      }

      const scrollRatio = window.scrollY / totalScrollable;

      if (scrollRatio <= revealStart) {
        setRevealProgress(0);
        return;
      }

      const normalizedProgress = (scrollRatio - revealStart) / (1 - revealStart);
      const clampedProgress = Math.max(0, Math.min(1, normalizedProgress));
      setRevealProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [revealStart]);

  const href = showTrackingParams
    ? `${homeUrl.replace(/\/$/, '')}/?utm_source=project-footer&utm_medium=attribution&utm_campaign=creator-network`
    : homeUrl;

  const panelHeight = `${revealProgress * 15}vh`;
  const panelOpacity = revealProgress;
  const canInteract = revealProgress > 0.05;

  return (
    <footer
      className={`fixed inset-x-0 bottom-0 z-40 overflow-hidden border-t border-amber-600/20 bg-stone-50/95 text-amber-900 backdrop-blur dark:border-cyan-400/20 dark:bg-gray-900/95 dark:text-gray-100 ${className}`.trim()}
      style={{
        height: panelHeight,
        opacity: panelOpacity,
        pointerEvents: canInteract ? 'auto' : 'none',
      }}
      aria-hidden={!canInteract}
    >
      <div className="flex h-full items-center justify-center px-6 text-center text-sm md:text-base">
        <p className="max-w-3xl leading-relaxed">
          This app is powered by{' '}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            {creatorLabel}
          </a>
          . You&apos;re inside a connected app in the Sites by Mac ecosystem. Go back to{' '}
          <a href={homeUrl} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
            Home
          </a>{' '}
          or explore{' '}
          <a href={aboutHref} className="underline hover:no-underline">
            About
          </a>{' '}
          and{' '}
          <a href={sitemapHref} className="underline hover:no-underline">
            Sitemap
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
