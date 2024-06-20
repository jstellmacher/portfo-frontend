// ProfessionalExperienceCard.jsx
import React from 'react';

const ProfessionalExperienceCard = ({ isAdmin }) => {
  // Dummy professional experience data (replace with your actual data)
  const professionalExperienceData = [
    {
      company: "Insight Enterprises",
      location: "Chandler, AZ",
      position: "Cloud & Data Associate Consultant",
      duration: "Jul. 2023 – Mar. 2024",
      responsibilities: [
        "Enhanced data governance through Azure tools, improving data accuracy and compliance.",
        "Managed client engagements, including technical project management for a Cisco collaboration upgrade.",
        "Assisted in Azure AD administration and implementation of security policies, ensuring client data security."
      ]
    },
    {
      company: "Freelance Client",
      location: "Remote",
      position: "Full Stack Web Developer",
      duration: "Mar. 2023 – May. 2023",
      responsibilities: [
        "Managed full lifecycle of web projects using Python, Flask, React.js, and PostgreSQL, focusing on user engagement and satisfaction.",
        "Implemented Agile methodologies to streamline project execution and team collaboration."
      ]
    },
    {
      company: "University of Arizona Information Technology (UAITS)",
      location: "Tucson, AZ",
      position: "Web Analyst - Data Migration Specialist",
      duration: "Jan. 2022 – Dec. 2022",
      responsibilities: [
        "Supported data migration projects, ensuring data integrity and improved site functionality.",
        "Conducted comprehensive testing and feedback for site improvements, utilizing Bootstrap for responsive design."
      ]
    }
  ];

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">Professional Experience</h3>
      {professionalExperienceData.map((exp, index) => (
        <div key={index} className="mb-4">
          <p className="text-lg font-semibold">{exp.position}</p>
          <p className="text-gray-600">{exp.company} - {exp.location}</p>
          <p className="text-gray-600">{exp.duration}</p>
          <ul className="list-disc pl-6">
            {exp.responsibilities.map((responsibility, idx) => (
              <li key={idx} contentEditable={isAdmin} className="hover:text-blue-500" suppressContentEditableWarning={!isAdmin}>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalExperienceCard;
