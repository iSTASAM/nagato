'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AboutHero: React.FC = () => {
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
    <section className="relative bg-gradient-to-br from-sky-50 to-sky-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 
            ref={titleRef}
            className={`text-5xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 ease-out ${titleAnimationClasses}`}
          >
            {t('about.hero.title')}
          </h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto rounded-full"></div>
        </div>
        
        <p 
          ref={descRef}
          className={`text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${descAnimationClasses}`}
        >
          {t('about.hero.description')}
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: t('about.hero.technology.title'),
              desc: t('about.hero.technology.desc'),
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )
            },
            {
              title: t('about.hero.quality.title'),
              desc: t('about.hero.quality.desc'),
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: t('about.hero.expertise.title'),
              desc: t('about.hero.expertise.desc'),
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
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
                className={`bg-white rounded-lg p-6 shadow-sm border border-sky-100 transition-all duration-1000 ease-out ${cardAnimationClasses[index]}`}
              >
                <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
