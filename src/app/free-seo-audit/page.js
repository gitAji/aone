import FreeSeoAuditClient from './FreeSeoAuditClient';

export const metadata = {
  title: "Gratis SEO-Analyse | Få en Nettside-Rapport fra Aone.no Bergen",
  description: "Få en gratis SEO-analyse av nettsiden din fra Aone.no i Bergen. Vi avdekker hva som hindrer deg fra å rangere høyere på Google.",
  keywords: "Gratis SEO-analyse, SEO rapport Bergen, nettside analyse gratis, free SEO audit Norway, SEO sjekk Bergen",
  alternates: { canonical: "https://aone.no/free-seo-audit" },
  openGraph: {
    title: "Gratis SEO-Analyse | Aone.no",
    description: "Få en gratis SEO-analyse av nettsiden din og se hva som hindrer deg fra å rangere høyere på Google.",
    url: "https://aone.no/free-seo-audit",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone.no Free SEO Audit",
      },
    ],
  },
};

export default function Page() {
  return <FreeSeoAuditClient />;
}
