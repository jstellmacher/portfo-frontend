// components/GetInTouch.jsx
import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const GetInTouch = () => (
  <div id="contact-information" className="">
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
      <p className="text-lg mb-4">Interested in discussing technology solutions or exploring potential collaborations?</p>
      <a href="https://www.linkedin.com/in/jaichuang-stellmacher" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-2 flex items-center justify-center">
        <FaLinkedin className="mr-2" /> Connect on LinkedIn
      </a>
      <a href="mailto:jaijai.stell@gmail.com" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mb-2 flex items-center justify-center">
        <FaEnvelope className="mr-2" /> Send an Email
      </a>
      <a href="https://github.com/jstellmacher" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 flex items-center justify-center">
        <FaGithub className="mr-2" /> View GitHub Profile
      </a>
    </div>
  </div>
);

export default GetInTouch;
