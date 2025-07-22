import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/demos/phantastic-beasts/:path*',
        destination: 'https://phantastic-beasts-d585c0bc1aa9.herokuapp.com/:path*',
      },
      {
        source: '/demos/slay-the-dagron/:path*',
        destination: 'https://macfarley.github.io/slay-the-dagron/:path*',
      },
      {
        source: '/demos/dream-weaver/:path*',
        destination: 'https://dream-weaver-rho.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
