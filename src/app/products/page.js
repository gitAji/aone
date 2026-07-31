"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import Image from "next/image";
import products from "@/app/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProductsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="products-page bg-slate-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title={t('nav.products')}
        subtitle={t('productsPage.subtitle') || "Explore our dedicated SaaS systems and platforms"}
      />

      <section className="py-24 bg-white dark:bg-[#020617] transition-colors duration-500">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-16 text-center uppercase tracking-tighter">
            {t('productsPage.header') || "Our Cloud Solutions"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {products.map((product) => (
              <div key={product.id} className="group bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 hover:shadow-rose-500/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <div className="relative h-64 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  {product.imageUrl && (
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  {/* Stronger overlay gradient for text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <h3 
                      className="text-3xl font-bold tracking-tight drop-shadow-md brightness-150"
                      style={{ color: '#ffffff' }}
                    >
                      {product.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <p 
                    className="font-medium leading-relaxed mb-6 flex-1"
                    style={{ color: '#f8fafc' }}
                  >
                    {product.description}
                  </p>
                  
                  {product.subdomain && (
                    <a
                      href={product.subdomain}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-300 hover:text-rose-400 font-semibold text-sm mb-6 transition-colors w-fit"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      {t('productsPage.liveDemo') || "Se live demo"}
                    </a>
                  )}

                  <div className="flex items-center justify-between mt-auto">
                    <Link
                      href={product.projectLink}
                      className="text-rose-500 font-bold uppercase tracking-wider text-sm hover:text-rose-600 flex items-center gap-2 group/link transition-colors"
                    >
                      {t('referencesPage.viewDetails') || "View Details"}
                      <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>

                    <Link
                      href="/free-consultation"
                      className="inline-block px-5 py-2.5 rounded-full text-sm font-bold hover:bg-rose-500 hover:text-white transition-all shadow-md active:scale-95"
                      style={{ backgroundColor: '#ffffff', color: '#0f172a' }}
                    >
                      {t('projectDetail.ctaButton') || "Få en gratis konsultasjon"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — matches the pattern on /services and product detail pages */}
      <section className="cta py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            {t('projectDetail.ctaTitle') || "Klar for å løfte din online tilstedeværelse?"}
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            {t('productsPage.ctaSubtitle') || "Kontakt oss for å finne ut hvilken løsning som passer best for din bedrift."}
          </p>
          <Link
            href="/free-consultation"
            className="inline-block bg-white !text-slate-900 uppercase font-black tracking-widest py-4 px-10 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-rose-500/30"
          >
            {t('projectDetail.ctaButton') || "Få en gratis konsultasjon"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
