// EducationCard.jsx
import React from 'react';

const EducationCard = ({ isAdmin, education }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 ease-in-out">
      <h3 className="text-xl font-semibold mb-2">Education</h3>
      {education.map((item, index) => (
        <p key={index} contentEditable={isAdmin} className="hover:text-blue-500" suppressContentEditableWarning={!isAdmin}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default EducationCard;
