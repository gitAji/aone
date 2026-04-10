import MarketingClient from './MarketingClient';

export const metadata = {
  title: "AI-Driven Digital Marketing Bergen | Performance Marketing Agency Norway",
  description: "Elite digital marketing in Bergen. We use AI analytics to maximize ROI and help your business grow.",
  keywords: "Digital marketing Bergen, Performance marketing Norway, AI marketing agency, SEO services Bergen, content strategy Norway, social media marketing Bergen",
  openGraph: {
    title: "Digital Marketing & Strategy | Aone",
    description: "Accelerate your growth with AI-driven, high-performance marketing strategies.",
    url: "https://aone.no/services/digital-marketing",
    images: [
      {
        url: "/images/marketing-og.png",
        width: 1200,
        height: 630,
        alt: "Aone Digital Marketing Services",
      },
    ],
  },
};

export default function Page() {
  return <MarketingClient />;
}
