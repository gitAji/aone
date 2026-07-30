'use client';
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { useLanguage } from "@/context/LanguageContext";
import Toast from '@/components/Toast';

const FreeConsultationPage = () => {
  const { t } = useLanguage();

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
    preferredTime: '',
  });
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        servicesOfInterest: checked
          ? [...prevData.servicesOfInterest, value]
          : prevData.servicesOfInterest.filter((service) => service !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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

  return (
    <div className="free-consultation-page bg-gray-50 min-h-screen">
      <HeroSection
        title={t('consultation.title')}
        subtitle={t('consultation.subtitle')}
      />
      <section className="container mx-auto px-4 py-16">
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{t('consultation.formHeader')}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">{t('consultation.fullName')} <span className="text-red-500">*</span></label>
              <input type="text" name="fullName" id="fullName" required value={formData.fullName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('consultation.emailAddress')} <span className="text-red-500">*</span></label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t('consultation.phoneNumber')}</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">{t('consultation.companyName')}</label>
              <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('consultation.servicesOfInterest')}</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((service) => (
                  <div key={service.key} className="flex items-center">
                    <input type="checkbox" id={service.key} name="servicesOfInterest" value={service.label} checked={formData.servicesOfInterest.includes(service.label)} onChange={handleChange} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label htmlFor={service.key} className="ml-2 block text-sm text-gray-900">{service.label}</label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="biggestChallenge" className="block text-sm font-medium text-gray-700">{t('consultation.biggestChallenge')}</label>
              <textarea name="biggestChallenge" id="biggestChallenge" rows="4" value={formData.biggestChallenge} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">{t('consultation.preferredTime')}</label>
              <select name="preferredTime" id="preferredTime" value={formData.preferredTime} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option value="">{t('consultation.selectTime')}</option>
                <option value="Morning">{t('consultation.morning')}</option>
                <option value="Afternoon">{t('consultation.afternoon')}</option>
                <option value="Evening">{t('consultation.evening')}</option>
              </select>
            </div>
            <div>
              <button type="submit" disabled={isSubmitting} className="btn-premium-gradient">
                {isSubmitting ? t('consultation.submitting') : t('consultation.submit')}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FreeConsultationPage;
