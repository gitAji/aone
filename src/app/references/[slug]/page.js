import { notFound } from 'next/navigation';
import projects from "@/app/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";
import { tr } from "@/lib/projectText";

// Metadata/JSON-LD generation runs server-side with no client language
// state, so it defaults to Norwegian -- matching the site's own SSR default
// (<html lang="no">, LanguageContext's initial 'no' state before localStorage
// is read).
const SSR_LANG = 'no';

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return { title: 'Prosjekt ikke funnet | Aone' };
  }

  const title = tr(project.title, SSR_LANG);
  const description = tr(project.overview?.description1, SSR_LANG) || tr(project.description, SSR_LANG);
  const url = `https://aone.no/references/${slug}`;

  return {
    title: `${title} | Kundecase – Aone`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Aone`,
      description,
      type: 'article',
      url,
      images: [{ url: project.imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Aone`,
      description,
      images: [project.imageUrl],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.id === slug);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const caseStudyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: tr(project.title, SSR_LANG),
    description: tr(project.overview?.description1, SSR_LANG) || tr(project.description, SSR_LANG),
    image: project.imageUrl,
    url: `https://aone.no/references/${slug}`,
    creator: { '@type': 'Organization', name: 'Aone' },
    ...(project.location ? { locationCreated: { '@type': 'Place', name: tr(project.location, SSR_LANG) } } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <ProjectDetailClient project={project} prevProject={prevProject} nextProject={nextProject} />
    </>
  );
}
