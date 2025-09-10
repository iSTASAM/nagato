'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ServiceHero: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, animationClasses: titleAnimationClasses } = useScrollAnimation({ delay: 0.5 });
  const { elementRef: descRef, animationClasses: descAnimationClasses } = useScrollAnimation({ delay: 0.5, staggerDelay: 0.2, index: 1 });
  
  // Create animation hooks for cards at the top level
  const { elementRef: card1Ref, animationClasses: card1AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.2, 
    index: 2 
  });
  const { elementRef: card2Ref, animationClasses: card2AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.2, 
    index: 3 
  });
  const { elementRef: card3Ref, animationClasses: card3AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.2, 
    index: 4 
  });

  return (
    <section className="relative bg-gradient-to-br from-sky-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div 
          ref={titleRef}
          className={`mb-8 transition-all duration-1000 ease-out ${titleAnimationClasses}`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('service.hero.title')}
          </h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
        </div>
        
        <p 
          ref={descRef}
          className={`text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 ease-out ${descAnimationClasses}`}
        >
          {t('service.hero.description')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: t('service.hero.quality.title'),
              desc: t('service.hero.quality.desc'),
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: t('service.hero.speed.title'),
              desc: t('service.hero.speed.desc'),
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            },
            {
              title: t('service.hero.support.title'),
              desc: t('service.hero.support.desc'),
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              )
            }
          ].map((item, index) => {
            const cardRefs = [card1Ref, card2Ref, card3Ref];
            const cardAnimationClasses = [card1AnimationClasses, card2AnimationClasses, card3AnimationClasses];
            
            return (
              <div 
                key={index}
                ref={cardRefs[index]}
                className={`bg-white rounded-lg p-6 shadow-sm border border-sky-100 hover:shadow-md transition-all duration-1000 ease-out ${cardAnimationClasses[index]}`}
              >
                <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    
    </section>
  );
};

export default ServiceHero;
