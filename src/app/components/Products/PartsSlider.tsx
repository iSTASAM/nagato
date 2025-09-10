'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const PartsSlider: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { elementRef: titleRef, animationClasses: titleAnimationClasses } = useScrollAnimation({ delay: 0.5 });

  const partsImages = [
    {
      src: '/img/parts/parts.jpg',
      alt: 'Parts Overview',
      title: t('product.parts.overview.title'),
      description: t('product.parts.overview.desc')
    },
    {
      src: '/img/parts/part2.jpg',
      alt: 'Part 2',
      title: t('product.parts.part2.title'),
      description: t('product.parts.part2.desc')
    },
    {
      src: '/img/parts/part3.jpg',
      alt: 'Part 3',
      title: t('product.parts.part3.title'),
      description: t('product.parts.part3.desc')
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % partsImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + partsImages.length) % partsImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 4000); // 4 seconds per slide
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isAutoPlaying, startAutoPlay]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-1000 ease-out ${titleAnimationClasses}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('product.parts.title')}
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('product.parts.subtitle')}
          </p>
        </div>

        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Slider Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {partsImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Image Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {image.title}
                      </h3>
                      <p className="text-lg text-gray-200">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {partsImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 transition-all duration-200 ${
                  currentSlide === index
                    ? 'bg-sky-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600 bg-white/80 px-3 py-1">
              {currentSlide + 1} / {partsImages.length}
            </span>
          </div>
        </div>

        {/* Thumbnail Navigation for Desktop */}
        <div className="hidden md:flex justify-center mt-8 space-x-4">
          {partsImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-24 h-16 overflow-hidden transition-all duration-200 ${
                currentSlide === index
                  ? 'scale-105'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartsSlider;
