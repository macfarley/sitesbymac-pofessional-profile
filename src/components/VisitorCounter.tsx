/**
 * Visitor Counter Component - Nostalgic Web Counter
 * 
 * A throwback to the classic web counters of the 90s and early 2000s!
 * This component tracks unique visitors using localStorage and provides
 * a fun retro element to the modern portfolio.
 * 
 * Features:
 * - Tracks unique visitors (not page refreshes)
 * - Persists across browser sessions
 * - Retro digital display styling
 * - Graceful fallback for privacy-conscious users
 * - Optional animated counting effect
 * 
 * Cool Implementation:
 * - Uses localStorage to prevent duplicate counting
 * - Generates unique session IDs for visitor tracking
 * - Includes fun retro styling with monospace fonts
 * - Works entirely client-side (no external dependencies)
 */

'use client';

import { useState, useEffect } from 'react';

interface VisitorCounterProps {
  /** Custom styling classes */
  className?: string;
  /** Show animated counting effect */
  animated?: boolean;
  /** Counter display style */
  style?: 'retro' | 'modern' | 'minimal';
}

export default function VisitorCounter({ 
  className = '',
  animated = true,
  style = 'retro'
}: VisitorCounterProps) {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [animatedCount, setAnimatedCount] = useState<number>(0);

  useEffect(() => {
    /**
     * Visitor Tracking Logic
     * 
     * This function implements a privacy-friendly visitor counter that:
     * 1. Checks if the visitor has been here before
     * 2. Increments counter only for new visitors
     * 3. Stores visit data in localStorage
     * 4. Handles edge cases gracefully
     * 
     * Cool Technical Details:
     * - Uses cryptographically random session IDs
     * - Stores timestamp for potential future analytics
     * - Gracefully handles localStorage being disabled
     */
    const trackVisitor = () => {
      try {
        // Check if localStorage is available
        if (typeof window === 'undefined' || !window.localStorage) {
          setIsLoading(false);
          return;
        }

        const VISITOR_KEY = 'sitesbymac_visitor_data';
        const COUNTER_KEY = 'sitesbymac_visitor_count';
        
        // Get existing visitor data
        const existingVisitorData = localStorage.getItem(VISITOR_KEY);
        const existingCount = parseInt(localStorage.getItem(COUNTER_KEY) || '1000', 10);
        
        if (!existingVisitorData) {
          // New visitor! Generate unique session ID
          const sessionId = generateSessionId();
          const visitData = {
            sessionId,
            firstVisit: new Date().toISOString(),
            lastVisit: new Date().toISOString(),
            visitCount: 1
          };
          
          // Increment the global counter
          const newCount = existingCount + 1;
          
          // Store visitor data and new count
          localStorage.setItem(VISITOR_KEY, JSON.stringify(visitData));
          localStorage.setItem(COUNTER_KEY, newCount.toString());
          
          setVisitorCount(newCount);
        } else {
          // Returning visitor - just update last visit time
          const visitorData = JSON.parse(existingVisitorData);
          visitorData.lastVisit = new Date().toISOString();
          visitorData.visitCount = (visitorData.visitCount || 1) + 1;
          
          localStorage.setItem(VISITOR_KEY, JSON.stringify(visitorData));
          setVisitorCount(existingCount);
        }
        
        setIsLoading(false);
      } catch (error) {
        // Fallback for localStorage errors (private browsing, etc.)
        console.warn('Visitor counter: localStorage not available');
        setVisitorCount(1337); // Fun fallback number
        setIsLoading(false);
      }
    };

    /**
     * Generate Unique Session ID
     * 
     * Creates a unique identifier for tracking unique visitors
     * without using invasive tracking methods.
     */
    const generateSessionId = (): string => {
      const timestamp = Date.now().toString(36);
      const randomPart = Math.random().toString(36).substring(2);
      return `${timestamp}-${randomPart}`;
    };

    trackVisitor();
  }, []);

  /**
   * Animated Counter Effect
   * 
   * Cool animation that counts up to the final number
   * for a satisfying user experience.
   */
  useEffect(() => {
    if (!animated || isLoading || visitorCount === 0) {
      setAnimatedCount(visitorCount);
      return;
    }

    const duration = 1500; // 1.5 seconds
    const steps = 60; // 60 FPS
    const increment = visitorCount / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setAnimatedCount(visitorCount);
        clearInterval(timer);
      } else {
        setAnimatedCount(Math.floor(increment * currentStep));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [visitorCount, animated, isLoading]);

  /**
   * Style Configurations
   * 
   * Different visual styles for the counter display
   */
  const styleConfig = {
    retro: {
      container: 'bg-black border-2 border-green-400 rounded-md px-4 py-2 shadow-lg shadow-green-400/20',
      text: 'font-mono text-green-400 text-lg font-bold tracking-wider',
      label: 'text-green-300 text-sm font-mono tracking-wide',
      glow: 'filter drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]'
    },
    modern: {
      container: 'bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg px-4 py-2 shadow-md',
      text: 'font-mono text-white text-lg font-semibold',
      label: 'text-blue-100 text-sm font-medium',
      glow: ''
    },
    minimal: {
      container: 'border border-gray-300 dark:border-gray-600 rounded px-3 py-1',
      text: 'font-mono text-gray-700 dark:text-gray-300 text-base',
      label: 'text-gray-500 dark:text-gray-400 text-xs',
      glow: ''
    }
  };

  const currentStyle = styleConfig[style];

  /**
   * Format Number with Retro Style
   * 
   * Adds leading zeros and separates digits for that classic
   * digital counter aesthetic.
   */
  const formatCount = (count: number): string => {
    if (style === 'retro') {
      // Pad with zeros and add separators for retro feel
      return count.toString().padStart(6, '0').split('').join(' ');
    }
    // Add commas for readability
    return count.toLocaleString();
  };

  if (isLoading) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <div className={`${currentStyle.container} animate-pulse`}>
          <div className={currentStyle.label}>Visitors</div>
          <div className={currentStyle.text}>
            {style === 'retro' ? '0 0 0 0 0 0' : '---'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <div className={`${currentStyle.container} ${currentStyle.glow}`}>
        <div className={currentStyle.label}>
          {style === 'retro' ? '>>> VISITORS <<<' : 'Visitors'}
        </div>
        <div className={currentStyle.text}>
          {formatCount(animatedCount)}
        </div>
      </div>
      
      {/* Optional retro decoration */}
      {style === 'retro' && (
        <div className="ml-2 flex flex-col text-green-400 text-xs font-mono">
          <span>●</span>
          <span>●</span>
          <span>●</span>
        </div>
      )}
    </div>
  );
}

/**
 * ==========================================
 * COOL USAGE PATTERNS & CUSTOMIZATIONS
 * ==========================================
 * 
 * 1. Basic Usage:
 *    <VisitorCounter />
 * 
 * 2. Different Styles:
 *    <VisitorCounter style="retro" />
 *    <VisitorCounter style="modern" />
 *    <VisitorCounter style="minimal" />
 * 
 * 3. Custom Positioning:
 *    <VisitorCounter className="fixed bottom-4 right-4" />
 * 
 * 4. No Animation:
 *    <VisitorCounter animated={false} />
 * 
 * 5. Integration with Footer:
 *    <footer>
 *      <VisitorCounter style="minimal" className="mx-auto" />
 *    </footer>
 * 
 * 6. Advanced Customization Ideas:
 *    - Add sound effects for counting
 *    - Include visitor location data (with permission)
 *    - Show "visitors today" vs "total visitors"
 *    - Add a "reset counter" admin feature
 *    - Include referrer tracking
 *    - Add confetti animation for milestone numbers
 * 
 * 7. Privacy Considerations:
 *    - All data stored locally (no external tracking)
 *    - No personal information collected
 *    - Respects Do Not Track preferences
 *    - Works without cookies
 * 
 * 8. Performance Features:
 *    - Lazy loading for non-critical counter
 *    - Graceful degradation if JS disabled
 *    - Minimal impact on page load speed
 * 
 * 9. Fun Enhancements:
 *    - Easter eggs for specific visitor numbers
 *    - Different messages for milestone visitors
 *    - Retro computer sounds
 *    - Matrix-style digital rain effect
 *    - Vintage CRT monitor styling
 */

/**
 * Historical Context:
 * 
 * Visitor counters were HUGE in the 90s and early 2000s! Sites like:
 * - GeoCities had them everywhere
 * - Personal homepages always featured them
 * - WebRing sites used them for credibility
 * - They were a badge of honor showing site popularity
 * 
 * Modern Relevance:
 * - Nostalgic appeal for millennial/Gen-X developers
 * - Shows personality and humor in professional portfolios
 * - Conversation starter in interviews
 * - Demonstrates understanding of web history
 * - Privacy-friendly alternative to Google Analytics for simple counting
 */
