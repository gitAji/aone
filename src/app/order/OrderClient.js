'use client';

import React, { useState, useEffect, Suspense, useCallback, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { packages, SITE_WIDE_DISCOUNT_RATE, PROMO_CODE_DISCOUNT_RATE, PROMO_CODE } from '../data/packages';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaLaptopCode, FaCheck, FaCrown, FaCameraRetro, FaSearch, FaTools, FaPenNib, FaUsers, FaRobot, FaBullhorn, FaPencilRuler, FaVideo, FaInfoCircle, FaTruck, FaSpinner, FaCreditCard, FaLock, FaCalendarAlt, FaShieldAlt, FaStripe, FaCcVisa, FaCcMastercard, FaCcPaypal, FaBolt, FaFileInvoice, FaCube, FaPuzzlePiece, FaTag, FaClock, FaCalendarCheck, FaChartLine } from 'react-icons/fa';
import Toast from '@/components/Toast';

const roundPrice = (value) => {
    let price = Math.ceil(value);
    while (true) {
        const lastDigit = price % 10;
        if (lastDigit === 0 || lastDigit === 9 || lastDigit === 5) {
            return price;
        }
        price++;
    }
};

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
    const [billingInterval, setBillingInterval] = useState('monthly'); // 'once' or 'monthly'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        orgNumber: '',
        address: '',
        city: '',
        zip: '',
        startDate: '',
        commitment: '24', // default to 24 months
        trialPeriod: 'none' // 'none' or '30'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoadingOrder, setIsLoadingOrder] = useState(!!initialOrderId);
    const [toast, setToast] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);
    const [isApplyingDiscount, setIsApplyingDiscount] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [showAgreement, setShowAgreement] = useState(false);
    const [promoCode, setPromoCode] = useState('');

    const stepsCount = 4;
    const calculateTotal = useCallback(() => {
        if (!selectedPack) return { base: 0, addons: 0, monthly: 0, total: 0 };
        let base = billingInterval === 'monthly' ? selectedPack.monthlyPrice : selectedPack.price;

        const addonsOneTime = packages
            .filter(p => p.isAddon && addons.includes(p.id))
            .reduce((sum, p) => sum + p.price, 0);

        const addonsMonthly = packages
            .filter(p => p.isAddon && addons.includes(p.id))
            .reduce((sum, p) => sum + p.monthlyPrice, 0);

        const total = base + addonsOneTime;
        // Matches checkout/stripe and order/create: the site-wide flash-sale
        // rate applies automatically, a voucher code overrides (not stacks)
        // with a larger rate. Previously this always priced from the full
        // total with no automatic discount at all, so the order page (and
        // the amount actually charged) never reflected the "-10% TODAY"
        // shown on the pricing page.
        const discountRate = promoCode.trim().toUpperCase() === PROMO_CODE ? PROMO_CODE_DISCOUNT_RATE : SITE_WIDE_DISCOUNT_RATE;
        const potentialDiscount = total * discountRate;
        const finalTotal = Math.max(0, total - potentialDiscount);

        // Round up to end with 0, 9, or 5
        const roundedFinalTotal = roundPrice(finalTotal);

        return {
            base,
            addons: addonsOneTime,
            monthly: (billingInterval === 'monthly' ? selectedPack.monthlyPrice : 0) + addonsMonthly,
            total: roundedFinalTotal,
            discount: total - roundedFinalTotal
        };
    }, [selectedPack, billingInterval, addons, promoCode]);

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
    }, [orderId, step, selectedPack, addons, formData, billingInterval, calculateTotal]);

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

                                    // Upload PDF in the background separately tracking its own sync
                                    generateAgreementPDF(false, data).then(async (pdfBlob) => {
                                        if (pdfBlob) {
                                            const { storage } = await import('@/lib/firebase');
                                            const { ref, uploadBytes, getDownloadURL } = await import('firebase/storage');
                                            const agreementRef = ref(storage, `agreements/${initialOrderId}.pdf`);
                                            await uploadBytes(agreementRef, pdfBlob);
                                            const pdfUrl = await getDownloadURL(agreementRef);
                                            
                                            // Update db silently with the saved pdfUrl
                                            await fetch('/api/order/sync', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({
                                                    orderId: initialOrderId,
                                                    agreementUrl: pdfUrl
                                                })
                                            });
                                        }
                                    }).catch(e => {
                                        console.error('Failed to upload PDF on success in background:', e);
                                    });
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
        } else {
            // Handle URL parameters for new orders
            const pkgId = searchParams.get('package_id');
            const billing = searchParams.get('billing');
            const addonsParam = searchParams.get('addons');

            if (pkgId) {
                const pkg = packages.find(p => p.id === pkgId);
                if (pkg) {
                    setSelectedPack(pkg);
                    setStep(2);
                }
            }
            if (billing) {
                setBillingInterval(billing);
            }
            if (addonsParam) {
                const addonIds = addonsParam.split(',');
                setAddons(addonIds);
            }
        }
    }, [initialOrderId, initialStep, paymentStatus, searchParams]);

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


    const generateAgreementPDF = async (download = false, currentOrderData = null) => {
        try {
            const { jsPDF } = await import('jspdf');
            const doc = new jsPDF();
            
            const dataToUse = currentOrderData?.formData || formData;
            const packageToUse = currentOrderData?.package || selectedPack;
            const billingToUse = currentOrderData?.billingInterval || billingInterval;
            
            let totalToUse = calculateTotal().total;
            if (currentOrderData && currentOrderData.package) {
                const b = currentOrderData.billingInterval === 'monthly' ? currentOrderData.package.monthlyPrice : currentOrderData.package.price;
                const a = currentOrderData.addons?.reduce((s, id) => s + (packages.find(p => p.id === id)?.price || 0), 0) || 0;
                totalToUse = b + a;
            }

            const currentOrderId = currentOrderData?.orderId || orderId;
            
            doc.setFontSize(22);
            doc.text('DIGITAL SALES AGREEMENT', 20, 20);
            
            doc.setFontSize(12);
            doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 30);
            doc.text(`Order ID: ${currentOrderId}`, 20, 38);
            
            doc.setFontSize(16);
            doc.text('CUSTOMER DETAILS', 20, 55);
            
            doc.setFontSize(12);
            doc.text(`Name: ${dataToUse.name || 'N/A'}`, 20, 65);
            doc.text(`Business: ${dataToUse.businessName || 'N/A'}`, 20, 73);
            doc.text(`Org Number: ${dataToUse.orgNumber || 'N/A'}`, 20, 81);
            doc.text(`Address: ${dataToUse.address || 'N/A'}, ${dataToUse.zip || ''} ${dataToUse.city || ''}`, 20, 89);
            doc.text(`Preferred Start Date: ${dataToUse.startDate || 'ASAP'}`, 20, 97);
            
            doc.setFontSize(16);
            doc.text('ORDER SUMMARY', 20, 115);
            
            doc.setFontSize(12);
            doc.text(`Package: ${packageToUse?.name || 'N/A'}`, 20, 125);
            doc.text(`Billing Interval: ${billingToUse}`, 20, 133);
            doc.text(`Amount: ${totalToUse} NOK`, 20, 141);
            
            doc.setFontSize(16);
            doc.text('TERMS & CONDITIONS', 20, 160);
            
            doc.setFontSize(10);
            const terms = [
                '1. The customer agrees to pay the stated total for digital services.',
                '2. Aone will deliver services according to the selected package specifications.',
                '3. This agreement is legally binding once payment is processed or selection is secured.'
            ];
            doc.text(terms, 20, 170);
            
            doc.setFontSize(12);
            doc.text(`Electronic Signature: ${dataToUse.name || 'N/A'}`, 20, 195);
            doc.text(`Commitment Period: ${dataToUse.commitment || '24'} Months`, 20, 203);
            
            doc.setFontSize(10);
            const footer = [
                'Legal Note: This document is an initial Purchase Commitment.',
                'A comprehensive Master Service Agreement (MSA) and',
                'detailed Project Plan will be signed during kick-off.',
                'Service starts only after full initial payment.',
                '© Aone Digital Agency'
            ];
            doc.text(footer, 20, 225);
            
            if (download) {
                doc.save(`Aone_Agreement_${currentOrderId}.pdf`);
                setToast({ message: 'Agreement downloaded as PDF.', type: 'info' });
                return null;
            } else {
                return doc.output('blob');
            }
        } catch (err) {
            console.error('PDF Generation Error:', err);
            if (download) setToast({ message: 'Failed to generate PDF.', type: 'error' });
            return null;
        }
    };

    const submitOrder = async (method = 'card') => {
        if (!agreedToTerms) {
            setToast({ message: 'Please accept the Digital Sales Agreement before proceeding.', type: 'error' });
            return;
        }
        if (!formData.name || !formData.email) {
            setToast({ message: 'Please fill in your name and email', type: 'error' });
            return;
        }

        setIsSubmitting(true);
        await syncState({ status: 'awaiting_payment' });

        try {
            if (method === 'card') {
                // Dynamic Trial Calculation
                let subscription_data = {};
                if (billingInterval === 'monthly') {
                    const trialDays = formData.trialPeriod === 'none' ? 0 : parseInt(formData.trialPeriod);
                    const preferredDate = formData.startDate ? new Date(formData.startDate) : new Date();
                    
                    // In Stripe, trial_end must be at least 48 hours in the future to show as a trial
                    // If they want to start on a future date, we set trial_end to that date
                    const futureStartTimestamp = Math.floor(preferredDate.getTime() / 1000);
                    const nowTimestamp = Math.floor(Date.now() / 1000);
                    
                    // Add extra trial days if selected
                    let actualTrialEnd = Math.max(futureStartTimestamp, nowTimestamp + (48 * 3600));
                    if (trialDays > 0) {
                        actualTrialEnd += (trialDays * 24 * 3600);
                    }

                    // Only apply trial if it's actually in the future and requested
                    if (trialDays > 0 || formData.startDate) {
                        subscription_data = {
                            trial_end: actualTrialEnd,
                            metadata: {
                                commitment: formData.commitment,
                                trialDays: trialDays.toString()
                            }
                        };
                    }
                }

                const res = await fetch('/api/checkout/stripe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        orderId,
                        package: selectedPack,
                        addons,
                        formData,
                        billingInterval,
                        appliedDiscount: calculateTotal().discount,
                        discountCode: promoCode,
                        subscription_data: Object.keys(subscription_data).length > 0 ? subscription_data : undefined // Pass trial data if present
                    })
                });
                const data = await res.json();
                if (data.url) {
                    window.location.href = data.url;
                    return;
                }
                setToast({ message: data.error || 'Failed to initialize payment session', type: 'error' });
                setIsSubmitting(false);
                return;
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
                    paymentMethod: method,
                    appliedDiscount: calculateTotal().discount,
                    discountCode: promoCode,
                    agreementUrl: null // will update in background
                })
            });

            if (res.ok) {
                await syncState({ step: 4, status: 'completed' });
                setStep(4);
                
                // Background PDF upload
                generateAgreementPDF(false).then(async (pdfBlob) => {
                    if (pdfBlob) {
                        const { storage } = await import('@/lib/firebase');
                        const { ref, uploadBytes, getDownloadURL } = await import('firebase/storage');
                        const agreementRef = ref(storage, `agreements/${orderId}.pdf`);
                        await uploadBytes(agreementRef, pdfBlob);
                        const pdfUrl = await getDownloadURL(agreementRef);
                        
                        await fetch('/api/order/sync', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                orderId,
                                agreementUrl: pdfUrl
                            })
                        });
                    }
                }).catch(e => {
                    console.error("Failed to upload agreement in background", e);
                });
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
                        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 z-0">
                            <motion.div 
                                className="h-full bg-slate-900 dark:bg-white"
                                initial={{ width: '0%' }}
                                animate={{ width: `${(step - 1) * 50}%` }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        </div>
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
                                            {packages.filter(p => p.isAddon).map(pkg => {
                                                const getAddonIcon = (id) => {
                                                    switch (id) {
                                                        case 'chatbot': return <FaRobot />;
                                                        case 'geo': return <FaSearch />;
                                                        case 'performance': return <FaBolt />;
                                                        case 'seo': return <FaSearch />;
                                                        case 'branding': return <FaPenNib />;
                                                        case 'marketing': return <FaChartLine />;
                                                        case 'maintenance': return <FaTools />;
                                                        default: return <FaTools />;
                                                    }
                                                };
                                                return (
                                                    <div
                                                        key={pkg.id}
                                                        onClick={() => toggleAddon(pkg.id)}
                                                        className={`p-6 rounded-2xl cursor-pointer border-2 transition-all flex items-center justify-between group ${addons.includes(pkg.id) ? 'border-slate-900 dark:border-white bg-slate-50 dark:bg-slate-900' : 'border-slate-100 dark:border-slate-800 hover:border-slate-200'}`}
                                                    >
                                                        <div className="flex items-center gap-6">
                                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${addons.includes(pkg.id) ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                                                                {getAddonIcon(pkg.id)}
                                                            </div>
                                                            <div>
                                                                <div className="flex items-center gap-2">
                                                                    <p className="font-bold text-sm text-slate-900 dark:text-white">{pkg.name}</p>
                                                                    <div className="relative group/info">
                                                                        <button 
                                                                            type="button"
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                            }}
                                                                            className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-help flex items-center justify-center p-1"
                                                                            aria-label="View details"
                                                                        >
                                                                            <FaInfoCircle className="text-xs" />
                                                                        </button>
                                                                        {/* Tooltip Content */}
                                                                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover/info:block w-72 bg-slate-900 dark:bg-slate-800 text-white text-xs rounded-xl p-4 shadow-xl border border-slate-700 dark:border-slate-600 z-50 pointer-events-none leading-relaxed font-bold">
                                                                            <p className="mb-2 text-slate-100">{pkg.description}</p>
                                                                            {pkg.features && pkg.features.length > 0 && (
                                                                                <ul className="pt-2 border-t border-slate-800 dark:border-slate-700 space-y-1 text-[10px] text-slate-400">
                                                                                    {pkg.features.map((f, idx) => (
                                                                                        <li key={idx} className="flex items-center gap-1.5">
                                                                                            <FaCheck className="text-emerald-500 text-[8px]" /> {f}
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            )}
                                                                            {/* Triangle Arrow */}
                                                                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-800"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <p className="text-sm text-slate-500">
                                                                    {pkg.price > 0 ? `${pkg.price} NOK` : `${pkg.monthlyPrice} NOK/mo`}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${addons.includes(pkg.id) ? 'bg-slate-900 dark:bg-white border-slate-900 dark:border-white' : 'border-slate-200'}`}>
                                                            {addons.includes(pkg.id) && <FaCheck className="text-[10px] text-white dark:text-slate-900" />}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="relative pt-12">
                                        {renderOrderSummary()}
                                    </div>
                                </div>
                            )}
                            {step === 3 && (
                                <div className="space-y-12 mb-24">
                                    {/* Full Width Section: Selection Area */}
                                    <div className="space-y-12">
                                        <div className="bg-slate-50 border border-slate-200 p-10 rounded-[2.5rem] shadow-xl">
                                            <div className="flex items-center gap-4 mb-10">
                                                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                                    <FaUsers className="text-xl" />
                                                </div>
                                                <div>
                                                    <h3 className="font-black text-2xl text-slate-900 tracking-tight uppercase">Customer Information</h3>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Provide your business details for billing and agreement.</p>
                                                </div>
                                            </div>

                                            <div className="space-y-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[10px] font-black uppercase tracking-widest">
                                                    <div className="space-y-2">
                                                        <label htmlFor="name-input" className="text-slate-500 ml-1">Contact Name</label>
                                                        <input 
                                                            id="name-input"
                                                            name="name" 
                                                            value={formData.name} 
                                                            onChange={handleInputChange} 
                                                            className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-slate-900 transition-all text-sm font-bold text-slate-900 placeholder:text-slate-300" 
                                                            placeholder="Full Name" 
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label htmlFor="email-input" className="text-slate-500 ml-1">Work Email</label>
                                                        <input 
                                                            id="email-input"
                                                            name="email" 
                                                            value={formData.email} 
                                                            onChange={handleInputChange} 
                                                            className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-slate-900 transition-all text-sm font-bold text-slate-900 placeholder:text-slate-300" 
                                                            placeholder="Email address" 
                                                            type="email" 
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[10px] font-black uppercase tracking-widest">
                                                    <div className="space-y-2">
                                                        <label htmlFor="business-input" className="text-slate-500 ml-1">Company Name</label>
                                                        <input 
                                                            id="business-input"
                                                            name="businessName" 
                                                            value={formData.businessName} 
                                                            onChange={handleInputChange} 
                                                            className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-slate-900 transition-all text-sm font-bold text-slate-900 placeholder:text-slate-300" 
                                                            placeholder="AS / LLC name" 
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label htmlFor="org-input" className="text-slate-500 ml-1">Org. Number (Optional)</label>
                                                        <input 
                                                            id="org-input"
                                                            name="orgNumber" 
                                                            value={formData.orgNumber} 
                                                            onChange={handleInputChange} 
                                                            className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-slate-900 transition-all text-sm font-bold text-slate-900 placeholder:text-slate-300" 
                                                            placeholder="000 000 000" 
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[10px] font-black uppercase tracking-widest pt-6 border-t border-slate-200">
                                                    <div className="space-y-2">
                                                        <label htmlFor="start-date-input" className="text-slate-500 ml-1 flex items-center gap-1.5 animate-pulse">
                                                            <FaCalendarAlt className="text-rose-500" /> Start Date
                                                        </label>
                                                        <input 
                                                            id="start-date-input"
                                                            name="startDate" 
                                                            type="date"
                                                            value={formData.startDate} 
                                                            onChange={handleInputChange} 
                                                            className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-slate-900 transition-all text-sm font-bold text-slate-900 outline-none" 
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-slate-500 ml-1 flex items-center gap-1.5">
                                                            <FaShieldAlt className="text-slate-900" /> Commitment
                                                        </label>
                                                        <div className="flex gap-2">
                                                            {[
                                                                { id: '12', label: '12 Months' },
                                                                { id: '24', label: '24 Months' }
                                                            ].map(opt => (
                                                                <button
                                                                    key={opt.id}
                                                                    type="button"
                                                                    onClick={() => setFormData(prev => ({ ...prev, commitment: opt.id }))}
                                                                    className={`flex-1 py-3 px-4 rounded-xl border text-xs font-black transition-all cursor-pointer ${formData.commitment === opt.id ? 'border-slate-950 bg-slate-950 text-white shadow-md' : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'}`}
                                                                >
                                                                    {opt.label}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Digital Sales Agreement Section */}
                                            <div className="mt-12 pt-12 border-t border-slate-200">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg">
                                                        <FaPenNib className="text-lg" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-black text-lg text-slate-900 tracking-tight uppercase">Digital Sales Agreement</h4>
                                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mandatory legal contract before payment</p>
                                                    </div>
                                                </div>

                                                <div className="bg-slate-100 rounded-[2rem] p-8 mb-8 border border-slate-200 shadow-inner max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300">
                                                    <div className="text-xs text-slate-600 leading-relaxed font-bold space-y-4">                                                         <h5 className="font-black text-slate-900 uppercase">1. Scope of Agreement</h5>
                                                         <p className="text-sm leading-relaxed text-slate-600 mb-6">
                                                             This Agreement establishes a commitment between {formData.businessName || "the Client"} and Aone Digital Agency. By proceeding, the Client agrees to the selected {selectedPack?.name} package with a commitment period of {formData.commitment} months.
                                                         </p>

                                                         <h5 className="font-black text-slate-900 uppercase">2. Service Commencement & Payment</h5>
                                                         <p className="text-sm leading-relaxed text-slate-600 mb-6 font-bold italic">
                                                             Services begin officially once the initial payment is cleared. Delivery of final products (code, site access) is contingent upon successful payment processing and verification of this contract.
                                                         </p>

                                                         <h5 className="font-black text-slate-900 uppercase">3. Maintenance & Support (Monthly)</h5>
                                                         <p className="text-sm leading-relaxed text-slate-600 mb-6 font-bold">
                                                             Monthly billing includes professional site maintenance: regular backups, security oversight, hosting monitoring, and "Small Adjustments" (e.g., price changes or minor text edits) at no extra cost.
                                                         </p>

                                                         <h5 className="font-black text-slate-900 uppercase">4. Major Improvements & Hourly Work</h5>
                                                         <p className="text-sm leading-relaxed text-slate-600 mb-6">
                                                             Structural improvements or major feature updates require separate pricing. Work on such improvements will be billed at an agreed-upon fixed price or hourly rate, with written approval required before work starts.
                                                         </p>

                                                         <h5 className="font-black text-slate-900 uppercase">5. Future Terms & MSA</h5>
                                                         <p className="text-sm leading-relaxed text-slate-600 mb-6">
                                                             This digital agreement covers the purchase intent. A formal <strong>Master Service Agreement (MSA)</strong> and a comprehensive <strong>Project Plan</strong> (milestones, delivery timelines) will be finalized during the kick-off meeting.
                                                         </p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-4 items-center justify-between">
                                                    <label className="flex items-center gap-4 cursor-pointer group">
                                                        <div className="relative">
                                                            <input 
                                                                type="checkbox" 
                                                                checked={agreedToTerms} 
                                                                onChange={() => setAgreedToTerms(!agreedToTerms)} 
                                                                className="sr-only" 
                                                            />
                                                            <div className={`w-8 h-8 rounded-xl border-2 transition-all flex items-center justify-center ${agreedToTerms ? 'bg-slate-900 border-slate-900 shadow-md' : 'border-slate-200 group-hover:border-slate-400'}`}>
                                                                {agreedToTerms && <FaCheck className="text-white text-xs stroke-[4]" />}
                                                            </div>
                                                        </div>
                                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-900 transition-colors">
                                                            I AGREE TO THE SALES AGREEMENT
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="mt-12 group">
                                                <button onClick={() => setStep(2)} className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2 hover:text-white transition-all">
                                                    <span className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center group-hover:-translate-x-1 transition-transform">←</span>
                                                    Review configurations
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Wide Row: Order Summary & Checkout */}
                                    <div className="w-full">
                                        <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-[3.5rem] text-slate-950 shadow-2xl shadow-black/5">
                                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                                {/* Left Side: Summary Details */}
                                                <div>
                                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full mb-8">
                                                        <FaFileInvoice className="text-slate-500 text-xs" />
                                                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Invoice Breakdown</span>
                                                    </div>
                                                    
                                                    <div className="flex flex-col gap-2 mb-10 items-start">
                                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 shadow-sm">Amount Due Today</p>
                                                        <h3 className="text-7xl font-black tracking-tighter text-slate-950 drop-shadow-sm">
                                                            {calculateTotal().total} <span className="text-2xl font-bold opacity-30 tracking-widest ml-1">NOK</span>
                                                        </h3>
                                                        {billingInterval === 'monthly' && (
                                                            <div className="flex flex-wrap items-center gap-3 mt-4">
                                                                <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-md border border-emerald-100 flex items-center gap-1.5">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Monthly Billing
                                                                </span>
                                                                {formData.trialPeriod !== 'none' && (
                                                                    <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-md border border-blue-100 flex items-center gap-1.5">
                                                                        <FaClock className="text-blue-500" /> {formData.trialPeriod} Days Trial
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="bg-slate-50/70 rounded-3xl p-6 border border-slate-100">
                                                        <div className="space-y-4">
                                                            <div className="flex justify-between items-center text-sm font-bold text-slate-600">
                                                                <span className="flex items-center gap-3">
                                                                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center border border-slate-100">
                                                                        <FaCube className="text-slate-400 text-xs" />
                                                                    </div>
                                                                    {selectedPack?.name} Plan
                                                                </span>
                                                                <span className="text-slate-900">{billingInterval === 'monthly' ? selectedPack?.monthlyPrice : selectedPack?.price} NOK</span>
                                                            </div>
                                                            {addons.length > 0 && (
                                                                <div className="flex justify-between items-center text-sm font-bold text-slate-600">
                                                                    <span className="flex items-center gap-3">
                                                                        <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center border border-slate-100">
                                                                            <FaPuzzlePiece className="text-slate-400 text-xs" />
                                                                        </div>
                                                                        Service Add-ons ({addons.length})
                                                                    </span>
                                                                    <span className="text-slate-900">+{calculateTotal().addons} NOK</span>
                                                            </div>
                                                            )}
                                                            {calculateTotal().discount > 0 && (
                                                                <div className="flex justify-between items-center text-sm font-bold text-emerald-600">
                                                                    <span className="flex items-center gap-3">
                                                                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center border border-emerald-100">
                                                                            <FaTag className="text-emerald-500 text-xs" />
                                                                        </div>
                                                                        Promotional Discount
                                                                    </span>
                                                                    <span>-{calculateTotal().discount} NOK</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        {formData.startDate && (
                                                            <div className="mt-6 pt-6 border-t border-slate-200/60 flex justify-between items-center text-xs font-black uppercase tracking-widest text-slate-900">
                                                                <span className="flex items-center gap-2 text-slate-500">
                                                                    <FaCalendarCheck className="text-slate-400 text-sm" />
                                                                    Project Kick-off
                                                                </span>
                                                                <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">{formData.startDate}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Right Side: Actions */}
                                                <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-10 border border-slate-100">
                                            <div className="mb-10 group">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="h-[1px] flex-grow bg-slate-100" />
                                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Voucher Code</span>
                                                    <div className="h-[1px] flex-grow bg-slate-100" />
                                                </div>
                                                <div className="flex gap-2 p-2 bg-slate-50 rounded-2xl border border-slate-100 focus-within:ring-2 focus-within:ring-slate-200 transition-all">
                                                    <input 
                                                        value={promoCode}
                                                        onChange={(e) => setPromoCode(e.target.value)}
                                                        className="flex-grow bg-transparent border-none rounded-lg text-xs px-4 py-3 text-slate-950 placeholder:text-slate-300 font-bold" 
                                                        placeholder="Enter promotional code"
                                                    />
                                                </div>
                                                {promoCode.trim().toUpperCase() === 'AONE' && (
                                                    <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mt-3 text-center animate-pulse">
                                                        🔥 50% Sales Discount Applied
                                                    </p>
                                                )}
                                            </div>

                                            <div className="space-y-4 mb-4">
                                                <motion.button
                                                    whileHover={agreedToTerms ? { scale: 1.02 } : {}}
                                                    whileTap={agreedToTerms ? { scale: 0.98 } : {}}
                                                    onClick={() => submitOrder('card')}
                                                    disabled={isSubmitting || !agreedToTerms}
                                                    className={`w-full py-6 bg-slate-950 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4 transition-all shadow-xl shadow-black/10 ${!agreedToTerms ? 'opacity-20 cursor-not-allowed' : 'hover:bg-slate-900 active:scale-95'}`}
                                                >
                                                    {isSubmitting ? (
                                                        <FaSpinner className="animate-spin text-lg" />
                                                    ) : (
                                                        <>
                                                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                                                <FaCreditCard className="text-white" />
                                                            </div>
                                                            Quick Pay
                                                        </>
                                                    )}
                                                </motion.button>
                                                
                                                <p className="text-[10px] font-bold text-center text-slate-400 lowercase tracking-wide">
                                                    pay with <span className="text-slate-800 font-extrabold dark:text-white">cards</span>, <span className="text-slate-800 font-extrabold dark:text-white">klarna</span>, or <span className="text-slate-800 font-extrabold dark:text-white">apple pay</span> at checkout
                                                </p>
                                                
                                                <button
                                                    onClick={() => submitOrder('later')}
                                                    disabled={isSubmitting || !agreedToTerms}
                                                    className={`w-full py-4 border-2 border-slate-100 rounded-[1.2rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all ${!agreedToTerms ? 'opacity-10 cursor-not-allowed' : 'text-slate-400 hover:text-slate-950 hover:bg-slate-50'}`}
                                                >
                                                    Secure Selection & Sign Deal First
                                                </button>
                                                
                                                {!agreedToTerms && (
                                                    <p className="text-[9px] font-black text-center text-rose-500 uppercase tracking-widest animate-pulse">
                                                        Agree to the Sales Terms to Unlock
                                                    </p>
                                                )}
                                            </div>
                                            
                                            <div className="flex flex-col items-center gap-6 pt-8 border-t border-slate-50">
                                                <div className="text-center px-4">
                                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">
                                                        Processed securely
                                                    </p>
                                                </div>

                                                <div className="flex items-center gap-6 text-2xl opacity-40 grayscale group-hover:grayscale-0 transition-all">
                                                    <FaStripe className="text-4xl text-slate-400" />
                                                    <div className="w-[1px] h-6 bg-slate-100" />
                                                    <FaCcVisa className="text-slate-400" />
                                                    <FaCcMastercard className="text-slate-400" />
                                                    <FaCcPaypal className="text-slate-400" />
                                                </div>
                                                
                                                <div className="flex items-center gap-6">
                                                    <div className="flex items-center gap-2">
                                                        <FaShieldAlt className="text-emerald-400 text-xs" />
                                                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Secure checkout</span>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
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

                                <div className="flex flex-col gap-6 items-center">
                                    <button 
                                        onClick={() => generateAgreementPDF(true)}
                                        className="w-full sm:w-auto px-12 py-5 bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3"
                                    >
                                        <FaBolt />
                                        Download Signed Sales Agreement (PDF)
                                    </button>
                                    
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                                        <a href="https://crm.aone.no/signup" className="flex-1 px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm transition-all hover:opacity-90">
                                            Access Client Portal
                                        </a>
                                        <Link href="/" className="flex-1 px-10 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold text-sm transition-all hover:bg-slate-200 dark:hover:bg-slate-700">
                                            Back to Home
                                        </Link>
                                    </div>
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
