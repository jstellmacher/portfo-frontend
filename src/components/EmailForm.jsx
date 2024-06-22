// components/EmailForm.jsx
import React, { useState } from 'react';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Clear form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-500 max-w-screen-md min-h-[60vh] mx-auto bg-clip-padding bg-opacity-80 border-gray-800">
      <h2 className="text-2xl font-semibold mb-4">Send me a message</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here"
          rows="4"
          required
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Send Message</button>
    </form>
  );
};

export default EmailForm;
