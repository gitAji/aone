"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import Image from "next/image";
import products from "@/app/data/products";
import { useLanguage } from "@/context/LanguageContext";

const ProductsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="products-page bg-gray-50 min-h-screen">
      <HeroSection
        title={t('nav.products')}
        subtitle={t('productsPage.subtitle') || "Explore our dedicated SaaS systems and platforms"}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter">
            {t('productsPage.header') || "Our Cloud Solutions"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  {product.imageUrl && (
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-3xl font-bold text-white tracking-tight">{product.title}</h3>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-1">
                    {product.description}
                  </p>
                  
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
                    
                    <a
                      href={product.subdomain}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-rose-500 transition-colors shadow-md"
                    >
                      Visit Platform
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
