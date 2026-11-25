import MarketingClient from './MarketingClient';

export const metadata = {
  title: "Marketing, SEO & GEO | AI-Driven Growth | Aone",
  description: "Digital marketing, SEO, and Generative Engine Optimization (GEO) in one package -- grow your visibility across Google and AI search alike.",
  keywords: "Digital marketing Norway, SEO Bergen, GEO AI search optimization, GEO-optimalisering Norge, social media marketing, content marketing, paid advertising, søkemotoroptimalisering Bergen, Aone",
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

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Marketing, SEO & GEO',
  serviceType: 'Digital marketing, SEO, and Generative Engine Optimization (GEO)',
  provider: { '@id': 'https://aone.no/#organization' },
  areaServed: { '@type': 'Country', name: 'Norway' },
  url: 'https://aone.no/services/marketing',
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <MarketingClient />
    </>
  );
}
