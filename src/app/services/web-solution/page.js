import WebSolutionClient from './WebSolutionClient';

export const metadata = {
  title: "Web Solution Bergen | Web Design, Branding & UI/UX | Aone",
  description: "One team, one package: web design, development, UI/UX, logo and branding delivered together as a single cohesive Web Solution. Bergen-based, built for performance.",
  keywords: "Web solution Bergen, web design Norway, UI UX design Bergen, logo and branding, website development, Next.js developer Norway, brand identity Bergen",
  alternates: { canonical: "https://aone.no/services/web-solution" },
  openGraph: {
    title: "Web Solution | Aone",
    description: "Website, UI/UX, logo, and branding -- designed and built together as one package.",
    url: "https://aone.no/services/web-solution",
    images: [
      {
        url: "/images/web-dev-og.png",
        width: 1200,
        height: 630,
        alt: "Aone Web Solution",
      },
    ],
  },
};

export default function Page() {
  return <WebSolutionClient />;
}
