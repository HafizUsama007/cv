/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/cv',
  assetPrefix: '/cv/',
  trailingSlash: true,
}

// Use module.exports instead of export default
module.exports = nextConfig