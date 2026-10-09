'use client';
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { useLanguage } from "@/context/LanguageContext";
import Toast from '@/components/Toast';
import { FaCheck, FaClock, FaShieldAlt } from 'react-icons/fa';

const FreeConsultationClient = () => {
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

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    servicesOfInterest: [],
    biggestChallenge: '',
    preferredTime: '',
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
      servicesOfInterest: prevData.servicesOfInterest.includes(label)
        ? prevData.servicesOfInterest.filter((s) => s !== label)
        : [...prevData.servicesOfInterest, label],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToast({ message: t('consultation.success'), type: 'success' });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          companyName: '',
          servicesOfInterest: [],
          biggestChallenge: '',
          preferredTime: '',
        });
      } else {
        setToast({ message: t('consultation.error'), type: 'error' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setToast({ message: t('consultation.unexpected'), type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "block w-full px-4 py-3 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500";
  const labelClass = "block text-sm font-bold text-gray-800 dark:text-slate-200 mb-1.5";
  const optionalTag = (
    <span className="text-xs font-normal normal-case text-slate-400 dark:text-slate-500 ml-1">
      {isNo ? '(valgfritt)' : '(optional)'}
    </span>
  );

  return (
    <div className="free-consultation-page bg-gray-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title={t('consultation.title')}
        subtitle={t('consultation.subtitle')}
      />
      <section className="container mx-auto px-4 pb-16 pt-36">
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        <div className="max-w-2xl mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-slate-800">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t('consultation.formHeader')}</h2>
            <p className="flex items-center justify-center gap-2 text-sm font-medium text-rose-600 dark:text-rose-400">
              <FaClock className="text-xs" />
              {isNo ? 'Gratis og uforpliktende — svar innen 24 timer' : 'Free and no-obligation — we respond within 24 hours'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  {t('consultation.fullName')} <span className="text-rose-500">*</span>
                </label>
                <input type="text" name="fullName" id="fullName" required value={formData.fullName} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  {t('consultation.emailAddress')} <span className="text-rose-500">*</span>
                </label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className={labelClass}>
                  {t('consultation.phoneNumber')} {optionalTag}
                </label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="companyName" className={labelClass}>
                  {t('consultation.companyName')} {optionalTag}
                </label>
                <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass}>
                {t('consultation.servicesOfInterest')} {optionalTag}
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => {
                  const selected = formData.servicesOfInterest.includes(service.label);
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
              <label htmlFor="biggestChallenge" className={labelClass}>
                {t('consultation.biggestChallenge')} {optionalTag}
              </label>
              <textarea name="biggestChallenge" id="biggestChallenge" rows="4" value={formData.biggestChallenge} onChange={handleChange} className={inputClass}></textarea>
            </div>

            <div>
              <label htmlFor="preferredTime" className={labelClass}>
                {t('consultation.preferredTime')} {optionalTag}
              </label>
              <select name="preferredTime" id="preferredTime" value={formData.preferredTime} onChange={handleChange} className={inputClass}>
                <option value="">{t('consultation.selectTime')}</option>
                <option value="Morning">{t('consultation.morning')}</option>
                <option value="Afternoon">{t('consultation.afternoon')}</option>
                <option value="Evening">{t('consultation.evening')}</option>
              </select>
            </div>

            <div className="pt-2">
              <button type="submit" disabled={isSubmitting} className="btn-premium-gradient">
                {isSubmitting ? t('consultation.submitting') : t('consultation.submit')}
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

export default FreeConsultationClient;
