// src/app/components/Contact/ContactHero.tsx
'use client';

import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ContactHero() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = t('contact.form.error.company');
    }
    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.error.name');
    }
    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.error.email');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contact.form.error.email_invalid');
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t('contact.form.error.phone');
    }
    if (!formData.position.trim()) {
      newErrors.position = t('contact.form.error.position');
    }
    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.error.message');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language: language // Get current language from context
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(t('contact.form.success'));
        
        // Reset form
        setFormData({
          companyName: '',
          name: '',
          email: '',
          phone: '',
          position: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || t('contact.form.error'));
      }
      
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(t('contact.form.error'));
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.hero.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.hero.description')}
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Column 1 - Form Fields */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-sky-600 transition-colors ${
                      errors.companyName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={t('contact.form.company_placeholder')}
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-sky-600 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={t('contact.form.name_placeholder')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-sky-600 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={t('contact.form.email_placeholder')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-sky-600 transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={t('contact.form.phone_placeholder')}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.position')}
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-sky-600 transition-colors ${
                      errors.position ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={t('contact.form.position_placeholder')}
                  />
                  {errors.position && (
                    <p className="mt-1 text-sm text-red-600">{errors.position}</p>
                  )}
                </div>
              </div>

              {/* Column 2 - Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={18}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-sky-600 transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={t('contact.form.message_placeholder')}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`font-semibold py-3 px-8 rounded-lg transition-colors duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-sky-600 hover:bg-sky-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>{t('contact.form.submitting')}</span>
                  </div>
                ) : (
                  t('contact.form.submit')
                )}
              </button>
            </div>

            {/* Status Message */}
            {submitStatus !== 'idle' && submitMessage && (
              <div className={`mt-4 p-4 rounded-lg text-center ${
                submitStatus === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                <div className="flex items-center justify-center space-x-2">
                  {submitStatus === 'success' ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className="font-medium">{submitMessage}</span>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.info.title')}</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-sky-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('contact.info.hours.title')}</p>
                  <p className="text-lg font-semibold text-gray-900">07:30 - 16:30</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-sky-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('contact.info.phone.title')}</p>
                  <p className="text-lg font-semibold text-gray-900">038-027-473-4</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-sky-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('contact.info.email.title')}</p>
                  <p className="text-lg font-semibold text-gray-900">INFO.NAGATOTHAI.COM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.map.title')}</h3>
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4942668706312!2d101.09764947594473!3d12.940193087372277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c276bcc5272f%3A0xd9d5cf6cd11092b4!2sNagato%20Heat%20Treatment%20(Thailand)%20CO.%2CLtd.!5e0!3m2!1sen!2sth!4v1757497045143!5m2!1sen!2sth"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
