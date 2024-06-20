import React from 'react';

const KeyQualificationsCard = ({ isAdmin }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">Key Qualifications</h3>
      <ul className="list-disc list-inside">
        <li>Cloud Infrastructure Management</li>
        <li>Identity and Access Management (IAM)</li>
        <li>Agile Project Management</li>
        <li>Full Stack Web Development</li>
        <li>Data Migration and Database Management</li>
      </ul>
      {/* Additional content or editable fields based on isAdmin */}
    </div>
  );
};

export default KeyQualificationsCard;
