'use client';

import { ContactHero, ContactForm, ContactInfo } from '../components/Contact';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
      <ContactHero />
      
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Company Info Banner */}
        <div className="mb-8">
          <div className="bg-white p-8 lg:p-12">
            <div className="text-center mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                {t('contact.company.name')}
              </h2>
              <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-16 h-16 bg-sky-100 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('contact.company.address.title')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t('contact.company.address.detail') }}>
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="w-16 h-16 bg-sky-100 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('contact.company.phone.title')}</h3>
                <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: t('contact.company.phone.detail') }}>
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="w-16 h-16 bg-sky-100 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.414L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('contact.company.hours.title')}</h3>
                <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: t('contact.company.hours.detail') }}>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form and Info Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
          {/* Contact Form - Takes 2 columns */}
          <div className="xl:col-span-2">
            <ContactForm />
          </div>
          
          {/* Contact Info - Takes 1 column */}
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}