import React from 'react';
import { AboutHero, AboutMission, AboutValues } from '../components/AboutUs';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutMission />
      <AboutValues />
    </div>
  );
}