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
      {
        source: '/references/project-1',
        destination: '/references/kids-learning-portal',
        permanent: true,
      },
      {
        source: '/references/project-2',
        destination: '/references/saray-steakhouse-kro',
        permanent: true,
      },
      {
        source: '/references/project-3',
        destination: '/references/clean-masters-renhold',
        permanent: true,
      },
      {
        source: '/references/project-4',
        destination: '/references/tulips',
        permanent: true,
      },
      {
        source: '/references/project-5',
        destination: '/references/qfs-accoutant',
        permanent: true,
      },
      {
        source: '/references/project-6',
        destination: '/references/rent-my-property-uk',
        permanent: true,
      },
      {
        source: '/references/project-7',
        destination: '/references/kids-learning-portal-development',
        permanent: true,
      },
      {
        source: '/references/project-8',
        destination: '/references/saray-beauty-parlour-website',
        permanent: true,
      },
      {
        source: '/references/project-9',
        destination: '/references/tulips-beauty-parlour-website',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;