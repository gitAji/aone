/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['blog.aone.no'],
  },
  async redirects() {
    return [
      {
        source: '/oldsite',
        destination: '/',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;