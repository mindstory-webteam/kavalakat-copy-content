import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  // No output: 'export' - this enables full Next.js features
  
  images: {
    // Image optimization is now enabled!
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lightsalmon-horse-915757.hostingersite.com',
      },
      {
        protocol: 'https',
        hostname: 'cornflowerblue-eland-784005.hostingersite.com',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default config;