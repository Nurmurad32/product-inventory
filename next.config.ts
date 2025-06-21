import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.dummyjson.com', 'placeimg.com', 'c8.alamy.com', 'i.imgur.com', 'fastly.picsum.photos', 'cdn-3.expansion.mx', 'www.w3schools.com', 'res.cloudinary.com', 'placehold.co'], // ← This must match the image domain!
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'cdn.dummyjson.com',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'placeimg.com',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'c8.alamy.com',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'i.imgur.com',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'fastly.picsum.photos',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'cdn-3.expansion.mx',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'www.w3schools.com',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'res.cloudinary.com',
  //     },
  //   ],
  // },
};

export default nextConfig;
