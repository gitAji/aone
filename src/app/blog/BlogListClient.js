'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import { fetchPosts, getFeaturedImage } from '@/lib/wordpress';
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaChevronRight, FaRegClock, FaUser } from 'react-icons/fa';

// Receives the first page of posts already fetched server-side (see
// src/app/blog/page.js) so the initial HTML — what search engines and
// social scrapers actually see — contains real post content instead of a
// loading skeleton. "Load More" beyond page 1 stays a client-side fetch,
// which is fine: Google only needs the initial content indexed, and
// pagination-by-button was never going to get separate crawlable URLs anyway.
const BlogListClient = ({ initialPosts, initialTotalPages }) => {
    const { t } = useLanguage();
    const [posts, setPosts] = useState(initialPosts);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(initialTotalPages);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState(null);
    const postsPerPage = 6;

    const loadMore = async () => {
        setLoadingMore(true);
        try {
            const nextPage = currentPage + 1;
            const { posts: fetchedPosts, totalPages: fetchedTotalPages, error: fetchError } =
                await fetchPosts(postsPerPage, nextPage);

            if (fetchError) {
                setError(fetchError);
            } else {
                setError(null);
                setPosts(prev => {
                    const newPosts = fetchedPosts.filter(fp => !prev.some(p => p.id === fp.id));
                    return [...prev, ...newPosts];
                });
                setTotalPages(fetchedTotalPages);
                setCurrentPage(nextPage);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoadingMore(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('nb-NO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="blog-page bg-slate-50 dark:bg-slate-950 min-h-screen">
            <HeroSection
                title={t('blog.title') || "Vår blogg"}
                subtitle={t('blog.subtitle') || "Hold deg oppdatert med vår siste innsikt og nyheter"}
            />

            <section className="container mx-auto px-6 pb-24 pt-20">
                {/* Error State */}
                {error && posts.length === 0 && (
                    <div className="max-w-xl mx-auto text-center py-20">
                        <div className="w-16 h-16 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{t('blog.errorTitle') || 'Tilkobling mistet'}</h3>
                        <p className="text-slate-500 mb-8">{error}</p>
                    </div>
                )}

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
                    <AnimatePresence mode="popLayout">
                        {posts.map((post, idx) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx < postsPerPage ? idx * 0.1 : 0 }}
                                className="group"
                            >
                                <Link href={`/blog/${post.slug}`} className="block h-full">
                                    <article className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 flex flex-col h-full transform group-hover:-translate-y-2">
                                        {/* Image Container with lazy loading and high priority for first few */}
                                        <div className="relative h-60 w-full overflow-hidden">
                                            <Image
                                                src={getFeaturedImage(post)}
                                                alt={post.title.rendered}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                priority={idx < 3}
                                                loading={idx < 3 ? "eager" : "lazy"}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Date Badge */}
                                            <div className="absolute top-4 left-4">
                                                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-800 dark:text-slate-200 shadow-xl flex items-center gap-2">
                                                    <FaCalendarAlt className="text-rose-500 text-[9px]" />
                                                    {formatDate(post.date)}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                <span className="flex items-center gap-1.5"><FaRegClock className="text-rose-500/50" /> {t('blog.minRead') || "5 Min Read"}</span>
                                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                                                <span className="flex items-center gap-1.5"><FaUser className="text-rose-500/50" /> {t('blog.team') || "Aone Team"}</span>
                                            </div>

                                            <h3
                                                className="text-2xl font-black mb-4 leading-tight group-hover:text-rose-500 transition-colors"
                                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                            />

                                            <div
                                                className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3"
                                                dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered }}
                                            />

                                            <div className="mt-auto pt-4 flex items-center justify-between">
                                                <div className="text-[10px] font-black uppercase tracking-widest text-rose-500 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                                                    {t('blog.readMore') || 'Les mer'} <FaChevronRight className="text-xs" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Load More */}
                {totalPages > currentPage && (
                    <div className="mt-20 text-center">
                        <button
                            onClick={loadMore}
                            disabled={loadingMore}
                            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black uppercase text-xs tracking-[0.2em] rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                        >
                            <span className="relative z-10">
                                {loadingMore ? (t('blog.loadingMore') || 'Laster inn...') : (t('blog.loadMore') || 'Last inn mer')}
                            </span>
                            <FaChevronRight className="relative z-10 text-[10px] group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-rose-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default BlogListClient;
