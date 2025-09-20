// src/app/components/Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('nav.home'), href: '/', key: 'nav.home' },
    { name: t('nav.about'), href: '/about', key: 'nav.about' },
    { name: t('nav.services'), href: '/services', key: 'nav.services' },
    { name: t('nav.products'), href: '/products', key: 'nav.products' },
    { name: t('nav.contact'), href: '/contact', key: 'nav.contact' },
  ];


  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href="/" className="flex items-center">
                <div className="bg-white p-2 rounded-lg shadow-md">
                  <Image
                    src="/img/brand/logo.jpg"
                    alt="Company Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </Link>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t('footer.company_description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-sky-400">{t('footer.quick_links')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-sky-400">{t('footer.contact_us')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-sky-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>{t('footer.address_line1')}</p>
                  <p>{t('footer.address_line2')}</p>
                  <p>{t('footer.address_line3')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-sky-400 flex-shrink-0" />
                <Link
                  href="tel:0380274734"
                  className="text-gray-300 hover:text-sky-400 transition-colors duration-200 text-sm"
                >
                  {t('footer.phone')}
                </Link>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-sky-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <Link
                    href="mailto:info@nagatothai.com"
                    className="hover:text-sky-400 transition-colors duration-200"
                  >
                    info@nagatothai.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-sky-400">{t('footer.location')}</h3>
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4942668706312!2d101.09764947594473!3d12.940193087372277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c276bcc5272f%3A0xd9d5cf6cd11092b4!2sNagato%20Heat%20Treatment%20(Thailand)%20CO.%2CLtd.!5e0!3m2!1sen!2sth!4v1757497045143!5m2!1sen!2sth"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} {t('footer.copyright')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}