'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import { fetchPosts, getFeaturedImage } from '@/lib/wordpress';

import { useLanguage } from "@/context/LanguageContext";

const BlogPage = () => {
  const { t } = useLanguage();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const postsPerPage = 6; // Number of posts per page

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const { posts: fetchedPosts, totalPages: fetchedTotalPages, error: fetchError } = await fetchPosts(postsPerPage, currentPage);

      if (fetchError) {
        setError(fetchError);
      } else {
        setError(null);
      }

      if (currentPage === 1) {
        setPosts(fetchedPosts);
      } else {
        setPosts(prevPosts => [...prevPosts, ...fetchedPosts]);
      }
      setTotalPages(fetchedTotalPages);
      setLoading(false);
    };

    getPosts();
  }, [currentPage]);

  return (
    <div className="blog-page bg-gray-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title={t('blog.title')}
        subtitle={t('blog.subtitle')}
      />
      <section className="container mx-auto px-4 pb-16 pt-36">
        {/* Loading State */}
        {loading && posts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">{t('blog.loading') || 'Loading posts...'}</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && posts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('blog.errorTitle') || 'Error fetching posts'}</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">{t('blog.errorMessage') || 'We couldn\'t load the blog posts. Please try again later.'}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
            >
              {t('blog.tryAgain') || 'Try Again'}
            </button>
          </div>
        )}

        {/* Empty State - No Posts Found */}
        {!error && !loading && posts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('blog.noPosts') || 'No posts found'}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t('blog.noPostsMessage') || 'Check back later for new content.'}</p>
          </div>
        )}

        {/* Posts Grid */}
        {posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} passHref>
                <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer border border-slate-100 dark:border-slate-800">
                  <div className="relative w-full h-52">
                    <Image
                      src={getFeaturedImage(post)}
                      alt={post.title.rendered}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {totalPages > currentPage && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="btn-outline"
              disabled={loading}
            >
              <span>{loading ? (t('blog.loadingMore') || 'Loading...') : t('blog.loadMore')}</span>
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;
