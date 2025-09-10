'use client';

import { useLanguage } from '../../contexts/LanguageContext';

export default function ContactInfo() {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: t('contact.info.email.title'),
      details: [
        'info@nagato-heat.com',
        'sales@nagato-heat.com',
        'support@nagato-heat.com'
      ],
      description: t('contact.info.email.description')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: t('contact.info.phone.title'),
      details: [
        '038-027-473',
        '062-604-1289',
        '038-027-475 (แฟกซ์)'
      ],
      description: t('contact.info.phone.description')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: t('contact.info.address.title'),
      details: [
        '7/379 หมู่ที่ 6 นิคมอุตสาหกรรมอมตะซิตี้',
        'ตำบลมาบยางพร อำเภอปลวกแดง',
        'จังหวัดระยอง 21140'
      ],
      description: t('contact.info.address.description')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      title: t('contact.info.hours.title'),
      details: [
        'จันทร์ - ศุกร์: 8:00 - 17:00',
        'เสาร์: 8:00 - 12:00',
        'อาทิตย์: ปิดบริการ'
      ],
      description: t('contact.info.hours.description')
    }
  ];

  return (
    <div className="bg-white p-6 lg:p-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('contact.info.title')}
        </h2>
        <div className="w-16 h-1 bg-sky-600 mb-2"></div>
        <p className="text-gray-600 text-sm">
          {t('contact.info.description')}
        </p>
      </div>

      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-10 h-10 bg-sky-100 flex items-center justify-center text-sky-600">
              {method.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                {method.title}
              </h3>
              <div className="space-y-1 mb-2">
                {method.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-700 text-sm font-medium">
                    {detail}
                  </p>
                ))}
              </div>
              <p className="text-xs text-gray-500">
                {method.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {t('contact.info.social.title')}
        </h3>
        <div className="flex space-x-2">
          <a
            href="#"
            className="w-10 h-10 bg-sky-100 flex items-center justify-center text-sky-600 hover:bg-sky-200 transition-colors duration-200"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-sky-100 flex items-center justify-center text-sky-600 hover:bg-sky-200 transition-colors duration-200"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-sky-100 flex items-center justify-center text-sky-600 hover:bg-sky-200 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-sky-100 flex items-center justify-center text-sky-600 hover:bg-sky-200 transition-colors duration-200"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
