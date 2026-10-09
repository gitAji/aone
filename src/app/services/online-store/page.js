import OnlineStoreClient from './OnlineStoreClient';

export const metadata = {
  title: "Online Store | Shopify & WooCommerce Solutions | Aone",
  description: "Shopify and WooCommerce stores for online businesses and dropshipping in Norway -- setup, custom theming, payment and shipping integration, and ongoing store management.",
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

export default function Page() {
  return <OnlineStoreClient />;
}
