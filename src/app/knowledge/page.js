'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: 'The Future of AI in Digital Marketing',
    category: 'AI & Marketing',
    date: 'July 26, 2024',
    excerpt: 'Explore how artificial intelligence is revolutionizing digital marketing strategies and consumer engagement.',
    image: '/images/project1.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Mastering SEO: A Comprehensive Guide',
    category: 'SEO',
    date: 'July 20, 2024',
    excerpt: 'Dive deep into the world of Search Engine Optimization and learn the best practices to rank higher.',
    image: '/images/project2.png',
    link: '#',
  },
  {
    id: 3,
    title: 'UI/UX Design Trends for 2025',
    category: 'UI/UX',
    date: 'July 15, 2024',
    excerpt: 'Stay ahead of the curve with the latest trends in user interface and user experience design.',
    image: '/images/project3.png',
    link: '#',
  },
  {
    id: 4,
    title: 'Building a Strong Brand Identity Online',
    category: 'Branding',
    date: 'July 10, 2024',
    excerpt: 'Learn the essential steps to create a memorable and impactful brand presence in the digital space.',
    image: '/images/project4.png',
    link: '#',
  },
  {
    id: 5,
    title: 'The Power of Videography in Storytelling',
    category: 'Videography',
    date: 'July 5, 2024',
    excerpt: 'Discover how compelling video content can captivate your audience and convey your message effectively.',
    image: '/images/project5.png',
    link: '#',
  },
  {
    id: 6,
    title: 'Web Development Best Practices for Performance',
    category: 'Web Development',
    date: 'June 28, 2024',
    excerpt: 'Optimize your website for speed and efficiency with these crucial web development tips.',
    image: '/images/project1.png',
    link: '#',
  },
];

const KnowledgePage = () => {
  return (
    <div className="knowledge-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Knowledge Base"
        subtitle="Explore our articles and insights"
      />

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Latest Articles & Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <div className="relative w-full h-52">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">{article.category}</span>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{article.date}</p>
                <p className="text-gray-700 mb-4">{article.excerpt}</p>
                <Link href={`${article.link}`} className="inline-block bg-blue-600 text-white py-2 px-5 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out text-md font-medium">
                    Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-700 text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Our knowledge base is constantly growing. If you have a specific question, feel free to reach out to us.
          </p>
          <Link href={`/contact`} className="inline-block bg-white text-blue-700 py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
              Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KnowledgePage;