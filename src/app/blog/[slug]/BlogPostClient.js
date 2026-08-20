'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import { getFeaturedImage } from '@/lib/wordpress';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaChevronLeft, FaClock, FaUser, FaShareAlt } from 'react-icons/fa';

// `post` arrives already fetched server-side (see page.js's generateMetadata
// / default export) — this component is purely presentational/interactive
// now, no data fetching or loading state of its own.
const BlogPostClient = ({ post }) => {
    const { t, language } = useLanguage();
    const featuredImage = getFeaturedImage(post);
    const postDate = new Date(post.date).toLocaleDateString(language === 'no' ? 'nb-NO' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="post-single bg-slate-50 dark:bg-slate-950 min-h-screen pb-24">
            <HeroSection
                title={post.title.rendered}
                subtitle={t('blog.exclusiveSubtitle') || "Exclusive Deep-Dive & Strategic Insights"}
            />

            <section className="container mx-auto px-6 -mt-20 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 group transition-colors">
                        <FaChevronLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest">
                            {t('blog.backToBlog') || "Repository Archive"}
                        </span>
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
                                            <p className="text-[10px] uppercase font-black tracking-widest opacity-60">
                                                {t('blog.architect') || "Architect"}
                                            </p>
                                            <p className="text-sm font-bold">
                                                {t('blog.team') || "Aone Team"}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-white/90">
                                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                                            <FaCalendarAlt className="text-xs text-rose-500" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase font-black tracking-widest opacity-60">
                                                {t('blog.published') || "Published"}
                                            </p>
                                            <p className="text-sm font-bold">{postDate}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-white/90">
                                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                                            <FaClock className="text-xs text-rose-500" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase font-black tracking-widest opacity-60">
                                                {t('blog.pulse') || "Pulse"}
                                            </p>
                                            <p className="text-sm font-bold">
                                                {t('blog.readTime') || "8 Min Read"}
                                            </p>
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
                                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 mr-2">
                                            {t('blog.filedUnder') || "Filed Under:"}
                                        </span>
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
                                    <FaChevronLeft className="text-[10px]" /> {t('blog.backToRepository') || "Back to Repository"}
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

export default BlogPostClient;
