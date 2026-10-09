'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Toast from '@/components/Toast';
import { FaShieldAlt, FaLifeRing } from 'react-icons/fa';

const priorityOptions = [
  'Low',
  'Medium',
  'High',
  'Urgent',
];

const inputClass = "block w-full px-4 py-3 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500";
const labelClass = "block text-sm font-bold text-gray-800 dark:text-slate-200 mb-1.5";
const optionalTag = <span className="text-xs font-normal normal-case text-slate-400 dark:text-slate-500 ml-1">(optional)</span>;

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    issueDescription: '',
    priority: 'Medium',
  });
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToast({ message: 'Your support request has been sent successfully! We will get back to you shortly.', type: 'success' });
        setFormData({
          name: '',
          email: '',
          subject: '',
          issueDescription: '',
          priority: 'Medium',
        });
      } else {
        setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
      }
    } catch (error) {
      console.error('Error submitting support form:', error);
      setToast({ message: 'An unexpected error occurred. Please try again later.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="support-page bg-gray-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title="Support Request"
        subtitle="Submit a support request and we'll assist you as soon as possible."
      />
      <section className="container mx-auto px-4 pb-16 pt-36">
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        <div className="max-w-2xl mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-slate-800">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Submit a Support Ticket</h2>
            <p className="flex items-center justify-center gap-2 text-sm font-medium text-rose-600 dark:text-rose-400">
              <FaLifeRing className="text-xs" />
              Our team typically responds within one business day
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className={labelClass}>
                Subject <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="issueDescription" className={labelClass}>
                Issue Description <span className="text-rose-500">*</span>
              </label>
              <textarea
                name="issueDescription"
                id="issueDescription"
                rows="5"
                required
                value={formData.issueDescription}
                onChange={handleChange}
                className={inputClass}
              ></textarea>
            </div>
            <div>
              <label htmlFor="priority" className={labelClass}>
                Priority {optionalTag}
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className={inputClass}
              >
                {priorityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium-gradient"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
              <p className="flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500 mt-3">
                <FaShieldAlt className="text-[10px]" />
                {"No obligation. We respond within 1 business day."}
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
