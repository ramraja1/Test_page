import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-700 shadow-lg fixed w-full z-10 top-0">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src={Logo} // Replace with the actual logo path
            alt="Codenest Logo"
            className="w-12 h-12 rounded-full shadow-md"
          />
          <Link
            to="/"
            className="text-3xl font-extrabold text-white tracking-wide hover:text-yellow-300"
          >
            Codenest
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-10 text-white text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/demo-test" className="hover:text-yellow-300 transition duration-300">
              Demo Test
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
