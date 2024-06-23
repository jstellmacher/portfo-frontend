import React, { useState } from 'react';
import { FaCloud, FaUserShield, FaClipboardList, FaCode, FaDatabase } from 'react-icons/fa'; // Import icons

const KeyQualificationsCard = () => {
  const qualifications = [
    {
      title: 'Cloud Infrastructure Management',
      description: [
        { text: 'Deployed scalable solutions on AWS and Azure to handle dynamic workloads efficiently.' },
        { text: 'Optimized cloud costs through resource management and automated scaling strategies.' },
      ],
      icon: <FaCloud className="text-5xl mb-2 text-blue-500" />,
    },
    {
      title: 'Identity and Access Management (IAM)',
      description: [
        { text: 'Implemented role-based access controls (RBAC) in Azure AD to ensure secure access management.' },
        { text: 'Managed user authentication and authorization processes, integrating with single sign-on (SSO) solutions.' },
      ],
      icon: <FaUserShield className="text-5xl mb-2 text-blue-500" />,
    },
    {
      title: 'Agile Project Management',
      description: [
        { text: 'Led cross-functional teams in Agile ceremonies, ensuring alignment and quick decision-making.' },
        { text: 'Implemented Scrum and Kanban methodologies to deliver projects on time and within budget.' },
      ],
      icon: <FaClipboardList className="text-5xl mb-2 text-blue-500" />,
    },
    {
      title: 'Full Stack Web Development',
      description: [
        { text: 'Developed responsive web applications using React.js, Node.js, and Express for backend API integration.' },
        { text: 'Designed and optimized databases using PostgreSQL, ensuring data consistency and performance.' },
      ],
      icon: <FaCode className="text-5xl mb-2 text-blue-500" />,
    },
    {
      title: 'Data Migration and Database Management',
      description: [
        { text: 'Executed seamless data migrations between databases, ensuring data integrity and minimal downtime.' },
        { text: 'Implemented database performance tuning and optimization strategies to improve query efficiency.' },
      ],
      icon: <FaDatabase className="text-5xl mb-2 text-blue-500" />,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Key Qualifications</h3>
      <div className="flex flex-col">
        <div className="flex space-x-4 mb-4 overflow-y-auto">
          {qualifications.map((qualification, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`py-2 px-4 rounded-lg focus:outline-none ${activeTab === index ? 'bg-blue-300' : 'bg-gray-200 hover:bg-blue-300'}`}
            >
              <div className="flex flex-col items-center">
                {qualification.icon}
                <span>{qualification.title}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="text-gray-700">
          {qualifications.map((qualification, index) => (
            <div key={index} className={`${activeTab === index ? '' : 'hidden'}`}>
              {qualification.description.map((desc, idx) => (
                <div key={idx} className="flex items-start mb-2">
                  <div className="mr-2">&bull;</div> {/* Bullet point or other indicator */}
                  <p>{desc.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyQualificationsCard;
