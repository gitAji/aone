import SEOServiceClient from './SEOServiceClient';

export const metadata = {
  title: "SEO Byrå Bergen | AI-Enhanced Search Engine Optimization Norway",
  description: "Strategisk søkemotoroptimalisering i Bergen. Vi kombinerer teknisk SEO, lokal SEO og AI-innsikt (GEO) for å få bedriften din øverst på Google i Norge.",
  keywords: "SEO Bergen, SEO byrå Bergen, søkemotoroptimalisering Norge, lokal SEO Bergen, SEO agency Norway, technical SEO Bergen, keyword research Norge, Google ranking Bergen",
  alternates: { canonical: "https://aone.no/services/search-engine-optimization" },
  openGraph: {
    title: "SEO Byrå Bergen | Aone",
    description: "Dominer Google-rangeringene i Norge med teknisk SEO, lokal SEO og AI-drevet søkeoptimalisering.",
    url: "https://aone.no/services/search-engine-optimization",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone SEO Services Bergen",
      },
    ],
  },
};

export default function Page() {
  return <SEOServiceClient />;
}
