// src/component/Login.jsx
import React from 'react';

const Login = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Log In</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border border-gray-300 rounded mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 border border-gray-300 rounded mb-4"
      />
      <button className="w-full bg-blue-600 text-white p-3 rounded">Log In</button>
    </form>
  </div>
);

export default Login;
