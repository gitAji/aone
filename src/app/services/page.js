import ServicesClient from './ServicesClient';

export const metadata = {
  title: "AI-Native Digital Services | Web Design, AI Chatbots & Automation Norway",
  description: "Comprehensive AI and digital services from Aone. From elite web development to custom AI agents and machine learning automations, we build the digital core of modern businesses in Norway.",
  keywords: "Digital agency Bergen, AI services Norway, Web development Oslo, Custom AI chatbots, AI search optimization, branding agency Bergen",
  openGraph: {
    title: "Elite AI & Digital Services | Aone",
    description: "Explore our comprehensive suite of AI-native services designed to scale your business.",
    url: "https://aone.no/services",
  },
};

export default function Page() {
  return <ServicesClient />;
}
