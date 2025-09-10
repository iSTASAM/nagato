'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const CallToAction: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 px-4 bg-sky-600">
      <div className="max-w-4xl mx-auto text-center">
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
        
        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-sky-500">
          <p className="text-sky-200 mb-4">{t('home.cta.trust')}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white/20 px-6 py-3 rounded-lg text-white font-semibold">
              {t('home.cta.trust1')}
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg text-white font-semibold">
              {t('home.cta.trust2')}
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg text-white font-semibold">
              {t('home.cta.trust3')}
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg text-white font-semibold">
              {t('home.cta.trust4')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
