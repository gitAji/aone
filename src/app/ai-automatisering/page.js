import AiAutomationClient from './AiAutomationClient';

export const metadata = {
  title: "AI Automatisering for Bedrifter | Spar Tid og Øk Effektiviteten | Aone",
  description: "AI-automatisering som tar seg av repeterende arbeid, kvalifiserer leads og kobler sammen verktøyene dine -- slik at teamet bruker tiden på det som faktisk gir vekst.",
  keywords: "AI automatisering, AI automatisering bedrift, AI chatbot bedrift, AI agenter, automatisering av arbeidsprosesser, AI kundeservice, CRM automatisering, AI integrasjon",
  alternates: { canonical: "https://aone.no/ai-automatisering" },
  openGraph: {
    title: "AI Automatisering for Bedrifter | Aone",
    description: "AI-automatisering som tar seg av repeterende arbeid, kvalifiserer leads og kobler sammen verktøyene dine.",
    url: "https://aone.no/ai-automatisering",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone AI Automatisering",
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
      name: 'Hva koster AI-automatisering?',
      acceptedAnswer: { '@type': 'Answer', text: 'AI-automatiseringsprosjekter prises ut fra omfang -- fra en enkel chatbot til en full arbeidsflyt med flere integrasjoner. Vi starter alltid med en kartlegging før vi gir et fast tilbud.' },
    },
    {
      '@type': 'Question',
      name: 'Trenger jeg teknisk kompetanse for å bruke løsningen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nei. Vi bygger løsningene slik at du og teamet ditt kan bruke og justere dem selv, med opplæring og dokumentasjon inkludert.' },
    },
    {
      '@type': 'Question',
      name: 'Hvilke systemer kan dere koble sammen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Vi kobler sammen CRM, e-post, kalender, nettside-skjemaer og de fleste verktøy med et API -- vi kartlegger dine spesifikke systemer i en innledende samtale.' },
    },
  ],
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI-automatisering og forretningsprosesser',
  provider: { '@id': 'https://aone.no/#organization' },
  areaServed: { '@type': 'Country', name: 'Norway' },
  url: 'https://aone.no/ai-automatisering',
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <AiAutomationClient />
    </>
  );
}
