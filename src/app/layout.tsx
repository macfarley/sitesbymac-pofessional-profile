/**
 * Root Layout Component - Global layout wrapper for entire application
 * 
 * This component wraps all pages and provides:
 * - Global font configuration (Geist Sans & Geist Mono)
 * - SEO metadata configuration
 * - Favicon and icon setup for McAxl mascot
 * - Global navigation component
 * - CSS baseline and theme variables
 * 
 * Layout persists across all pages and handles global styling,
 * metadata, and navigation structure for the entire portfolio site.
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Global styles and Tailwind CSS imports
import Navigation from "../components/Navigation"; // Site-wide navigation component

// Font Configuration - Google Fonts integration
// Geist Sans: Modern, clean sans-serif for body text
const geistSans = Geist({
  variable: "--font-geist-sans", // CSS variable for use in Tailwind config
  subsets: ["latin"], // Character subset for English content
});

// Geist Mono: Monospace font for code blocks and technical content
const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // CSS variable for use in Tailwind config
  subsets: ["latin"], // Character subset for English content
});

// SEO Metadata Configuration - Optimized for search engines and social sharing
export const metadata: Metadata = {
  // Primary page title shown in browser tab and search results
  title: "Sites by Mac",
  
  // Meta description for SEO and social media previews
  description: "Portfolio of Mac McCoy - Full-Stack Web Developer specializing in React, TypeScript, and modern web technologies. View my projects and get in touch.",
  
  // Comprehensive favicon and icon configuration
  icons: {
    // Multiple icon sizes for different browser contexts
    icon: [
      { url: "/axlotl.png", sizes: "32x32", type: "image/png" }, // Standard favicon
      { url: "/axlotl.png", sizes: "16x16", type: "image/png" }  // Small favicon
    ],
    shortcut: "/axlotl.png", // Legacy browser support
    apple: "/axlotl.png",    // iOS home screen icon
    // Additional icon configuration for maximum compatibility
    other: {
      rel: "icon",
      url: "/axlotl.png",
    },
  },
};

// Root Layout Component - Wraps all pages with consistent structure
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> {/* Document language for accessibility */}
      <head>
        {/* Explicit favicon links for maximum browser compatibility */}
        <link rel="icon" type="image/png" href="/axlotl.png" />
        <link rel="shortcut icon" href="/axlotl.png" />
      </head>
      <body
        // Apply font variables and baseline styles
        // Font variables are used in Tailwind config for font-sans and font-mono
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Navigation - Appears on all pages */}
        <Navigation />
        
        {/* Page Content - Dynamic content for each route */}
        {children}
      </body>
    </html>
  );
}
