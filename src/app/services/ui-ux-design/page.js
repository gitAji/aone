import UiUxClient from './UiUxClient';

export const metadata = {
  title: "UI/UX Design Bergen | User Experience Design Agency Norway",
  description: "Intuitivt UI/UX-design i Bergen. Vi designer brukersentriske grensesnitt som øker konvertering og tilfredshet for norske bedrifter.",
  keywords: "UI/UX design Bergen, UX designer Norge, brukeropplevelse design, interaction design Bergen, UX agency Norway, wireframing prototyping Bergen, universell utforming",
  alternates: { canonical: "https://aone.no/services/ui-ux-design" },
  openGraph: {
    title: "UI/UX Design Bergen | Aone",
    description: "Intuitive, brukersentriske grensesnitt optimalisert for sømløse opplevelser og moderne tilgjengelighet.",
    url: "https://aone.no/services/ui-ux-design",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone UI/UX Design Bergen",
      },
    ],
  },
};

export default function Page() {
  return <UiUxClient />;
}
