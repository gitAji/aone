import HomeClient from './HomeClient';

export const metadata = {
  title: "Aone | AI-Native Digital Agency Bergen & Oslo | Web Design & AI Automation",
  description: "Aone is an elite AI-native digital agency in Bergen & Oslo. We deliver high-performance web development (Next.js), custom AI chatbots, machine learning automation, and GEO (Generative Engine Optimization) to help Norwegian businesses thrive in the AI era.",
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