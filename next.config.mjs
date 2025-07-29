/** @type {import('next').NextConfig} */
const nextConfig = {
  // Core Settings
  reactStrictMode: true,
  trailingSlash: false,
  productionBrowserSourceMaps: false, // Disable source maps in production
  
  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    domains: [
      'images.unsplash.com',
      'localhost' // for development
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.firebaseapp.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleapis.com',
      },
    ],
  },

  // Experimental Features (updated for Next.js 14)
  experimental: {
    optimizePackageImports: [
      'firebase',
      'react-icons',
      'lodash',
      'chart.js'
    ],
    // Removed modularizeImports as it's no longer needed with optimizePackageImports
    // Removed serverActions as they're enabled by default
  },

  // Webpack Optimizations
  webpack: (config, { isServer }) => {
    // Split Firebase into separate chunks
    config.optimization.splitChunks = {
      ...config.optimization.splitChunks,
      cacheGroups: {
        firebase: {
          test: /[\\/]node_modules[\\/](@firebase|firebase)[\\/]/,
          name: 'firebase',
          chunks: 'all',
          priority: 30,
          reuseExistingChunk: true,
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
          priority: 20,
        },
      },
    };

    return config;
  },

  // Environment Variables Configuration
  env: {
    // Ensure these match your Vercel environment variables
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  },

  // Security Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;