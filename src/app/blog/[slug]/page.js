
'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';

const PostPage = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`https://blog.aone.no/wp-json/wp/v2/posts?slug=${slug}&_embed`);
          const data = await response.json();
          if (data.length > 0) {
            setPost(data[0]);
          }
          setLoading(false);
        } catch (error) {
          console.error('Error fetching blog post:', error);
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
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
        <section className="container mx-auto px-4 py-16">
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
            {post.tags && post.tags.length > 0 && (
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
