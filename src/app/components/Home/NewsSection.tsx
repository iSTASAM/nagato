'use client';

import React, { useState, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Link from 'next/link';

const NewsSection: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef, animationClasses } = useScrollAnimation({ delay: 0.5 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // Create animation hooks for news cards at the top level
  const { elementRef: news1Ref, animationClasses: news1AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 1 
  });
  const { elementRef: news2Ref, animationClasses: news2AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 2 
  });
  const { elementRef: news3Ref, animationClasses: news3AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 3 
  });
  const { elementRef: news4Ref, animationClasses: news4AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 4 
  });
  const { elementRef: news5Ref, animationClasses: news5AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 5 
  });

  // Sample news data - in a real app, this would come from an API
  const newsItems = [
    {
      id: 1,
      title: t('home.news.item1.title'),
      description: t('home.news.item1.description'),
      date: '2024-01-15',
      category: t('home.news.item1.category'),
      image: '/img/home/heat-treating-steel-gears.jpg'
    },
    {
      id: 2,
      title: t('home.news.item2.title'),
      description: t('home.news.item2.description'),
      date: '2024-01-10',
      category: t('home.news.item2.category'),
      image: '/img/parts/parts.jpg'
    },
    {
      id: 3,
      title: t('home.news.item3.title'),
      description: t('home.news.item3.description'),
      date: '2024-01-05',
      category: t('home.news.item3.category'),
      image: '/img/parts/part2.jpg'
    },
    {
      id: 4,
      title: t('home.news.item4.title'),
      description: t('home.news.item4.description'),
      date: '2023-12-28',
      category: t('home.news.item4.category'),
      image: '/img/parts/part3.jpg'
    },
    {
      id: 5,
      title: t('home.news.item5.title'),
      description: t('home.news.item5.description'),
      date: '2023-12-20',
      category: t('home.news.item5.category'),
      image: '/img/home/heat-treating-steel-gears.jpg'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of one card + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="news" className="py-12 px-4 bg-gradient-to-br from-gray-50 to-sky-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-1000 ease-out ${animationClasses}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('home.news.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.news.subtitle')}
          </p>
        </div>

        {/* News Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
              canScrollLeft 
                ? 'text-sky-600 hover:bg-sky-50 hover:shadow-xl' 
                : 'text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Scroll left"
          >
            <MdChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
              canScrollRight 
                ? 'text-sky-600 hover:bg-sky-50 hover:shadow-xl' 
                : 'text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Scroll right"
          >
            <MdChevronRight className="w-6 h-6" />
          </button>

          {/* News Cards */}
          <div 
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {newsItems.map((news, index) => {
              const newsRefs = [news1Ref, news2Ref, news3Ref, news4Ref, news5Ref];
              const newsAnimationClasses = [news1AnimationClasses, news2AnimationClasses, news3AnimationClasses, news4AnimationClasses, news5AnimationClasses];

              return (
                <div 
                  key={news.id}
                  ref={newsRefs[index]}
                  className={`flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer ${newsAnimationClasses[index]}`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {news.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(news.date)}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors duration-200 line-clamp-2">
                      {news.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {news.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link href="/news">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
              {t('home.news.viewAll')}
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default NewsSection;
