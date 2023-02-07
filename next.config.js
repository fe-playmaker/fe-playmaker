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
}

module.exports = nextConfig
