"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
    { name: "Saray", logo: "/images/clients/saray.png" },
    { name: "Clean Masters", logo: "/images/clients/clean.png" },
    { name: "Saray Sange", logo: "/images/clients/saraysange.png" },
    { name: "Shop Front", logo: "/images/clients/shop-front.png" },
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
                    Trusted by businesses across Norway
                </motion.p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            className="relative h-12 w-24 md:h-16 md:w-32 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 0.6, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 96px, 128px"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
