import { Inter, Pacifico, Bebas_Neue, Raleway } from "next/font/google";
import "./globals.css?v=1";
import Script from "next/script";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: ["400"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: ["400"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
});

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
  colorScheme: 'light dark',
};

export const metadata = {
  metadataBase: new URL('https://aone.no'),
  title: "Aone | AI-Native Digital Agency Bergen & Oslo | Web Design & AI Automation",
  description: "Elite AI-native digital agency in Bergen & Oslo. High-performance web development (Next.js), custom AI chatbots, and GEO for Norwegian business growth.",
  keywords:
    "AI Agency Norway, Web Design Bergen, AI Automation Norway, Custom AI Chatbots Bergen, GEO SEO, Generative Engine Optimization, SGE Optimization, High Performance Websites Norway, Next.js Development Norway, Digital Transformation Bergen, AI Business Solutions Oslo, Webutvikling Bergen, AI-drevet markedsføring, Kunstig intelligens firma Norge, LLM implementering",
  icons: {
    icon: "/images/favicon.ico",
  },
  verification: {
    other: {
      "ahrefs-site-verification":
        "e0ddcbd585d6a2bedc5fcbcf2e8ca5da13defcef5a3694a39043b02d01728335",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Aone | AI-Native Digital Agency Bergen & Oslo",
    description: "Specializing in premium AI web design, custom chatbots, and business automation in Norway.",
    url: "https://aone.no",
    siteName: "Aone",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone | AI-Native Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aone | AI-Native Digital Agency Bergen & Oslo",
    description: "Empowering Norwegian businesses with elite AI and web solutions.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="theme-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && supportDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TB2VFWDP');
            `,
          }}
        />
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="ca4883b8-7492-4efe-8775-24794bf63af0"
          strategy="beforeInteractive"
          type="text/javascript"
        />
      </head>
      <body
        className={`${inter.variable} ${pacifico.variable} ${bebasNeue.variable} ${raleway.variable} antialiased}`}
        suppressHydrationWarning
      >
        <LayoutClientWrapper>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TB2VFWDP"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {children}
        </LayoutClientWrapper>

        <Script id="schema-script" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
              {
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": "https://aone.no/#organization",
                    "name": "Aone",
                    "url": "https://aone.no",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://aone.no/images/logo.png"
                    },
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+47-40071654",
                      "contactType": "Customer Service",
                      "areaServed": "NO",
                      "availableLanguage": ["English", "Norwegian"]
                    },
                    "sameAs": [
                      "https://www.facebook.com/profile.php?id=100063719223439",
                      "https://www.instagram.com/aone.no/"
                    ]
                  },
                  {
                    "@type": "ProfessionalService",
                    "@id": "https://aone.no/#service",
                    "name": "Aone AI & Web Agency",
                    "image": "https://aone.no/images/logo.png",
                    "url": "https://aone.no",
                    "telephone": "+4740071654",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Bergen",
                      "addressRegion": "Vestland",
                      "postalCode": "5003",
                      "addressCountry": "NO"
                    },
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": 60.3913,
                      "longitude": 5.3221
                    },
                    "openingHoursSpecification": {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                      ],
                      "opens": "09:00",
                      "closes": "17:00"
                    },
                    "priceRange": "$$$"
                  },
                  {
                    "@type": "WebSite",
                    "@id": "https://aone.no/#website",
                    "url": "https://aone.no",
                    "name": "Aone",
                    "publisher": {
                      "@id": "https://aone.no/#organization"
                    },
                    "potentialAction": {
                      "@type": "SearchAction",
                      "target": "https://aone.no/?s={search_term_string}",
                      "query-input": "required name=search_term_string"
                    }
                  }
                ]
              }
            `,
        }} />

      </body>
    </html>
  );
}
