import { fetchPosts } from '@/lib/wordpress-server';
import BlogListClient from './BlogListClient';

export const metadata = {
  title: "Blogg | Webdesign, AI & Digital Markedsføring Innsikt – Aone",
  description: "Artikler om webdesign, AI-automatisering, SEO og digital markedsføring fra Aone i Bergen. Hold deg oppdatert på teknologitrender i Norge.",
  keywords: "Aone blogg, webdesign artikler Norge, AI-innsikt Bergen, digital markedsføring blogg, teknologitrender Norge",
  alternates: { canonical: "https://aone.no/blog" },
  openGraph: {
    title: "Blogg | Aone",
    description: "Innsikt om webdesign, AI og digital markedsføring fra Aone i Bergen.",
    url: "https://aone.no/blog",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aone Blog",
      },
    ],
  },
};

// Server Component: fetches the first page of posts at request/build time so
// the HTML search engines and social scrapers actually receive contains real
// post titles/excerpts/images instead of an empty loading skeleton (the
// previous version fetched everything client-side via useEffect).
export default async function BlogPage() {
  const { posts, totalPages } = await fetchPosts(6, 1);

  return <BlogListClient initialPosts={posts} initialTotalPages={totalPages} />;
}
