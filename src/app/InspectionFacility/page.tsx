// src/app/InspectionFacility/page.tsx
'use client';

import React, { useEffect } from 'react';
import { InspectionHero } from '../components/Inspection';

const InspectionFacilityPage: React.FC = () => {
  useEffect(() => {
    document.title = "Nagato Heat Treatment (Thailand) - Inspection Facility";
  }, []);
  return (
    <main className="min-h-screen">
      <InspectionHero />
    </main>
  );
};

export default InspectionFacilityPage;