import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [375, 600, 769, 991, 1200, 1600, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;
