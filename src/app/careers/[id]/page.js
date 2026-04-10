import { vacancies } from "@/app/data/vacancies";
import VacancyDetailClient from "./VacancyDetailClient";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = params;
  const vacancy = vacancies.find((v) => v.id === id);

  if (!vacancy) {
    return {
      title: "Role Not Found | Aone Careers",
    };
  }

  return {
    title: `${vacancy.title} | Aone Careers`,
    description: `Join Aone as a ${vacancy.title} in ${vacancy.location}. ${vacancy.summary.slice(0, 100)}...`,
  };
}

export default function Page({ params }) {
  const { id } = params;
  const vacancy = vacancies.find((v) => v.id === id);

  if (!vacancy) {
    notFound();
  }

  return <VacancyDetailClient />;
}
