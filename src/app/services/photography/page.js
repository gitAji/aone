import PhotographyClient from './PhotographyClient';

export const metadata = {
  title: "Bedriftsfotografering Bergen | Brand Photography for Businesses Norway",
  description: "Profesjonell merkevarefotografering i Bergen. Vi fanger produkter, team og lokaler med bilder som styrker merkevaren og konverterer besøkende.",
  keywords: "Bedriftsfotografering Bergen, Brand photography Norway, produktfotografering Bergen, fotograf Bergen bedrift, commercial photography Norway, merkevarefotografering",
  alternates: { canonical: "https://aone.no/services/photography" },
  openGraph: {
    title: "Bedriftsfotografering Bergen | Aone",
    description: "Profesjonell merkevarefotografering som forteller din unike historie med høy-impact organiske bilder.",
    url: "https://aone.no/services/photography",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone Brand Photography Bergen",
      },
    ],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Brand Photography',
  serviceType: 'Professional brand and product photography',
  provider: { '@id': 'https://aone.no/#organization' },
  areaServed: { '@type': 'City', name: 'Bergen' },
  url: 'https://aone.no/services/photography',
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PhotographyClient />
    </>
  );
}
