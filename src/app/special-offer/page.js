import SpecialOfferClient from './SpecialOfferClient';

export const metadata = {
  title: "Special Offer | Aone",
  description: "Exclusive pricing for select Aone customers.",
  robots: {
    index: false,
    follow: false,
  }
};

export default function Page() {
  return <SpecialOfferClient />;
}
