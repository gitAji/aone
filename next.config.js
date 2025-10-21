/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.aone.no",
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
              "default-src 'self'; script-src 'self' 'unsafe-inline' app.cal.com analytics.ahrefs.com consent.cookiebot.com https://consentcdn.cookiebot.com embed.tawk.to 'sha256-xCmNHr41c4pE5kDDV5AEGDK1ixbxM7BAgvWTMiH7ejI=' 'sha256-s2A3nmh9nfcw4yFLBaC6/J7itPamD8bJ88lDBtVOHD4=' 'sha256-OBTN3RiyCV4Bq7dFqZ5a2pAXjnCcCYeTJMO2I/LYKeo=' 'sha256-six1kGkgb0VwVe62ued1K2A/0cmqu2O1efmu08k+pW8=' 'sha256-aEzwlxsSr9+JyobpfmX9UJaN1trkkOUv23wMdkZgUYc=' 'sha256-euPhVUjkS4uRumhbxLdwduSUs+X+FXLJs9vvmyE3+/I=' 'sha256-NIMKGwtX1JcBG8Pnoan/07HmT5gcOUUV6OXbacBO+Cg=' 'sha256-Hfb8HGPAbSVLDr4aA7uzElBXxwO1eBMjgWgn2TbYSVE=' 'sha256-cp29LPLkBBvmQtkaJK90uZvXpvcPAMvuajF62NGQo2M=' 'sha256-8D0xLdMt0y15i9SEaslJk14M6gSRInMn+jEBr8BIyOA=' 'sha256-ileHYZsjs3ioZdSwn+yAXZzcmwvQwhPdeNoeQE0LuhY=' 'sha256-SqMp/F2se4+qKKe80fnmmagM3GLzSsreFJPgwMrrRMg=' 'sha256-6vttUerlzWEJA2LGkBhqJ3/zNwjDMuFwWg7/fM/Dp2s=' 'sha256-Ruwr7I2oaqL8n9IMH2q0poZIYplJy3Ki/gZ4pA1LWqk=' 'sha256-uIiwA/jIoIZX3Gbf0PbjYZwP9e98EIJw8iCS4wBsgyg=' 'sha256-fE9iaGduYKPz/QtJNzbbGxxUCgbZgsnAArqdGZfHTVE='; style-src 'self' 'unsafe-inline'; connect-src 'self' https://consentcdn.cookiebot.com embed.tawk.to https://va.tawk.to; frame-src 'self' https://consentcdn.cookiebot.com; img-src 'self' https://imgsct.cookiebot.com;",
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
        destination: "/references/tulips",
        permanent: true,
      },
      {
        source: "/references/project-5",
        destination: "/references/qfs-accoutant",
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
