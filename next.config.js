/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.didanist.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.didanist.com/",
      },
    ],
  },
};

module.exports = nextConfig;
