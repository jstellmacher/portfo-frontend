import React, { useState, useEffect } from 'react';
import { FaCertificate, FaChalkboardTeacher, FaPython } from 'react-icons/fa'; // Import icons as needed

const CertificationsCard = () => {
  const [certifications, setCertifications] = useState([]);

  // Function to fetch certifications data (simulated fetch for demonstration)
  const fetchCertifications = async () => {
    try {
      // Simulating API fetch delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Example data from an endpoint (replace with actual fetch logic)
      const data = [
        { id: 1, title: 'Flatiron Full Stack Software Engineering', icon: FaCertificate },
        { id: 2, title: 'PS Principals Implementation Consultant 1 Certification', icon: FaChalkboardTeacher },
        { id: 3, title: 'Python for Data Science, AI, & Development (IBM Coursera)', icon: FaPython }
        // Add more certifications as needed, each with its own icon
      ];

      setCertifications(data);
    } catch (error) {
      console.error('Error fetching certifications:', error);
    }
  };

  useEffect(() => {
    fetchCertifications();
  }, []); // Fetch certifications on component mount

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Certifications</h3>
      <div className="space-y-4">
        {certifications.map(certification => (
          <div key={certification.id} className="flex items-center">
            <certification.icon className="flex items-center text-gray-700 mr-4 w-8 h-8" />
            <p className="text-gray-700">{certification.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsCard;
