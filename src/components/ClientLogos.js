"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Curated logos - professional businesses only, ordered for visual balance
const clients = [
    { name: "Quick Consultant", logo: "/images/projects/QFS/logo.png" },
    { name: "Rent My Property", logo: "/images/projects/rentmyproperty/logo.png" },
    { name: "Tulips", logo: "/images/projects/tulips/logo.png" },
    { name: "Clean Masters", logo: "/images/clients/clean.png" },
    { name: "Rent Cars", logo: "/images/projects/rentcars/logo.png" },
    { name: "Saray", logo: "/images/clients/saray.png" },
];

const ClientLogos = () => {
    return (
        <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-4">
                <motion.p
                    className="text-center text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-8 font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Helping 100+ businesses dominate the digital era
                </motion.p>
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
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
