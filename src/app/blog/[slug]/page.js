'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import { fetchPostBySlug, getFeaturedImage } from '@/lib/wordpress';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaChevronLeft, FaClock, FaUser, FaShareAlt } from 'react-icons/fa';

const PostPage = () => {
    const { t } = useLanguage();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        if (slug) {
            const getPost = async () => {
                setLoading(true);
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
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mb-6"></div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs animate-pulse">Decrypting Content...</p>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center text-center px-6">
                <div className="w-20 h-20 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mb-8">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-3xl font-black mb-4">Post Not Found</h3>
                <p className="text-slate-500 mb-10 max-w-md mx-auto">The digital trail you're following seems to have gone cold. It might have been relocated or archived.</p>
                <Link href="/blog" className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black rounded-2xl transition-all hover:scale-105">
                    Return to Repository
                </Link>
            </div>
        );
    }

    const featuredImage = getFeaturedImage(post);
    const postDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="post-single bg-slate-50 dark:bg-slate-950 min-h-screen pb-24">
            <HeroSection
                title={post.title.rendered}
                subtitle="Exclusive Deep-Dive & Strategic Insights"
            />

            <section className="container mx-auto px-6 -mt-20 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 group transition-colors">
                        <FaChevronLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Repository Archive</span>
                    </Link>

                    <motion.article 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-950/20 border border-slate-100 dark:border-slate-800"
                    >
                        {/* Featured Image */}
                        {featuredImage && (
                            <div className="relative w-full h-[30rem]">
                                <Image
                                    src={featuredImage}
                                    alt={post.title.rendered}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                
                                <div className="absolute bottom-10 left-10 right-10 flex flex-wrap items-center gap-8">
                                    <div className="flex items-center gap-3 text-white/90">
                                        <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/40">
                                            <FaUser className="text-xs" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase font-black tracking-widest opacity-60">Architect</p>
                                            <p className="text-sm font-bold">Aone Team</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 text-white/90">
                                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                                            <FaCalendarAlt className="text-xs text-rose-500" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase font-black tracking-widest opacity-60">Published</p>
                                            <p className="text-sm font-bold">{postDate}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-white/90">
                                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                                            <FaClock className="text-xs text-rose-500" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase font-black tracking-widest opacity-60">Pulse</p>
                                            <p className="text-sm font-bold">8 Min Read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Content */}
                        <div className="p-10 md:p-16 lg:p-24">
                            <div 
                                className="prose prose-lg prose-slate dark:prose-invert max-w-none 
                                prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase
                                prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed
                                prose-a:text-rose-500 prose-a:font-bold prose-img:rounded-3xl prose-img:shadow-2xl"
                                dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
                            />

                            {/* Keywords / Taxonomy */}
                            {post._embedded?.['wp:term']?.[0] && post._embedded['wp:term'][0].length > 0 && (
                                <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 mr-2">Filed Under:</span>
                                        {post._embedded['wp:term'][0].map((term) => (
                                            <span key={term.id} className="px-5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-[11px] font-bold text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                                                {term.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Share & Call to action */}
                            <div className="mt-16 flex items-center justify-between">
                                <Link 
                                    href="/blog" 
                                    className="px-8 py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-rose-500 hover:text-white transition-all"
                                >
                                    <FaChevronLeft className="text-[10px]" /> Back to Repository
                                </Link>
                                
                                <button className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors">
                                    <FaShareAlt />
                                </button>
                            </div>
                        </div>
                    </motion.article>
                </div>
            </section>
        </div>
    );
};

export default PostPage;
