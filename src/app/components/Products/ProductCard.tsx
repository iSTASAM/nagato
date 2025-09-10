'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  temperature?: string;
  duration?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  icon,
  title,
  description,
  features,
  temperature,
  duration
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-sky-100 hover:shadow-lg transition-all duration-300 hover:border-sky-200 group">
      <div className="p-8">
        {/* Icon and Title */}
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-sky-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-sky-700 transition-colors duration-200">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
            {temperature && (
              <p className="text-sm text-sky-600 font-medium">{temperature}</p>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">คุณสมบัติหลัก:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-4 h-4 text-sky-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Duration */}
        {duration && (
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">ระยะเวลา:</span>
            <span className="text-sm font-medium text-sky-600">{duration}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
