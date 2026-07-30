import BrandingClient from './BrandingClient';

export const metadata = {
  title: "Premium Branding & Visual Identity Bergen | Brand Design Agency Norway",
  description: "Craft an unforgettable brand identity with our elite design atelier in Bergen. We specialize in visual identity, logo design, and brand strategy for the AI era.",
  keywords: "Branding Bergen, Logo design Norway, Visual identity services, Brand strategy agency, Grafisk design Norge, Corporate identity Bergen",
  openGraph: {
    title: "Branding & Visual Identity | Aone",
    description: "Define your visual legacy with elite branding and identity design.",
    url: "https://aone.no/services/branding",
    images: [
      {
        url: "/images/branding-og.png",
        width: 1200,
        height: 630,
        alt: "Aone Branding Services",
      },
    ],
  },
};

export default function Page() {
  return <BrandingClient />;
}
