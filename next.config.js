/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    }),
      (config.experiments = {
        ...config.experiments,
        ...{ topLevelAwait: true },
      })
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
      },
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
