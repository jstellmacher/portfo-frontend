import React, { useState, useEffect } from 'react';
import { FaCertificate, FaChalkboardTeacher, FaPython, FaCloud } from 'react-icons/fa';

// Map string icons to actual components
const iconMap = {
  FaCertificate: FaCertificate,
  FaChalkboardTeacher: FaChalkboardTeacher,
  FaPython: FaPython,
  FaCloud: FaCloud
};

const CertificationsCard = () => {
  const [certifications, setCertifications] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch certifications data
  const fetchCertifications = async () => {
    try {
      const response = await fetch('../data/certifications.json');
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      
      const contentType = response.headers.get('Content-Type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Received non-JSON response');
      }
      
      const data = await response.json();

      console.log('Fetched certifications data:', data);

      const formattedData = data.map(cert => ({
        ...cert,
        icon: iconMap[cert.icon] || FaCertificate
      }));

      setCertifications(formattedData);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching certifications:', error);
    }
  };

  useEffect(() => {
    fetchCertifications();
  }, []); // Fetch certifications on component mount

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Certifications</h3>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="space-y-4">
          {certifications.map(certification => (
            <div key={certification.id} className="flex items-center">
              <certification.icon className="flex items-center text-gray-700 mr-4 w-8 h-8" />
              <p className="text-gray-700">{certification.title}</p>
            </div>
          ))}
        </div>
      )}
      <a
        href="https://www.linkedin.com/posts/jaichuang-stellmacher_microsoftazure-azurefundamentals-cloudcomputing-activity-7222083085138321410-uQy_?utm_source=share&utm_medium=member_desktop"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-500 hover:underline"
      >
        Check out my LinkedIn post about the Microsoft Azure Fundamentals certification
      </a>
    </div>
  );
};

export default CertificationsCard;
