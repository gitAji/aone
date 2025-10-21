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

export const metadata = {
  title: "Web Design in Bergen, Norway | Webdesign i Bergen",
  description:
    "Aone: Web design & digital marketing in Bergen. We create stunning websites to grow your business.",
  keywords:
    "Web Design Bergen, Logo Design, SEO Services, Marketing, Printing, Affordable Websites, Netsider, Netbutikk, Søkemotoroptimalisering, Digital Markedsføring, Nettbutikk utvikling, Webutvikling, Grafisk design",
  icons: {
    icon: "/images/favicon.ico",
  },
  verification: {
    other: {
      "ahrefs-site-verification":
        "e0ddcbd585d6a2bedc5fcbcf2e8ca5da13defcef5a3694a39043b02d01728335",
    },
  },
  openGraph: {
    title: "Web Design in Bergen, Norway | Webdesign i Bergen",
    description: "Aone: Web design & digital marketing in Bergen. We create stunning websites to grow your business.",
    url: "https://aone.no",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Aone Logo",
      },
    ],
  },
};

  export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": "https://aone.no/#organization",
                    "name": "Aone",
                    "url": "https://aone.no",
                    "logo": "https://aone.no/images/logo.png",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+47-40071654",
                      "contactType": "Customer Service"
                    },
                    "sameAs": [
                      "https://www.facebook.com/profile.php?id=100063719223439",
                      "https://www.instagram.com/aone.no/"
                    ]
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
