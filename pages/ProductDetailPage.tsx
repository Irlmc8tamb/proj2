import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants.ts';
import { useCart } from '../hooks/useCart.ts';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-8 text-center">
        <h2 className="text-2xl font-bold">Product not found!</h2>
        <Link to="/" className="text-indigo-600 hover:underline mt-4 inline-block">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded-lg shadow-md object-cover" />
          </div>
          <div>
            <span className="text-sm font-semibold text-indigo-600 uppercase">{product.category}</span>
            <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-6">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-extrabold text-gray-900">${product.price.toFixed(2)}</span>
              <button
                onClick={() => addToCart(product)}
                className="px-8 py-3 bg-indigo-600 text-white text-base font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;