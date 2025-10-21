import projects from "@/app/data/projects";

export default function sitemap() {
  const baseUrl = "https://aone.no";
  const staticPages = [
    "/",
    "/about",
    "/client-login",
    "/contact",
    "/design-requirements",
    "/feedback",
    "/free-consultation",
    "/privacy-policy",
    "/referral",
    "/request-quote",
    "/support",
    "/terms-and-conditions",
    "/services",
    "/services/ai-automations",
    "/services/branding",
    "/services/digital-marketing",
    "/services/geo",
    "/services/photography",
    "/services/search-engine-optimization",
    "/services/ui-ux-design",
    "/services/videography",
    "/services/web-development",
  ];

  const projectPages = projects.map((project) => project.projectLink);

  const allPages = [...staticPages, ...projectPages];

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
