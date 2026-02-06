'use client';

import React, { useState } from 'react';
import { packages } from '../data/packages';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaLaptopCode, FaCheck, FaCrown, FaCameraRetro, FaSearch, FaTools, FaPenNib, FaUsers, FaRobot, FaBullhorn, FaPencilRuler, FaVideo, FaInfoCircle } from 'react-icons/fa';
import Toast from '@/components/Toast';

export default function OrderPage() {
    const [step, setStep] = useState(1);
    const [selectedPack, setSelectedPack] = useState(null);
    const [addons, setAddons] = useState([]);
    const [billingInterval, setBillingInterval] = useState('once'); // 'once' or 'monthly'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        orgNumber: '',
        address: '',
        city: '',
        zip: ''
    });
    const [isSigning, setIsSigning] = useState(false);
    const [isSigned, setIsSigned] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState(null);

    const stepsCount = 6;

    // --- handlers ---

    const handlePackageSelect = (pkg) => {
        if (pkg.isCustom) {
            setToast({ message: 'For custom enterprise solutions, please call us at +47 411 93 111 or email post@aone.no', type: 'info' });
            return;
        }
        setSelectedPack(pkg);
        setStep(2);
    };

    const toggleAddon = (addonId) => {
        if (addons.includes(addonId)) {
            setAddons(addons.filter(id => id !== addonId));
        } else {
            setAddons([...addons, addonId]);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleBankIDSign = async () => {
        setIsSigning(true);
        // Simulate API call to initiate BankID
        setTimeout(() => {
            setIsSigning(false);
            setIsSigned(true);
            setStep(5); // Move to payment
        }, 2500);
    };

    const calculateTotal = () => {
        if (!selectedPack) return { base: 0, addons: 0, monthly: 0 };
        let base = billingInterval === 'monthly' ? selectedPack.monthlyPrice : selectedPack.price;

        const addonsOneTime = packages
            .filter(p => p.isAddon && addons.includes(p.id))
            .reduce((sum, p) => sum + p.price, 0);

        const addonsMonthly = packages
            .filter(p => p.isAddon && addons.includes(p.id))
            .reduce((sum, p) => sum + p.monthlyPrice, 0);

        return {
            base,
            addons: addonsOneTime,
            monthly: (billingInterval === 'monthly' ? selectedPack.monthlyPrice : 0) + addonsMonthly
        };
    };

    const submitOrder = async (method) => {
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/order/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    selectedPack,
                    formData,
                    billingInterval,
                    addons,
                    paymentMethod: method
                })
            });
            if (res.ok) {
                setStep(6);
            } else {
                setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
            }
        } catch (err) {
            console.error(err);
            setToast({ message: 'Error submitting order', type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    // --- Step Components ---

    const StepPackages = () => (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-slate-800 dark:text-white">Choose Your Package</h1>
                <p className="text-slate-600 dark:text-slate-300">Select the plan that fits your growth.</p>

                <div className="flex justify-center items-center gap-4 mt-6">
                    <span className={`text-sm font-semibold ${billingInterval === 'once' ? 'text-rose-500' : 'text-slate-500'}`}>One-time</span>
                    <button
                        onClick={() => setBillingInterval(prev => prev === 'once' ? 'monthly' : 'once')}
                        className="w-14 h-7 bg-slate-200 dark:bg-slate-700 rounded-full p-1 transition-colors relative"
                    >
                        <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${billingInterval === 'monthly' ? 'translate-x-7' : 'translate-x-0'}`} />
                    </button>
                    <span className={`text-sm font-semibold ${billingInterval === 'monthly' ? 'text-rose-500' : 'text-slate-500'}`}>Monthly</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {packages.filter(p => !p.isAddon).map(pkg => (
                    <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            borderColor: selectedPack?.id === pkg.id ? 'var(--rose-500)' : 'transparent'
                        }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className={`relative p-8 rounded-3xl shadow-xl transition-all duration-300 cursor-pointer bg-white dark:bg-slate-900 group border-2 flex flex-col ${selectedPack?.id === pkg.id ? 'border-rose-500 bg-rose-50/30 dark:bg-rose-950/10' : 'border-transparent'}`}
                        onClick={() => handlePackageSelect(pkg)}
                    >
                        {pkg.recommended && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                <FaCrown /> RECOMMENDED
                            </span>
                        )}

                        <div className="flex justify-center mb-6">
                            <div className={`p-4 rounded-full bg-blue-100 text-blue-600`}>
                                <FaLaptopCode className="text-4xl" />
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">{pkg.name}</h3>
                        <div className="text-2xl font-black text-center text-gray-800 dark:text-white mb-6 h-10 flex items-center justify-center">
                            {pkg.isCustom ? (
                                <span className="text-rose-500 uppercase tracking-wider text-xl">Get Quote</span>
                            ) : (
                                <>
                                    {billingInterval === 'monthly' ? `${pkg.monthlyPrice} NOK` : `${pkg.price} NOK`}
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-1">{billingInterval === 'monthly' ? '/mo' : ' once'}</span>
                                </>
                            )}
                        </div>
                        <ul className="space-y-3 mb-8 flex-grow">
                            {pkg.features.map((feat, i) => (
                                <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                                    <FaCheck className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 transform ${selectedPack?.id === pkg.id
                            ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-lg shadow-rose-500/30 scale-[1.05]'
                            : 'bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 hover:scale-[1.02]'}`}>
                            {pkg.isCustom ? 'Contact Us' : `Select ${pkg.name.split(' ')[0]}`}
                        </button>
                    </motion.div>
                ))}
            </div>

        </div>
    );

    const StepAddons = () => (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Enhance Your {selectedPack?.name}</h2>
                <p className="text-slate-600 dark:text-slate-300">Select additional services to maximize your growth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packages.filter(p => p.isAddon).map(pkg => (
                    <motion.div
                        key={pkg.id}
                        whileTap={{ scale: 0.98 }}
                        className={`group relative flex items-center justify-between p-6 rounded-2xl border-2 transition-all cursor-pointer ${addons.includes(pkg.id) ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/20' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-rose-400 dark:hover:border-blue-500/50'}`}
                        onClick={() => toggleAddon(pkg.id)}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl transition-colors ${addons.includes(pkg.id) ? 'bg-white text-rose-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'}`}>
                                {pkg.id === 'photography' && <FaCameraRetro className="text-xl" />}
                                {pkg.id === 'videography' && <FaVideo className="text-xl" />}
                                {pkg.id === 'seo' && <FaSearch className="text-xl" />}
                                {pkg.id === 'logodesign' && <FaPenNib className="text-xl" />}
                                {pkg.id === 'socialmedia' && <FaUsers className="text-xl" />}
                                {pkg.id === 'maintenance' && <FaTools className="text-xl" />}
                                {pkg.id === 'ai-automation' && <FaRobot className="text-xl" />}
                                {pkg.id === 'digital-marketing' && <FaBullhorn className="text-xl" />}
                                {pkg.id === 'uiux-design' && <FaPencilRuler className="text-xl" />}
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h4 className="font-bold text-slate-900 dark:text-white">{pkg.name}</h4>
                                    <div className="relative group/tooltip">
                                        <FaInfoCircle className="text-slate-400 hover:text-rose-500 cursor-help transition-colors text-xs" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-slate-900 text-white text-[10px] rounded-xl opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl border border-white/10">
                                            {pkg.description}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 text-sm text-slate-500">
                                    {pkg.price > 0 && <span>{pkg.price} NOK</span>}
                                    {pkg.monthlyPrice > 0 && <span>{pkg.price > 0 ? '+' : ''} {pkg.monthlyPrice} NOK/mo</span>}
                                </div>
                            </div>
                        </div>
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${addons.includes(pkg.id) ? 'border-rose-500 bg-rose-500 scale-110' : 'border-slate-300'}`}>
                            {addons.includes(pkg.id) && <FaCheck className="text-white text-sm" />}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h3 className="font-bold text-slate-800 dark:text-white">Selected Add-ons: {addons.length}</h3>
                    <p className="text-sm text-slate-500">Total Add-on Price: {calculateTotal().addons} NOK</p>
                </div>
                <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="px-6 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white font-medium transition-colors">Change Package</button>
                    <button onClick={() => setStep(3)} className="bg-gradient-to-r from-rose-500 via-orange-500 to-rose-500 bg-[length:200%_auto] hover:bg-right text-white px-10 py-3 rounded-full font-bold shadow-lg shadow-rose-500/20 hover:scale-105 transition-all duration-300">
                        Next: Your Details
                    </button>
                </div>
            </div>
        </div>
    );

    const StepDetails = () => (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-white">Your Details</h2>
            <div className="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 focus:border-rose-500 focus:bg-white dark:focus:bg-slate-950 transition-all outline-none text-slate-800 dark:text-white font-medium"
                            placeholder="Ola Nordmann"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 focus:border-rose-500 focus:bg-white dark:focus:bg-slate-950 transition-all outline-none text-slate-800 dark:text-white font-medium"
                            placeholder="email@company.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Business Name</label>
                    <input
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 focus:border-rose-500 focus:bg-white dark:focus:bg-slate-950 transition-all outline-none text-slate-800 dark:text-white font-medium"
                        placeholder="Min Bedrift AS"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Organization Number</label>
                    <input
                        name="orgNumber"
                        value={formData.orgNumber}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 focus:border-rose-500 focus:bg-white dark:focus:bg-slate-950 transition-all outline-none text-slate-800 dark:text-white font-medium"
                        placeholder="999 999 999"
                    />
                </div>

                <div className="flex justify-between mt-8">
                    <button onClick={() => setStep(2)} className="px-8 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white font-medium transition-all duration-300 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 rounded-full">Back</button>
                    <button onClick={() => setStep(4)} className="bg-gradient-to-r from-rose-500 via-orange-500 to-rose-500 bg-[length:200%_auto] hover:bg-right text-white px-10 py-3 rounded-full font-bold shadow-lg shadow-rose-500/20 hover:scale-105 transition-all duration-300">
                        Review & Sign
                    </button>
                </div>
            </div>
        </div>
    );

    const StepSign = () => (
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Sign Agreement</h2>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 mb-8 max-w-md mx-auto">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-medium">Package</span>
                    <span className="font-bold">{selectedPack?.name}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Due today</span>
                    <span className="text-2xl font-black text-rose-500">
                        {calculateTotal().base + calculateTotal().addons} NOK
                    </span>
                </div>
                {calculateTotal().monthly > 0 && (
                    <div className="flex justify-between items-center mb-4 text-slate-500">
                        <span className="text-sm">Monthly recurring</span>
                        <span className="font-bold">{calculateTotal().monthly} NOK/mo</span>
                    </div>
                )}

                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-6 text-left text-sm text-slate-600 dark:text-slate-400">
                    <p>By signing, you agree to the Terms of Service. A digital contract will be generated and signed securely via BankID.</p>
                </div>

                {!isSigned ? (
                    <button
                        onClick={handleBankIDSign}
                        disabled={isSigning}
                        className="w-full py-4 bg-[#4d3e8e] hover:bg-[#3b306e] text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-[#4d3e8e]/20 hover:scale-[1.02] disabled:opacity-50"
                    >
                        {isSigning ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Connecting BankID...
                            </>
                        ) : (
                            <>
                                <span className="bg-white text-[#4d3e8e] px-2 py-0.5 rounded text-xs font-black">BankID</span>
                                Sign with BankID
                            </>
                        )}
                    </button>
                ) : (
                    <div className="text-green-500 font-bold flex items-center justify-center gap-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        Successfully Signed!
                    </div>
                )}
            </div>
            <button onClick={() => setStep(3)} className="px-8 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white text-sm font-medium transition-all duration-300 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 rounded-full">Cancel</button>
        </div>
    );

    const StepPayment = () => (
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Complete Payment</h2>
            <p className="text-slate-600 mb-8">Choose your preferred payment method.</p>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <button
                    onClick={() => submitOrder('vipps')}
                    disabled={isSubmitting}
                    className="p-6 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 flex flex-col items-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                    <div className="w-12 h-12 bg-[#FF5B24] rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">V</div>
                    <span className="font-bold text-slate-800 dark:text-white">{isSubmitting ? 'Processing...' : 'Vipps'}</span>
                </button>

                <button
                    onClick={() => submitOrder('card')}
                    disabled={isSubmitting}
                    className="p-6 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 flex flex-col items-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                    <div className="w-12 h-12 bg-[#635BFF] rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">S</div>
                    <span className="font-bold text-slate-800 dark:text-white">{isSubmitting ? 'Processing...' : 'Card (Stripe)'}</span>
                </button>
            </div>
            <div className="mt-8">
                <button onClick={() => setStep(4)} className="px-8 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white text-sm font-medium transition-all duration-300 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 rounded-full">Back to Signing</button>
            </div>
        </div>
    );

    const StepSuccess = () => (
        <div className="max-w-2xl mx-auto text-center py-20 relative overflow-hidden">
            {/* Celebration Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            top: "100%",
                            left: `${Math.random() * 100}%`,
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: 1
                        }}
                        animate={{
                            top: "-10%",
                            left: `${Math.random() * 100}%`,
                            rotate: 360,
                            opacity: 0
                        }}
                        transition={{
                            duration: Math.random() * 2 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                        className={`absolute w-3 h-3 rounded-full ${['bg-rose-500', 'bg-orange-500', 'bg-blue-500', 'bg-emerald-500'][i % 4]}`}
                    />
                ))}
            </div>

            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-24 h-24 bg-gradient-to-tr from-emerald-500 to-teal-400 text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-emerald-500/30"
            >
                <FaCheck className="text-4xl" />
            </motion.div>
            <h1 className="text-5xl font-black text-slate-800 dark:text-white mb-6 tracking-tighter uppercase">You&apos;re all set!</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-lg mx-auto leading-relaxed">
                Thank you for your order, <span className="font-bold text-slate-900 dark:text-white">{formData.name}</span>.<br />
                Your agreement has been sent to <strong>{formData.email}</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="https://crm.aone.no/signup"
                    className="inline-block bg-gradient-to-r from-rose-500 via-orange-500 to-rose-500 bg-[length:200%_auto] hover:bg-right text-white px-12 py-5 rounded-full font-bold shadow-xl shadow-rose-500/30 hover:scale-105 transition-all duration-300 uppercase tracking-widest text-sm"
                >
                    Go to Client Portal
                </a>
                <Link
                    href="/"
                    className="inline-block bg-white dark:bg-slate-900 text-slate-600 dark:text-white px-12 py-5 rounded-full font-bold shadow-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 uppercase tracking-widest text-sm"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );

    // --- UI Helpers ---

    const OrderSummary = () => (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-800 sticky top-32">
            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                Order Summary
            </h3>

            <div className="space-y-4 mb-8">
                <div className="flex justify-between items-start group">
                    <div>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Package</p>
                        <p className="font-bold text-slate-800 dark:text-white">{selectedPack?.name || 'None selected'}</p>
                    </div>
                    <p className="font-bold text-rose-500">
                        {calculateTotal().base} NOK
                    </p>
                </div>

                {addons.length > 0 && (
                    <div>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Add-ons</p>
                        <div className="space-y-2">
                            {packages.filter(p => p.isAddon && addons.includes(p.id)).map(addon => (
                                <div key={addon.id} className="flex justify-between text-sm">
                                    <span className="text-slate-600 dark:text-slate-400">{addon.name}</span>
                                    <span className="font-medium text-slate-800 dark:text-white">+{addon.price} NOK</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-3">
                <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Due Today</span>
                    <span className="text-2xl font-black text-rose-500">
                        {calculateTotal().base + calculateTotal().addons} NOK
                    </span>
                </div>
                {calculateTotal().monthly > 0 && (
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 dark:text-slate-400">Total Monthly</span>
                        <span className="font-bold text-slate-800 dark:text-white">{calculateTotal().monthly} NOK/mo</span>
                    </div>
                )}
            </div>

            {step < 3 && selectedPack && (
                <button
                    onClick={() => setStep(3)}
                    className="w-full mt-8 bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-all"
                >
                    Continue to Details
                </button>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-40 pb-24 px-4">
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

            {/* Progress Bar */}
            <div className="max-w-5xl mx-auto mb-16 relative">
                {/* Background Line */}
                <div className="absolute left-0 top-[22px] w-full h-1 bg-slate-200 dark:bg-slate-800 -z-10 rounded-full" />

                {/* Active Progress Line */}
                <div
                    className="absolute left-0 top-[22px] h-1 bg-gradient-to-r from-rose-500 to-orange-500 transition-all duration-700 ease-in-out -z-10 rounded-full"
                    style={{ width: `${((step - 1) / (stepsCount - 1)) * 100}%` }}
                />

                <div className="flex justify-between items-start">
                    {[
                        { num: 1, label: 'Package' },
                        { num: 2, label: 'Customize' },
                        { num: 3, label: 'Details' },
                        { num: 4, label: 'Sign' },
                        { num: 5, label: 'Payment' },
                        { num: 6, label: 'Done' }
                    ].map((s) => {
                        const isCompleted = step > s.num;
                        const isActive = step === s.num;
                        const isLocked = s.num > step && !selectedPack; // Simple lock: can't go forward without package

                        return (
                            <div
                                key={s.num}
                                className="flex flex-col items-center gap-3 relative group"
                                style={{ width: '80px' }}
                            >
                                <button
                                    onClick={() => !isLocked && setStep(s.num)}
                                    disabled={isLocked}
                                    className={`
                                        w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-all duration-500 relative
                                        ${isCompleted ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20' :
                                            isActive ? 'bg-white dark:bg-slate-900 border-4 border-rose-500 text-rose-500 shadow-xl scale-110' :
                                                'bg-slate-200 dark:bg-slate-800 text-slate-500'}
                                        ${!isLocked ? 'cursor-pointer hover:scale-110' : 'cursor-not-allowed opacity-50'}
                                    `}
                                >
                                    {isActive && (
                                        <div className="absolute inset-[-8px] border-2 border-rose-500/30 rounded-full animate-ping opacity-20" />
                                    )}
                                    {isCompleted ? <FaCheck className="text-[10px] md:text-xs" /> : s.num}
                                </button>
                                <span className={`
                                    hidden sm:block text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-colors duration-300 text-center
                                    ${isActive ? 'text-rose-500' : isCompleted ? 'text-slate-700 dark:text-slate-300' : 'text-slate-400'}
                                `}>
                                    {s.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className={`grid grid-cols-1 ${step > 1 && step < 6 ? 'lg:grid-cols-3' : ''} gap-12`}>
                    <div className={step > 1 && step < 6 ? 'lg:col-span-2' : ''}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                {step === 1 && <StepPackages />}
                                {step === 2 && <StepAddons />}
                                {step === 3 && <StepDetails />}
                                {step === 4 && <StepSign />}
                                {step === 5 && <StepPayment />}
                                {step === 6 && <StepSuccess />}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {step > 1 && step < 6 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hidden lg:block"
                        >
                            <OrderSummary />
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
