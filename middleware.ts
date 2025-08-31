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
import { getProjectRedirectUrl, generateTrackingUrl } from './src/utils/redirects';

// Static mappings for projects (fallback if dynamic lookup fails)
// This could be dynamically generated from your projects data if needed
const PROJECT_REDIRECTS: Record<string, string> = {
  'stircraft': 'https://stircraft-app-0dd06cf5d30a.herokuapp.com/',
  'phantastic-beasts': 'https://phantastic-beasts-d585c0bc1aa9.herokuapp.com/',
  'slay-the-dagron': 'https://macfarley.github.io/slay-the-dagron/',
  'dream-weaver': 'https://dream-weaver-rho.vercel.app/',
};

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
    
    // Try dynamic lookup first, fallback to static mapping
    let redirectUrl = getProjectRedirectUrl(projectId) || PROJECT_REDIRECTS[projectId];
    
    if (redirectUrl) {
      // Add analytics tracking
      redirectUrl = generateTrackingUrl(redirectUrl, projectId, 'portfolio-live-link');
      
      console.log(`Redirecting /projects/${projectId}/live → ${redirectUrl}`);
      return NextResponse.redirect(redirectUrl, 302);
    }
  }
  
  // Handle short URL patterns: /go/{id}, /app/{id}, etc.
  for (const pattern of SHORT_URL_PATTERNS) {
    if (pathname.startsWith(pattern)) {
      const projectId = pathname.replace(pattern, '').replace(/\/$/, '');
      
      console.log(`Found pattern ${pattern} for project: ${projectId}`);
      
      // Try dynamic lookup first, fallback to static mapping
      let redirectUrl = getProjectRedirectUrl(projectId) || PROJECT_REDIRECTS[projectId];
      
      if (redirectUrl) {
        // Add analytics tracking with pattern-specific source
        const source = pattern.replace(/\//g, '') || 'short-link';
        redirectUrl = generateTrackingUrl(redirectUrl, projectId, `portfolio-${source}`);
        
        console.log(`Redirecting ${pathname} → ${redirectUrl}`);
        return NextResponse.redirect(redirectUrl, 302);
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
      console.log(`Legacy redirect: ${pathname} → ${redirect}`);
      return NextResponse.redirect(redirect, 301); // Permanent redirect for legacy URLs
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
