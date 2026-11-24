import ApplyClient from './ApplyClient';

export const metadata = {
  title: "Join the Team | Aone.no Careers",
  description: "Apply for a position at Aone.no in Bergen and help us shape the future of AI and digital technology in Norway. Join our growing team.",
  robots: {
    index: false,
    follow: true,
  }
};

export default function Page() {
  return <ApplyClient />;
}
