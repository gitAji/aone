'use client';

import React, { useState, useEffect, Suspense, useCallback, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { packages } from '../data/packages';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaLaptopCode, FaCheck, FaCrown, FaCameraRetro, FaSearch, FaTools, FaPenNib, FaUsers, FaRobot, FaBullhorn, FaPencilRuler, FaVideo, FaInfoCircle, FaTruck, FaSpinner, FaCreditCard, FaLock, FaCalendarAlt, FaShieldAlt } from 'react-icons/fa';
import Toast from '@/components/Toast';

function OrderPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // URL Parameters
    const initialStep = searchParams.get('step') ? parseInt(searchParams.get('step')) : 1;
    const initialOrderId = searchParams.get('order_id') || null;
    const paymentStatus = searchParams.get('status') || null;

    const [step, setStep] = useState(initialStep);
    const [orderId, setOrderId] = useState(initialOrderId || `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoadingOrder, setIsLoadingOrder] = useState(!!initialOrderId);
    const [toast, setToast] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);

    const stepsCount = 4;
    const syncTimeoutRef = useRef(null);

    // --- State Persistence (Sync to Firestore) ---
    // Wrapped in useCallback but we'll use a ref for the latest data to avoid dependency-related re-renders
    const syncState = useCallback(async (overrides = {}) => {
        const totals = calculateTotal();
        try {
            await fetch('/api/order/sync', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    orderId,
                    step: overrides.step || step,
                    selectedPack,
                    addons,
                    formData,
                    billingInterval,
                    status: overrides.status || 'draft',
                    totalAmount: totals.total,
                    ...overrides
                })
            });
        } catch (err) {
            console.error('Failed to sync state:', err);
        }
    }, [orderId, step, selectedPack, addons, formData, billingInterval]);

    // Re-hydrate state from database on mount if order_id is present
    useEffect(() => {
        if (initialOrderId) {
            const fetchOrder = async () => {
                setIsLoadingOrder(true);
                try {
                    const res = await fetch(`/api/order/sync?order_id=${initialOrderId}`);
                    const json = await res.json();
                    if (json.success && json.data) {
                        const data = json.data;
                        if (data.package) setSelectedPack(data.package);
                        if (data.addons) setAddons(data.addons);
                        if (data.formData) setFormData(data.formData);
                        if (data.billingInterval) setBillingInterval(data.billingInterval);

                        // Aggressively set totalAmount to avoid 0 NOK display
                        const fetchedTotal = data.totalAmount || data.totalPrice || 0;
                        if (fetchedTotal > 0) setTotalAmount(fetchedTotal);

                        // Handle hydration and post-payment redirects
                        if (paymentStatus === 'success' || data.status === 'completed') {
                            if (paymentStatus === 'success' && data.status !== 'completed') {
                                try {
                                    // Use existing total if available, otherwise recalculate
                                    let finalTotal = fetchedTotal;
                                    if (finalTotal === 0 && data.package) {
                                        const b = data.billingInterval === 'monthly' ? data.package.monthlyPrice : data.package.price;
                                        const a = data.addons?.reduce((s, id) => s + (packages.find(p => p.id === id)?.price || 0), 0) || 0;
                                        finalTotal = b + a;
                                    }

                                    await fetch('/api/order/sync', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({
                                            orderId: initialOrderId,
                                            status: 'completed',
                                            step: 4,
                                            totalAmount: finalTotal
                                        })
                                    });
                                    if (finalTotal > 0) setTotalAmount(finalTotal);
                                } catch (e) {
                                    console.error('Final sync failed:', e);
                                }
                            }
                            setStep(4);
                        } else if (paymentStatus === 'cancel') {
                            setToast({ message: 'Payment cancelled.', type: 'info' });
                            setStep(3);
                        } else if (data.currentStep) {
                            setStep(data.currentStep);
                        }
                    }
                } catch (err) {
                    console.error('Failed to fetch order:', err);
                } finally {
                    setIsLoadingOrder(false);
                }
            };
            fetchOrder();
        }
    }, [initialOrderId, initialStep, paymentStatus]);

    // Debounced sync to avoid focus loss and multiple calls during typing
    useEffect(() => {
        if (!selectedPack || step === 4) return;

        if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
        syncTimeoutRef.current = setTimeout(() => {
            syncState();
        }, 1000); // 1s debounce

        return () => {
            if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
        };
    }, [step, selectedPack, addons, formData, billingInterval, syncState]);

    // --- handlers ---

    const handlePackageSelect = (pkg) => {
        if (pkg.isCustom) {
            router.push('/contact');
            return;
        }
        setSelectedPack(pkg);
        setStep(2);
    };

    const toggleAddon = (addonId) => {
        setAddons(prev => prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const calculateTotal = () => {
        if (!selectedPack) return { base: 0, addons: 0, monthly: 0, total: 0 };
        let base = billingInterval === 'monthly' ? selectedPack.monthlyPrice : selectedPack.price;

        const addonsOneTime = packages
            .filter(p => p.isAddon && addons.includes(p.id))
            .reduce((sum, p) => sum + p.price, 0);

        const addonsMonthly = packages
            .filter(p => p.isAddon && addons.includes(p.id))
            .reduce((sum, p) => sum + p.monthlyPrice, 0);

        const total = base + addonsOneTime;

        return {
            base,
            addons: addonsOneTime,
            monthly: (billingInterval === 'monthly' ? selectedPack.monthlyPrice : 0) + addonsMonthly,
            total
        };
    };

    const submitOrder = async (method) => {
        if (!formData.name || !formData.email) {
            setToast({ message: 'Please fill in your name and email', type: 'error' });
            return;
        }

        setIsSubmitting(true);
        await syncState({ status: 'awaiting_payment' });

        try {
            if (method === 'card') {
                const res = await fetch('/api/checkout/stripe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        orderId,
                        package: selectedPack,
                        addons,
                        formData,
                        billingInterval
                    })
                });
                const data = await res.json();
                if (data.url) {
                    window.location.href = data.url;
                    return;
                }
                throw new Error(data.error || 'Failed to create stripe session');
            }

            const res = await fetch('/api/order/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    orderId,
                    package: selectedPack,
                    addons,
                    formData,
                    billingInterval,
                    paymentMethod: method
                })
            });
            if (res.ok) {
                await syncState({ step: 4, status: 'completed' });
                setStep(4);
            } else {
                setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
            }
        } catch (err) {
            console.error(err);
            setToast({ message: err.message || 'Error submitting order', type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    // --- UI Helpers ---

    const renderOrderSummary = () => (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 sticky top-28">
            <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                Order Summary
            </h3>

            <div className="space-y-6 mb-8">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Package</p>
                        <p className="font-bold text-slate-900 dark:text-white">{selectedPack?.name || 'None selected'}</p>
                    </div>
                </div>

                {addons.length > 0 && (
                    <div className="pt-4 border-t border-slate-50 dark:border-slate-800">
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Customizations</p>
                        <div className="space-y-3">
                            {packages.filter(p => p.isAddon && addons.includes(p.id)).map(addon => (
                                <div key={addon.id} className="flex justify-between text-sm">
                                    <span className="text-slate-600 dark:text-slate-400">{addon.name}</span>
                                    <span className="font-bold text-slate-900 dark:text-white">+{addon.price} NOK</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-slate-950 dark:text-slate-200 font-black uppercase text-[10px] tracking-widest">Total Amount</span>
                    <span className="text-3xl font-black text-slate-950 dark:text-white">
                        {calculateTotal().total} NOK
                    </span>
                </div>

                {step < 3 && selectedPack && (
                    <button
                        onClick={() => setStep(3)}
                        className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-xl font-bold text-sm transition-all hover:opacity-90 active:scale-95"
                    >
                        Review & Checkout
                    </button>
                )}
            </div>
        </div>
    );

    if (isLoadingOrder) {
        return (
            <div className="h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center gap-4">
                <FaSpinner className="text-4xl text-rose-500 animate-spin" />
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] animate-pulse">Initializing Engine...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-32 px-4 shadow-inner">
            <div className="max-w-6xl mx-auto">
                {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

                {/* Simplified Progress Bar */}
                <div className={`max-w-2xl mx-auto mb-16 ${step === 4 ? 'hidden' : ''}`}>
                    <div className="flex justify-between items-center relative">
                        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 z-0" />
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="relative z-10 flex flex-col items-center gap-2">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step >= s ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                                        }`}
                                >
                                    {step > s ? <FaCheck className="text-xs" /> : s}
                                </div>
                                <span className={`text-[10px] font-bold uppercase tracking-widest ${step >= s ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
                                    {s === 1 ? 'Package' : s === 2 ? 'Add-ons' : 'Checkout'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {step === 1 && (
                                <div className="space-y-12">
                                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                                            Choose Your Plan
                                        </h1>
                                        <p className="text-slate-500 dark:text-slate-400">
                                            Select the perfect base for your digital project. You can customize details in the next step.
                                        </p>

                                        <div className="flex justify-center pt-8">
                                            <div className="bg-slate-50 dark:bg-slate-900 p-1 rounded-xl flex border border-slate-200 dark:border-slate-800">
                                                <button
                                                    onClick={() => setBillingInterval('once')}
                                                    className={`px-8 py-2.5 rounded-lg text-xs font-bold transition-all ${billingInterval === 'once' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500'}`}
                                                >
                                                    One-time
                                                </button>
                                                <button
                                                    onClick={() => setBillingInterval('monthly')}
                                                    className={`px-8 py-2.5 rounded-lg text-xs font-bold transition-all ${billingInterval === 'monthly' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500'}`}
                                                >
                                                    Monthly
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {packages.filter(p => !p.isAddon).map(pkg => (
                                            <div
                                                key={pkg.id}
                                                onClick={() => handlePackageSelect(pkg)}
                                                className={`p-10 rounded-3xl cursor-pointer border-2 transition-all flex flex-col h-full relative group ${selectedPack?.id === pkg.id ? 'border-slate-900 dark:border-white' : 'border-slate-100 dark:border-slate-800 hover:border-slate-200'}`}
                                            >
                                                {pkg.recommended && (
                                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest z-20">
                                                        Recommended
                                                    </div>
                                                )}

                                                <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">{pkg.name}</h3>
                                                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                                    {pkg.isCustom ? 'Contact' : `${billingInterval === 'monthly' ? pkg.monthlyPrice : pkg.price} NOK`}
                                                    {!pkg.isCustom && <span className="text-sm text-slate-400 font-normal ml-1">/{billingInterval === 'monthly' ? 'mo' : 'once'}</span>}
                                                </div>

                                                <ul className="space-y-4 mb-8 flex-grow">
                                                    {pkg.features.slice(0, 5).map((f, i) => (
                                                        <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-3">
                                                            <FaCheck className="text-emerald-500 text-xs" /> {f}
                                                        </li>
                                                    ))}
                                                </ul>

                                                <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${selectedPack?.id === pkg.id ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white'}`}>
                                                    {pkg.isCustom ? 'Contact Us' : 'Select Plan'}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto pt-12">
                                    <div className="lg:col-span-2 space-y-8">
                                        <div>
                                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Enhance Your Project</h2>
                                            <p className="text-slate-500">Select additional services to supercharge your platform.</p>
                                        </div>
                                        <div className="grid grid-cols-1 gap-4">
                                            {packages.filter(p => p.isAddon).map(pkg => (
                                                <div
                                                    key={pkg.id}
                                                    onClick={() => toggleAddon(pkg.id)}
                                                    className={`p-6 rounded-2xl cursor-pointer border-2 transition-all flex items-center justify-between group ${addons.includes(pkg.id) ? 'border-slate-900 dark:border-white bg-slate-50 dark:bg-slate-900' : 'border-slate-100 dark:border-slate-800 hover:border-slate-200'}`}
                                                >
                                                    <div className="flex items-center gap-6">
                                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${addons.includes(pkg.id) ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                                                            {pkg.id === 'seo' ? <FaSearch /> : <FaTools />}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-sm text-slate-900 dark:text-white">{pkg.name}</p>
                                                            <p className="text-sm text-slate-500">{pkg.price} NOK</p>
                                                        </div>
                                                    </div>
                                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${addons.includes(pkg.id) ? 'bg-slate-900 dark:bg-white border-slate-900 dark:border-white' : 'border-slate-200'}`}>
                                                        {addons.includes(pkg.id) && <FaCheck className="text-[10px] text-white dark:text-slate-900" />}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="relative pt-12">
                                        {renderOrderSummary()}
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto pt-12">
                                    <div className="lg:col-span-2 space-y-8">
                                        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-8">
                                            <div>
                                                <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-1">Company Details</h3>
                                                <p className="text-sm text-slate-500">Please provide your information for the agreement.</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contact Name</label>
                                                    <input name="name" value={formData.name} onChange={handleInputChange} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all text-sm" placeholder="John Doe" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                                                    <input name="email" value={formData.email} onChange={handleInputChange} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all text-sm" placeholder="john@example.com" type="email" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Company Name</label>
                                                    <input name="businessName" value={formData.businessName} onChange={handleInputChange} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all text-sm" placeholder="Company AS" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Address</label>
                                                    <input name="address" value={formData.address} onChange={handleInputChange} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all text-sm" placeholder="Street Address" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Postal Code</label>
                                                    <input name="zip" value={formData.zip} onChange={handleInputChange} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all text-sm" placeholder="0000" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">City</label>
                                                    <input name="city" value={formData.city} onChange={handleInputChange} className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all text-sm" placeholder="Ex: Oslo" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-slate-900 dark:bg-white p-8 rounded-3xl text-white dark:text-slate-900 shadow-xl">
                                            <div className="mb-8 border-b border-white/20 dark:border-slate-200 pb-6 text-left">
                                                <p className="text-xs font-black text-white dark:text-slate-950 uppercase tracking-[0.2em] mb-3">Total Amount</p>
                                                <h3 className="text-5xl font-black text-white dark:text-slate-950">
                                                    {calculateTotal().total || totalAmount} <span className="text-xl font-bold">NOK</span>
                                                </h3>
                                            </div>

                                            <div className="space-y-3">
                                                <button
                                                    onClick={() => submitOrder('card')}
                                                    disabled={isSubmitting}
                                                    className="w-full py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl font-bold text-sm flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50"
                                                >
                                                    {isSubmitting ? <FaSpinner className="animate-spin" /> : <><FaCreditCard /> Pay with Card</>}
                                                </button>
                                                <button
                                                    onClick={() => submitOrder('vipps')}
                                                    disabled={isSubmitting}
                                                    className="w-full py-4 bg-[#FF5B24] text-white rounded-xl font-bold text-sm transition-all active:scale-95 disabled:opacity-50"
                                                >
                                                    Vipps
                                                </button>
                                            </div>

                                            <div className="mt-6 flex items-center gap-3">
                                                <FaLock className="text-xs text-slate-400" />
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight leading-tight">
                                                    Secure payment processed by Stripe. No sensitive data is stored on our servers.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="max-w-3xl mx-auto text-center py-20 px-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"
                                >
                                    <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/20 border-4 border-white dark:border-slate-900">
                                        <FaCheck className="text-4xl stroke-[4]" />
                                    </div>

                                    <h1 className="text-3xl font-black text-slate-950 dark:text-white mb-2">Order Confirmed</h1>
                                    <p className="text-slate-500 dark:text-slate-400 mb-10 text-sm">Thank you, {formData.name}. Your order has been registered and we will reach out to you within 24 hours.</p>

                                    {/* Summary Table */}
                                    <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden mb-12 text-left border border-slate-100 dark:border-slate-800 shadow-sm max-w-2xl mx-auto">
                                        <div className="px-8 py-5 border-b border-slate-50 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
                                            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Receipt Summary</h3>
                                            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                                                Paid
                                            </div>
                                        </div>
                                        <table className="w-full text-sm">
                                            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                                <tr>
                                                    <td className="px-8 py-5 text-slate-500 font-bold uppercase text-[10px] tracking-widest">Package</td>
                                                    <td className="px-8 py-5 text-right font-black text-slate-950 dark:text-white">{selectedPack?.name}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-8 py-4 text-slate-400 font-bold uppercase text-[10px] tracking-widest">Billing</td>
                                                    <td className="px-8 py-4 text-right font-bold text-slate-900 dark:text-white uppercase text-[10px] tracking-widest">{billingInterval === 'monthly' ? 'Monthly' : 'One-time'}</td>
                                                </tr>
                                                {addons.length > 0 && (
                                                    <tr>
                                                        <td className="px-8 py-4 text-slate-400 font-bold uppercase text-[10px] tracking-widest">Service Add-ons</td>
                                                        <td className="px-8 py-4 text-right font-bold text-slate-900 dark:text-white text-xs">
                                                            {addons.map(id => packages.find(p => p.id === id)?.name).join(', ')}
                                                        </td>
                                                    </tr>
                                                )}
                                                <tr>
                                                    <td className="px-8 py-5 text-slate-900 dark:text-white font-black uppercase text-[10px] tracking-[0.2em] bg-slate-50/50 dark:bg-slate-800/30">Total Paid</td>
                                                    <td className="px-8 py-5 text-right bg-slate-50/50 dark:bg-slate-800/30 font-black text-slate-950 dark:text-white text-lg">
                                                        {Number(totalAmount || calculateTotal().total || 0)} NOK
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-8 py-4 text-slate-400 font-bold uppercase text-[10px] tracking-widest">Reference</td>
                                                    <td className="px-8 py-4 text-right font-mono text-slate-400 text-xs">{orderId}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <a href="https://crm.aone.no/signup" className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm transition-all hover:opacity-90">
                                            Access Client Portal
                                        </a>
                                        <Link href="/" className="px-10 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold text-sm transition-all hover:bg-slate-200 dark:hover:bg-slate-700">
                                            Back to Home
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default function OrderPage() {
    return (
        <Suspense fallback={<div className="h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center"><FaSpinner className="text-4xl text-rose-500 animate-spin" /></div>}>
            <OrderPageContent />
        </Suspense>
    );
}
