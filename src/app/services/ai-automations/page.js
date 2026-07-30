import AutomationClient from './AutomationClient';

export const metadata = {
  title: "AI Business Automation Norway | Custom AI Workflows Bergen",
  description: "Elite AI automation in Norway. Streamline operations with custom LLM workflows and intelligent integrations to save time and scale your efficiency.",
  keywords: "AI Automation Bergen, Business automation Norway, LLM workflows, custom AI development Oslo, predictive analytics for business, AI consulting Norway",
  openGraph: {
    title: "AI Business Automation | Aone",
    description: "Streamline your business operations with elite, custom-built AI automation workflows.",
    url: "https://aone.no/services/ai-automations",
    images: [
      {
        url: "/images/automation-og.png",
        width: 1200,
        height: 630,
        alt: "Aone AI Automation Services",
      },
    ],
  },
};

export default function Page() {
  return <AutomationClient />;
}
