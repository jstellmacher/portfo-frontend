// pages/Contact.jsx
import React from 'react';
import EmailForm from '../components/EmailForm';
import GetInTouch from '../components/GetInTouch';

const Contact = () => {
  return (
    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <EmailForm />
        </div>
        <div>
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default Contact;
