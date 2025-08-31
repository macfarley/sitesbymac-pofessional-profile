/**
 * Project Redirect Utilities
 * 
 * Utilities for managing project URL redirects and generating
 * redirect mappings from project data.
 */

import { projects } from '../data/projects';

export interface RedirectMapping {
  [projectId: string]: string;
}

/**
 * Generate redirect mapping from projects data
 */
export function generateProjectRedirects(): RedirectMapping {
  const redirects: RedirectMapping = {};
  
  projects.forEach(project => {
    if (project.liveUrl) {
      redirects[project.id] = project.liveUrl;
    }
  });
  
  return redirects;
}

/**
 * Get redirect URL for a project ID
 */
export function getProjectRedirectUrl(projectId: string): string | null {
  const project = projects.find(p => p.id === projectId);
  return project?.liveUrl || null;
}

/**
 * Generate analytics tracking URLs for redirects
 */
export function generateTrackingUrl(originalUrl: string, projectId: string, source: string = 'portfolio'): string {
  const url = new URL(originalUrl);
  
  // Add UTM parameters for analytics
  url.searchParams.set('utm_source', source);
  url.searchParams.set('utm_medium', 'redirect');
  url.searchParams.set('utm_campaign', 'portfolio-redirect');
  url.searchParams.set('utm_content', projectId);
  
  return url.toString();
}

/**
 * Validate if a project supports live redirects
 */
export function isProjectRedirectSupported(projectId: string): boolean {
  const project = projects.find(p => p.id === projectId);
  return !!(project?.liveUrl);
}

/**
 * Generate user-friendly redirect URLs for documentation
 */
export function generateRedirectDocumentation(): Array<{
  projectId: string;
  title: string;
  patterns: string[];
  destination: string;
}> {
  return projects
    .filter(project => project.liveUrl)
    .map(project => ({
      projectId: project.id,
      title: project.title,
      patterns: [
        `/projects/${project.id}/live`,
        `/go/${project.id}`,
        `/app/${project.id}`,
        `/demo/${project.id}`,
        `/live/${project.id}`,
      ],
      destination: project.liveUrl!,
    }));
}
