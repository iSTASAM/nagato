'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price?: string;
  isPopular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  price,
  isPopular = false
}) => {
  const { t } = useLanguage();

  return (
    <div className={`relative bg-white rounded-lg p-6 shadow-sm border transition-all duration-200 hover:shadow-md ${
      isPopular 
        ? 'border-sky-600 ring-2 ring-sky-100' 
        : 'border-sky-100 hover:border-sky-200'
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-sky-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            {t('service.card.popular')}
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-sky-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <svg className="w-4 h-4 text-sky-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      {price && (
        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-sky-600 mb-1">{price}</div>
          <div className="text-gray-500 text-sm">{t('service.card.perMonth')}</div>
        </div>
      )}
      
      <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
        isPopular
          ? 'bg-sky-600 hover:bg-sky-700 text-white'
          : 'border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'
      }`}>
        {t('service.card.learnMore')}
      </button>
    </div>
  );
};

export default ServiceCard;
