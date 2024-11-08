/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['gifdb.com']
  },
  experimental: {
    serverComponentsExternalPackages: ['@react-pdf/renderer']
  }
};

export default nextConfig;
