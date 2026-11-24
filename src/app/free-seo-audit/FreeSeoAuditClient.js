'use client';

import React, { useEffect, useRef, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaSearch,
    FaChartBar,
    FaRocket,
    FaCheckCircle,
    FaExclamationCircle,
    FaExclamationTriangle,
    FaTimesCircle,
    FaSpinner,
} from 'react-icons/fa';

// Accepts "example.com", "www.example.com", or a full "https://example.com"
// URL, and normalizes to a proper https:// URL the browser's URL() can
// validate -- most visitors won't type the scheme unprompted.
function normalizeWebsiteUrl(raw) {
    const trimmed = raw.trim();
    if (!trimmed) return null;
    const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    try {
        const url = new URL(withScheme);
        if (!url.hostname.includes('.')) return null;
        return url.toString();
    } catch {
        return null;
    }
}

const SCANNING_MESSAGES = [
    'Fetching your website...',
    'Checking titles & meta descriptions...',
    'Testing mobile-friendliness...',
    'Looking for structured data...',
    'Measuring page speed (this part can take a moment)...',
    'Compiling your report...',
];

const STATUS_META = {
    pass: { icon: FaCheckCircle, label: 'Pass', className: 'text-green-500' },
    warn: { icon: FaExclamationTriangle, label: 'Needs attention', className: 'text-amber-500' },
    fail: { icon: FaTimesCircle, label: 'Failed', className: 'text-rose-500' },
};

function scoreColor(score) {
    if (score == null) return 'text-slate-400';
    if (score >= 80) return 'text-green-500';
    if (score >= 50) return 'text-amber-500';
    return 'text-rose-500';
}

const ScoreGauge = ({ label, score }) => (
    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 text-center border border-slate-100 dark:border-slate-800">
        <div className={`text-3xl font-black ${scoreColor(score)}`}>{score ?? '—'}</div>
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{label}</div>
    </div>
);

const CheckRow = ({ item }) => {
    const meta = STATUS_META[item.status] || STATUS_META.warn;
    const Icon = meta.icon;
    return (
        <div className="flex items-start gap-3 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
            <Icon className={`${meta.className} mt-0.5 shrink-0`} />
            <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">{item.label}</span>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${meta.className}`}>{meta.label}</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 break-words">{item.detail}</p>
            </div>
        </div>
    );
};

const ReportView = ({ report, email, onReset }) => {
    const { overallScore, onPageChecks, performance, url } = report;
    return (
        <div>
            <div className="bg-slate-900 dark:bg-black text-white rounded-2xl p-6 text-center mb-6">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Overall Score</div>
                <div className={`text-5xl font-black ${scoreColor(overallScore)}`}>
                    {overallScore ?? 'N/A'}
                    <span className="text-lg opacity-60">/100</span>
                </div>
                <p className="text-xs opacity-60 mt-2 break-words">{url}</p>
            </div>

            {performance?.available && (
                <div className="grid grid-cols-4 gap-3 mb-6">
                    <ScoreGauge label="Performance" score={performance.scores.performance} />
                    <ScoreGauge label="SEO" score={performance.scores.seo} />
                    <ScoreGauge label="A11y" score={performance.scores.accessibility} />
                    <ScoreGauge label="Best Practices" score={performance.scores.bestPractices} />
                </div>
            )}
            {!performance?.available && (
                <p className="text-xs text-slate-400 italic mb-6 text-center">
                    Performance data was unavailable for this scan{performance?.reason ? ` (${performance.reason})` : ''}.
                </p>
            )}

            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">On-Page SEO Checks</h3>
            <div className="max-h-80 overflow-y-auto pr-1">
                {onPageChecks.map((item) => (
                    <CheckRow key={item.id} item={item} />
                ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-6 text-center">
                We&apos;ve also emailed a copy of this report to <strong>{email}</strong>.
            </p>
            <button
                onClick={onReset}
                className="w-full mt-4 text-rose-500 font-black uppercase tracking-widest text-sm hover:underline"
            >
                Scan another site
            </button>
        </div>
    );
};

const FreeSeoAuditClient = () => {
    const [phase, setPhase] = useState('form'); // 'form' | 'scanning' | 'report'
    const [urlValue, setUrlValue] = useState('');
    const [urlError, setUrlError] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [submitError, setSubmitError] = useState('');
    const [report, setReport] = useState(null);
    const [messageIndex, setMessageIndex] = useState(0);
    const messageTimerRef = useRef(null);

    useEffect(() => {
        if (phase !== 'scanning') return;
        setMessageIndex(0);
        messageTimerRef.current = setInterval(() => {
            setMessageIndex((i) => Math.min(i + 1, SCANNING_MESSAGES.length - 1));
        }, 3000);
        return () => clearInterval(messageTimerRef.current);
    }, [phase]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const normalized = normalizeWebsiteUrl(urlValue);
        if (!normalized) {
            setUrlError("That doesn't look like a valid website address. Try a format like example.com or https://example.com.");
            return;
        }
        setUrlError('');
        setSubmitError('');
        setPhase('scanning');
        try {
            const res = await fetch('/api/seo-audit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: normalized, email: emailValue }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong. Please try again.');
            }
            setReport(data.report);
            setPhase('report');
        } catch (err) {
            setSubmitError(err.message || 'Something went wrong. Please try again.');
            setPhase('form');
        }
    };

    const reset = () => {
        setPhase('form');
        setReport(null);
        setUrlValue('');
        setEmailValue('');
    };

    return (
        <div className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <HeroSection
                title="Free SEO Audit"
                subtitle="Get an instant, automated scan of your website's SEO and performance -- no waiting, no sales call required."
            />

            <main className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tighter"
                        >
                            What&apos;s included in your <span className="text-rose-500">Free Audit?</span>
                        </motion.h2>

                        <div className="space-y-8">
                            {[
                                {
                                    icon: <FaSearch className="text-2xl text-rose-500" />,
                                    title: "On-Page SEO Checks",
                                    desc: "Titles, meta descriptions, headings, alt text, canonical tags, structured data, sitemap & robots.txt."
                                },
                                {
                                    icon: <FaChartBar className="text-2xl text-rose-500" />,
                                    title: "Performance & Core Web Vitals",
                                    desc: "Real performance, SEO, accessibility and best-practices scores via Google PageSpeed Insights."
                                },
                                {
                                    icon: <FaRocket className="text-2xl text-rose-500" />,
                                    title: "Instant Results",
                                    desc: "Your report is generated live and shown immediately -- plus a copy emailed straight to your inbox."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 shadow-lg flex items-center justify-center border border-slate-100 dark:border-slate-800">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-amber-500 rounded-[2.5rem] blur-2xl opacity-20"></div>
                        <div className="relative bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-2xl">
                            <AnimatePresence mode="wait">
                                {phase === 'form' && (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight text-center mb-8">
                                            Request Your Audit
                                        </h3>
                                        <div>
                                            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Website URL</label>
                                            <input
                                                type="text"
                                                required
                                                value={urlValue}
                                                onChange={(e) => {
                                                    setUrlValue(e.target.value);
                                                    if (urlError) setUrlError('');
                                                }}
                                                placeholder="example.com"
                                                aria-invalid={!!urlError}
                                                className={`w-full bg-slate-50 dark:bg-slate-800/50 border rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all font-medium ${
                                                    urlError
                                                        ? 'border-rose-500 focus:ring-rose-500/50'
                                                        : 'border-slate-200 dark:border-slate-700 focus:ring-rose-500/50'
                                                }`}
                                            />
                                            {urlError ? (
                                                <p className="mt-2 text-xs text-rose-500 font-bold flex items-center gap-1.5">
                                                    <FaExclamationCircle className="text-[10px]" />
                                                    {urlError}
                                                </p>
                                            ) : (
                                                <p className="mt-2 text-[11px] text-slate-400 font-medium">
                                                    Just the domain is fine -- e.g. example.com or https://example.com
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Work Email</label>
                                            <input
                                                type="email"
                                                required
                                                value={emailValue}
                                                onChange={(e) => setEmailValue(e.target.value)}
                                                placeholder="you@company.com"
                                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all font-medium"
                                            />
                                        </div>
                                        {submitError && (
                                            <p className="text-xs text-rose-500 font-bold flex items-center gap-1.5">
                                                <FaExclamationCircle className="text-[10px]" />
                                                {submitError}
                                            </p>
                                        )}
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-rose-500 to-amber-500 text-white font-black py-4 rounded-xl uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-rose-500/25"
                                        >
                                            Run Free Audit
                                        </button>
                                        <p className="text-[10px] text-center text-slate-400 font-medium">
                                            No credit card required. Your report is generated instantly.
                                        </p>
                                    </motion.form>
                                )}

                                {phase === 'scanning' && (
                                    <motion.div
                                        key="scanning"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-center py-16"
                                    >
                                        <FaSpinner className="text-5xl text-rose-500 mx-auto mb-8 animate-spin" />
                                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tight">
                                            Scanning your website
                                        </h3>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium">
                                            {SCANNING_MESSAGES[messageIndex]}
                                        </p>
                                    </motion.div>
                                )}

                                {phase === 'report' && report && (
                                    <motion.div
                                        key="report"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <ReportView report={report} email={emailValue} onReset={reset} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FreeSeoAuditClient;
