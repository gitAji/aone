import dynamic from "next/dynamic";

const BrandingShowcase = dynamic(() => import("@/components/BrandingShowcase"));

export const metadata = {
  title: "Branding Collection | Aone Digital",
  description: "A premium showcase of our visual identity, logos, and brand architecture projects.",
};

export default function BrandingPage() {
  return (
    <main className="min-h-screen pt-20 bg-[#080808]">
      <BrandingShowcase />
    </main>
  );
}
