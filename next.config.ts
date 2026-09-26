import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/legal/terms",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/legal/privacy",
        destination: "/policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

