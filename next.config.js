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
}

module.exports = nextConfig
