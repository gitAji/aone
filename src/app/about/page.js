import AboutClient from './AboutClient';

export const metadata = {
  title: "About Aone | Leading AI & Web Development Agency in Bergen",
  description: "Learn about Aone, a premier digital agency in Norway specializing in AI automation, bespoke web development, and digital strategy. Our mission is to empower businesses with future-ready technology.",
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
