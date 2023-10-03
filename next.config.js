/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://hawkeye.com.ar/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
