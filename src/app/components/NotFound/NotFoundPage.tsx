'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaHome, FaEnvelope, FaSearch, FaArrowLeft } from 'react-icons/fa';

const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, animationClasses: titleAnimationClasses } = useScrollAnimation({ delay: 0.2 });
  const { elementRef: contentRef, animationClasses: contentAnimationClasses } = useScrollAnimation({ delay: 0.4 });
  const { elementRef: suggestionsRef, animationClasses: suggestionsAnimationClasses } = useScrollAnimation({ delay: 0.6 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center">
        {/* Main Content */}
        <div className="rounded-2xl p-8 sm:p-12 lg:p-16">
          {/* 404 Number */}
          <div 
            ref={titleRef}
            className={`mb-8 ${titleAnimationClasses}`}
          >
            <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-sky-600/20 leading-none">
              {t('404.title')}
            </h1>
          </div>

          {/* Subtitle */}
          <div 
            ref={contentRef}
            className={`mb-8 ${contentAnimationClasses}`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {t('404.subtitle')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('404.description')}
            </p>
          </div>

          {/* Suggestions */}
          <div 
            ref={suggestionsRef}
            className={`mb-12 ${suggestionsAnimationClasses}`}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {t('404.suggestions')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <FaSearch className="text-sky-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  {t('404.suggestion1')}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <FaHome className="text-sky-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  {t('404.suggestion2')}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <FaArrowLeft className="text-sky-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  {t('404.suggestion3')}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <FaEnvelope className="text-sky-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  {t('404.suggestion4')}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-3 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors duration-200"
            >
              <FaHome className="mr-2" />
              {t('404.backHome')}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-sky-600 font-medium rounded-lg hover:bg-sky-50 transition-colors duration-200"
            >
              <FaEnvelope className="mr-2" />
              {t('404.contactUs')}
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-sky-100 rounded-full opacity-60 flex items-center justify-center backdrop-blur-sm">
          <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
