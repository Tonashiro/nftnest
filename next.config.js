/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["encrypted-tbn0.gstatic.com"],
  },
};

module.exports = nextConfig;
