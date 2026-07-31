import projects from "@/app/data/projects";
import products from "@/app/data/products";
import { vacancies } from "@/app/data/vacancies";
import { fetchAllPostSlugs } from "@/lib/wordpress";

export default async function sitemap() {
  const baseUrl = "https://aone.no";
  const staticPages = [
    "/",
    "/about",
    "/contact",
    "/design-requirements",
    "/feedback",
    "/free-consultation",
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
    "/services/videography",
    "/services/search-engine-optimization",
    "/services/ui-ux-design",
    "/services/web-development",
    "/references",
    "/products",
    "/blog",
    "/referral",
    "/request-quote",
    "/support",
    "/privacy-policy",
    "/disclaimer",
    "/terms-and-conditions",
    "/accessibility-statement",
    "/cookie-policy",
  ];

  const projectPages = projects.map((project) => project.projectLink);
  const productPages = products.map((product) => product.projectLink);
  const vacancyPages = vacancies.map((vacancy) => `/careers/${vacancy.id}`);

  const allStaticPages = [
    ...staticPages,
    ...projectPages,
    ...productPages,
    ...vacancyPages,
  ];

  const staticUrls = allStaticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "/blog" ? "daily" : "weekly",
    priority: page === "/" ? 1.0 : 0.8,
  }));

  // One entry per real, published aone.no/blog/[slug] page — replaces the
  // single malformed "https://blog.aone.no" line this file used to have,
  // which pointed at the headless WordPress backend (not a page anyone
  // actually visits) and was missing lastModified entirely. Fails soft to
  // an empty list if WordPress is unreachable, so the sitemap always ships.
  const blogPosts = await fetchAllPostSlugs();
  const blogPostUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.modified ? new Date(post.modified) : new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticUrls, ...blogPostUrls];
}
