import VideographyClient from './VideographyClient';

export const metadata = {
  title: "Videoproduksjon Bergen | Cinematic Brand Videography Norway",
  description: "Fengslende videoinnhold produsert i Bergen. Vi lager merkevarefilm og produktvideoer som engasjerer publikum og driver digital konvertering.",
  keywords: "Videoproduksjon Bergen, bedriftsvideo Norge, videograf Bergen, brand video Norway, video marketing Bergen, filmproduksjon bedrift",
  alternates: { canonical: "https://aone.no/services/videography" },
  openGraph: {
    title: "Videoproduksjon Bergen | Aone",
    description: "Fengslende videoinnhold og merkevarehistorier designet for høyt engasjement og digital konvertering.",
    url: "https://aone.no/services/videography",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone Videography Services Bergen",
      },
    ],
  },
};

export default function Page() {
  return <VideographyClient />;
}
