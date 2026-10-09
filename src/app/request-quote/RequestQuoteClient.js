'use client';
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { useLanguage } from "@/context/LanguageContext";
import Toast from '@/components/Toast';
import { FaCheck, FaClock, FaShieldAlt } from 'react-icons/fa';

const RequestQuoteClient = () => {
  const { t, language } = useLanguage();
  const isNo = language === 'no';

  const services = [
    { key: 'webDev', label: t('consultation.serviceList.webDev') },
    { key: 'aiAuto', label: t('consultation.serviceList.aiAuto') },
    { key: 'digitalMarket', label: t('consultation.serviceList.digitalMarket') },
    { key: 'uiux', label: t('consultation.serviceList.uiux') },
    { key: 'photo', label: t('consultation.serviceList.photo') },
    { key: 'video', label: t('consultation.serviceList.video') },
    { key: 'branding', label: t('consultation.serviceList.branding') },
    { key: 'seo', label: t('consultation.serviceList.seo') },
    { key: 'wordpress', label: t('consultation.serviceList.wordpress') },
    { key: 'customCode', label: t('consultation.serviceList.customCode') },
    { key: 'adminDash', label: t('consultation.serviceList.adminDash') },
    { key: 'cms', label: t('consultation.serviceList.cms') },
    { key: 'staticWeb', label: t('consultation.serviceList.staticWeb') },
    { key: 'logoDesign', label: t('consultation.serviceList.logoDesign') },
    { key: 'socialMedia', label: t('consultation.serviceList.socialMedia') },
    { key: 'maintenance', label: t('consultation.serviceList.maintenance') },
  ];

  const budgetOptions = t('quote.budgetOptions') || [];
  const timelineOptions = t('quote.timelineOptions') || [];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [],
    projectDescription: '',
    budget: '',
    timeline: '',
  });
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const toggleService = (label) => {
    setFormData((prevData) => ({
      ...prevData,
      services: prevData.services.includes(label)
        ? prevData.services.filter((s) => s !== label)
        : [...prevData.services, label],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToast({ message: t('quote.success'), type: 'success' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          services: [],
          projectDescription: '',
          budget: '',
          timeline: '',
        });
      } else {
        setToast({ message: t('quote.error'), type: 'error' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setToast({ message: t('quote.unexpected'), type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Shared input treatment -- bigger touch targets and rounded-xl to match
  // the bolder, more premium feel used elsewhere on the site (ApplyClient,
  // OrderClient) instead of the cramped, generic "sm:text-sm" form styling
  // this page previously inherited from a boilerplate template. Rose focus
  // rings instead of indigo -- the indigo was a leftover from that same
  // template and didn't match the site's rose-500 identity used everywhere
  // else a form has been redesigned (ContactClient, ApplyClient).
  const inputClass = "block w-full px-4 py-3 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500";
  const labelClass = "block text-sm font-bold text-gray-800 dark:text-slate-200 mb-1.5";
  const optionalTag = (
    <span className="text-xs font-normal normal-case text-slate-400 dark:text-slate-500 ml-1">
      {isNo ? '(valgfritt)' : '(optional)'}
    </span>
  );

  return (
    <div className="request-quote-page bg-gray-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title={t('quote.title')}
        subtitle={t('quote.subtitle')}
      />
      <section className="container mx-auto px-4 pb-16 pt-36">
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        <div className="max-w-2xl mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-slate-800">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t('quote.projectDetails')}</h2>
            <p className="flex items-center justify-center gap-2 text-sm font-medium text-rose-600 dark:text-rose-400">
              <FaClock className="text-xs" />
              {isNo ? 'Tar under 2 minutter — bare 3 felt er pakrevd' : 'Takes under 2 minutes — only 3 fields required'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  {t('quote.fullName')} <span className="text-rose-500">*</span>
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
                  {t('quote.emailAddress')} <span className="text-rose-500">*</span>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className={labelClass}>
                  {t('quote.phoneNumber')} {optionalTag}
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="company" className={labelClass}>
                  {t('quote.companyName')} {optionalTag}
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>
                {t('quote.servicesOfInterest')} {optionalTag}
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => {
                  const selected = formData.services.includes(service.label);
                  return (
                    <button
                      type="button"
                      key={service.key}
                      onClick={() => toggleService(service.label)}
                      aria-pressed={selected}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold border transition-all ${
                        selected
                          ? 'bg-rose-500 border-rose-500 text-white shadow-md shadow-rose-500/20'
                          : 'bg-slate-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-rose-300 dark:hover:border-rose-500/50'
                      }`}
                    >
                      {selected && <FaCheck className="text-[10px]" />}
                      {service.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label htmlFor="projectDescription" className={labelClass}>
                {t('quote.projectDescription')} <span className="text-rose-500">*</span>
              </label>
              <textarea
                name="projectDescription"
                id="projectDescription"
                rows="4"
                required
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder={isNo ? 'Fortell oss kort om hva du trenger...' : 'Tell us briefly what you need...'}
                className={inputClass}
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="budget" className={labelClass}>
                  {t('quote.estimatedBudget')} {optionalTag}
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">{t('quote.selectBudget')}</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className={labelClass}>
                  {t('quote.desiredTimeline')} {optionalTag}
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">{t('quote.selectTimeline')}</option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium-gradient"
              >
                {isSubmitting ? t('quote.submitting') : t('quote.submit')}
              </button>
              <p className="flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500 mt-3">
                <FaShieldAlt className="text-[10px]" />
                {isNo ? 'Ingen forpliktelser. Vi svarer innen 24 timer.' : 'No obligation. We respond within 24 hours.'}
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RequestQuoteClient;
