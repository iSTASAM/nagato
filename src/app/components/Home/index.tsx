import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AboutPreview from './AboutPreview';
import CallToAction from './CallToAction';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AboutPreview />
      <CallToAction />
    </div>
  );
};

export default Home;
