import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "techco-react.xpressbuddy.com" }],
  },
};

export default nextConfig;
