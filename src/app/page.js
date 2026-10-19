import HomeClient from './HomeClient';

export const metadata = {
  title: "Webdesign Bergen & Webutvikling | Aone | AI-byrå Norge",
  description: "Digitalbyrå og webdesignere i Bergen som leverer digitale løsninger og AI-løsninger som konverterer -- lynraske nettsider, AI-chatbots og automatisering.",
  keywords: "Web Designer Bergen, Web Designers Bergen, Webdesigner Bergen, Webdesignere i Bergen, Web Design Bergen, Webdesign Bergen, Nettbyrå Bergen, Digitalbyrå Bergen, Webutvikling Bergen",
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