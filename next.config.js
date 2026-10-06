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
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: app.cal.com analytics.ahrefs.com consent.cookiebot.com https://consentcdn.cookiebot.com https://embed.tawk.to https://*.tawk.to https://www.googletagmanager.com https://*.googletagmanager.com https://www.clarity.ms https://*.clarity.ms https://www.googleadservices.com https://www.google.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://embed.tawk.to https://*.tawk.to; connect-src 'self' https://blog.aone.no http://blog.aone.no https://consentcdn.cookiebot.com wss://*.tawk.to https://*.tawk.to https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.googleapis.com https://*.firebasestorage.app https://*.firebaseio.com https://www.clarity.ms https://*.clarity.ms https://www.googleadservices.com https://www.google.com https://pagead2.googlesyndication.com https://ad.doubleclick.net; frame-src 'self' https://consentcdn.cookiebot.com https://*.tawk.to https://www.googletagmanager.com; img-src 'self' data: blob: https://imgsct.cookiebot.com https://flagcdn.com https://cdnjs.cloudflare.com https://purecatamphetamine.github.io https://storage.googleapis.com https://*.s3.amazonaws.com https://*.google-analytics.com https://*.googletagmanager.com https://*.tawk.to https://tawk.link https://www.clarity.ms https://*.clarity.ms https://googleads.g.doubleclick.net https://www.google.com https://pagead2.googlesyndication.com https://www.googleadservices.com; font-src 'self' https://fonts.gstatic.com data:; media-src 'self'; worker-src 'self' blob:;",
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
        destination: "/services/branding",
        permanent: true,
      },
      {
        source: "/branding-services",
        destination: "/services/branding",
        permanent: true,
      },
      {
        source: "/client-login",
        destination: "https://crm.aone.no",
        permanent: true,
      },
      {
        source: "/ai-chat",
        destination: "/services/ai-chatbots",
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
