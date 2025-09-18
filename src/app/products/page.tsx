'use client';

import React, { useEffect } from 'react';
import { ProductHero, ProductShowcase, ProductFeatures, ProductProcess, PartsSlider } from '../components/Products';

const ProductsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Nagato Heat Treatment (Thailand) - Products";
  }, []);
  return (
    <div className="min-h-screen">
      <ProductHero />
      <PartsSlider />
      <ProductShowcase />
      <ProductFeatures />
      <ProductProcess />
    </div>
  );
};

export default ProductsPage;