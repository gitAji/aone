'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://blog.aone.no/wp-json/wp/v2/posts?per_page=3&orderby=date&_embed');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="blog-section container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">From Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <Link key={post.id} href={post.link} passHref>
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
    </section>
  );
};

export default BlogSection;
