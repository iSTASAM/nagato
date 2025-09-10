'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ProductHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-sky-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('product.hero.title')}
          </h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
        </div>
        
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
          {t('product.hero.description')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-sky-100 hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('product.hero.heat.title')}</h3>
            <p className="text-gray-600 text-sm">{t('product.hero.heat.desc')}</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-sky-100 hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('product.hero.treatment.title')}</h3>
            <p className="text-gray-600 text-sm">{t('product.hero.treatment.desc')}</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-sky-100 hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('product.hero.quality.title')}</h3>
            <p className="text-gray-600 text-sm">{t('product.hero.quality.desc')}</p>
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

export default ProductHero;
