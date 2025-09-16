import { Inter, Pacifico, Bebas_Neue, Raleway } from "next/font/google";
import "./globals.css?v=1";
import Footer from "@/components/Footer";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import Script from "next/script";






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
  description: "Discover expert web design in Bergen, Norway. Create captivating websites to attract users to grow your business! | Oppdag profesjonell webdesign i Bergen, Norge.",
  keywords: "Web Design Bergen, Logo Design, SEO Services, Marketing, Printing, Affordable Websites, Netsider, Netbutikk, Søkemotoroptimalisering, Digital Markedsføring, Nettbutikk utvikling, Webutvikling, Grafisk design",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
  verification: {
    other: {
      "ahrefs-site-verification": "e0ddcbd585d6a2bedc5fcbcf2e8ca5da13defcef5a3694a39043b02d01728335",
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
        <ClientLayoutWrapper>
        {children}
        <Footer />
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}