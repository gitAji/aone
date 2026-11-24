import CareersClient from './CareersClient';

export const metadata = {
  title: "Ledige Stillinger | Jobb hos Aone.no – AI & Webdesign Byrå Bergen",
  description: "Bli en del av Aone.no sitt team i Bergen. Vi søker talenter innen webutvikling, AI-automatisering, design og digital markedsføring.",
  keywords: "Ledige stillinger Bergen, jobb webutvikler Norge, karriere AI-byrå, jobb digitalbyrå Bergen, hiring web developer Norway",
  alternates: { canonical: "https://aone.no/careers" },
  openGraph: {
    title: "Ledige Stillinger hos Aone.no",
    description: "Bli en del av Aone.no sitt team i Bergen innen webutvikling, AI og design.",
    url: "https://aone.no/careers",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone.no Careers Bergen",
      },
    ],
  },
};

export default function Page() {
  return <CareersClient />;
}
