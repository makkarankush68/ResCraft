/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['gifdb.com']
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    serverComponentsExternalPackages: ['@react-pdf/renderer']
  }
};

export default nextConfig;
