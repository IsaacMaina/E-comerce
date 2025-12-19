/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['three'],
  },
  images: {
    domains: ['localhost', 'example.com'], // Add your image domains here
  },
};

export default nextConfig;