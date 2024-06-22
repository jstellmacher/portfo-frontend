import React from 'react';
import EmailForm from '../components/EmailForm';
import GetInTouch from '../components/GetInTouch';
import Maps from '../components/Maps'; // Import the Maps component
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Importing React Icons

const Contact = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <div className="">
            <EmailForm />
          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <div className="text-gray-600 space-y-2">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-blue-500" />
                <span>Phone: Please Email Me for It</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-500" />
                <a href="mailto:jaijai.stell@gmail.com" className="hover:underline">jaijai.stell@gmail.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>Dummy Address: 1234 Main St, City, Country</span>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Social Media</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.linkedin.com/in/jaichuang-stellmacher" className="text-gray-600 hover:text-blue-500">
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a href="https://github.com/jstellmacher" className="text-gray-600 hover:text-blue-500">
                  <FaGithub size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="">
            <GetInTouch />
          </div>
          <div className="mt-8 w-full">
            <Maps /> {/* Use the Maps component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
