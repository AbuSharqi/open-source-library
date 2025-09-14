import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: process.env.NODE_ENV === 'production' ? '/open-source-library' : '',
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
};

export default nextConfig;
