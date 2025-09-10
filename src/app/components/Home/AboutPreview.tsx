'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AboutPreview: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef, animationClasses } = useScrollAnimation({ delay: 0.5 });
  
  // Create animation hooks for stats at the top level
  const { elementRef: stat1Ref, animationClasses: stat1AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 1 
  });
  const { elementRef: stat2Ref, animationClasses: stat2AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 2 
  });
  const { elementRef: stat3Ref, animationClasses: stat3AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 3 
  });
  const { elementRef: stat4Ref, animationClasses: stat4AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.15, 
    index: 4 
  });

  const stats = [
    { number: "500+", label: t('home.about.stats.customers') },
    { number: "99.9%", label: t('home.about.stats.quality') },
    { number: "24/7", label: t('home.about.stats.support') },
    { number: "10+", label: t('home.about.stats.experience') }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-sky-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div 
            ref={elementRef}
            className={`transition-all duration-1000 ease-out ${animationClasses}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('home.about.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t('home.about.desc1')}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('home.about.desc2')}
            </p>
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
              {t('home.about.cta')}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => {
              const statRefs = [stat1Ref, stat2Ref, stat3Ref, stat4Ref];
              const statAnimationClasses = [stat1AnimationClasses, stat2AnimationClasses, stat3AnimationClasses, stat4AnimationClasses];
              
              return (
                <div 
                  key={index}
                  ref={statRefs[index]}
                  className={`bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-1000 ease-out ${statAnimationClasses[index]}`}
                >
                  <div className="text-3xl font-bold text-sky-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
