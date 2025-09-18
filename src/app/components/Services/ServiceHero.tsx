// src/app/components/Services/ServiceHero.tsx
'use client';

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../contexts/LanguageContext';

const ServiceHero: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, animationClasses: titleAnimationClasses } = useScrollAnimation({ delay: 0.5 });
  const { elementRef: descRef, animationClasses: descAnimationClasses } = useScrollAnimation({ delay: 0.5, staggerDelay: 0.2, index: 1 });
  
  // Create animation hooks for machinery cards
  const { elementRef: card1Ref, animationClasses: card1AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 2 
  });
  const { elementRef: card2Ref, animationClasses: card2AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 3 
  });
  const { elementRef: card3Ref, animationClasses: card3AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 4 
  });
  const { elementRef: card4Ref, animationClasses: card4AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 5 
  });
  const { elementRef: card5Ref, animationClasses: card5AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 6 
  });
  const { elementRef: card6Ref, animationClasses: card6AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 7 
  });

  const machineryData = [
    {
      title: t('service.machinery.carburizing_furnace.title'),
      specifications: t('service.machinery.carburizing_furnace.specifications'),
      units: t('service.machinery.carburizing_furnace.units'),
      image: "/img/service/service1.jpg",
      ref: card1Ref,
      animationClasses: card1AnimationClasses
    },
    {
      title: t('service.machinery.induction_hardening.title'),
      specifications: t('service.machinery.induction_hardening.specifications'),
      units: t('service.machinery.induction_hardening.units'),
      image: "/img/service/service2.jpg",
      ref: card2Ref,
      animationClasses: card2AnimationClasses
    },
    {
      title: t('service.machinery.tempering_furnace.title'),
      specifications: t('service.machinery.tempering_furnace.specifications'),
      units: t('service.machinery.tempering_furnace.units'),
      image: "/img/service/service3.jpg",
      ref: card3Ref,
      animationClasses: card3AnimationClasses
    },
    {
      title: t('service.machinery.vacuum_degreasing.title'),
      specifications: t('service.machinery.vacuum_degreasing.specifications'),
      units: t('service.machinery.vacuum_degreasing.units'),
      image: "/img/service/service4.jpg",
      ref: card4Ref,
      animationClasses: card4AnimationClasses
    },
    {
      title: t('service.machinery.automatic_straightening.title'),
      specifications: t('service.machinery.automatic_straightening.specifications'),
      units: t('service.machinery.automatic_straightening.units'),
      image: "/img/service/service5.jpg",
      ref: card5Ref,
      animationClasses: card5AnimationClasses
    },
    {
      title: t('service.machinery.manual_straightening.title'),
      specifications: t('service.machinery.manual_straightening.specifications'),
      units: t('service.machinery.manual_straightening.units'),
      image: "/img/service/service6.jpg",
      ref: card6Ref,
      animationClasses: card6AnimationClasses
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div 
            ref={titleRef}
            className={`transition-all duration-1000 ease-out ${titleAnimationClasses}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('about.hero.business.title')}
            </h1>
            <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full mb-6"></div>
          </div>
          
          <p 
            ref={descRef}
            className={`text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${descAnimationClasses}`}
          >
            {t('about.hero.business.carburizing')}, {t('about.hero.business.carbonitriding')}, {t('about.hero.business.quenching')}, {t('about.hero.business.induction')}, {t('about.hero.business.tempering')}, {t('about.hero.business.and_more')}
          </p>
        </div>

        {/* Machinery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {machineryData.map((machine, index) => (
            <div 
              key={index}
              ref={machine.ref}
              className={`bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-1000 ease-out overflow-hidden group ${machine.animationClasses}`}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={machine.image}
                  alt={machine.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading={index < 2 ? "eager" : "lazy"}
                  onError={(e) => {
                    console.error('Image failed to load:', machine.image);
                    e.currentTarget.src = '/img/brand/logo.jpg';
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {machine.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <span className="font-medium">{t('service.machinery.specifications')}:</span>
                  </div>
                  <p className="text-sm text-gray-700 ml-6 leading-relaxed">
                    {machine.specifications}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="font-medium">{t('service.machinery.available')}:</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded-full">
                    {machine.units}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;