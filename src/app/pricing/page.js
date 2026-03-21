'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { packages } from '../data/packages';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { FaCheck, FaCrown, FaRocket, FaShieldAlt, FaArrowRight, FaZap, FaStar, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';
import HeroSection from '@/components/HeroSection';

const PricingCard = ({ pkg, billingInterval, index }) => {
    const { t } = useLanguage();
    const isRecommended = pkg.recommended;
    
    // Determine the price to display
    const displayPrice = billingInterval === 'once' ? pkg.price : pkg.monthlyPrice;
    const intervalLabel = billingInterval === 'once' ? 'once' : 'mo';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group h-full flex flex-col p-6 md:p-8 rounded-[2rem] transition-all duration-500 ${
                isRecommended 
                ? 'bg-slate-900 text-white shadow-2xl shadow-rose-500/10 scale-105 border-0' 
                : 'bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white border border-slate-100 dark:border-slate-800'
            }`}
        >
            {isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-2xl font-black mb-2 tracking-tight uppercase">{pkg.name}</h3>
                <p className={`text-sm leading-relaxed ${isRecommended ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                    {pkg.description}
                </p>
            </div>

            <div className="mb-10">
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-black tracking-tighter">
                        {pkg.isCustom ? 'Custom' : `${displayPrice.toLocaleString()} NOK`}
                    </span>
                    {!pkg.isCustom && (
                        <span className={`text-sm font-bold uppercase tracking-widest ${isRecommended ? 'text-slate-500' : 'text-slate-400'}`}>
                            /{intervalLabel}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex-grow space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${isRecommended ? 'bg-rose-500/20 text-rose-400' : 'bg-rose-500/10 text-rose-500'}`}>
                            <FaCheck className="text-[10px]" />
                        </div>
                        <span className={`text-sm font-medium ${isRecommended ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
                            {feature}
                        </span>
                    </div>
                ))}
            </div>

            <Link
                href={`/order?package_id=${pkg.id}&billing=${billingInterval}`}
                className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-300 ${
                    isRecommended
                    ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white hover:shadow-xl hover:shadow-rose-500/20 hover:scale-[1.02]'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
            >
                {pkg.isCustom ? 'Contact us' : 'Get Started'}
                <FaArrowRight className={`text-[10px] transform transition-transform group-hover:translate-x-1`} />
            </Link>
        </motion.div>
    );
};

export default function PricingPage() {
    const { t } = useLanguage();
    const [billingInterval, setBillingInterval] = useState('monthly');

    const mainPackages = packages.filter(p => !p.isAddon);
    const addonPackages = packages.filter(p => p.isAddon);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#020617] pb-32">
            <HeroSection 
                title={t('nav.pricing')} 
                subtitle="High-performance, AI-native solutions with transparent pricing tailored for your growth." 
            />

            <div className="container mx-auto px-6 -mt-20 relative z-20">
                {/* Billing Toggle */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center shadow-xl">
                        <button
                            onClick={() => setBillingInterval('once')}
                            className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                                billingInterval === 'once'
                                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                            }`}
                        >
                            One-time Build
                        </button>
                        <button
                            onClick={() => setBillingInterval('monthly')}
                            className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative ${
                                billingInterval === 'monthly'
                                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                            }`}
                        >
                            Monthly Sub
                            <span className="absolute -top-3 -right-3 px-2 py-0.5 bg-emerald-500 text-white text-[8px] font-black rounded-full">
                                SAVE
                            </span>
                        </button>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32 max-w-7xl mx-auto">
                    {mainPackages.map((pkg, i) => (
                        <PricingCard key={pkg.id} pkg={pkg} billingInterval={billingInterval} index={i} />
                    ))}
                </div>

                {/* Add-ons Section */}
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase inline-block bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-500">
                            Power Up Your Solution
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">
                            Optional modules to enhance your platform's capabilities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {addonPackages.map((addon, i) => (
                            <motion.div
                                key={addon.id}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="group bg-white dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-rose-500/20 transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-lg"
                            >
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-black text-sm uppercase tracking-wider text-slate-900 dark:text-white">
                                            {addon.name}
                                        </h4>
                                        {addon.monthlyPrice > 0 && (
                                            <span className="text-[8px] font-black px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded uppercase">
                                                Recurring
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[280px]">
                                        {addon.description}
                                    </p>
                                </div>
                                <div className="text-right flex flex-col items-end gap-3">
                                    <div className="text-lg font-black text-slate-900 dark:text-white">
                                        {billingInterval === 'monthly' && addon.monthlyPrice > 0 
                                            ? `${addon.monthlyPrice} NOK` 
                                            : `${addon.price} NOK`}
                                        <span className="text-[10px] text-slate-400 font-bold uppercase ml-1">
                                            {billingInterval === 'monthly' && addon.monthlyPrice > 0 ? '/mo' : '/once'}
                                        </span>
                                    </div>
                                    <Link 
                                        href={`/order?package_id=growth&addons=${addon.id}`}
                                        className="text-[10px] font-black uppercase tracking-widest text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                                    >
                                        Inquire <FaArrowRight className="text-[8px]" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Trust/FAQ Section */}
                <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto text-2xl">
                            <FaShieldAlt />
                        </div>
                        <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-900 dark:text-white">Secure Payments</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            All transactions are encrypted and processed securely by Stripe. We never store your card details.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-900 dark:text-white">Quality Guarantee</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            We pride ourselves on delivery excellence. All packages include a 30-day post-launch support period.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto text-2xl">
                            <FaRocket />
                        </div>
                        <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-900 dark:text-white">Fast Onboarding</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            Once your order is placed, our team will reach out within 24 hours to begin your digital transformation.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
