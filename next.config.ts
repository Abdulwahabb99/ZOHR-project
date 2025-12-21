import type { NextConfig } from "next";

/**
 * Next.js Configuration
 * 
 * Optimized for performance and SEO:
 * - Image optimization enabled
 * - Compression enabled
 * - Production source maps disabled for smaller bundle
 */
const nextConfig: NextConfig = {
  // Enable image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mpleg.com',
        pathname: '/images/**',
      },
    ],
  },
  // Compress output
  compress: true,
  // Disable source maps in production for smaller bundle
  productionBrowserSourceMaps: false,
};

export default nextConfig;
