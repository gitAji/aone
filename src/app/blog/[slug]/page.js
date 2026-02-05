
'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import { fetchPostBySlug } from '@/lib/wordpress';
import { useLanguage } from "@/context/LanguageContext";

const PostPage = () => {
  const { t } = useLanguage();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      const getPost = async () => {
        const { post: fetchedPost, error: fetchError } = await fetchPostBySlug(slug);
        setPost(fetchedPost);
        setError(fetchError);
        setLoading(false);
      };

      getPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">{t('blog.loading') || 'Loading...'}</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex flex-col items-center justify-center text-center px-4">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('blog.postNotFound') || 'Post not found'}</h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">{error || (t('blog.postNotFoundMessage') || 'The post you are looking for does not exist or has been removed.')}</p>
        <Link href="/blog" className="px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors">
          {t('blog.backToBlog') || 'Back to Blog'}
        </Link>
      </div>
    );
  }

  return (
    <>
      {post.yoast_head_json && (
        <Head>
          <title>{post.yoast_head_json.title}</title>
          <meta name="description" content={post.yoast_head_json.description} />
          <meta name="robots" content={post.yoast_head_json.robots.index} />
          <meta property="og:title" content={post.yoast_head_json.og_title} />
          <meta property="og:description" content={post.yoast_head_json.og_description} />
          <meta property="og:image" content={post.yoast_head_json.og_image[0].url} />
          <meta property="og:url" content={post.yoast_head_json.og_url} />
          <meta property="og:site_name" content={post.yoast_head_json.og_site_name} />
          <meta name="twitter:card" content={post.yoast_head_json.twitter_card} />
          <meta name="twitter:title" content={post.yoast_head_json.twitter_title} />
          <meta name="twitter:description" content={post.yoast_head_json.twitter_description} />
          <meta name="twitter:image" content={post.yoast_head_json.twitter_image} />
        </Head>
      )}
      <div className="post-page bg-gray-50 min-h-screen">
        <HeroSection
          title={post.title.rendered}
          subtitle={`By ${post._embedded.author[0].name} on ${new Date(post.date).toLocaleDateString()}`}
        />
        <section className="container mx-auto px-4 pb-16 pt-36">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <div className="relative w-full h-96">
                <Image
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post.title.rendered}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            )}
            <div className="p-8" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            {post._embedded?.['wp:term']?.[1] && post._embedded['wp:term'][1].length > 0 && (
              <div className="p-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold mb-4">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {post._embedded['wp:term'][1].map((tag) => (
                    <span key={tag.id} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default PostPage;
