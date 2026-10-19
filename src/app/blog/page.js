import { fetchPosts } from '@/lib/wordpress-server';
import BlogListClient from './BlogListClient';

// Without this, Next.js fully bakes this page at build time and never
// looks at WordPress again until the next deploy -- if blog.aone.no was
// briefly unreachable during a build, the empty result is permanent.
// This re-fetches in the background at most every 5 minutes.
export const revalidate = 300;

const POSTS_PER_PAGE = 6;

// Dynamic so each page beyond 1 gets its own title and self-referencing
// canonical -- a flat "/blog" canonical on every page would tell Google
// pages 2+ are duplicates of page 1 and should be dropped from the index,
// which is exactly what makes older posts (only ever linked from these
// paginated archive pages) unreachable by crawlers in the first place.
export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params?.page, 10) || 1);
  const canonical = page > 1 ? `https://aone.no/blog?page=${page}` : 'https://aone.no/blog';
  const title = page > 1
    ? `Blogg – Side ${page} | Webdesign, AI & Digital Markedsføring Innsikt – Aone`
    : "Blogg | Webdesign, AI & Digital Markedsføring Innsikt – Aone";

  return {
    title,
    description: "Artikler om webdesign, AI-automatisering, SEO og digital markedsføring fra Aone i Bergen. Hold deg oppdatert på teknologitrender i Norge.",
    keywords: "Aone blogg, webdesign artikler Norge, AI-innsikt Bergen, digital markedsføring blogg, teknologitrender Norge",
    alternates: { canonical },
    openGraph: {
      title: "Blogg | Aone",
      description: "Innsikt om webdesign, AI og digital markedsføring fra Aone i Bergen.",
      url: canonical,
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
}

// Server Component: fetches the requested page of posts at request time so
// the HTML search engines and social scrapers actually receive contains
// real post titles/excerpts/images instead of an empty loading skeleton,
// and so every page of the archive -- not just the first -- is a real,
// crawlable URL (/blog?page=2, /blog?page=3, ...) linking to its posts.
// Older posts used to be reachable only via a client-side "Load More"
// button with no corresponding URL, making them orphan pages discoverable
// solely through the sitemap.
export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params?.page, 10) || 1);
  const { posts, totalPages } = await fetchPosts(POSTS_PER_PAGE, page);

  return <BlogListClient posts={posts} currentPage={page} totalPages={totalPages} />;
}
