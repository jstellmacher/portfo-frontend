import React from 'react';
import { FaUniversity, FaLaptopCode } from 'react-icons/fa';

const EducationCard = () => {
  // Education data
  const educationData = [
    {
      text: 'Bachelor of Science in Business Administration (BSBA) from the University of Arizona, with dual majors in Management Information Systems (MIS) and Marketing.',
      icon: <FaUniversity />
    },
    {
      text: 'Certified Full Stack Software Engineer from Flatiron Coding Bootcamp.',
      icon: <FaLaptopCode />
    }
  ];

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 ease-in-out">
      <h3 className="text-xl font-semibold mb-4">Education</h3>
      <ul className="space-y-4">
        {educationData.map((item, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <div className="mr-4 w-8 h-8">{item.icon}</div>
            <span contentEditable={false} suppressContentEditableWarning={true}>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
