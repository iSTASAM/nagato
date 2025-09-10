'use client';

import React from 'react';
import { ProductHero, ProductShowcase, ProductFeatures, ProductProcess, PartsSlider } from '../components/Products';

const ProductsPage: React.FC = () => {
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