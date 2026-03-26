"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import products from "@/app/data/products";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import { useLanguage } from "@/context/LanguageContext";

const ProductDetailPage = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const slug = pathname.split('/').pop();
  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  const currentIndex = products.findIndex(p => p.id === slug);
  const prevProduct = products[(currentIndex - 1 + products.length) % products.length];
  const nextProduct = products[(currentIndex + 1) % products.length];

  return (
    <div className="project-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
      <HeroSection title={product.title} subtitle={product.description} />

      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative z-20">
        <Link href={prevProduct.projectLink} className="flex items-center text-slate-800 dark:text-slate-200 hover:text-rose-500 transition-colors duration-300">
          <FaArrowLeft className="mr-2" /> {prevProduct.title}
        </Link>
        <Link href={nextProduct.projectLink} className="flex items-center text-slate-800 dark:text-slate-200 hover:text-rose-500 transition-colors duration-300">
          {nextProduct.title} <FaArrowRight className="ml-2" />
        </Link>
      </div>

      <section className="py-16 bg-white dark:bg-[#020617] transition-colors duration-500">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-8 text-center uppercase tracking-tighter">
            {product.title}
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium">
                {product.overview.description1}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium">
                {product.overview.description2}
              </p>
              
              <div className="mt-8">
                <Link
                  href="/free-consultation"
                  className="inline-block bg-rose-500 text-white font-bold tracking-widest uppercase px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-rose-600 hover:-translate-y-1 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={product.imageUrl}
                alt={`${product.title} Platform`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tight border-b-2 border-slate-200 dark:border-slate-800 pb-4">Core Features</h3>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-slate-700 dark:text-slate-200 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tight border-b-2 border-slate-200 dark:border-slate-800 pb-4">Technologies</h3>
              <ul className="space-y-4">
                {product.technologies.map((tech, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-slate-700 dark:text-slate-200 font-medium">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            {t('projectDetail.ctaTitle') || "Ready to elevate your online presence?"}
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Contact us today to integrate our intelligent, scalable SaaS solutions directly into your custom workflow.
          </p>
          <Link
            href="/free-consultation"
            className="inline-block bg-[#ffffff] !text-slate-900 uppercase font-black tracking-widest py-4 px-10 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-rose-500/30"
          >
            {t('projectDetail.ctaButton') || "Get a Free Consultation"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
