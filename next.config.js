/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['picsum.photos', 'ijwtixd2.directus.app'],
  },
}

module.exports = nextConfig
