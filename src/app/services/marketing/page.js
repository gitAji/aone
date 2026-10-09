import MarketingClient from './MarketingClient';

export const metadata = {
  title: "Marketing, SEO & GEO | AI-Driven Growth | Aone",
  description: "Digital marketing, search engine optimization, and Generative Engine Optimization (GEO) in one package -- grow your visibility across Google and AI search alike.",
  keywords: "Digital marketing Norway, SEO Bergen, GEO AI search optimization, social media marketing, content marketing, paid advertising, Aone",
  alternates: { canonical: "https://aone.no/services/marketing" },
  openGraph: {
    title: "Marketing, SEO & GEO | Aone",
    description: "Grow your visibility across Google and AI search alike.",
    url: "https://aone.no/services/marketing",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone Marketing",
      },
    ],
  },
};

export default function Page() {
  return <MarketingClient />;
}
