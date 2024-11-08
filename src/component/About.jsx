// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-8 text-gray-800">
       {/* Title Section */}
       <section className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-blue-400 mb-2">About Codenest</h1>
          <p className="text-xl text-gray-300">
            Your destination for effective, accessible coding assessments. Codenest is designed to support educators and engage students with a user-friendly, results-driven platform.
          </p>
        </section>

      {/* Project Description */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Project Description</h2>
        <p className="text-lg leading-relaxed">
          Codenest is a web-based application designed to support educators in creating, managing, and analyzing coding
          tests. Our platform allows teachers to effortlessly administer coding exams while providing students with a
          user-friendly interface to showcase their skills. With Codenest, assessment becomes more efficient and insightful.
        </p>
      </section>

      {/* Mission */}
      <section className="my-12 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Our mission is to create an innovative solution for educational institutions that supports the growth of the
          next generation of developers. We believe in bridging the gap between learning and application through effective
          tools that make the assessment process fair, objective, and accessible.
        </p>
      </section>

      {/* Key Features */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Customizable test creation tailored to any curriculum.</li>
          <li>Real-time results for immediate feedback.</li>
          <li>Comprehensive progress tracking with analytics.</li>
          <li>Interactive UI that is easy for both students and educators.</li>
        </ul>
      </section>

    

      {/* Testimonials */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">What Users Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <p className="text-lg">"Codenest has completely transformed the way we conduct our coding assessments. It's intuitive and saves so much time!"</p>
            <p className="text-right font-semibold mt-2">- John Doe, Educator</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <p className="text-lg">"As a student, I love how easy it is to navigate the tests on Codenest. It takes the stress out of coding exams!"</p>
            <p className="text-right font-semibold mt-2">- Jane Smith, Student</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
