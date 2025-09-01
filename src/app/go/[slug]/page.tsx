/**
 * Dynamic redirect page for /go/{project-id} URLs
 * 
 * This provides a fallback if middleware doesn't work correctly
 * and creates actual pages for these routes.
 */

import { redirect } from 'next/navigation';
import { projects } from '../../../data/projects';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function GoRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Find the project
  const project = projects.find(p => p.id === slug);
  
  if (project && project.liveUrl) {
    // Add tracking parameters
    const url = new URL(project.liveUrl);
    url.searchParams.set('utm_source', 'portfolio-go');
    url.searchParams.set('utm_medium', 'redirect');
    url.searchParams.set('utm_campaign', 'portfolio-redirect');
    url.searchParams.set('utm_content', slug);
    
    // Redirect to the project
    redirect(url.toString());
  }
  
  // If project not found, redirect to projects page
  redirect('/projects');
}

export const metadata = {
  title: 'Redirecting...',
  description: 'Redirecting to project',
};
