/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: { serverActions: true },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gujaratuniversity.ac.in",
      },
      {
        protocol: "https",
        hostname: "heykapil.in",
      },
      { protocol: "https", hostname: "cdn.heykapil.in" },
      { protocol: "https", hostname: "file.heykapil.in" },
      { hostname: "avatars.githubusercontent.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/register",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
