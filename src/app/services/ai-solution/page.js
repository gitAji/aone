import AISolutionClient from './AISolutionClient';

export const metadata = {
  title: "AI Solution | Chatbots, Automation & AI Agents | Aone",
  description: "Custom AI chatbots, business process automation, and autonomous AI agents -- one AI Solution that works around the clock for your business.",
  keywords: "AI solution Norway, custom AI chatbot, business automation, AI agents, AI-driven marketing automation, Bergen AI agency",
  alternates: { canonical: "https://aone.no/services/ai-solution" },
  openGraph: {
    title: "AI Solution | Aone",
    description: "Chatbots, automation, and autonomous AI agents working around the clock for your business.",
    url: "https://aone.no/services/ai-solution",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone AI Solution",
      },
    ],
  },
};

export default function Page() {
  return <AISolutionClient />;
}
