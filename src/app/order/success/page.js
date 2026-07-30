'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheck, FaSpinner, FaBolt, FaArrowLeft, FaDownload, FaInfoCircle, FaClock, FaCheckCircle, FaFilePdf } from 'react-icons/fa';
import { packages } from '../../data/packages';

function SuccessPageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const orderId = searchParams.get('order_id');

    const [loading, setLoading] = useState(true);
    const [orderData, setOrderData] = useState(null);
    const [pdfGenerating, setPdfGenerating] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!orderId) {
            setError('Missing order_id parameters.');
            setLoading(false);
            return;
        }

        const fetchOrder = async () => {
            try {
                const res = await fetch(`/api/order/sync?order_id=${orderId}`);
                const json = await res.json();
                if (json.success && json.data) {
                    setOrderData(json.data);
                    
                    // If the order status is not completed, set it to completed since we are on the success page
                    if (json.data.status !== 'completed') {
                        await fetch('/api/order/sync', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                orderId: orderId,
                                status: 'completed',
                                step: 4
                            })
                        });
                    }
                } else {
                    setError('Order details could not be found.');
                }
            } catch (err) {
                console.error(err);
                setError('Failed to load your order details.');
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [orderId]);

    const generateAgreementPDF = async () => {
        if (!orderData) return;
        setPdfGenerating(true);
        try {
            const { jsPDF } = await import('jspdf');
            const doc = new jsPDF();
            
            const dataToUse = orderData.formData || {};
            const packageToUse = orderData.package || {};
            const billingToUse = orderData.billingInterval || 'monthly';
            const totalToUse = orderData.totalAmount || 0;
            const addonsList = orderData.addons || [];
            
            doc.setFontSize(22);
            doc.text('DIGITAL SALES AGREEMENT', 20, 20);
            
            doc.setFontSize(12);
            doc.text(`Date: ${new Date(orderData.createdAt || Date.now()).toLocaleDateString()}`, 20, 30);
            doc.text(`Order ID: ${orderId}`, 20, 38);
            
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
            
            if (addonsList.length > 0) {
                const addonNames = addonsList.map(id => packages.find(p => p.id === id)?.name || id).join(', ');
                doc.text(`Customizations: ${addonNames}`, 20, 149);
            }
            
            doc.setFontSize(16);
            doc.text('TERMS & CONDITIONS', 20, 165);
            
            doc.setFontSize(10);
            const terms = [
                '1. The customer agrees to pay the stated total for digital services.',
                '2. Aone will deliver services according to the selected package specifications.',
                '3. This agreement is legally binding once payment is processed or selection is secured.'
            ];
            doc.text(terms, 20, 175);
            
            doc.setFontSize(12);
            doc.text(`Electronic Signature: ${dataToUse.name || 'N/A'}`, 20, 200);
            doc.text(`Commitment Period: ${dataToUse.commitment || '24'} Months`, 20, 208);
            
            doc.setFontSize(10);
            const footer = [
                'Legal Note: This document is an initial Purchase Commitment.',
                'A comprehensive Master Service Agreement (MSA) and',
                'detailed Project Plan will be signed during kick-off.',
                'Service starts only after full initial payment.',
                '© Aone Digital Agency'
            ];
            doc.text(footer, 20, 225);
            
            doc.save(`Aone_Agreement_${orderId}.pdf`);
        } catch (err) {
            console.error('PDF Generation Error:', err);
        } finally {
            setPdfGenerating(false);
        }
    };

    if (loading) {
        return (
            <div className="h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center gap-4">
                <FaSpinner className="text-4xl text-rose-500 animate-spin" />
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] animate-pulse">Loading Receipt...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center px-6 text-center">
                <div className="w-16 h-16 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mb-6">
                    <FaInfoCircle className="text-3xl" />
                </div>
                <h1 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-2">Order Lookup Failed</h1>
                <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8 text-sm">{error}</p>
                <Link href="/" className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm">
                    Back to Home
                </Link>
            </div>
        );
    }

    const { package: selectedPack, billingInterval, addons = [], totalAmount, formData = {} } = orderData;

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-32 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 px-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl"
                >
                    <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/20 border-4 border-white dark:border-slate-900">
                        <FaCheck className="text-4xl stroke-[4]" />
                    </div>

                    <h1 className="text-3xl font-black text-slate-950 dark:text-white mb-2 uppercase tracking-tight">Order Confirmed</h1>
                    <p className="text-slate-500 dark:text-slate-400 mb-10 text-sm">
                        Thank you, {formData.name || 'valued customer'}. Your order has been registered successfully.
                    </p>

                    {/* Receipt Details Table */}
                    <div className="bg-slate-50 dark:bg-slate-800/30 rounded-3xl overflow-hidden mb-12 text-left border border-slate-100 dark:border-slate-800 shadow-sm max-w-xl mx-auto">
                        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
                            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Receipt Summary</h3>
                            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-[9px] font-black uppercase tracking-widest">Paid</span>
                        </div>
                        <table className="w-full text-sm">
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr>
                                    <td className="px-6 py-4 text-slate-400 font-bold uppercase text-[9px] tracking-widest">Package</td>
                                    <td className="px-6 py-4 text-right font-black text-slate-950 dark:text-white">{selectedPack?.name || 'Standard Pack'}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-slate-400 font-bold uppercase text-[9px] tracking-widest">Billing</td>
                                    <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white uppercase text-[9px] tracking-widest">{billingInterval === 'monthly' ? 'Monthly Sub' : 'One-time Build'}</td>
                                </tr>
                                {addons.length > 0 && (
                                    <tr>
                                        <td className="px-6 py-4 text-slate-400 font-bold uppercase text-[9px] tracking-widest">Add-ons</td>
                                        <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white text-xs">
                                            {addons.map(id => packages.find(p => p.id === id)?.name || id).join(', ')}
                                        </td>
                                    </tr>
                                )}
                                <tr>
                                    <td className="px-6 py-4 text-slate-900 dark:text-white font-black uppercase text-[9px] tracking-widest bg-slate-100/30 dark:bg-slate-800/20">Total Paid</td>
                                    <td className="px-6 py-4 text-right bg-slate-100/30 dark:bg-slate-800/20 font-black text-slate-950 dark:text-white text-lg">
                                        {Number(totalAmount).toLocaleString()} NOK
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-slate-400 font-bold uppercase text-[9px] tracking-widest">Reference</td>
                                    <td className="px-6 py-4 text-right font-mono text-slate-400 text-xs">{orderId}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Next Steps Section */}
                    <div className="mb-12 max-w-xl mx-auto text-left">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-6">Next Onboarding Steps</h4>
                        <div className="space-y-4 font-bold text-sm text-slate-600 dark:text-slate-400">
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center text-[10px] font-black">1</div>
                                <div>
                                    <p className="text-slate-900 dark:text-white">Email Confirmation</p>
                                    <p className="text-xs text-slate-400 font-medium">A copy of the initial agreement has been sent to {formData.email || 'your email'}.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center text-[10px] font-black">2</div>
                                <div>
                                    <p className="text-slate-900 dark:text-white">Project Kick-off Call</p>
                                    <p className="text-xs text-slate-400 font-medium">Our coordinator will call you within 24 hours to schedule your strategy and design workshop.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-4 items-center max-w-xl mx-auto">
                        <button 
                            onClick={generateAgreementPDF}
                            disabled={pdfGenerating}
                            className="w-full py-4.5 bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 cursor-pointer"
                        >
                            {pdfGenerating ? (
                                <FaSpinner className="animate-spin text-sm" />
                            ) : (
                                <>
                                    <FaFilePdf className="text-sm" />
                                    Download Signed Agreement (PDF)
                                </>
                            )}
                        </button>
                        
                        <div className="flex gap-4 w-full">
                            <a href="https://crm.aone.no/signup" className="flex-1 py-4 bg-slate-950 dark:bg-white text-white dark:text-slate-900 rounded-xl font-black text-xs uppercase tracking-widest text-center hover:opacity-90">
                                Client Portal
                            </a>
                            <Link href="/" className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-black text-xs uppercase tracking-widest text-center hover:bg-slate-200 dark:hover:bg-slate-700">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={<div className="h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center"><FaSpinner className="text-4xl text-rose-500 animate-spin" /></div>}>
            <SuccessPageContent />
        </Suspense>
    );
}
