import projects from "@/app/data/projects";
import { vacancies } from "@/app/data/vacancies";

export default function sitemap() {
  const baseUrl = "https://aone.no";
  const staticPages = [
    "/",
    "/about",
    "/contact",
    "/design-requirements",
    "/feedback",
    "/free-consultation",
    "/privacy-policy",
    "/disclaimer",
    "/referral",
    "/request-quote",
    "/support",
        "/terms-and-conditions",
    "/accessibility-statement",
    "/cookie-policy",
    "/free-seo-audit",
    "/pricing",
    "/careers",
    "/services",
    "/services/ai-automations",
    "/services/ai-chatbots",
    "/services/branding",
    "/services/digital-marketing",
    "/services/geo",
    "/services/photography",
    "/services/search-engine-optimization",
    "/services/ui-ux-design",

    "/services/web-development",
  ];

  const projectPages = projects.map((project) => project.projectLink);
  const vacancyPages = vacancies.map((vacancy) => `/careers/${vacancy.id}`);

  const allPages = [...staticPages, ...projectPages, ...vacancyPages];

  const urls = allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: page === "/" ? 1.0 : 0.8,
  }));

  urls.push({
    url: "https://blog.aone.no",
    changeFrequency: "daily",
    priority: 0.9,
  });

  return urls;
}
