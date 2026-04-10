import HomeClient from './HomeClient';

export const metadata = {
  title: "Aone | AI-Native Digital Agency Bergen & Oslo | Web Design & AI Automation",
  description: "Elite AI-native digital agency in Bergen & Oslo. High-performance web development (Next.js), custom AI chatbots, and GEO for Norwegian business growth.",
  alternates: {
    canonical: 'https://aone.no',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <HomeClient />;
}