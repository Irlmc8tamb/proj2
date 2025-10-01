import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart.ts';

const CheckoutPage: React.FC = () => {
    const { cartItems, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically process the payment
        console.log('Order placed:', {
            customer: formData,
            items: cartItems,
            total: totalPrice,
        });
        clearCart();
        navigate('/order-success');
    };
    
    if (cartItems.length === 0) {
        navigate('/');
        return null;
    }

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>
            <div className="flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Street Address</label>
                                <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                            </div>
                             <div className="flex gap-4 mb-4">
                                <div className="w-2/3">
                                    <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                                    <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                                </div>
                                <div className="w-1/3">
                                    <label htmlFor="zip" className="block text-gray-700 font-medium mb-2">ZIP Code</label>
                                    <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                                </div>
                            </div>
                            <button type="submit" className="w-full py-3 mt-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-6">Your Order</h2>
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center mb-4 pb-4 border-b">
                                <div className="flex items-center">
                                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4"/>
                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                        <div className="flex justify-between font-bold text-xl mt-6">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;