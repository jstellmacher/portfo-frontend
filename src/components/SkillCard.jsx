// SkillCard.jsx
import React from 'react';

const SkillCard = ({ isAdmin, skills }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 ease-in-out">
      <h3 className="text-xl font-semibold mb-2">Key Skills</h3>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index} className="hover:text-blue-500" contentEditable={isAdmin} suppressContentEditableWarning={!isAdmin}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
