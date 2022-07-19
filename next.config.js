/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dummyimage.com',"foodish-api.herokuapp.com"],
  },
}

module.exports = nextConfig
