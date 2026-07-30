import HomeClient from './HomeClient';

export const metadata = {
  title: "Webdesign Bergen & Webutvikling | Aone | AI-byrå Norge",
  description: "Premium webdesign og webutvikling i Bergen. Aone er et ledende AI-byrå som bygger lynraske Next.js nettsider, skreddersydde AI-chatbots og automatiseringer for bedrifter.",
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