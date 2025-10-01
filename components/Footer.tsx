
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white mt-12">
            <div className="container mx-auto px-6 py-4">
                <p className="text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Family Store. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
