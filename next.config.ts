import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript:{
    ignoreBuildErrors:true,
  },
  reactCompiler: true,
};

export default nextConfig;
