// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white cursor-pointer hover:text-yellow-300">
          Codenest
        </Link>
        <ul className="flex space-x-8 text-white text-lg">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300">Demo Test</Link></li>

          <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
        </ul>
        <div className="flex space-x-6">
          <Link to="/login" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Log In</Link>
          <Link to="/signup" className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
