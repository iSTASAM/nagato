// src/app/components/NavBar.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { useLanguage } from '../contexts/LanguageContext';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageChange = (lang: 'th' | 'en' | 'jp' | 'cn') => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
    // ระบบจะจัดการ URL และ localStorage อัตโนมัติผ่าน LanguageContext
  };

  const menuItems = [
    { name: t('nav.home'), href: '/', key: 'nav.home' },
    { name: t('nav.about'), href: '/about', key: 'nav.about' },
    { name: t('nav.services'), href: '/services', key: 'nav.services' },
    { name: t('nav.inspection'), href: '/InspectionFacility', key: 'nav.inspection' },
    { name: t('nav.contact'), href: '/contact', key: 'nav.contact' },
  ];

  const languages = [
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'jp', name: '日本語', flag: '🇯🇵' },
    { code: 'cn', name: '中文', flag: '🇨🇳' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-sky-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-xs" />
                <span>{t('nav.phone')}</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>{t('nav.business_hours')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/img/brand/logo.jpg"
                alt="Company Logo"
                width={150}
                height={50}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 hover:text-sky-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:block relative">
            <button
              onClick={toggleLanguageMenu}
              className="flex items-center space-x-2 text-gray-700 hover:text-sky-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              <MdLanguage className="h-4 w-4" />
              <span>{languages.find(lang => lang.code === language)?.flag}</span>
            </button>
            
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code as 'th' | 'en' | 'jp' | 'cn')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 ${
                      language === lang.code ? 'bg-sky-50 text-sky-600' : 'text-gray-700'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>


          {/* Mobile menu button and language switcher */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="text-gray-700 hover:text-sky-600 focus:outline-none focus:text-sky-600 p-2"
                aria-label="Language switcher"
              >
                <MdLanguage className="h-5 w-5" />
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code as 'th' | 'en' | 'jp' | 'cn')}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 ${
                        language === lang.code ? 'bg-sky-50 text-sky-600' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-sky-600 focus:outline-none focus:text-sky-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-sky-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}