
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { CartItem } from '../types';

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);


const CartPage: React.FC = () => {
    const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-6 py-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h1>
                <p className="text-gray-600 mt-2">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/" className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-2/3">
                    <div className="bg-white rounded-lg shadow-md">
                        {cartItems.map((item: CartItem) => (
                            <div key={item.id} className="flex items-center p-4 border-b last:border-b-0">
                                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                                <div className="flex-grow ml-4">
                                    <h2 className="font-semibold text-gray-800">{item.name}</h2>
                                    <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                                        className="w-16 text-center border rounded-md"
                                    />
                                </div>
                                <div className="ml-4 font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</div>
                                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-gray-500 hover:text-red-600">
                                    <TrashIcon />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/3">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>FREE</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <Link to="/checkout">
                            <button className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-semibold">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
