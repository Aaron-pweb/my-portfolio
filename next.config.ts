import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure that links work correctly on GitHub Pages
  // If your project is at aaron-pweb.github.io, you don't need a basePath.
  // If it's at aaron-pweb.github.io/portfolio, you would add:
  // basePath: '/portfolio',
};

export default nextConfig;
