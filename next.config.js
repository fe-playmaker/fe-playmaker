/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipla.pluscdn.pl',
        port: '',
        pathname: '/dituel/cp/15/**',
      },
    ],
  },
}

module.exports = nextConfig
