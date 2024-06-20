import React from 'react';

const CertificationsCard = ({ isAdmin }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">Certifications</h3>
      <ul>
        <li>Flatiron Full Stack Software Engineering</li>
        <li>PS Principals Implementation Consultant 1 Certification</li>
        <li>Python for Data Science, AI, & Development (IBM Coursera)</li>
      </ul>
      {/* Additional content or editable fields based on isAdmin */}
    </div>
  );
};

export default CertificationsCard;
