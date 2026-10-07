import RequestQuoteClient from './RequestQuoteClient';

export const metadata = {
  title: "Be Om Tilbud | Få Pris på Webdesign & AI-løsninger fra Aone Bergen",
  description: "Be om et uforpliktende tilbud fra Aone i Bergen. Fortell oss om prosjektet ditt – webdesign, AI-automatisering eller merkevarebygging – og få et skreddersydd pristilbud.",
  keywords: "Be om tilbud webdesign, pristilbud digitalbyrå Bergen, request a quote web design Norway, nettside pris Bergen, tilbud AI-løsninger",
  alternates: { canonical: "https://aone.no/request-quote" },
  openGraph: {
    title: "Be Om Tilbud | Aone",
    description: "Be om et uforpliktende pristilbud fra Aone i Bergen for webdesign, AI-automatisering eller merkevarebygging.",
    url: "https://aone.no/request-quote",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone Request a Quote",
      },
    ],
  },
};

export default function Page() {
  return <RequestQuoteClient />;
}
