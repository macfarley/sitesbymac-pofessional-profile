import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed proxy rewrites - projects now link directly to external hosted URLs
  async rewrites() {
    return [
      // Serve the static demo wedding template at /weddings/demotemplate.
      // The HTML file and its assets live in public/demo-wedding-template/.
      // Both rules are required: the first serves index.html, the second
      // ensures relative sub-resources (styles.css, photos/) resolve correctly.
      {
        source: '/weddings/demotemplate',
        destination: '/demo-wedding-template/index.html',
      },
      {
        source: '/weddings/demotemplate/:path*',
        destination: '/demo-wedding-template/:path*',
      },
    ];
  },
};

export default nextConfig;
