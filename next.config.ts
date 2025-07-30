import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    domains: ["a.storyblok.com"],
    loader: "custom",
    loaderFile: "./src/storyblokImageLoader.js",
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  }
};

export default nextConfig;
