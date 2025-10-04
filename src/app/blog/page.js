'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import { fetchPosts } from '@/lib/wordpress';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 6; // Number of posts per page

  useEffect(() => {
    const getPosts = async () => {
      const { posts: fetchedPosts, totalPages: fetchedTotalPages } = await fetchPosts(postsPerPage, currentPage);
      if (currentPage === 1) {
        setPosts(fetchedPosts);
      } else {
        setPosts(prevPosts => [...prevPosts, ...fetchedPosts]);
      }
      setTotalPages(fetchedTotalPages);
    };

    getPosts();
  }, [currentPage]);

  return (
    <div className="blog-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Our Blog"
        subtitle="Stay updated with our latest insights and news"
      />
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} passHref>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="relative w-full h-52">
                  <Image
                    src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/placeholders/project1.jpeg'}
                    alt={post.title.rendered}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {totalPages > currentPage && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="btn-outline-gradient"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;
