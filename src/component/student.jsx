import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-gray-300 pt-24">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 shadow-md fixed w-full z-10 top-0">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white cursor-pointer hover:text-yellow-300">
            Codenest
          </Link>
          <ul className="flex space-x-8 text-white text-lg">
            <li><Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link></li>
            <li><Link to="/profile" className="hover:text-yellow-300">Profile</Link></li>
            <li><Link to="/logout" className="hover:text-yellow-300">Logout</Link></li>
          </ul>
        </div>
      </nav>

      {/* Dashboard Body */}
      <div className="container mx-auto px-6 py-12">
        {/* Welcome Section */}
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 drop-shadow-lg mb-2">
            Welcome Back, Student!
          </h1>
          <p className="text-xl text-gray-400">
            You're all set to start taking tests and improving your coding skills!
          </p>
        </section>

        {/* Upcoming Tests Section */}
        <section className="my-12 bg-gray-700 bg-opacity-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">Upcoming Tests</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-white">JavaScript Basics</h3>
              <p className="text-lg text-gray-400">Start Date: Dec 5, 2024</p>
              <Link to="/test/1" className="text-blue-500 hover:underline">Take Test</Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-white">Data Structures</h3>
              <p className="text-lg text-gray-400">Start Date: Dec 7, 2024</p>
              <Link to="/test/2" className="text-blue-500 hover:underline">Take Test</Link>
            </div>
          </div>
        </section>

        {/* Recent Results Section */}
        <section className="my-12 bg-gray-700 bg-opacity-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">Recent Results</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-white">JavaScript Basics</h3>
              <p className="text-lg text-gray-400">Score: 85%</p>
              <Link to="/results/1" className="text-blue-500 hover:underline">View Details</Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-white">Data Structures</h3>
              <p className="text-lg text-gray-400">Score: 78%</p>
              <Link to="/results/2" className="text-blue-500 hover:underline">View Details</Link>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="my-12 bg-gray-700 bg-opacity-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">Profile</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white">John Doe</h3>
            <p className="text-lg text-gray-400">Student ID: #123456</p>
            <p className="text-lg text-gray-400">Email: john.doe@example.com</p>
            <Link to="/profile" className="text-blue-500 hover:underline">Edit Profile</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;
