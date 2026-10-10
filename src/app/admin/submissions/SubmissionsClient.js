'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaExclamationTriangle, FaTimes, FaTrash, FaSave } from 'react-icons/fa';

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

const READ_ONLY_FIELDS = new Set(['created_at', 'createdAt']);

function formatDate(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleDateString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
    });
  } catch {
    return '—';
  }
}

// Scalars (string/number/boolean/null) get a plain input; anything else
// (objects, arrays -- e.g. an order's `formData`, a design request's
// `header_requirements: {content}`) gets a raw-JSON textarea instead of a
// bespoke recursive form, so every field type stays editable without
// hand-building a form per collection shape.
function isScalar(value) {
  return value === null || ['string', 'number', 'boolean'].includes(typeof value);
}

function SubmissionDetailModal({ type, id, typeLabel, onClose, onDeleted, onUpdated }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [fields, setFields] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [saveError, setSaveError] = useState('');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/api/admin/submissions/${type}/${id}`);
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
        if (!cancelled) {
          const raw = data.data || {};
          const editable = {};
          for (const key in raw) {
            editable[key] = isScalar(raw[key]) ? raw[key] : JSON.stringify(raw[key], null, 2);
          }
          setFields(editable);
        }
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load submission.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [type, id]);

  const handleFieldChange = (key, value) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveError('');
    try {
      const updates = {};
      for (const key in fields) {
        if (READ_ONLY_FIELDS.has(key)) continue;
        const value = fields[key];
        if (typeof value === 'string' && (value.trim().startsWith('{') || value.trim().startsWith('['))) {
          try {
            updates[key] = JSON.parse(value);
          } catch {
            throw new Error(`"${key}" is not valid JSON.`);
          }
        } else {
          updates[key] = value;
        }
      }

      const res = await fetch(`/api/admin/submissions/${type}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
      onUpdated();
      onClose();
    } catch (err) {
      setSaveError(err.message || 'Failed to save changes.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Delete this submission permanently? This cannot be undone.')) return;
    setDeleting(true);
    setSaveError('');
    try {
      const res = await fetch(`/api/admin/submissions/${type}/${id}`, { method: 'DELETE' });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
      onDeleted();
      onClose();
    } catch (err) {
      setSaveError(err.message || 'Failed to delete submission.');
      setDeleting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm px-4" onClick={onClose}>
      <div
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-2xl p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-2 ${TYPE_COLORS[type] || 'bg-slate-500/10 text-slate-500'}`}>
              {typeLabel}
            </span>
            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Edit Submission</h2>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-rose-500 transition-colors p-2">
            <FaTimes />
          </button>
        </div>

        {loading && <p className="text-slate-400 text-sm">Loading…</p>}

        {error && (
          <div className="p-4 bg-rose-500/5 border border-rose-500/20 rounded-xl text-sm text-rose-500 font-medium mb-4">
            {error}
          </div>
        )}

        {fields && (
          <div className="space-y-4">
            {Object.entries(fields).map(([key, value]) => {
              const readOnly = READ_ONLY_FIELDS.has(key);
              const isMultiline = typeof value === 'string' && (value.includes('\n') || value.length > 80);
              return (
                <div key={key}>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">
                    {key}{readOnly && ' (read-only)'}
                  </label>
                  {isMultiline ? (
                    <textarea
                      value={value ?? ''}
                      onChange={(e) => handleFieldChange(key, e.target.value)}
                      disabled={readOnly}
                      rows={Math.min(8, Math.max(3, String(value ?? '').split('\n').length))}
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-rose-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  ) : (
                    <input
                      type={typeof value === 'number' ? 'number' : 'text'}
                      value={value ?? ''}
                      onChange={(e) => handleFieldChange(key, typeof value === 'number' ? Number(e.target.value) : e.target.value)}
                      disabled={readOnly}
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  )}
                </div>
              );
            })}

            {saveError && (
              <div className="p-4 bg-rose-500/5 border border-rose-500/20 rounded-xl text-sm text-rose-500 font-medium">
                {saveError}
              </div>
            )}

            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={handleDelete}
                disabled={deleting || saving}
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-rose-500/10 text-rose-500 text-xs font-black uppercase tracking-wider hover:bg-rose-500 hover:text-white transition-all disabled:opacity-50"
              >
                <FaTrash className="text-xs" /> {deleting ? 'Deleting…' : 'Delete'}
              </button>
              <button
                onClick={handleSave}
                disabled={saving || deleting}
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-black uppercase tracking-wider hover:opacity-90 transition-all disabled:opacity-50"
              >
                <FaSave className="text-xs" /> {saving ? 'Saving…' : 'Save Changes'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const SubmissionsClient = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeType, setActiveType] = useState('all');
  const [selected, setSelected] = useState(null);

  const fetchSubmissions = async () => {
    try {
      const res = await fetch('/api/admin/submissions');
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
      setSubmissions(data.submissions || []);
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to load submissions.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const types = useMemo(() => {
    const unique = new Map();
    submissions.forEach((s) => unique.set(s.type, s.typeLabel));
    return Array.from(unique, ([type, label]) => ({ type, label }));
  }, [submissions]);

  const filtered = activeType === 'all'
    ? submissions
    : submissions.filter((s) => s.type === activeType);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <Link href="/admin" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-rose-500 transition-colors mb-3">
            <FaArrowLeft className="text-[10px]" /> Back to Dashboard
          </Link>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Submissions &amp; Orders</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {loading ? 'Loading…' : `${submissions.length} total across all forms -- tap a row to edit or delete`}
          </p>
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

            {/* Mobile: stacked cards -- a horizontally-scrolling table is awkward to
                read one-handed, so phones get a dedicated card layout instead of the
                desktop table's overflow-x-auto. */}
            <div className="sm:hidden space-y-3">
              {filtered.map((s) => (
                <div
                  key={`${s.type}-${s.id}`}
                  onClick={() => setSelected(s)}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 active:bg-slate-50 dark:active:bg-slate-800/30 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${TYPE_COLORS[s.type] || 'bg-slate-500/10 text-slate-500'}`}>
                      {s.typeLabel}
                    </span>
                    <span className="text-[11px] text-slate-400 whitespace-nowrap">{formatDate(s.createdAt)}</span>
                  </div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">{s.name}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mb-1.5 break-all">{s.email}</p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2">{s.summary || '—'}</p>
                </div>
              ))}
            </div>

            {/* Desktop/tablet: full table */}
            <div className="hidden sm:block bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden">
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
                      <tr
                        key={`${s.type}-${s.id}`}
                        onClick={() => setSelected(s)}
                        className="border-b border-slate-50 dark:border-slate-800/50 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
                      >
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

      {selected && (
        <SubmissionDetailModal
          type={selected.type}
          id={selected.id}
          typeLabel={selected.typeLabel}
          onClose={() => setSelected(null)}
          onUpdated={fetchSubmissions}
          onDeleted={fetchSubmissions}
        />
      )}
    </div>
  );
};

export default SubmissionsClient;
