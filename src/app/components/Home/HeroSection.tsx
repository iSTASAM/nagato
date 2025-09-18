// src/app/components/Home/HeroSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { MdMouse } from 'react-icons/md';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [showMouseIcon, setShowMouseIcon] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { elementRef: titleRef, animationClasses: titleAnimationClasses } = useScrollAnimation({ delay: 0.5 });

  // Background images array
  const backgroundImages = [
    '/img/home/BG-Nagato.jpg',
    '/img/home/BG-Nagato2.jpg'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Hide mouse icon when user scrolls down more than 100px
      setShowMouseIcon(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide background images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Full-screen background images with smooth transitions */}
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      ))}
      
      {/* Gradient overlay with maximum dark opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-600/95 to-sky-900/95" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-center">
          <h1 
            ref={titleRef}
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight transition-all duration-1000 ease-out drop-shadow-2xl font-extrabold tracking-wide break-words hyphens-auto ${titleAnimationClasses}`}
          >
            {t('home.hero.subtitle')}
          </h1>
          {t('home.hero.description') && (
            <div className="max-w-4xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed drop-shadow-lg">
                {t('home.hero.description').split('\\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < t('home.hero.description').split('\\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Mouse scroll icon - left side */}
      {showMouseIcon && (
        <div className="absolute left-4 sm:left-6 md:left-8 bottom-8 sm:bottom-12 md:bottom-16 flex flex-col items-center text-white/80 hover:text-white transition-all duration-300 cursor-pointer group">
          <div className="flex flex-col items-center space-y-2">
            <MdMouse className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 animate-bounce" />
            <div className="w-4 h-6 sm:w-5 sm:h-7 md:w-6 md:h-8 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:w-1.5 sm:h-2.5 md:w-2 md:h-3 bg-white/60 rounded-full mt-1 sm:mt-1.5 md:mt-2 animate-pulse"></div>
            </div>
          </div>
          <span className="text-xs sm:text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {t('home.hero.scroll')}
          </span>
        </div>
      )}

      {/* Decorative elements - responsive */}
      <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 rounded-full opacity-60 flex items-center justify-center backdrop-blur-sm">
        <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
      <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/5 rounded-full opacity-40 flex items-center justify-center backdrop-blur-sm">
        <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/10 rounded-full opacity-50 flex items-center justify-center backdrop-blur-sm">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
