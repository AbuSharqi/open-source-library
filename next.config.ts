import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: process.env.NODE_ENV === 'production' ? '/get-students' : '',
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
};

export default nextConfig;
