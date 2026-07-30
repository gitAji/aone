"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Curated logos - professional businesses only, ordered for visual balance
const clients = [
    { name: "Quick Consultant", logo: "/images/projects/qfs.jpg" },
    { name: "Rent My Property", logo: "/images/projects/rentmyproperty/logo.png" },
    { name: "Tulips", logo: "/images/projects/tulips/logo.png" },
    { name: "Clean Masters", logo: "/images/clients/clean.png" },
    { name: "Rent Cars", logo: "/images/projects/rentcars/logo.png" },
    { name: "Saray", logo: "/images/clients/saray.png" },
];

const ClientLogos = () => {
    return (
        <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-10 max-w-xl mx-auto">
                    <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
                    <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 whitespace-nowrap">
                        Trusted by ambitious businesses
                    </p>
                    <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            className="relative h-10 w-20 md:h-12 md:w-28 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 0.5, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 80px, 112px"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
