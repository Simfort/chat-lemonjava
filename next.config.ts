import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: "/api/auth/providers",
  //       destination: "/api/auth/[...nextauth]",
  //       permanent: false,
  //     },
  //     {
  //       source: "/api/auth/error",
  //       destination: "/api/auth/[...nextauth]",
  //       permanent: false,
  //     },
  //   ];
  // },
};

export default nextConfig;
