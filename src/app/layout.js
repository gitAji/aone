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
    "Aone: Leading web design & digital marketing in Bergen, Norway. Stunning websites, effective strategies to grow your business.",
  keywords:
    "Web Design Bergen, Logo Design, SEO Services, Marketing, Printing, Affordable Websites, Netsider, Netbutikk, Søkemotoroptimalisering, Digital Markedsføring, Nettbutikk utvikling, Webutvikling, Grafisk design",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
  verification: {
    other: {
      "ahrefs-site-verification":
        "e0ddcbd585d6a2bedc5fcbcf2e8ca5da13defcef5a3694a39043b02d01728335",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${pacifico.variable} ${bebasNeue.variable} ${raleway.variable} antialiased}`}
      >
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="qcIvZEZSEISGNKyE5Gp7cQ"
          strategy="afterInteractive"
        />
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="ca4883b8-7492-4efe-8775-24794bf63af0"
          strategy="beforeInteractive" // Recommended for Cookiebot to load before other scripts
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
        
      </body>
    </html>
  );
}
