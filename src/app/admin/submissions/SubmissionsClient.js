'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';

const TYPE_COLORS = {
  contact: 'bg-blue-500/10 text-blue-500',
  consultation: 'bg-purple-500/10 text-purple-500',
  application: 'bg-emerald-500/10 text-emerald-500',
  quote: 'bg-amber-500/10 text-amber-500',
  referral: 'bg-cyan-500/10 text-cyan-500',
  support: 'bg-rose-500/10 text-rose-500',
  feedback: 'bg-indigo-500/10 text-indigo-500',
  design_requirements: 'bg-pink-500/10 text-pink-500',
  seo_audit: 'bg-orange-500/10 text-orange-500',
  order: 'bg-slate-700/10 dark:bg-slate-300/10 text-slate-700 dark:text-slate-300',
};

const SubmissionsClient = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeType, setActiveType] = useState('all');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/admin/submissions');
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
        if (!cancelled) setSubmissions(data.submissions || []);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load submissions.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const types = useMemo(() => {
    const unique = new Map();
    submissions.forEach((s) => unique.set(s.type, s.typeLabel));
    return Array.from(unique, ([type, label]) => ({ type, label }));
  }, [submissions]);

  const filtered = activeType === 'all'
    ? submissions
    : submissions.filter((s) => s.type === activeType);

  const formatDate = (iso) => {
    if (!iso) return '—';
    try {
      return new Date(iso).toLocaleDateString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
      });
    } catch {
      return '—';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/admin" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-rose-500 transition-colors mb-3">
              <FaArrowLeft className="text-[10px]" /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Submissions &amp; Orders</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {loading ? 'Loading…' : `${submissions.length} total across all forms`}
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-8 p-6 bg-rose-500/5 border border-rose-500/20 rounded-2xl flex items-start gap-4">
            <FaExclamationTriangle className="text-rose-500 text-xl mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-bold text-slate-900 dark:text-white mb-1">Couldn&apos;t load submissions</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{error}</p>
              {error.includes('FIREBASE_SERVICE_ACCOUNT_KEY') && (
                <p className="text-xs text-slate-400 mt-2">
                  This env var needs to be added in the Netlify dashboard before this page (or admin login) can work.
                </p>
              )}
            </div>
          </div>
        )}

        {!loading && !error && submissions.length === 0 && (
          <div className="p-12 text-center text-slate-400 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl">
            No submissions yet.
          </div>
        )}

        {submissions.length > 0 && (
          <>
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setActiveType('all')}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                  activeType === 'all'
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950'
                    : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-rose-500/50'
                }`}
              >
                All ({submissions.length})
              </button>
              {types.map(({ type, label }) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                    activeType === type
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950'
                      : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-rose-500/50'
                  }`}
                >
                  {label} ({submissions.filter((s) => s.type === type).length})
                </button>
              ))}
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800 text-[10px] uppercase tracking-widest text-slate-400">
                      <th className="px-6 py-4 font-black">Type</th>
                      <th className="px-6 py-4 font-black">Name</th>
                      <th className="px-6 py-4 font-black">Email</th>
                      <th className="px-6 py-4 font-black">Summary</th>
                      <th className="px-6 py-4 font-black">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((s) => (
                      <tr key={`${s.type}-${s.id}`} className="border-b border-slate-50 dark:border-slate-800/50 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4">
                          <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${TYPE_COLORS[s.type] || 'bg-slate-500/10 text-slate-500'}`}>
                            {s.typeLabel}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">{s.name}</td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">{s.email}</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300 max-w-xs truncate" title={s.summary}>{s.summary || '—'}</td>
                        <td className="px-6 py-4 text-slate-400 whitespace-nowrap">{formatDate(s.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SubmissionsClient;
