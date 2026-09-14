/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
