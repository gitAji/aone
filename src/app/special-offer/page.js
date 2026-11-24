import SpecialOfferClient from './SpecialOfferClient';

export const metadata = {
  title: "Special Offer | Aone.no",
  description: "Exclusive pricing for select Aone.no customers.",
  robots: {
    index: false,
    follow: false,
  }
};

export default function Page() {
  return <SpecialOfferClient />;
}
