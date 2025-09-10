'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const CallToAction: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef, animationClasses } = useScrollAnimation({ delay: 0.5 });
  
  // Create animation hooks for trust items at the top level
  const { elementRef: trust1Ref, animationClasses: trust1AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 1 
  });
  const { elementRef: trust2Ref, animationClasses: trust2AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 2 
  });
  const { elementRef: trust3Ref, animationClasses: trust3AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 3 
  });
  const { elementRef: trust4Ref, animationClasses: trust4AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 4 
  });

  return (
    <section className="py-12 px-4 bg-sky-600">
      <div className="max-w-4xl mx-auto text-center">
        <div 
          ref={elementRef}
          className={`transition-all duration-1000 ease-out ${animationClasses}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-50 text-sky-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              {t('home.cta.button1')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              {t('home.cta.button2')}
            </button>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-sky-500">
          <p className="text-sky-200 mb-4">{t('home.cta.trust')}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              t('home.cta.trust1'),
              t('home.cta.trust2'),
              t('home.cta.trust3'),
              t('home.cta.trust4')
            ].map((trustItem, index) => {
              const trustRefs = [trust1Ref, trust2Ref, trust3Ref, trust4Ref];
              const trustAnimationClasses = [trust1AnimationClasses, trust2AnimationClasses, trust3AnimationClasses, trust4AnimationClasses];
              
              return (
                <div 
                  key={index}
                  ref={trustRefs[index]}
                  className={`bg-white/20 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-1000 ease-out ${trustAnimationClasses[index]}`}
                >
                  {trustItem}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
