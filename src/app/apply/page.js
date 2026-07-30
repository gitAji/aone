import ApplyClient from './ApplyClient';

export const metadata = {
  title: "Join the Team | Aone Careers",
  description: "Apply for a position at Aone and help us shape the future of AI and digital technology in Norway.",
  robots: {
    index: false,
    follow: true,
  }
};

export default function Page() {
  return <ApplyClient />;
}
