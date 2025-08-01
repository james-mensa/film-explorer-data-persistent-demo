import withSerwistInit from "@serwist/next";
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



const withSerwist = withSerwistInit({
  swSrc: "service-worker/sw.ts",
  swDest: "public/sw.js",
  cacheOnNavigation: true,
  reloadOnOnline:true,
  disable:false,
  
});

const config = withSerwist({
  ...nextConfig,
  reactStrictMode: true,
})

export default config;
