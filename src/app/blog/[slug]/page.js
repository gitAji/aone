import { notFound } from 'next/navigation';
import { fetchPostBySlug, fetchAllPostSlugs, getFeaturedImage, stripHtml } from '@/lib/wordpress';
import BlogPostClient from './BlogPostClient';

// Pre-renders every known post at build time; any post published after the
// last build still resolves on-demand at request time (Next.js default
// dynamicParams behavior), so a new WordPress post is never a 404 while
// waiting for a redeploy.
export async function generateStaticParams() {
  const posts = await fetchAllPostSlugs();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { post } = await fetchPostBySlug(slug);

  if (!post) {
    return { title: 'Innlegg ikke funnet | Aone Blogg' };
  }

  const title = stripHtml(post.title?.rendered);
  const description = stripHtml(post.excerpt?.rendered).slice(0, 160);
  const image = getFeaturedImage(post);
  const url = `https://aone.no/blog/${slug}`;

  return {
    title: `${title} | Aone Blogg`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const { post } = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const title = stripHtml(post.title?.rendered);
  const description = stripHtml(post.excerpt?.rendered).slice(0, 160);
  const url = `https://aone.no/blog/${slug}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: getFeaturedImage(post),
    datePublished: post.date,
    dateModified: post.modified || post.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: 'Aone' },
    publisher: {
      '@type': 'Organization',
      name: 'Aone',
      logo: { '@type': 'ImageObject', url: 'https://aone.no/images/logo.png' },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
