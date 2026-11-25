import SeoClient from './SeoClient';

export const metadata = {
  title: "SEO Byrå Norge | Søkemotoroptimalisering som Gir Flere Kunder | Aone",
  description: "SEO-byrå for norske bedrifter -- teknisk SEO, søkeordsstrategi, innhold og lokal SEO bygget for å gi flere kvalifiserte henvendelser, ikke bare mer trafikk.",
  keywords: "SEO byrå, SEO byrå Bergen, SEO Norge, søkemotoroptimalisering, teknisk SEO, lokal SEO, SEO konsulent, SEO for bedrifter, Google synlighet, SEO priser",
  alternates: { canonical: "https://aone.no/seo" },
  openGraph: {
    title: "SEO Byrå Norge | Aone",
    description: "Teknisk SEO, søkeordsstrategi, innhold og lokal optimalisering -- bygget for å gjøre organisk søk til kvalifiserte henvendelser.",
    url: "https://aone.no/seo",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone SEO Byrå",
      },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hva koster SEO hos Aone?',
      acceptedAnswer: { '@type': 'Answer', text: 'SEO-arbeid hos Aone prises som et fast månedlig samarbeid, tilpasset omfanget av nettsiden og konkurransen i bransjen din. Se Priser-siden for pakkeoversikt, eller be om et uforpliktende tilbud.' },
    },
    {
      '@type': 'Question',
      name: 'Hvor lang tid tar det før SEO gir resultater?',
      acceptedAnswer: { '@type': 'Answer', text: 'De fleste bedrifter ser de første rangeringsforbedringene innen 2-4 måneder, og mer vesentlig vekst i henvendelser etter 4-6 måneder. SEO er en langsiktig investering, ikke en engangsjobb.' },
    },
    {
      '@type': 'Question',
      name: 'Jobber dere med bedrifter utenfor Bergen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja -- vi jobber med bedrifter over hele Norge, og har også levert prosjekter for kunder i Storbritannia. Se våre lokasjonssider for Bergen, Oslo og London.' },
    },
  ],
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Søkemotoroptimalisering (SEO)',
  provider: { '@id': 'https://aone.no/#organization' },
  areaServed: { '@type': 'Country', name: 'Norway' },
  url: 'https://aone.no/seo',
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SeoClient />
    </>
  );
}
