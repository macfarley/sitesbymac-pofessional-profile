/**
 * Standalone Express Redirect Server
 * 
 * Alternative implementation using Express.js for project URL redirection.
 * This can be deployed separately or used if you prefer a dedicated backend.
 * 
 * Usage:
 * - Install: npm install express cors helmet express-rate-limit
 * - Run: node redirect-server.js
 * - Deploy: Can be deployed to Heroku, Railway, or any Node.js host
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many redirect requests, please try again later.'
});
app.use(limiter);

// Project redirect mappings
const PROJECT_REDIRECTS = {
  'stircraft': 'https://stircraft-app-0dd06cf5d30a.herokuapp.com/',
  'phantastic-beasts': 'https://phantastic-beasts-d585c0bc1aa9.herokuapp.com/',
  'slay-the-dagron': 'https://macfarley.github.io/slay-the-dagron/',
  'dream-weaver': 'https://dream-weaver-rho.vercel.app/',
};

// Analytics tracking
function addTrackingParams(url, projectId, source = 'redirect-server') {
  const urlObj = new URL(url);
  urlObj.searchParams.set('utm_source', source);
  urlObj.searchParams.set('utm_medium', 'redirect');
  urlObj.searchParams.set('utm_campaign', 'portfolio-redirect');
  urlObj.searchParams.set('utm_content', projectId);
  urlObj.searchParams.set('utm_term', new Date().toISOString().split('T')[0]);
  return urlObj.toString();
}

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    projects: Object.keys(PROJECT_REDIRECTS).length
  });
});

// List all redirects (API endpoint)
app.get('/api/redirects', (req, res) => {
  const redirects = Object.entries(PROJECT_REDIRECTS).map(([id, url]) => ({
    projectId: id,
    destination: url,
    patterns: [
      `/go/${id}`,
      `/app/${id}`,
      `/demo/${id}`,
      `/live/${id}`,
      `/projects/${id}/live`
    ]
  }));
  
  res.json({
    redirects,
    total: redirects.length,
    server: 'express-redirect-server',
    version: '1.0.0'
  });
});

// Main redirect handlers
const redirectPatterns = [
  { pattern: /^\/go\/([^\/]+)\/?$/, source: 'go-link' },
  { pattern: /^\/app\/([^\/]+)\/?$/, source: 'app-link' },
  { pattern: /^\/demo\/([^\/]+)\/?$/, source: 'demo-link' },
  { pattern: /^\/live\/([^\/]+)\/?$/, source: 'live-link' },
  { pattern: /^\/projects\/([^\/]+)\/live\/?$/, source: 'project-live' },
];

// Handle redirect patterns
redirectPatterns.forEach(({ pattern, source }) => {
  app.get(pattern, (req, res) => {
    const projectId = req.params[0];
    const redirectUrl = PROJECT_REDIRECTS[projectId];
    
    if (!redirectUrl) {
      return res.status(404).json({
        error: 'Project not found',
        projectId,
        availableProjects: Object.keys(PROJECT_REDIRECTS)
      });
    }
    
    const trackedUrl = addTrackingParams(redirectUrl, projectId, source);
    
    console.log(`Redirecting: ${req.path} → ${trackedUrl}`);
    
    // Add redirect headers for analytics
    res.set({
      'X-Redirect-Source': source,
      'X-Project-ID': projectId,
      'X-Original-Path': req.path
    });
    
    res.redirect(302, trackedUrl);
  });
});

// Legacy/custom redirect patterns
const legacyRedirects = [
  { path: '/stircraft', projectId: 'stircraft' },
  { path: '/beasts', projectId: 'phantastic-beasts' },
  { path: '/dagron', projectId: 'slay-the-dagron' },
  { path: '/dreams', projectId: 'dream-weaver' },
];

legacyRedirects.forEach(({ path, projectId }) => {
  app.get(path, (req, res) => {
    const redirectUrl = PROJECT_REDIRECTS[projectId];
    if (redirectUrl) {
      const trackedUrl = addTrackingParams(redirectUrl, projectId, 'legacy-link');
      res.redirect(301, trackedUrl); // Permanent redirect for legacy URLs
    } else {
      res.status(404).json({ error: 'Legacy redirect not found' });
    }
  });
});

// Root endpoint with documentation
app.get('/', (req, res) => {
  const host = req.get('host');
  const protocol = req.get('x-forwarded-proto') || req.protocol;
  const baseUrl = `${protocol}://${host}`;
  
  res.json({
    message: 'Mac McCoy Portfolio Redirect Server',
    version: '1.0.0',
    documentation: `${baseUrl}/docs`,
    health: `${baseUrl}/health`,
    api: `${baseUrl}/api/redirects`,
    examples: {
      'StirCraft Demo': `${baseUrl}/go/stircraft`,
      'Dream Weaver App': `${baseUrl}/app/dream-weaver`,
      'Project Live Link': `${baseUrl}/projects/stircraft/live`
    },
    availableProjects: Object.keys(PROJECT_REDIRECTS)
  });
});

// Documentation endpoint
app.get('/docs', (req, res) => {
  const host = req.get('host');
  const protocol = req.get('x-forwarded-proto') || req.protocol;
  const baseUrl = `${protocol}://${host}`;
  
  const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Redirect Server Documentation</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .pattern { background: #f4f4f4; padding: 10px; margin: 5px 0; border-radius: 4px; }
        .example { background: #e8f5e8; padding: 10px; margin: 5px 0; border-radius: 4px; }
    </style>
</head>
<body>
    <h1>🔗 Portfolio Redirect Server</h1>
    <p>URL redirection service for Mac McCoy's portfolio projects.</p>
    
    <h2>Available Patterns</h2>
    ${redirectPatterns.map(({ pattern, source }) => `
        <div class="pattern">
            <strong>${pattern.toString()}</strong><br>
            <small>Source: ${source}</small>
        </div>
    `).join('')}
    
    <h2>Example URLs</h2>
    ${Object.keys(PROJECT_REDIRECTS).map(projectId => `
        <div class="example">
            <strong>${projectId}:</strong><br>
            <a href="${baseUrl}/go/${projectId}">${baseUrl}/go/${projectId}</a><br>
            <a href="${baseUrl}/projects/${projectId}/live">${baseUrl}/projects/${projectId}/live</a>
        </div>
    `).join('')}
    
    <h2>API Endpoints</h2>
    <div class="pattern">
        <strong>GET /api/redirects</strong> - List all available redirects<br>
        <strong>GET /health</strong> - Server health check
    </div>
</body>
</html>
  `;
  
  res.send(html);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.path,
    suggestion: 'Check /docs for available redirect patterns',
    availableProjects: Object.keys(PROJECT_REDIRECTS)
  });
});

// Error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, _next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Redirect server running on port ${PORT}`);
  console.log(`📖 Documentation: http://localhost:${PORT}/docs`);
  console.log(`🔗 Available redirects: ${Object.keys(PROJECT_REDIRECTS).length}`);
});

module.exports = app;
