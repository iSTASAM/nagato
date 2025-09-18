// src/app/components/AboutUs/AboutHero.tsx
'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Image from 'next/image';

const AboutHero: React.FC = () => {
  const { t } = useLanguage();
  
  // Create animation hooks for sections
  const { elementRef: businessRef, animationClasses: businessAnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.2, 
    index: 1 
  });
  const { elementRef: certificateRef, animationClasses: certificateAnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.2, 
    index: 2 
  });
  const { elementRef: customerRef, animationClasses: customerAnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.2, 
    index: 3 
  });

  const businessServices = [
    { key: 'carburizing' },
    { key: 'carbonitriding' },
    { key: 'quenching' },
    { key: 'induction' },
    { key: 'tempering' }
  ];

  const certificates = [
    { name: 'ISO 9001:2015', image: '/img/about/NagatoCer9001.png', type: 'certificate' },
    { name: 'IATF 16949', image: '/img/about/NagatoCerIATF.png', type: 'certificate' }
  ];

  const logos = [
    { name: 'ISO IATF', image: '/img/about/ISO_IATF.png', type: 'logo' },
    { name: 'IATF Brand', image: '/img/about/IATF-Brand.png', type: 'logo' }
  ];

  const customers = [
    'Otics (Thailand) Co., Ltd',
    'Ogusu (Thailand) Co., Ltd',
    'Kubota Iron Works(Thailand) Co., Ltd',
    'Aapico Forging Public Company Limited',
    'Thai Fukoku Co., Ltd.',
    'Thai Ui Seiken Co., Ltd.',
    'Korat Matsushita.,Ltd.',
    'K-Thai Hydraulic Co. ltd'
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div 
            ref={businessRef}
            className={`transition-all duration-1000 ease-out ${businessAnimationClasses}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('about.hero.business.title')}
            </h1>
            <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full mb-6"></div>
          </div>
        </div>

        {/* Business Services Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                      {t(`about.hero.business.${service.key}`)}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
            
            {/* And More Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                    {t('about.hero.business.and_more')}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates & Standards Section */}
        <div 
          ref={certificateRef}
          className={`mb-8 transition-all duration-1000 ease-out ${certificateAnimationClasses}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('about.hero.certificate.acquisition')}
            </h2>
            <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full mb-6"></div>
          </div>
          
          {/* Standards Logos */}
          <div className="mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {logos.map((logo, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-8">
                    <div className="relative w-full h-24 overflow-hidden">
                      <Image
                        src={logo.image}
                        alt={logo.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate Documents */}
          <div className="p-4 lg:p-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
              {t('about.hero.certificate.subtitle')}
              <span className="block text-lg font-normal text-gray-600 mt-2">{t('about.hero.certificate.subtitle_en')}</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {certificates.map((cert, index) => (
                <div key={index} className="text-center">
                  {/* Certificate Info */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {cert.name}
                    </h4>
                  </div>
                  
                  {/* Certificate Image - A4 proportions (210:297 ratio) */}
                  <div className="relative w-full max-w-lg mx-auto overflow-hidden" style={{ aspectRatio: '210/297' }}>
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customers Section */}
        <div 
          ref={customerRef}
          className={`transition-all duration-1000 ease-out ${customerAnimationClasses}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('about.hero.customer.title')}
            </h2>
            <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full mb-6"></div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              {customers.map((customer, index) => (
                <div 
                  key={index}
                  className="group relative bg-gray-50 rounded-lg p-4 lg:p-6 hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="text-center">
                    <h3 className="text-sm lg:text-base font-semibold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                      {customer}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutHero;