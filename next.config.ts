import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true, 

  

  images: {
    formats: ["image/avif", "image/webp"], 
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production", 
  },
};

export default nextConfig;
