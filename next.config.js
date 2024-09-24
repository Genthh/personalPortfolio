/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.cache = false;

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: "storage.googleapis.com",
      },
    ],
  },
  env: {
    customKey: process.env.API_URL,
  },
};

module.exports = nextConfig;
