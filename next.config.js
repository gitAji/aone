/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/api/image-proxy',
      },
      {
        pathname: '/images/**',
        search: '',
      },
      {
        pathname: '/_next/static/media/**',
        search: '',
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.aone.no",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "blog.aone.no",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tawk.link",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: app.cal.com analytics.ahrefs.com https://embed.tawk.to https://*.tawk.to https://www.googletagmanager.com https://*.googletagmanager.com https://www.clarity.ms https://*.clarity.ms https://www.googleadservices.com https://www.google.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://embed.tawk.to https://*.tawk.to; connect-src 'self' https://blog.aone.no http://blog.aone.no wss://*.tawk.to https://*.tawk.to https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.googleapis.com https://*.firebasestorage.app https://*.firebaseio.com https://www.clarity.ms https://*.clarity.ms https://www.googleadservices.com https://www.google.com https://pagead2.googlesyndication.com https://ad.doubleclick.net; frame-src 'self' https://*.tawk.to https://www.googletagmanager.com; img-src 'self' data: blob: https://flagcdn.com https://cdnjs.cloudflare.com https://purecatamphetamine.github.io https://storage.googleapis.com https://*.s3.amazonaws.com https://*.google-analytics.com https://*.googletagmanager.com https://*.tawk.to https://tawk.link https://www.clarity.ms https://*.clarity.ms https://googleads.g.doubleclick.net https://www.google.com https://pagead2.googlesyndication.com https://www.googleadservices.com; font-src 'self' https://fonts.gstatic.com https://embed.tawk.to https://*.tawk.to data:; media-src 'self'; worker-src 'self' blob:;",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.aone.no",
          },
        ],
        destination: "https://aone.no/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "invoice.aone.no",
          },
        ],
        destination: "https://aone.no/client-login",
        permanent: true,
      },
      {
        source: "/oldsite",
        destination: "/",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/",
        permanent: true,
      },
      {
        source: "/branding",
        destination: "/services/web-solution",
        permanent: true,
      },
      {
        source: "/branding-services",
        destination: "/services/web-solution",
        permanent: true,
      },
      {
        source: "/client-login",
        destination: "https://crm.aone.no",
        permanent: true,
      },
      {
        source: "/ai-chat",
        destination: "/services/ai-solution",
        permanent: true,
      },
      // Services were consolidated from 10 narrow pages into 5 (Web
      // Solution, AI Solution, Marketing, Photography, Videography) --
      // these preserve any existing inbound links/search rankings instead
      // of letting the old URLs 404.
      {
        source: "/services/web-development",
        destination: "/services/web-solution",
        permanent: true,
      },
      {
        source: "/services/ui-ux-design",
        destination: "/services/web-solution",
        permanent: true,
      },
      {
        source: "/services/branding",
        destination: "/services/web-solution",
        permanent: true,
      },
      {
        source: "/services/ai-chatbots",
        destination: "/services/ai-solution",
        permanent: true,
      },
      {
        source: "/services/ai-automations",
        destination: "/services/ai-solution",
        permanent: true,
      },
      {
        source: "/services/digital-marketing",
        destination: "/services/marketing",
        permanent: true,
      },
      {
        source: "/services/search-engine-optimization",
        destination: "/services/marketing",
        permanent: true,
      },
      {
        source: "/services/geo",
        destination: "/services/marketing",
        permanent: true,
      },
      {
        source: "/references/project-1",
        destination: "/references/kids-learning-portal",
        permanent: true,
      },
      {
        source: "/references/project-2",
        destination: "/references/saray-steakhouse-kro",
        permanent: true,
      },
      {
        source: "/references/project-3",
        destination: "/references/clean-masters-renhold",
        permanent: true,
      },
      {
        source: "/references/project-4",
        destination: "/references/tulips-beauty",
        permanent: true,
      },
      {
        source: "/references/project-5",
        destination: "/references/qfs-accountants",
        permanent: true,
      },
      {
        source: "/references/project-6",
        destination: "/references/rent-my-property-uk",
        permanent: true,
      },
      {
        source: "/references/project-7",
        destination: "/references/kids-learning-portal-development",
        permanent: true,
      },
      {
        source: "/references/project-8",
        destination: "/references/saray-beauty-parlour-website",
        permanent: true,
      },
      {
        source: "/references/project-9",
        destination: "/references/tulips-beauty-parlour-website",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
