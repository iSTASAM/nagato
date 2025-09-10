'use client';

import React from 'react';
import { ServiceHero, ServiceFeatures, ServiceProcess, ServicePricing } from '../components/Services';

const ServicePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <ServiceHero />
      <ServiceFeatures />
      <ServiceProcess />
      <ServicePricing />
    </div>
  );
};

export default ServicePage;
