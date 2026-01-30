import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - The turbopack property might not be in the types for this version
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
