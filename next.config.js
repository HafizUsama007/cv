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
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/cv',
        basePath: false,
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
