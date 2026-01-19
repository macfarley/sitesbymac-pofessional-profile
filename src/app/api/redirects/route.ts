/**
 * Project Redirects API Route
 * 
 * Provides endpoints for managing and viewing project redirects.
 * 
 * GET /api/redirects - List all available redirects
 * POST /api/redirects/test - Test a redirect URL
 */

import { NextRequest, NextResponse } from 'next/server';
import { 
  generateProjectRedirects, 
  generateRedirectDocumentation,
  isProjectRedirectSupported 
} from '../../../utils/redirects';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format') || 'json';
    const projectId = searchParams.get('project');
    
    // Get redirect documentation
    const redirectDocs = generateRedirectDocumentation();
    
    // If specific project requested
    if (projectId) {
      const projectDoc = redirectDocs.find(doc => doc.projectId === projectId);
      if (!projectDoc) {
        return NextResponse.json(
          { error: 'Project not found or redirect not supported' },
          { status: 404 }
        );
      }
      
      return NextResponse.json({
        project: projectDoc,
        supported: isProjectRedirectSupported(projectId),
        testUrls: projectDoc.patterns.map(pattern => 
          `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${pattern}`
        )
      });
    }
    
    // Return all redirects
    if (format === 'html') {
      // Return HTML documentation
      const html = generateHtmlDocumentation(redirectDocs);
      return new NextResponse(html, {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    
    return NextResponse.json({
      redirects: redirectDocs,
      total: redirectDocs.length,
      patterns: [
        '/projects/{id}/live',
        '/go/{id}',
        '/app/{id}',
        '/demo/{id}',
        '/live/{id}'
      ]
    });
    
  } catch (error) {
    console.error('Redirects API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { projectId, pattern } = body;
    
    if (!projectId) {
      return NextResponse.json(
        { error: 'Project ID is required' },
        { status: 400 }
      );
    }
    
    const isSupported = isProjectRedirectSupported(projectId);
    if (!isSupported) {
      return NextResponse.json(
        { error: 'Project redirect not supported' },
        { status: 404 }
      );
    }
    
    const redirects = generateProjectRedirects();
    const targetUrl = redirects[projectId];
    
    // Test the redirect
    const testPattern = pattern || `/go/${projectId}`;
    const testUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${testPattern}`;
    
    return NextResponse.json({
      projectId,
      testUrl,
      targetUrl,
      supported: true,
      message: `Redirect test successful. ${testUrl} → ${targetUrl}`
    });
    
  } catch (error) {
    console.error('Redirect test error:', error);
    return NextResponse.json(
      { error: 'Test failed' },
      { status: 500 }
    );
  }
}

function generateHtmlDocumentation(redirectDocs: ReturnType<typeof generateRedirectDocumentation>) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Redirects - Mac McCoy Portfolio</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            line-height: 1.6;
        }
        .redirect-card {
            border: 1px solid #e1e5e9;
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            background: #f8f9fa;
        }
        .pattern-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.5rem;
            margin: 1rem 0;
        }
        .pattern {
            background: #e9ecef;
            padding: 0.5rem;
            border-radius: 4px;
            font-family: monospace;
            font-size: 0.9rem;
        }
        .destination {
            background: #d4edda;
            padding: 0.75rem;
            border-radius: 4px;
            font-family: monospace;
            font-size: 0.9rem;
            margin-top: 1rem;
            border-left: 4px solid #28a745;
        }
        h1 { color: #2c3e50; }
        h2 { color: #34495e; margin-bottom: 0.5rem; }
        .meta { color: #6c757d; font-size: 0.9rem; }
    </style>
</head>
<body>
    <h1>🔗 Project Redirects</h1>
    <p class="meta">Available URL patterns for Mac McCoy's portfolio projects</p>
    
    ${redirectDocs.map(doc => `
        <div class="redirect-card">
            <h2>${doc.title}</h2>
            <p class="meta">Project ID: <code>${doc.projectId}</code></p>
            
            <h3>Available Patterns:</h3>
            <div class="pattern-list">
                ${doc.patterns.map(pattern => 
                    `<div class="pattern">${pattern}</div>`
                ).join('')}
            </div>
            
            <h3>Redirects to:</h3>
            <div class="destination">${doc.destination}</div>
        </div>
    `).join('')}
    
    <div class="redirect-card">
        <h2>📊 Usage Examples</h2>
        <div class="pattern-list">
            <div class="pattern">yoursite.com/go/stircraft</div>
            <div class="pattern">yoursite.com/demo/dream-weaver</div>
            <div class="pattern">yoursite.com/projects/stircraft/live</div>
        </div>
    </div>
</body>
</html>
  `.trim();
}

// Tests
const { describe, it, expect } = require('@jest/globals'); // Updated syntax for compatibility
import { generateProjectRedirects, isProjectRedirectSupported } from '../../../utils/redirects';

describe('Redirect API', () => {
  it('should return supported redirect for valid project ID', () => {
    const projectId = 'stircraft';
    const result = isProjectRedirectSupported(projectId);
    expect(result).toBe(true);
  });

  it('should return false for unsupported project ID', () => {
    const projectId = 'unknown-project';
    const result = isProjectRedirectSupported(projectId);
    expect(result).toBe(false);
  });

  it('should generate correct redirect URL', () => {
    const redirects = generateProjectRedirects();
    expect(redirects['stircraft']).toBe('https://stircraft-app-0dd06cf5d30a.herokuapp.com/');
  });
});
