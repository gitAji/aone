import { Inter, Pacifico, Bebas_Neue, Raleway } from "next/font/google";
import "./globals.css?v=1";
import Footer from "@/components/Footer";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import Script from "next/script";
import ReferralPopup from "@/components/ReferralPopup";




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
    <html lang="en">
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
        />
        <script>console.log("Cookiebot script rendered");</script>
      </head>
      <body
        className={`${inter.variable} ${pacifico.variable} ${bebasNeue.variable} ${raleway.variable} antialiased}`}
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TB2VFWDP" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="qcIvZEZSEISGNKyE5Gp7cQ"
          strategy="afterInteractive"
        />
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
        <ClientLayoutWrapper>
          {children}
          <ReferralPopup />
          <Footer />
        </ClientLayoutWrapper>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `{
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
              }`,
          }} />
        <Script
          id="tawkto-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68dbbd56cadd09194fd3bde2/1j6d5n7s7';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
