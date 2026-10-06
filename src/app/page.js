import HomeClient from './HomeClient';

export const metadata = {
  title: "Webdesign Bergen & Webutvikling | Aone | AI-byrå Norge",
  description: "Webdesignere i Bergen som leverer digitale løsninger og AI-løsninger som konverterer -- lynraske nettsider, AI-chatbots og automatisering for norske bedrifter.",
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