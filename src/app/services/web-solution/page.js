import WebSolutionClient from './WebSolutionClient';

export const metadata = {
  title: "Web Solution Bergen | Web Design, Branding & UI/UX | Aone",
  description: "One team, one package: web design, development, UI/UX, logo and branding delivered together as one cohesive Web Solution. Bergen-based, built for performance.",
  keywords: "Web solution Bergen, web design Norway, web designer Bergen, webdesigner Bergen, UI UX design Bergen, logo and branding, website development, webutvikling Bergen, Next.js developer Norway, brand identity Bergen",
  alternates: { canonical: "https://aone.no/services/web-solution" },
  openGraph: {
    title: "Web Solution | Aone",
    description: "Website, UI/UX, logo, and branding -- designed and built together as one package.",
    url: "https://aone.no/services/web-solution",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone Web Solution",
      },
    ],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Solution',
  serviceType: 'Web design, development, UI/UX, logo and branding',
  provider: { '@id': 'https://aone.no/#organization' },
  areaServed: { '@type': 'Country', name: 'Norway' },
  url: 'https://aone.no/services/web-solution',
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <WebSolutionClient />
    </>
  );
}
