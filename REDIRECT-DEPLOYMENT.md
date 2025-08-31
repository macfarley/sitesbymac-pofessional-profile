# Deployment Guide for Portfolio Redirect Server

This guide covers deploying the redirect middleware solution for Mac McCoy's portfolio projects.

## Option 1: Next.js Middleware (Recommended)

The Next.js middleware approach is already integrated into your portfolio site and requires no additional deployment.

### Files Created:
- `/middleware.ts` - Next.js middleware for URL redirection
- `/src/utils/redirects.ts` - Utility functions for redirect management
- `/src/app/api/redirects/route.ts` - API endpoints for redirect management
- `/src/app/redirects/page.tsx` - Dashboard for testing redirects

### Available URL Patterns:
- `/projects/{id}/live` → Redirects to live project URL
- `/go/{id}` → Short link format
- `/app/{id}` → App link format  
- `/demo/{id}` → Demo link format
- `/live/{id}` → Live link format

### Examples:
- `yoursite.com/go/stircraft` → StirCraft Heroku app
- `yoursite.com/demo/dream-weaver` → Dream Weaver Vercel app
- `yoursite.com/projects/stircraft/live` → StirCraft with tracking

### Testing:
1. Visit `/redirects` on your site for the dashboard
2. Test individual redirects with the test buttons
3. View redirect documentation at `/api/redirects?format=html`

## Option 2: Standalone Express Server

For scenarios where you need a dedicated redirect service.

### Deployment Options:

#### A. Heroku Deployment

1. **Setup:**
   ```bash
   cd redirect-server-directory
   cp redirect-server-package.json package.json
   npm install
   ```

2. **Create Heroku app:**
   ```bash
   heroku create maccoy-portfolio-redirects
   heroku config:set NODE_ENV=production
   ```

3. **Deploy:**
   ```bash
   git init
   git add .
   git commit -m "Initial redirect server"
   git remote add heroku https://git.heroku.com/maccoy-portfolio-redirects.git
   git push heroku main
   ```

4. **Custom domain (optional):**
   ```bash
   heroku domains:add go.yourdomain.com
   # Configure DNS to point to the Heroku app
   ```

#### B. Railway Deployment

1. **Connect to Railway:**
   - Visit railway.app
   - Connect your GitHub repository
   - Deploy the redirect server directory

2. **Environment variables:**
   - `NODE_ENV=production`
   - `PORT=3000` (Railway will override)

#### C. Vercel Deployment

Create `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "redirect-server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "redirect-server.js"
    }
  ]
}
```

## DNS Configuration

### Subdomain Setup (go.yourdomain.com)

1. **For Next.js Middleware (no additional DNS needed):**
   - Redirects work on your main domain
   - No additional configuration required

2. **For Standalone Server:**
   ```
   Type: CNAME
   Name: go
   Value: your-redirect-app.herokuapp.com
   TTL: 300
   ```

### Custom Domain Benefits:
- Branded short URLs (go.yourdomain.com/stircraft)
- Better analytics tracking
- Professional appearance
- Easier to remember

## Analytics Integration

### UTM Parameters Added:
- `utm_source`: redirect source (portfolio, go-link, etc.)
- `utm_medium`: redirect
- `utm_campaign`: portfolio-redirect
- `utm_content`: project ID
- `utm_term`: date

### Google Analytics Setup:
1. Ensure GA4 is installed on target sites
2. Create custom reports for redirect traffic
3. Monitor conversion from redirects

## Security Considerations

### Rate Limiting:
- Next.js middleware: Handled by Vercel/hosting platform
- Express server: 100 requests per 15 minutes per IP

### Headers:
- CORS enabled for API endpoints
- Helmet.js security headers (Express server)
- No sensitive data in redirects

## Monitoring

### Health Checks:
- Next.js: Built into platform monitoring
- Express: `/health` endpoint for uptime monitoring

### Logging:
- All redirects logged with timestamps
- Project ID and source tracking
- Error logging for failed redirects

## Maintenance

### Adding New Projects:
1. **Next.js Middleware:**
   - Update `src/data/projects.ts`
   - Middleware automatically picks up changes

2. **Express Server:**
   - Update `PROJECT_REDIRECTS` object
   - Redeploy server

### URL Pattern Changes:
- Modify patterns in middleware.ts or redirect-server.js
- Update configuration matchers
- Test with redirect dashboard

## Cost Considerations

### Next.js Middleware:
- ✅ No additional cost
- ✅ Scales with your main site
- ✅ Same deployment pipeline

### Standalone Server:
- 💰 Additional hosting cost (~$7/month)
- ⚡ Dedicated resources
- 🔧 Independent scaling and monitoring

## Recommended Setup

For most use cases, **use the Next.js middleware approach** because:
- No additional infrastructure cost
- Easier maintenance
- Integrated with your existing deployment
- Better performance (edge computing)
- Simplified analytics

Use the standalone server only if you need:
- Very high redirect volume
- Complex redirect logic
- Multi-site redirect management
- Independent scaling

## Testing Your Setup

1. **Basic Test:**
   ```bash
   curl -I https://yoursite.com/go/stircraft
   # Should return 302 redirect
   ```

2. **Dashboard Test:**
   - Visit `/redirects` on your site
   - Test each project redirect
   - Verify tracking parameters

3. **Analytics Test:**
   - Visit a redirect URL
   - Check Google Analytics for UTM data
   - Verify goal tracking (if configured)
