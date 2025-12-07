// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "i.pinimg.com",
      "res.cloudinary.com",
    ],
    // atau kalau pakai remotePatterns, pastikan host yg sama
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "res.cloudinary.com",
    //   },
    // ],
  },
};

module.exports = nextConfig;
