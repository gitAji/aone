'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Toast from '@/components/Toast';
import { FaShieldAlt, FaGift } from 'react-icons/fa';

const inputClass = "block w-full px-4 py-3 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500";
const labelClass = "block text-sm font-bold text-gray-800 dark:text-slate-200 mb-1.5";
const sectionHeadingClass = "text-xs font-black uppercase tracking-[0.2em] text-rose-500 pt-2";
const optionalTag = <span className="text-xs font-normal normal-case text-slate-400 dark:text-slate-500 ml-1">(optional)</span>;

const ReferralPage = () => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    referredName: '',
    referredEmail: '',
    referredCompany: '',
    referredService: '',
    additionalNotes: '',
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
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToast({ message: 'Your referral has been submitted successfully! Thank you.', type: 'success' });
        setFormData({
          referrerName: '',
          referrerEmail: '',
          referredName: '',
          referredEmail: '',
          referredCompany: '',
          referredService: '',
          additionalNotes: '',
        });
      } else {
        setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
      }
    } catch (error) {
      console.error('Error submitting referral form:', error);
      setToast({ message: 'An unexpected error occurred. Please try again later.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="referral-page bg-gray-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title="Refer a Client"
        subtitle="Help us grow and get rewarded!"
      />
      <section className="container mx-auto px-4 pb-16 pt-36">
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        <div className="max-w-2xl mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-slate-800">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Referral Form</h2>
            <p className="flex items-center justify-center gap-2 text-sm font-medium text-rose-600 dark:text-rose-400">
              <FaGift className="text-xs" />
              Refer a client who completes a project and get rewarded
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <h3 className={sectionHeadingClass}>Your Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="referrerName" className={labelClass}>Your Name <span className="text-rose-500">*</span></label>
                <input type="text" name="referrerName" id="referrerName" required value={formData.referrerName} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="referrerEmail" className={labelClass}>Your Email <span className="text-rose-500">*</span></label>
                <input type="email" name="referrerEmail" id="referrerEmail" required value={formData.referrerEmail} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <h3 className={sectionHeadingClass}>Client You Are Referring</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="referredName" className={labelClass}>{"Client's Name"} <span className="text-rose-500">*</span></label>
                <input type="text" name="referredName" id="referredName" required value={formData.referredName} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="referredEmail" className={labelClass}>{"Client's Email"} <span className="text-rose-500">*</span></label>
                <input type="email" name="referredEmail" id="referredEmail" required value={formData.referredEmail} onChange={handleChange} className={inputClass} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="referredCompany" className={labelClass}>{"Client's Company"} {optionalTag}</label>
                <input type="text" name="referredCompany" id="referredCompany" value={formData.referredCompany} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="referredService" className={labelClass}>Service of Interest {optionalTag}</label>
                <input type="text" name="referredService" id="referredService" value={formData.referredService} onChange={handleChange} placeholder="e.g., Web Development, Digital Marketing" className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="additionalNotes" className={labelClass}>Additional Notes {optionalTag}</label>
              <textarea name="additionalNotes" id="additionalNotes" rows="3" value={formData.additionalNotes} onChange={handleChange} placeholder="Any additional information about the referral." className={inputClass}></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium-gradient"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Referral'}
              </button>
              <p className="flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500 mt-3">
                <FaShieldAlt className="text-[10px]" />
                {"We'll never share your contact details without permission."}
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ReferralPage;
