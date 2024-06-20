// EducationCard.jsx
import React from 'react';

const EducationCard = ({ isAdmin }) => {
  // Education data
  const educationData = [
    'Bachelor of Science in Business Administration (BSBA) from the University of Arizona, with dual majors in Management Information Systems (MIS) and Marketing.',
    'Certified Full Stack Software Engineer from Flatiron Coding Bootcamp.'
  ];

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 ease-in-out">
      <h3 className="text-xl font-semibold mb-2">Education</h3>
      <ul className="list-disc pl-6">
        {educationData.map((item, index) => (
          <li key={index} contentEditable={isAdmin} className="hover:text-blue-500" suppressContentEditableWarning={!isAdmin}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
