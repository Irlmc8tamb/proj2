
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Products</h1>
        <p className="mt-4 text-lg text-gray-600">Handcrafted with love and care by our family.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
