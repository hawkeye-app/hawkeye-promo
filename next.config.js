/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: [
    { key: "Access-Control-Allow-Credentials", value: "true" },
    { key: "Access-Control-Allow-Origin", value: "*" },
  ],
};

module.exports = nextConfig;
