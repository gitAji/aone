import ProductsClient from './ProductsClient';

export const metadata = {
  title: "SaaS Produkter & Systemer | Ferdigbygde Plattformer fra Aone Norge",
  description: "Utforsk Aones ferdigbygde SaaS-systemer: POS, CRM og EMIS-plattformer bygget for norske bedrifter. Rask implementering, skalerbar skyarkitektur.",
  keywords: "SaaS produkter Norge, POS system Norge, CRM system Bergen, EMIS skole system, ferdigbygde plattformer, skyløsninger Norge, cloud software Bergen",
  alternates: { canonical: "https://aone.no/products" },
  openGraph: {
    title: "SaaS Produkter & Systemer | Aone",
    description: "Ferdigbygde, skalerbare SaaS-plattformer for norske bedrifter – fra POS til CRM og EMIS.",
    url: "https://aone.no/products",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone SaaS Products",
      },
    ],
  },
};

export default function Page() {
  return <ProductsClient />;
}
