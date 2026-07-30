import PricingClient from './PricingClient';

export const metadata = {
  title: "Transparent Pricing for AI & Web Solutions | Aone Packages Norway",
  description: "Elite digital solutions with transparent pricing. Explore our AI chatbot, web dev, and automation packages tailored for Norwegian growth.",
  keywords: "Web design pricing Norway, AI chatbot cost Bergen, Digital marketing packages, AI automation ROI, transparent pricing digital agency",
  openGraph: {
    title: "Pricing & Packages | Aone",
    description: "High-performance solutions with clear, transparent pricing models for every growth stage.",
    url: "https://aone.no/pricing",
  },
  alternates: {
    canonical: 'https://aone.no/pricing',
  },
};

export default function Page() {
  return <PricingClient />;
}
