export default function sitemap() {
  const baseUrl = 'https://www.aone.no';
  const pages = [
    '/',
    '/about',
    '/client-login',
    '/contact',
    '/faq',
    '/knowledge',
    '/references',
    '/references/project-1',
    '/references/project-2',
    '/references/project-3',
    '/references/project-4',
    '/references/project-5',
    '/references/project-6',
    '/references/project-7',
    '/references/project-8',
    '/references/project-9',
    '/services',
    '/services/ai-automations',
    '/services/branding',
    '/services/digital-marketing',
    '/services/photography',
    '/services/search-engine-optimization',
    '/services/ui-ux-design',
    '/services/videography',
    '/services/web-development',
  ];

  const urls = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: page === '/' ? 1.0 : 0.8,
  }));

  urls.push({
    url: 'https://blog.aone.no',
    changeFrequency: 'daily',
    priority: 0.9,
  });

  return urls;
}
