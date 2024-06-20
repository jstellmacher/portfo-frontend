import React from 'react';

const TechnicalSkillsCard = ({ isAdmin }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
      <ul className="list-disc list-inside">
        <li>Programming Languages & Frameworks: Python, JavaScript, HTML, CSS, Flask, Django, React.js, Node.js</li>
        <li>Cloud Platforms: Microsoft Azure (in progress), AWS (basic knowledge)</li>
        <li>Database Management: PostgreSQL, MySQL, SQLite3</li>
        <li>Project Management Tools: Agile methodologies, Trello, Jira</li>
        <li>Other Tools: Git, PowerShell, Azure AD, Office 365</li>
      </ul>
      {/* Additional content or editable fields based on isAdmin */}
    </div>
  );
};

export default TechnicalSkillsCard;
