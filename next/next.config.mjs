/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: false,
  async rewrites() {
    const apiBase = process.env.API_BASE || "http://api:5000";
    return [
      {
        source: "/api/:path*",
        destination: `${apiBase}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;