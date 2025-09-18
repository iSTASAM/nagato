'use client';

import React, { useEffect } from 'react';
import { AboutHero} from '../components/AboutUs';

export default function AboutPage() {
  useEffect(() => {
    document.title = "Nagato Heat Treatment (Thailand) - About Us";
  }, []);
  return (
    <div className="min-h-screen">
      <AboutHero />
      {/* <AboutMission /> */}
      {/* <AboutValues /> */}
    </div>
  );
}