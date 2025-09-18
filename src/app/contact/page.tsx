'use client';

import { useEffect } from 'react';
import { ContactHero } from '../components/Contact';

export default function ContactPage() {
  useEffect(() => {
    document.title = "Nagato Heat Treatment (Thailand) - Contact";
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
      <ContactHero />
    </div>
  );
}