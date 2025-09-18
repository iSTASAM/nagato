// src/app/components/Home/CompanyInfoSection.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';

const CompanyInfoSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();
  
  const images = [
    { src: "/img/home/BG-Nagato.jpg", alt: "NAGATO Company Building" },
    { src: "/img/home/BG-Nagato2.jpg", alt: "NAGATO Facility" },
    { src: "/img/home/NagatoCar.jpg", alt: "NAGATO Vehicle" },
    { src: "/img/home/AllEmpoyee.png", alt: "NAGATO Team" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Company Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('company.title')}
          </h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('company.subtitle')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 items-start">
          
          {/* Company Details - Left Side */}
          <div className="xl:col-span-2 space-y-6">
            
            {/* Company Information Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-gray-600 rounded-full mr-4"></div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('company.info.title')}
                </h3>
              </div>
              <div className="space-y-6 text-gray-700">
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{t('company.info.address')}</span>
                  <p className="text-lg leading-relaxed">
                    {t('company.info.address_detail')}
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{t('company.info.phone')}</span>
                  <p className="text-xl font-medium text-gray-800">{t('company.info.phone_detail')}</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{t('company.info.established')}</span>
                  <p className="text-lg">{t('company.info.established_detail')}</p>
                </div>
              </div>
            </div>

            {/* Quality Policy Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-gray-600 rounded-full mr-4"></div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('company.quality.title')}
                </h3>
              </div>
              <ul className="space-y-5 text-gray-700">
                <li className="flex items-start group">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-4 mt-3 group-hover:bg-gray-600 transition-colors"></div>
                  <p className="text-lg leading-relaxed">
                    {t('company.quality.point1')}
                  </p>
                </li>
                <li className="flex items-start group">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-4 mt-3 group-hover:bg-gray-600 transition-colors"></div>
                  <p className="text-lg leading-relaxed">
                    {t('company.quality.point2')}
                  </p>
                </li>
              </ul>
            </div>

            {/* Slogan Card - Full Width */}
            <div className="xl:col-span-5 bg-gradient-to-r from-sky-600 to-sky-700 overflow-hidden">
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-sky-100 mb-4 uppercase tracking-wide">
                  {t('company.slogan.title')}
                </h3>
                <p className="text-white text-3xl font-bold leading-tight w-full">
                  {t('company.slogan.text')}
                </p>
                <div className="w-full h-1 bg-white mt-4 rounded-full opacity-80"></div>
              </div>
            </div>

          </div>

          {/* Image Slider - Right Side */}
          <div className="xl:col-span-3">
            <div className="bg-white overflow-hidden">
              {/* Image Container */}
              <div className="relative h-[550px] w-full overflow-hidden bg-gray-50">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 40vw"
                    />
                  </div>
                ))}
              </div>
              
              {/* Controls Section */}
              <div className="p-6">
                {/* Slide Indicators */}
                <div className="flex justify-center space-x-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-110 ${
                        index === currentSlide 
                          ? 'bg-gray-600' 
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyInfoSection;