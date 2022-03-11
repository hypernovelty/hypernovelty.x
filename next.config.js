const withPWA = require('next-pwa')

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  extentions: ['.js', '.jsx', '.ts', '.tsx'],
  pwa : {
    dest: 'public',
    register: true,
    skipWaiting: true,
  }
})

module.exports = nextConfig
