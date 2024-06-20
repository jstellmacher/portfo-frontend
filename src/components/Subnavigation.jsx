// Subnavigation.jsx
import React from 'react';

const Subnavigation = ({ setActiveSection, activeSection }) => {
  const sections = [
    { id: 'keyQualifications', label: 'Key Qualifications' },
    { id: 'professionalExperience', label: 'Professional Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'technicalSkills', label: 'Technical Skills' },
  ];

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <ul>
        {sections.map(section => (
          <li
            key={section.id}
            className={`cursor-pointer mb-2 px-4 py-2 rounded-md ${activeSection === section.id ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subnavigation;
