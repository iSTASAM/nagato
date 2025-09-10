'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AboutValues: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, animationClasses: titleAnimationClasses } = useScrollAnimation({ delay: 0.5 });
  
  // Create animation hooks for values at the top level
  const { elementRef: value1Ref, animationClasses: value1AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 1 
  });
  const { elementRef: value2Ref, animationClasses: value2AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 2 
  });
  const { elementRef: value3Ref, animationClasses: value3AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 3 
  });
  const { elementRef: value4Ref, animationClasses: value4AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 4 
  });
  const { elementRef: value5Ref, animationClasses: value5AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 5 
  });
  const { elementRef: value6Ref, animationClasses: value6AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 6 
  });
  const { elementRef: commitmentRef, animationClasses: commitmentAnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 7 
  });

  const values = [
    {
      title: t('about.values.quality.title'),
      description: t('about.values.quality.desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t('about.values.technology.title'),
      description: t('about.values.technology.desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: t('about.values.precision.title'),
      description: t('about.values.precision.desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${titleAnimationClasses}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.values.title')}</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.values.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const valueRefs = [value1Ref, value2Ref, value3Ref, value4Ref, value5Ref, value6Ref];
            const valueAnimationClasses = [value1AnimationClasses, value2AnimationClasses, value3AnimationClasses, value4AnimationClasses, value5AnimationClasses, value6AnimationClasses];
            
            return (
              <div key={index} className="group">
                <div 
                  ref={valueRefs[index]}
                  className={`bg-gradient-to-br from-sky-50 to-sky-100 rounded-lg p-8 h-full border border-sky-100 hover:shadow-lg transition-all duration-1000 ease-out hover:border-sky-200 ${valueAnimationClasses[index]}`}
                >
                  <div className="w-16 h-16 bg-sky-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div 
          ref={commitmentRef}
          className={`mt-16 bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl p-8 text-center text-white transition-all duration-1000 ease-out ${commitmentAnimationClasses}`}
        >
          <h3 className="text-2xl font-bold mb-4">{t('about.values.commitment.title')}</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            {t('about.values.commitment.desc')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
