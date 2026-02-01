'use client';
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { useLanguage } from "@/context/LanguageContext";

const RequestQuotePage = () => {
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
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        services: checked
          ? [...prevData.services, value]
          : prevData.services.filter((service) => service !== value),
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
    setMessage('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage(t('quote.success'));
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
        setMessage(t('quote.error'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage(t('quote.unexpected'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="request-quote-page bg-gray-50 min-h-screen">
      <HeroSection
        title={t('quote.title')}
        subtitle={t('quote.subtitle')}
      />
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{t('quote.projectDetails')}</h2>
          {message && (
            <div className={`p-4 mb-4 text-center rounded-md ${message === t('quote.success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {t('quote.fullName')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('quote.emailAddress')} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                {t('quote.phoneNumber')} <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                {t('quote.companyName')}
              </label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('quote.servicesOfInterest')} <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((service) => (
                  <div key={service.key} className="flex items-center">
                    <input
                      type="checkbox"
                      id={service.key}
                      name="services"
                      value={service.label}
                      checked={formData.services.includes(service.label)}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor={service.key} className="ml-2 block text-sm text-gray-900">
                      {service.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
                {t('quote.projectDescription')} <span className="text-red-500">*</span>
              </label>
              <textarea
                name="projectDescription"
                id="projectDescription"
                rows="4"
                required
                value={formData.projectDescription}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                {t('quote.estimatedBudget')} <span className="text-red-500">*</span>
              </label>
              <select
                id="budget"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
                {t('quote.desiredTimeline')} <span className="text-red-500">*</span>
              </label>
              <select
                id="timeline"
                name="timeline"
                required
                value={formData.timeline}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">{t('quote.selectTimeline')}</option>
                {timelineOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary h-14"
              >
                {isSubmitting ? t('quote.submitting') : t('quote.submit')}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RequestQuotePage;
