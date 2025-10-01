
import React from 'react';
import { Link } from 'react-router-dom';

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const OrderSuccessPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-12 text-center">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                    <CheckCircleIcon />
                </div>
                <h1 className="text-3xl font-bold text-gray-800">Thank You!</h1>
                <p className="text-gray-600 mt-2">Your order has been placed successfully.</p>
                <p className="text-gray-600 mt-1">We've sent a confirmation to your email address.</p>
                <Link to="/" className="mt-8 inline-block px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccessPage;
