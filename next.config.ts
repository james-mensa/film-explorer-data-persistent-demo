import type { NextConfig } from "next";

const nextConfig: NextConfig = {
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/favicon.ico',
      }
    ],
  },
};


const withPWA = require('next-pwa')({
  runtimeCaching: [
    {
      urlPattern: /\/character\/.*/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'character-pages',
        expiration: {
          maxEntries: 50
        }
      }
    }
  ]
});

const config = withPWA({
  ...nextConfig,
  reactStrictMode: true,
})

export default config;
