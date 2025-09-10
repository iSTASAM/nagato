'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import ServiceCard from './ServiceCard';

const ServicePricing: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, animationClasses: titleAnimationClasses } = useScrollAnimation({ delay: 0.5 });
  
  // Create animation hooks for service cards at the top level
  const { elementRef: card1Ref, animationClasses: card1AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.2, 
    index: 1 
  });
  const { elementRef: card2Ref, animationClasses: card2AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.2, 
    index: 2 
  });
  const { elementRef: card3Ref, animationClasses: card3AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.2, 
    index: 3 
  });
  const { elementRef: ctaRef, animationClasses: ctaAnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.2, 
    index: 4 
  });

  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: t('service.pricing.basic.title'),
      description: t('service.pricing.basic.desc'),
      features: [
        t('service.pricing.basic.feature1'),
        t('service.pricing.basic.feature2'),
        t('service.pricing.basic.feature3'),
        t('service.pricing.basic.feature4')
      ],
      price: t('service.pricing.basic.price')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('service.pricing.pro.title'),
      description: t('service.pricing.pro.desc'),
      features: [
        t('service.pricing.pro.feature1'),
        t('service.pricing.pro.feature2'),
        t('service.pricing.pro.feature3'),
        t('service.pricing.pro.feature4'),
        t('service.pricing.pro.feature5')
      ],
      price: t('service.pricing.pro.price'),
      isPopular: true
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: t('service.pricing.enterprise.title'),
      description: t('service.pricing.enterprise.desc'),
      features: [
        t('service.pricing.enterprise.feature1'),
        t('service.pricing.enterprise.feature2'),
        t('service.pricing.enterprise.feature3'),
        t('service.pricing.enterprise.feature4'),
        t('service.pricing.enterprise.feature5'),
        t('service.pricing.enterprise.feature6')
      ],
      price: t('service.pricing.enterprise.price')
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${titleAnimationClasses}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('service.pricing.title')}
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('service.pricing.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const cardRefs = [card1Ref, card2Ref, card3Ref];
            const cardAnimationClasses = [card1AnimationClasses, card2AnimationClasses, card3AnimationClasses];
            
            return (
              <div 
                key={index}
                ref={cardRefs[index]}
                className={`transition-all duration-1000 ease-out ${cardAnimationClasses[index]}`}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  price={service.price}
                  isPopular={service.isPopular}
                />
              </div>
            );
          })}
        </div>
        
        <div 
          ref={ctaRef}
          className={`text-center mt-12 transition-all duration-1000 ease-out ${ctaAnimationClasses}`}
        >
          <p className="text-gray-600 mb-6">{t('service.pricing.note')}</p>
          <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            {t('service.pricing.contact')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;
