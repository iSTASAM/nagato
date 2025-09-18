'use client';

import React, { useEffect } from 'react';
import { ServiceHero } from '../components/Services';

const ServicePage: React.FC = () => {
  useEffect(() => {
    document.title = "Nagato Heat Treatment (Thailand) - Services";
  }, []);
  return (
    <div className="min-h-screen">
      <ServiceHero />
    </div>
  );
};

export default ServicePage;
