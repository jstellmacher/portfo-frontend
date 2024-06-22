// Subnavigation.jsx
import React from 'react';
import { FaList, FaBriefcase, FaGraduationCap, FaCertificate, FaTools } from 'react-icons/fa'; // Import icons

const Subnavigation = ({ setActiveSection, activeSection }) => {
  const sections = [
    { id: 'keyQualifications', label: 'Key Qualifications', icon: <FaList /> },
    { id: 'professionalExperience', label: 'Professional Experience', icon: <FaBriefcase /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'certifications', label: 'Certifications', icon: <FaCertificate /> },
    { id: 'technicalSkills', label: 'Technical Skills', icon: <FaTools /> },
  ];

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className={`cursor-pointer mb-2 px-4 py-2 rounded-md flex items-center ${activeSection === section.id ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'}`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="mr-2">{section.icon}</span>
            {section.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subnavigation;
