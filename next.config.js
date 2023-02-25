/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "img.freepik.com",
      "i.pinimg.com",
    ],
  },
  experimental: {
    emotion: true,
  },
};

module.exports = nextConfig;
