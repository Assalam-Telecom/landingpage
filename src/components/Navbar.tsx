import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-bold bg-gradient-to-r from-soft-orange-600 to-blue-green-600 bg-clip-text text-transparent">
              Assalam Telecom
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/about"
              className="text-gray-600 hover:text-soft-orange-600 px-3 py-2 rounded-lg hover:bg-soft-orange-50 transition-all duration-200"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-soft-orange-600 px-3 py-2 rounded-lg hover:bg-soft-orange-50 transition-all duration-200"
            >
              Contact
            </Link>
            <Link
              to="/signin"
              className="text-gray-600 hover:text-soft-orange-600 px-3 py-2 rounded-lg hover:bg-soft-orange-50 transition-all duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-r from-soft-orange-500 to-blue-green-500 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}