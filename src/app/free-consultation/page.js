import FreeConsultationClient from './FreeConsultationClient';

export const metadata = {
  title: "Gratis Konsultasjon | Book Et Møte med Aone Webdesign Bergen",
  description: "Book en gratis, uforpliktende konsultasjon med Aone i Bergen. Vi gjennomgår dine behov innen webdesign, AI-automatisering og digital vekst.",
  keywords: "Gratis konsultasjon Bergen, book møte webdesign, gratis rådgivning digitalbyrå, free consultation web design Norway",
  alternates: { canonical: "https://aone.no/free-consultation" },
  openGraph: {
    title: "Gratis Konsultasjon | Aone",
    description: "Book en gratis, uforpliktende konsultasjon med Aone i Bergen.",
    url: "https://aone.no/free-consultation",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone Free Consultation",
      },
    ],
  },
};

export default function Page() {
  return <FreeConsultationClient />;
}
