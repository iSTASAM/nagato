'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MdArrowBack, MdCalendarToday, MdCategory, MdClose } from 'react-icons/md';
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  fullContent: string;
  date: string;
  category: string;
  image: string;
  author: string;
}

const NewsPage: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef, animationClasses } = useScrollAnimation({ delay: 0.5 });
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Nagato Heat Treatment (Thailand) - News";
  }, []);
  
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
  const { elementRef: news6Ref, animationClasses: news6AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 6 
  });
  const { elementRef: news7Ref, animationClasses: news7AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 7 
  });
  const { elementRef: news8Ref, animationClasses: news8AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 8 
  });
  const { elementRef: news9Ref, animationClasses: news9AnimationClasses } = useScrollAnimation({ 
    delay: 0.5, 
    staggerDelay: 0.1, 
    index: 9 
  });

  // Extended news data - in a real app, this would come from an API
  const newsItems = [
    {
      id: 1,
      title: t('news.item1.title'),
      description: t('news.item1.description'),
      fullContent: t('news.item1.fullContent'),
      date: '2024-01-15',
      category: t('news.item1.category'),
      image: '/img/home/heat-treating-steel-gears.jpg',
      author: t('news.item1.author')
    },
    {
      id: 2,
      title: t('news.item2.title'),
      description: t('news.item2.description'),
      fullContent: t('news.item2.fullContent'),
      date: '2024-01-10',
      category: t('news.item2.category'),
      image: '/img/parts/parts.jpg',
      author: t('news.item2.author')
    },
    {
      id: 3,
      title: t('news.item3.title'),
      description: t('news.item3.description'),
      fullContent: t('news.item3.fullContent'),
      date: '2024-01-05',
      category: t('news.item3.category'),
      image: '/img/parts/part2.jpg',
      author: t('news.item3.author')
    },
    {
      id: 4,
      title: t('news.item4.title'),
      description: t('news.item4.description'),
      fullContent: t('news.item4.fullContent'),
      date: '2023-12-28',
      category: t('news.item4.category'),
      image: '/img/parts/part3.jpg',
      author: t('news.item4.author')
    },
    {
      id: 5,
      title: t('news.item5.title'),
      description: t('news.item5.description'),
      fullContent: t('news.item5.fullContent'),
      date: '2023-12-20',
      category: t('news.item5.category'),
      image: '/img/home/heat-treating-steel-gears.jpg',
      author: t('news.item5.author')
    },
    {
      id: 6,
      title: t('news.item6.title'),
      description: t('news.item6.description'),
      fullContent: t('news.item6.fullContent'),
      date: '2023-12-15',
      category: t('news.item6.category'),
      image: '/img/parts/parts.jpg',
      author: t('news.item6.author')
    },
    {
      id: 7,
      title: t('news.item7.title'),
      description: t('news.item7.description'),
      fullContent: t('news.item7.fullContent'),
      date: '2023-12-10',
      category: t('news.item7.category'),
      image: '/img/parts/part2.jpg',
      author: t('news.item7.author')
    },
    {
      id: 8,
      title: t('news.item8.title'),
      description: t('news.item8.description'),
      fullContent: t('news.item8.fullContent'),
      date: '2023-12-05',
      category: t('news.item8.category'),
      image: '/img/parts/part3.jpg',
      author: t('news.item8.author')
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleReadMore = (news: NewsItem) => {
    setSelectedNews(news);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/#news"
                className="flex items-center text-sky-600 hover:text-sky-700 transition-colors duration-200 group"
              >
                <MdArrowBack className="w-6 h-6 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">{t('news.backToHome')}</span>
              </Link>
            </div>
            <div className="text-right">
              <h1 className="text-3xl font-bold text-gray-900">{t('news.pageTitle')}</h1>
              <p className="text-gray-600 mt-1">{t('news.pageSubtitle')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* News Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div 
          ref={elementRef}
          className={`transition-all duration-1000 ease-out ${animationClasses}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {newsItems.map((news, index) => {
              const newsRefs = [news1Ref, news2Ref, news3Ref, news4Ref, news5Ref, news6Ref, news7Ref, news8Ref, news9Ref];
              const newsAnimationClasses = [news1AnimationClasses, news2AnimationClasses, news3AnimationClasses, news4AnimationClasses, news5AnimationClasses, news6AnimationClasses, news7AnimationClasses, news8AnimationClasses, news9AnimationClasses];

              return (
                <article 
                  key={news.id}
                  ref={newsRefs[index]}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col ${newsAnimationClasses[index]}`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <MdCategory className="w-4 h-4 mr-1" />
                        {news.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    {/* Date and Author */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MdCalendarToday className="w-4 h-4 mr-2" />
                        {formatDate(news.date)}
                      </div>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {news.author}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors duration-200 line-clamp-2">
                      {news.title}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {news.description}
                    </p>

                    {/* Read More Button */}
                    <button 
                      onClick={() => handleReadMore(news)}
                      className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center group mt-auto"
                    >
                      <span>{t('news.readMore')}</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>

      {/* News Modal */}
      {isModalOpen && selectedNews && (
        <div 
          className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <MdCategory className="w-4 h-4 mr-1" />
                  {selectedNews.category}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <MdCalendarToday className="w-4 h-4 mr-2" />
                  {formatDate(selectedNews.date)}
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-full"
              >
                <MdClose className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* News Image */}
              <div className="mb-6">
                <img 
                  src={selectedNews.image} 
                  alt={selectedNews.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* News Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedNews.title}
              </h1>

              {/* Author */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    {selectedNews.author}
                  </span>
                </div>
              </div>

              {/* Full Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedNews.fullContent}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  {t('news.close')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
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
    </div>
  );
};

export default NewsPage;
