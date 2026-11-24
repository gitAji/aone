import AboutClient from './AboutClient';

export const metadata = {
  title: "About Aone | Leading AI & Web Development Agency in Bergen",
  description: "Learn about Aone, Norway's premier digital agency. We specialize in AI automation, bespoke web development, and empowering businesses with tech.",
  keywords: "web designer Bergen, web design agency Bergen, digitalbyrå Bergen, nettbyrå Bergen, AI-byrå Norge",
  alternates: {
    canonical: 'https://aone.no/about',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <AboutClient />;
}
