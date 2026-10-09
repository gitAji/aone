import { Inter, Pacifico, DM_Sans } from "next/font/google";
// vanilla-cookieconsent's own stylesheet sets its --cc-* defaults on :root
// too, same specificity as our overrides below -- it must load first so
// globals.css's theme mapping (further down this file) wins the cascade.
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "./globals.css?v=1";
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

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
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
  title: "Aone | Webdesign Bergen, Webutvikling & AI-byrå Norge",
  description: "Ledende AI-drevet digitalt byrå i Bergen. Vi leverer premium webdesign, webutvikling (Next.js) og forretnings-AI (chatbots & automatisering) i Norge.",
  keywords:
    "AI Agency Norway, Web Design Bergen, Web Designers in Bergen Norway, Digital Designer Bergen, Digital Solutions Norway, AI Solutions Norway, AI Automation Norway, Custom AI Chatbots Bergen, GEO SEO, Generative Engine Optimization, SGE Optimization, High Performance Websites Norway, Next.js Development Norway, Digital Transformation Bergen, AI Business Solutions Oslo, Webutvikling Bergen, Webdesignere i Bergen, Digital Designer, Digitale Løsninger, AI-løsninger, Digitalbyrå Bergen, Digital Marketing Bergen, AI-drevet markedsføring, Kunstig intelligens firma Norge, LLM implementering",
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
    title: "Aone | Webdesign Bergen, Webutvikling & AI-byrå Norge",
    description: "Ledende AI-drevet digitalt byrå i Bergen. Vi leverer premium webdesign, webutvikling (Next.js) og forretnings-AI (chatbots & automatisering) i Norge.",
    url: "https://aone.no",
    siteName: "Aone",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone | AI-drevet digitalt byrå i Bergen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aone | Webdesign Bergen, Webutvikling & AI-byrå Norge",
    description: "Ledende AI-drevet digitalt byrå i Bergen. Premium webdesign, webutvikling og forretnings-AI for norske bedrifter.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="no" suppressHydrationWarning>
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
        {/* type="text/plain" + data-category -- our own CookieConsentManager
            (vanilla-cookieconsent, run from LayoutClientWrapper) intercepts
            and executes these once the matching category is accepted. This
            replaces Cookiebot's "auto blocking mode", which relied on its
            own pattern-matching to find and block trackers -- these tags are
            now explicitly, verifiably blocked until consent is given,
            instead of depending on a third-party's detection. Plain
            server-rendered <script>, not next/script, so the tag (inert,
            type="text/plain") is present in the initial HTML for the
            library to find on mount; next/script's injection strategies are
            for *executing* scripts, which is exactly what must NOT happen
            here before consent. */}
        <script
          id="gtm-script"
          type="text/plain"
          data-category="marketing"
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
        <script
          id="ms-clarity"
          type="text/plain"
          data-category="analytics"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ytcudctr7r");
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${pacifico.variable} ${dmSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <LayoutClientWrapper>
          {children}
        </LayoutClientWrapper>

        {/* Plain <script>, not next/script -- JSON-LD has to be present in the
            raw server-rendered HTML for reliable structured-data detection.
            next/script's default "afterInteractive" strategy injects the tag
            client-side only after hydration, so it's absent from the actual
            page source crawlers/validators see first. Verified by inspecting
            .next/server/app/index.html before and after this change. */}
        <script id="schema-script" type="application/ld+json" dangerouslySetInnerHTML={{
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
                    ],
                    "knowsAbout": [
                      "Artificial Intelligence",
                      "Web Development",
                      "Web Design",
                      "WordPress Development",
                      "Content Management Systems (CMS)",
                      "Search Engine Optimization (SEO)",
                      "Generative Engine Optimization (GEO)",
                      "AI Chatbots",
                      "Business Automation",
                      "Branding",
                      "UI/UX Design",
                      "Accessibility"
                    ],
                    "accessibilityFeature": [
                      "alternativeText",
                      "highContrastDisplay",
                      "resizeText",
                      "structuralNavigation"
                    ],
                    "serviceType": [
                      "AI-Native Web Design & Development",
                      "WordPress & CMS Website Development",
                      "Search Engine Optimization (SEO) & Generative Engine Optimization (GEO)",
                      "Digital Branding & Identity Design",
                      "Custom Business Workflows & Automations",
                      "UI/UX & Accessibility Consulting"
                    ]
                  },
                  {
                    "@type": "ProfessionalService",
                    "@id": "https://aone.no/#service",
                    "name": "Aone",
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
