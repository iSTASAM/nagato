// src/app/components/Home/index.tsx
import React from 'react';
import HeroSection from './HeroSection';
import CompanyInfoSection from './CompanyInfoSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompanyInfoSection />
    </div>
  );
};

export default Home;
