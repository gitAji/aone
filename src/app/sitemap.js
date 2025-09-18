export default function sitemap() {
  const baseUrl = "https://www.aone.no";
  const pages = [
    "/",
    "/about",
    "/client-login",
    "/contact",

    "/references",
    "/references/kids-learning-portal",
    "/references/saray-steakhouse-kro",
    "/references/clean-masters-renhold",
    "/references/tulips",
    "/references/qfs-accoutant",
    "/references/rent-my-property-uk",
    "/references/rent-cars",
    "/references/shop-front",
    "/references/trendifytools",
    "/services",
    "/services/ai-automations",
    "/services/branding",
    "/services/digital-marketing",
    "/services/photography",
    "/services/search-engine-optimization",
    "/services/ui-ux-design",
    "/services/videography",
    "/services/web-development",
  ];

  const urls = pages.map((page) => ({
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
