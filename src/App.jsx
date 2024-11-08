import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Nav';
import Body from './component/body';
import Footer from './component/foot';
import Features from './component/body2';
import Team from './component/team';
import About from './component/About';
import Login from './component/Login';
import Signup from './component/Signup';
import 'animate.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Features />
      <Team />
      <Footer />
    </Router>
  );
}

export default App;
