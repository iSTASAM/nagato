'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProductFeatures: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, animationClasses: titleAnimationClasses } = useScrollAnimation({ delay: 0.5 });
  
  // Create animation hooks for features at the top level
  const { elementRef: feature1Ref, animationClasses: feature1AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 1 
  });
  const { elementRef: feature2Ref, animationClasses: feature2AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 2 
  });
  const { elementRef: feature3Ref, animationClasses: feature3AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 3 
  });
  const { elementRef: feature4Ref, animationClasses: feature4AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 4 
  });
  const { elementRef: feature5Ref, animationClasses: feature5AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 5 
  });
  const { elementRef: feature6Ref, animationClasses: feature6AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 6 
  });

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('product.features.quality.title'),
      description: t('product.features.quality.desc')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('product.features.speed.title'),
      description: t('product.features.speed.desc')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('product.features.technology.title'),
      description: t('product.features.technology.desc')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: t('product.features.precision.title'),
      description: t('product.features.precision.desc')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      title: t('product.features.support.title'),
      description: t('product.features.support.desc')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: t('product.features.security.title'),
      description: t('product.features.security.desc')
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
            {t('product.features.title')}
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('product.features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const featureRefs = [feature1Ref, feature2Ref, feature3Ref, feature4Ref, feature5Ref, feature6Ref];
            const featureAnimationClasses = [feature1AnimationClasses, feature2AnimationClasses, feature3AnimationClasses, feature4AnimationClasses, feature5AnimationClasses, feature6AnimationClasses];
            
            return (
              <div 
                key={index} 
                ref={featureRefs[index]}
                className={`bg-white rounded-lg p-6 shadow-sm border border-sky-100 hover:shadow-md transition-all duration-1000 ease-out ${featureAnimationClasses[index]}`}
              >
                <div className="w-16 h-16 bg-sky-600 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
