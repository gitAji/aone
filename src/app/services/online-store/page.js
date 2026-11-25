import OnlineStoreClient from './OnlineStoreClient';

export const metadata = {
  title: "Online Store | Shopify & WooCommerce Solutions | Aone",
  description: "Shopify and WooCommerce stores for online businesses and dropshipping in Norway -- setup, custom theming, payment integration, and store management.",
  keywords: "Shopify Norway, WooCommerce Bergen, online store setup, dropshipping Norway, e-commerce platform, Shopify dropshipping, Aone",
  alternates: { canonical: "https://aone.no/services/online-store" },
  openGraph: {
    title: "Online Store | Aone",
    description: "Shopify and WooCommerce stores for online businesses and dropshipping.",
    url: "https://aone.no/services/online-store",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone Online Store",
      },
    ],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Online Store',
  serviceType: 'Shopify and WooCommerce e-commerce setup and management',
  provider: { '@id': 'https://aone.no/#organization' },
  areaServed: { '@type': 'Country', name: 'Norway' },
  url: 'https://aone.no/services/online-store',
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <OnlineStoreClient />
    </>
  );
}
