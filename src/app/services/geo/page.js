import GEOClient from './GEOClient';

export const metadata = {
  title: "GEO & AI Search Optimization | Generative Engine Optimization Bergen",
  description: "Dominante AI search results with Generative Engine Optimization (GEO). We help Norwegian brands become the source LLMs and AI search engines recommend.",
  keywords: "GEO SEO Norway, Generative Engine Optimization Bergen, AI Search Strategy, SGE Optimization, AI recommendations for business, Neural search optimization",
  openGraph: {
    title: "GEO & AI Search Optimization | Aone",
    description: "Future-proof your brand for the AI search era with Generative Engine Optimization.",
    url: "https://aone.no/services/geo",
    images: [
      {
        url: "/images/geo-seo-og.png",
        width: 1200,
        height: 630,
        alt: "GEO - Generative Engine Optimization",
      },
    ],
  },
};

export default function Page() {
  return <GEOClient />;
}
