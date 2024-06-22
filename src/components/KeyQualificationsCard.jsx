import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Importing icons from react-icons

const KeyQualificationsCard = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // Define qualifications with their descriptions
  const qualifications = [
    {
      title: 'Cloud Infrastructure Management',
      description: [
        'Deployed scalable solutions on AWS and Azure to handle dynamic workloads efficiently.',
        'Optimized cloud costs through resource management and automated scaling strategies.',
      ],
    },
    {
      title: 'Identity and Access Management (IAM)',
      description: [
        'Implemented role-based access controls (RBAC) in Azure AD to ensure secure access management.',
        'Managed user authentication and authorization processes, integrating with single sign-on (SSO) solutions.',
      ],
    },
    {
      title: 'Agile Project Management',
      description: [
        'Led cross-functional teams in Agile ceremonies, ensuring alignment and quick decision-making.',
        'Implemented Scrum and Kanban methodologies to deliver projects on time and within budget.',
      ],
    },
    {
      title: 'Full Stack Web Development',
      description: [
        'Developed responsive web applications using React.js, Node.js, and Express for backend API integration.',
        'Designed and optimized databases using PostgreSQL, ensuring data consistency and performance.',
      ],
    },
    {
      title: 'Data Migration and Database Management',
      description: [
        'Executed seamless data migrations between databases, ensuring data integrity and minimal downtime.',
        'Implemented database performance tuning and optimization strategies to improve query efficiency.',
      ],
    },
  ];

  const toggleDescription = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand if not expanded or different index
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Key Qualifications</h3>
      {qualifications.map((qualification, index) => (
        <div key={index} className="mb-2">
          <button
            onClick={() => toggleDescription(index)}
            className="flex items-center justify-between w-full py-2 px-4 bg-gray-300 rounded-lg focus:outline-none"
          >
            <span className="text-lg font-semibold">{qualification.title}</span>
            {expandedIndex === index ? (
              <FiChevronUp className="w-6 h-6 text-gray-600" /> // Up icon when expanded
            ) : (
              <FiChevronDown className="w-6 h-6 text-gray-600" /> // Down icon when collapsed
            )}
          </button>
          {expandedIndex === index && (
            <div className="ml-8 mt-2 text-gray-700">
              {qualification.description.map((desc, idx) => (
                <p key={idx} className="mb-2">{desc}</p> // Changed to paragraphs for descriptions
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default KeyQualificationsCard;
