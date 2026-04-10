import WebDevClient from './WebDevClient';

export const metadata = {
  title: "Premium Web Development Bergen | High-Performance Next.js Solutions Norway",
  description: "Elite web development in Bergen. We build lightning-fast, SEO-optimized websites with Next.js and modern UI/UX to drive conversions and scale your brand.",
  keywords: "Webutvikling Bergen, Next.js developer Norway, Premium web design, High performance websites, Digital development Oslo, React expert Bergen",
  openGraph: {
    title: "Web Development Bergen | Aone",
    description: "Build your digital core with lightning-fast, high-converting websites optimized for growth.",
    url: "https://aone.no/services/web-development",
    images: [
      {
        url: "/images/web-dev-og.png",
        width: 1200,
        height: 630,
        alt: "Aone Web Development Services",
      },
    ],
  },
};

export default function Page() {
  return <WebDevClient />;
}
