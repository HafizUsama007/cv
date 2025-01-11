/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/cv',
  assetPrefix: '/cv/',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
