import ContactClient from './ContactClient';

export const metadata = {
  title: "Contact Aone | Get a Strategic AI & Web Development Consultation",
  description: "Ready to elevate your business with AI and high-performance web solutions? Contact our Bergen-based studio for a strategic consultation today.",
  alternates: {
    canonical: 'https://aone.no/contact',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <ContactClient />;
}
