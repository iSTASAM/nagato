'use client';

import { useEffect } from 'react';
import Home from './components/Home';

export default function HomePage() {
  useEffect(() => {
    document.title = "Nagato Heat Treatment (Thailand) - Home";
  }, []);

  return <Home />;
}
