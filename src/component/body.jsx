import React, { useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";
import Modal from "./model";
import Login from "./Login";
import Signup from "./Signup";

const Body = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openSignupModal = () => setIsSignupModalOpen(true);
  const closeSignupModal = () => setIsSignupModalOpen(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white">
      {/* Title and Description */}
      <div className="text-center pt-32 mb-12">
        <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s text-yellow-400">
          Welcome to <span className="text-teal-400">Codenest</span>
        </h1>
        <p className="text-xl font-light mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Empowering teachers to create coding tests and students to excel.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center px-8">
        {/* Admin Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center bg-gray-800 rounded-lg shadow-lg mx-4 animate__animated animate__fadeInLeft animate__delay-2s">
          <h2 className="text-4xl font-semibold mb-6 text-blue-400">
            Admin Dashboard
          </h2>
          <p className="text-lg font-light mb-8 text-center">
            As a teacher, you can create and manage tests for students. Sign up
            now to start.
          </p>
          <div className="flex space-x-6">
            <button
              onClick={openLoginModal}
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Log In
            </button>
            <button
              onClick={openSignupModal}
              className="px-10 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block h-96 w-px bg-gray-500 mx-8"></div>

        {/* Student Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center bg-gray-800 rounded-lg shadow-lg mx-4 animate__animated animate__fadeInRight animate__delay-3s">
          <h2 className="text-4xl font-semibold mb-6 text-teal-400">
            Student Access
          </h2>
          <p className="text-lg font-light mb-8 text-center">
            As a student, you can take coding tests to improve your programming skills. Sign up
            now to start.
          </p>

          <div className="flex space-x-6">
            <button
              onClick={openLoginModal}
              className="px-8 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Log In
            </button>
            <button
              onClick={openSignupModal}
              className="px-10 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {isLoginModalOpen && (
        <Modal onClose={closeLoginModal}>
          <Login />
        </Modal>
      )}
      {isSignupModalOpen && (
        <Modal onClose={closeSignupModal}>
          <Signup />
        </Modal>
      )}
    </div>
  );
};

export default Body;
