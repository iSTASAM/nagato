'use client';

import React from 'react';
import { ProductHero, ProductShowcase, ProductFeatures, ProductProcess } from '../components/Products';

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <ProductHero />
      <ProductShowcase />
      <ProductFeatures />
      <ProductProcess />
    </div>
  );
};

export default ProductsPage;