'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ServiceHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-sky-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('service.hero.title')}
          </h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
        </div>
        
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
          {t('service.hero.description')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-sky-100 hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('service.hero.quality.title')}</h3>
            <p className="text-gray-600 text-sm">{t('service.hero.quality.desc')}</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-sky-100 hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('service.hero.speed.title')}</h3>
            <p className="text-gray-600 text-sm">{t('service.hero.speed.desc')}</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-sky-100 hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('service.hero.support.title')}</h3>
            <p className="text-gray-600 text-sm">{t('service.hero.support.desc')}</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-sky-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-sky-100 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-sky-200 rounded-full opacity-40"></div>
    </section>
  );
};

export default ServiceHero;
