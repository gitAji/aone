import ReferencesClient from './ReferencesClient';
import projects from '../data/projects';
import { tr } from '@/lib/projectText';

// Matches the site's SSR default (<html lang="no">) -- see [slug]/page.js.
const SSR_LANG = 'no';

export const metadata = {
  title: "Våre Prosjekter | Webdesign & AI-referanser fra Bergen og Norge",
  description: "Se hvordan Aone har hjulpet bedrifter i Bergen og i hele Norge med webdesign, AI-automatisering og merkevarebygging – inkludert Clean Masters Renhold, et lokalt rengjøringsbyrå i Bergen.",
  keywords: "Webdesign referanser Bergen, Aone prosjekter, AI-byrå portefølje Norge, nettside rengjøringsbyrå Bergen, case study webdesign Bergen, digitalbyrå kundeprosjekter Norge",
  alternates: { canonical: "https://aone.no/references" },
  openGraph: {
    title: "Våre Prosjekter | Aone Webdesign & AI-referanser",
    description: "Utforsk vår portefølje av webdesign- og AI-prosjekter for bedrifter i Bergen og i hele Norge.",
    url: "https://aone.no/references",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone Portfolio – Webdesign Bergen & Norge",
      },
    ],
  },
};

export default function Page() {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Aone – Prosjekter og kundereferanser',
    url: 'https://aone.no/references',
    about: {
      '@type': 'Organization',
      name: 'Aone',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => {
        const name = tr(project.title, SSR_LANG);
        return {
          '@type': 'ListItem',
          position: index + 1,
          url: `https://aone.no${project.projectLink}`,
          name,
          ...(project.location ? { item: { '@type': 'CreativeWork', name, areaServed: tr(project.location, SSR_LANG) } } : {}),
        };
      }),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <ReferencesClient />
    </>
  );
}
