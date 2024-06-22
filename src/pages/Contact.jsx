import React from 'react';
import EmailForm from '../components/EmailForm';
import GetInTouch from '../components/GetInTouch';
import Maps from '../components/Maps'; // Import the Maps component

const Contact = () => {
  return (
    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <div className="">
            <EmailForm />
          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-600">
              Phone: +1 123-456-7890<br />
              Email: example@email.com<br />
              Address: 1234 Main St, City, Country
            </p>
          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Social Media</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-github"></i>
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
