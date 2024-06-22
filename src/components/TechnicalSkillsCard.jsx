import React from 'react';
import { FaCloud, FaDatabase, FaProjectDiagram, FaTools, FaCode } from 'react-icons/fa';

const TechnicalSkillsCard = () => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
      <div className="space-y-4">
        <div>
          <h4 className="flex items-center text-lg font-semibold text-gray-700">
            <FaCode className="mr-2" /> Programming Languages & Frameworks
          </h4>
          <p className="ml-6 text-gray-600">
            Python, JavaScript, HTML, CSS, Flask, Django, React.js, Node.js
          </p>
        </div>
        <div>
          <h4 className="flex items-center text-lg font-semibold text-gray-700">
            <FaCloud className="mr-2" /> Cloud Platforms
          </h4>
          <p className="ml-6 text-gray-600">
            Microsoft Azure (in progress), AWS (basic knowledge)
          </p>
        </div>
        <div>
          <h4 className="flex items-center text-lg font-semibold text-gray-700">
            <FaDatabase className="mr-2" /> Database Management
          </h4>
          <p className="ml-6 text-gray-600">
            PostgreSQL, MySQL, SQLite3
          </p>
        </div>
        <div>
          <h4 className="flex items-center text-lg font-semibold text-gray-700">
            <FaProjectDiagram className="mr-2" /> Project Management Tools
          </h4>
          <p className="ml-6 text-gray-600">
            Agile methodologies, Trello, Jira
          </p>
        </div>
        <div>
          <h4 className="flex items-center text-lg font-semibold text-gray-700">
            <FaTools className="mr-2" /> Other Tools
          </h4>
          <p className="ml-6 text-gray-600">
            Git, PowerShell, Azure AD, Office 365
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkillsCard;
