import OrderClient from './OrderClient';

export const metadata = {
  title: "Complete Your Order | Aone AI & Web Agency",
  description: "Finalize your project specifications and secure your digital solution with Aone. Premium web development and AI automation services in Norway.",
  robots: {
    index: false,
    follow: true,
  }
};

export default function Page() {
  return <OrderClient />;
}
