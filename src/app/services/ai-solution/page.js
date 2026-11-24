import AISolutionClient from './AISolutionClient';

export const metadata = {
  title: "AI Solution | Chatbots, Automation & AI Agents | Aone.no",
  description: "Custom AI chatbots, business process automation, and autonomous AI agents -- one AI Solution that works around the clock for your business.",
  keywords: "AI solution Norway, custom AI chatbot, business automation, AI agents, AI-driven marketing automation, Bergen AI agency, AI chatbot Bergen, AI-automatisering, kunstig intelligens bedrift, AI-byrå Bergen",
  alternates: { canonical: "https://aone.no/services/ai-solution" },
  openGraph: {
    title: "AI Solution | Aone.no",
    description: "Chatbots, automation, and autonomous AI agents working around the clock for your business.",
    url: "https://aone.no/services/ai-solution",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone.no AI Solution",
      },
    ],
  },
};

export default function Page() {
  return <AISolutionClient />;
}
