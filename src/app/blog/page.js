import { fetchPosts } from '@/lib/wordpress';
import BlogListClient from './BlogListClient';

// Server Component: fetches the first page of posts at request/build time so
// the HTML search engines and social scrapers actually receive contains real
// post titles/excerpts/images instead of an empty loading skeleton (the
// previous version fetched everything client-side via useEffect).
export default async function BlogPage() {
  const { posts, totalPages } = await fetchPosts(6, 1);

  return <BlogListClient initialPosts={posts} initialTotalPages={totalPages} />;
}
