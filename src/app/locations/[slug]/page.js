import { notFound } from 'next/navigation';
import locations from "@/app/data/locations";
import projects from "@/app/data/projects";
import LocationClient from "./LocationClient";
import { tr } from "@/lib/projectText";

// Matches the site's SSR default (<html lang="no">) -- see
// references/[slug]/page.js for the same convention.
const SSR_LANG = 'no';

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    return { title: 'Side ikke funnet | Aone' };
  }

  const title = tr(location.metaTitle, SSR_LANG);
  const description = tr(location.metaDescription, SSR_LANG);
  const url = `https://aone.no/locations/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: 'website',
      url,
    },
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  const featuredProjects = location.projectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  const url = `https://aone.no/locations/${slug}`;
  const cityName = tr(location.city, SSR_LANG);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web design, SEO/GEO and AI automation',
    provider: { '@id': 'https://aone.no/#organization' },
    areaServed: { '@type': 'Place', name: cityName },
    url,
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faq.map((item) => ({
      '@type': 'Question',
      name: tr(item.q, SSR_LANG),
      acceptedAnswer: { '@type': 'Answer', text: tr(item.a, SSR_LANG) },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <LocationClient location={location} featuredProjects={featuredProjects} />
    </>
  );
}
