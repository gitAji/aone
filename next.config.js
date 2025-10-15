/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.aone.no',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.aone.no',
          },
        ],
        destination: 'https://aone.no/:path*',
        permanent: true,
      },
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