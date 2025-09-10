import React from 'react';
import HeroSection from './HeroSection';
import NewsSection from './NewsSection';
import FeaturesSection from './FeaturesSection';
import AboutPreview from './AboutPreview';
import CallToAction from './CallToAction';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <NewsSection />
      <FeaturesSection />
      <AboutPreview />
      <CallToAction />
    </div>
  );
};

export default Home;
