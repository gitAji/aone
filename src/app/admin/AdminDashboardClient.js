'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaSignOutAlt, FaTicketAlt, FaBriefcase, FaTags } from 'react-icons/fa';

const sections = [
  { icon: <FaTicketAlt />, title: 'Submissions & Orders', desc: 'View form submissions and orders across the site.', href: '/admin/submissions' },
  { icon: <FaBriefcase />, title: 'Careers', desc: 'Post, edit, or remove job listings.' },
  { icon: <FaTags />, title: 'Pricing Plans', desc: 'Edit plans, prices, and features.' },
];

const AdminDashboardClient = ({ username }) => {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8 sm:mb-10">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white text-[10px] font-black uppercase tracking-widest mb-2">
              Admin
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Dashboard</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 break-all">Signed in as {username}</p>
          </div>
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-black uppercase tracking-wider hover:opacity-90 transition-all disabled:opacity-60 self-start sm:self-auto"
          >
            <FaSignOutAlt className="text-xs" />
            {isLoggingOut ? 'Signing out...' : 'Sign Out'}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {sections.map((s, i) => {
            const card = (
              <div className={`bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 h-full ${s.href ? 'hover:border-rose-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300' : ''}`}>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500/10 to-amber-500/10 text-rose-500 flex items-center justify-center text-xl mb-4">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{s.desc}</p>
                {s.href ? (
                  <span className="inline-block px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-[10px] font-black uppercase tracking-widest">View All →</span>
                ) : (
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-black uppercase tracking-widest">Coming soon</span>
                )}
              </div>
            );
            return s.href ? (
              <Link href={s.href} key={i}>{card}</Link>
            ) : (
              <div key={i}>{card}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardClient;
