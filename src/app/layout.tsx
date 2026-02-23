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
import PoweredByFooter from "../components/PoweredByFooter";

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
  metadataBase: new URL("https://sitesbymac.dev"),
  // Primary page title shown in browser tab and search results
  title: {
    default: "Sites by Mac",
    template: "%s | Sites by Mac",
  },
  
  // Meta description for SEO and social media previews
  description: "Portfolio and writing hub for Mac McCoy — privacy-minded digital consultant building ethical, human-scale web experiences.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'SitesByMac.dev',
    url: 'https://sitesbymac.dev',
    title: 'Sites by Mac',
    description: 'Portfolio and writing hub for Mac McCoy — privacy-minded digital consultant building ethical, human-scale web experiences.',
    images: [
      {
        url: 'https://sitesbymac.dev/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'SitesByMac.dev — Mac McCoy digital consulting and web engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sites by Mac',
    description: 'Portfolio and writing hub for Mac McCoy — privacy-minded digital consultant building ethical, human-scale web experiences.',
    images: ['https://sitesbymac.dev/twitter-image.png'],
  },
  
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
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/axlotl.png" />
        <link rel="shortcut icon" href="/axlotl.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        {children}
        <PoweredByFooter />
      </body>
    </html>
  );
}
