/**
 * Next.js Middleware for Project URL Redirection
 * 
 * This middleware intercepts requests to user-friendly project URLs
 * and redirects them to the actual hosted URLs on Heroku/Vercel.
 * 
 * Examples:
 * - /projects/stircraft/live → https://stircraft-app-0dd06cf5d30a.herokuapp.com/
 * - /projects/dream-weaver/live → https://dream-weaver-rho.vercel.app/
 * - /go/stircraft → https://stircraft-app-0dd06cf5d30a.herokuapp.com/
 */

import { NextRequest, NextResponse } from 'next/server';

// Project URL mapping - self-contained for Edge runtime compatibility
const PROJECT_REDIRECTS: Record<string, string> = {
  'stircraft': 'https://stircraft-app-0dd06cf5d30a.herokuapp.com/',
  'phantastic-beasts': 'https://phantastic-beasts-d585c0bc1aa9.herokuapp.com/',
  'slay-the-dagron': 'https://macfarley.github.io/slay-the-dagron/',
  'dream-weaver': 'https://dream-weaver-rho.vercel.app/',
};

// Utility function for adding tracking parameters
function addTrackingParams(url: string, projectId: string, source: string = 'portfolio'): string {
  const urlObj = new URL(url);
  urlObj.searchParams.set('utm_source', source);
  urlObj.searchParams.set('utm_medium', 'redirect');
  urlObj.searchParams.set('utm_campaign', 'portfolio-redirect');
  urlObj.searchParams.set('utm_content', projectId);
  urlObj.searchParams.set('utm_term', new Date().toISOString().split('T')[0]);
  return urlObj.toString();
}

// Alternative short URL patterns
const SHORT_URL_PATTERNS = [
  '/go/',      // /go/stircraft
  '/app/',     // /app/stircraft  
  '/demo/',    // /demo/stircraft
  '/live/',    // /live/stircraft
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  console.log('🔄 Middleware triggered for:', pathname);
  
  // Handle /projects/{id}/live pattern
  const projectLiveMatch = pathname.match(/^\/projects\/([^\/]+)\/live\/?$/);
  if (projectLiveMatch) {
    const projectId = projectLiveMatch[1];
    const redirectUrl = PROJECT_REDIRECTS[projectId];
    
    if (redirectUrl) {
      const trackedUrl = addTrackingParams(redirectUrl, projectId, 'portfolio-live-link');
      console.log(`Redirecting /projects/${projectId}/live → ${trackedUrl}`);
      return NextResponse.redirect(trackedUrl, 302);
    }
  }
  
  // Handle short URL patterns: /go/{id}, /app/{id}, etc.
  for (const pattern of SHORT_URL_PATTERNS) {
    if (pathname.startsWith(pattern)) {
      const projectId = pathname.replace(pattern, '').replace(/\/$/, '');
      
      console.log(`Found pattern ${pattern} for project: ${projectId}`);
      
      const redirectUrl = PROJECT_REDIRECTS[projectId];
      
      if (redirectUrl) {
        const source = pattern.replace(/\//g, '') || 'short-link';
        const trackedUrl = addTrackingParams(redirectUrl, projectId, `portfolio-${source}`);
        
        console.log(`Redirecting ${pathname} → ${trackedUrl}`);
        return NextResponse.redirect(trackedUrl, 302);
      } else {
        console.log(`No redirect found for project: ${projectId}`);
      }
    }
  }
  
  // Handle legacy project URLs (if you had old patterns)
  const legacyPatterns = [
    { pattern: /^\/stircraft\/?$/, redirect: PROJECT_REDIRECTS['stircraft'] },
    { pattern: /^\/beasts\/?$/, redirect: PROJECT_REDIRECTS['phantastic-beasts'] },
    { pattern: /^\/dagron\/?$/, redirect: PROJECT_REDIRECTS['slay-the-dagron'] },
    { pattern: /^\/dreams?\/?$/, redirect: PROJECT_REDIRECTS['dream-weaver'] },
    { pattern: /^\/dream\/?$/, redirect: PROJECT_REDIRECTS['dream-weaver'] },
  ];
  
  for (const { pattern, redirect } of legacyPatterns) {
    if (pattern.test(pathname) && redirect) {
      const trackedUrl = addTrackingParams(redirect, 'legacy', 'legacy-link');
      console.log(`Legacy redirect: ${pathname} → ${trackedUrl}`);
      return NextResponse.redirect(trackedUrl, 301); // Permanent redirect for legacy URLs
    }
  }
  
  // Continue to next middleware or page
  return NextResponse.next();
}

// Configure which paths this middleware should run on
export const config = {
  matcher: [
    '/go/:path*',
    '/app/:path*', 
    '/demo/:path*',
    '/live/:path*',
    '/projects/:path*/live',
    '/stircraft',
    '/beasts',
    '/dagron',
    '/dream',
    '/dreams',
  ],
};
