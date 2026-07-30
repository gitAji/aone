import ChatbotClient from './ChatbotClient';

export const metadata = {
  title: "Custom AI Chatbots & Agents Bergen | Conversational AI Solutions Norway",
  description: "Elite AI chatbot development in Bergen. Build intelligent AI agents that automate support, capture leads, and integrate seamlessly with your CRM.",
  keywords: "AI Chatbots Norway, Custom AI agents Bergen, Conversational AI solutions, lead generation chatbots, support automation Norway, AI customer service",
  openGraph: {
    title: "AI Chatbots & Agents | Aone",
    description: "Deploy intelligence to your customer experience with human-like AI agents.",
    url: "https://aone.no/services/ai-chatbots",
    images: [
      {
        url: "/images/chatbot-og.png",
        width: 1200,
        height: 630,
        alt: "Aone AI Chatbot Solutions",
      },
    ],
  },
};

export default function Page() {
  return <ChatbotClient />;
}
