'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaShoppingBag, FaBolt, FaGlobeEurope, FaStoreAlt, FaPalette, FaCreditCard, FaTruck, FaBoxes, FaChartBar } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const OnlineStoreClient = () => {
  const { t } = useLanguage();

  return (
    <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title={t('services.onlineStore.title')}
        subtitle={t('services.onlineStore.description')}
      />

      {/* Why Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tighter"
        >
          Launch Faster, Sell Sooner
        </motion.h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
          Shopify and WooCommerce are the fastest proven path from idea to selling online -- whether you're stocking your own products or running a dropshipping business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaBolt className="text-5xl text-rose-500 mb-6" />,
              title: "Fast to Launch",
              description: "A proven, battle-tested platform means weeks to launch, not months of custom development.",
            },
            {
              icon: <FaStoreAlt className="text-5xl text-rose-500 mb-6" />,
              title: "Built to Sell",
              description: "Payments, shipping, tax, and checkout -- all handled by platforms designed for conversion.",
            },
            {
              icon: <FaGlobeEurope className="text-5xl text-rose-500 mb-6" />,
              title: "Scales With You",
              description: "From your first order to thousands a month, the same platform grows with your business.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-10 bg-white dark:bg-slate-900 rounded-3xl shadow-xl hover:shadow-rose-500/5 border border-slate-100 dark:border-slate-800 transition-all duration-300"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-slate-900 dark:bg-black text-white border-y border-slate-800">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter"
          >
            Everything In The Online Store
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaShoppingBag className="text-4xl text-rose-500 mb-4" />, title: "Shopify Setup", desc: "Full store build on Shopify, from theme to product catalog to go-live." },
              { icon: <FaStoreAlt className="text-4xl text-rose-500 mb-4" />, title: "WooCommerce Setup", desc: "A WordPress-based store on WooCommerce for full ownership and flexibility." },
              { icon: <FaBoxes className="text-4xl text-rose-500 mb-4" />, title: "Dropshipping Stores", desc: "Supplier integration, automated order routing, and a store built for dropshipping from day one." },
              { icon: <FaPalette className="text-4xl text-rose-500 mb-4" />, title: "Custom Theming", desc: "A storefront that matches your brand, not a stock template everyone else uses." },
              { icon: <FaCreditCard className="text-4xl text-rose-500 mb-4" />, title: "Payments & Checkout", desc: "Vipps, Klarna, card payments, and a checkout flow tuned to reduce cart abandonment." },
              { icon: <FaTruck className="text-4xl text-rose-500 mb-4" />, title: "Shipping & Tax", desc: "Shipping rules, carrier integration, and tax setup configured correctly for Norway and beyond." },
              { icon: <FaChartBar className="text-4xl text-rose-500 mb-4" />, title: "Store Analytics", desc: "Sales, inventory, and customer reporting so you always know what's selling." },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center p-10 bg-slate-800/20 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-rose-500/50 transition-all duration-300 text-center"
              >
                {service.icon}
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-24 bg-white dark:bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter uppercase">
              Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">Selling</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
              Join online businesses running on Shopify and WooCommerce stores built to sell.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/pricing"
                className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-amber-500 text-white py-5 px-12 rounded-full hover:scale-105 transition-all duration-300 text-xl font-black shadow-xl uppercase tracking-tighter"
              >
                Get Started
              </Link>
              <Link
                href="/free-consultation"
                className="w-full sm:w-auto py-5 px-12 rounded-full border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 text-xl font-black uppercase tracking-tighter"
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OnlineStoreClient;
