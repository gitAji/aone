import { vacancies } from "@/app/data/vacancies";
import VacancyDetailClient from "./VacancyDetailClient";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const vacancy = vacancies.find((v) => v.id === id);

  if (!vacancy) {
    return {
      title: "Role Not Found | Aone Careers",
    };
  }

  const title = vacancy.title.no || vacancy.title.en;
  const location = vacancy.location.no || vacancy.location.en;
  const summary = vacancy.summary.no || vacancy.summary.en;

  return {
    title: `${title} | Aone Careers`,
    description: `Join Aone as a ${title} in ${location}. ${summary.slice(0, 100)}...`,
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const vacancy = vacancies.find((v) => v.id === id);

  if (!vacancy) {
    notFound();
  }

  return <VacancyDetailClient />;
}
