"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const brandingProjects = [
    {
        name: "WebDesign UK",
        category: "Digital Agency",
        image: "/images/brand design/webdesignuk.jpg",
        className: "md:col-span-2 md:row-span-2 h-[600px]",
    },
    {
        name: "Shop Front",
        category: "Retail Brand",
        image: "/images/brand design/shop front sticker.jpg",
        className: "md:col-span-1 md:row-span-3 h-[600px] md:h-full",
    },
    {
        name: "AR Const",
        category: "Architecture",
        image: "/images/brand design/Ar constructions.jpg",
        className: "col-span-1 h-[300px]",
    },
    {
        name: "CTB Solutions",
        category: "Tech Identity",
        image: "/images/brand design/ctb solutions.jpeg",
        className: "col-span-1 h-[300px]",
    },
    {
        name: "AI Agent",
        category: "AI Identity",
        image: "/images/brand design/AI Agent.png",
        className: "col-span-1 h-[250px]",
    },
    {
        name: "Invitation",
        category: "Event Branding",
        image: "/images/brand design/Invitation.png",
        className: "col-span-1 h-[250px]",
    },
];

const BrandingShowcase = () => {
    return (
        <section className="py-24 bg-white dark:bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                
                {/* Sleek Header */}
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <motion.span 
                            className="inline-block text-rose-500 font-black uppercase tracking-[0.4em] text-xs mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            Design Atelier
                        </motion.span>
                        <motion.h2 
                            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter uppercase"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Identity <br />
                            <span className="text-transparent" style={{ WebkitTextStroke: '1px currentColor', opacity: 0.3 }}>Showcase</span>
                        </motion.h2>
                    </div>
                    <motion.p 
                        className="text-slate-500 dark:text-slate-400 text-lg max-w-sm font-medium leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Bespoke visual narratives crafted with precision and global design standards.
                    </motion.p>
                </div>

                {/* Re-Architected Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
                    {brandingProjects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            className={`group relative overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 cursor-pointer ${project.className}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] grayscale group-hover:grayscale-0 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            
                            {/* The Sleek Hover Reveal */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px] flex flex-col justify-end p-10">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    className="space-y-2"
                                >
                                    <span className="text-rose-400 text-[10px] font-black uppercase tracking-[0.3em]">
                                        {project.category}
                                    </span>
                                    <h3 className="text-white text-3xl font-black tracking-tighter leading-none italic uppercase">
                                        {project.name}
                                    </h3>
                                    <div className="h-[2px] w-12 bg-rose-500 mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                </motion.div>
                            </div>

                            {/* Corner Identity Badge */}
                            <div className="absolute top-8 left-8 flex items-center gap-3 transition-opacity duration-300 group-hover:opacity-0">
                                <div className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-[10px] text-white font-black">
                                    0{index + 1}
                                </div>
                                <span className="text-white/40 text-[10px] font-black uppercase tracking-widest hidden md:block">
                                    {project.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                    
                    {/* Minimalist CTA Fragment - Now at the end */}
                    <div className="md:col-span-1 h-[250px] flex flex-col justify-between p-8 rounded-[2.5rem] border border-dashed border-slate-300 dark:border-white/10 text-left bg-slate-50/50 dark:bg-white/5 group">
                        <div className="space-y-4">
                            <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase leading-none tracking-tighter italic">Elevate Your Presence</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed">Let&apos;s engineer your visual legacy.</p>
                        </div>
                        <a href="/contact" className="mt-8 md:mt-0 px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-black text-[9px] uppercase tracking-widest hover:scale-110 transition-transform w-[120px] text-center">
                            Start Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandingShowcase;
