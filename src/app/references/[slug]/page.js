import { notFound } from 'next/navigation';
import projects from "@/app/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return { title: 'Prosjekt ikke funnet | Aone' };
  }

  const description = project.overview?.description1 || project.description;
  const url = `https://aone.no/references/${slug}`;

  return {
    title: `${project.title} | Kundecase – Aone`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} | Aone`,
      description,
      type: 'article',
      url,
      images: [{ url: project.imageUrl, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Aone`,
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
    name: project.title,
    description: project.overview?.description1 || project.description,
    image: project.imageUrl,
    url: `https://aone.no/references/${slug}`,
    creator: { '@type': 'Organization', name: 'Aone' },
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
