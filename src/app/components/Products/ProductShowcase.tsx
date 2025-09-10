'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import ProductCard from './ProductCard';

const ProductShowcase: React.FC = () => {
  const { t } = useLanguage();

  const heatTreatmentTypes = [
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('product.showcase.annealing.title'),
      description: t('product.showcase.annealing.desc'),
      features: [
        t('product.showcase.annealing.feature1'),
        t('product.showcase.annealing.feature2'),
        t('product.showcase.annealing.feature3'),
        t('product.showcase.annealing.feature4')
      ],
      temperature: "800-1200°C",
      duration: "2-8 ชั่วโมง"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: t('product.showcase.quenching.title'),
      description: t('product.showcase.quenching.desc'),
      features: [
        t('product.showcase.quenching.feature1'),
        t('product.showcase.quenching.feature2'),
        t('product.showcase.quenching.feature3'),
        t('product.showcase.quenching.feature4')
      ],
      temperature: "800-900°C",
      duration: "1-3 ชั่วโมง"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: t('product.showcase.tempering.title'),
      description: t('product.showcase.tempering.desc'),
      features: [
        t('product.showcase.tempering.feature1'),
        t('product.showcase.tempering.feature2'),
        t('product.showcase.tempering.feature3'),
        t('product.showcase.tempering.feature4')
      ],
      temperature: "150-650°C",
      duration: "1-4 ชั่วโมง"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: t('product.showcase.normalizing.title'),
      description: t('product.showcase.normalizing.desc'),
      features: [
        t('product.showcase.normalizing.feature1'),
        t('product.showcase.normalizing.feature2'),
        t('product.showcase.normalizing.feature3'),
        t('product.showcase.normalizing.feature4')
      ],
      temperature: "850-950°C",
      duration: "1-2 ชั่วโมง"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: t('product.showcase.carburizing.title'),
      description: t('product.showcase.carburizing.desc'),
      features: [
        t('product.showcase.carburizing.feature1'),
        t('product.showcase.carburizing.feature2'),
        t('product.showcase.carburizing.feature3'),
        t('product.showcase.carburizing.feature4')
      ],
      temperature: "900-950°C",
      duration: "4-12 ชั่วโมง"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: t('product.showcase.nitriding.title'),
      description: t('product.showcase.nitriding.desc'),
      features: [
        t('product.showcase.nitriding.feature1'),
        t('product.showcase.nitriding.feature2'),
        t('product.showcase.nitriding.feature3'),
        t('product.showcase.nitriding.feature4')
      ],
      temperature: "500-600°C",
      duration: "10-100 ชั่วโมง"
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('product.showcase.title')}
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('product.showcase.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heatTreatmentTypes.map((treatment, index) => (
            <ProductCard
              key={index}
              icon={treatment.icon}
              title={treatment.title}
              description={treatment.description}
              features={treatment.features}
              temperature={treatment.temperature}
              duration={treatment.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
