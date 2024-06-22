import React from "react";

const ProfessionalExperienceCard = ({ isAdmin }) => {
  // Professional experience data including detailed responsibilities for each client
  const professionalExperienceData = [
    {
      company: "Insight Enterprises",
      location: "Chandler, AZ",
      position: "Cloud & Data Associate Consultant",
      duration: "Jul. 2023 – Mar. 2024",
      responsibilities: [
        "Enhanced data governance through Azure tools, improving data accuracy and compliance.",
        "Managed client engagements, including technical project management for a Cisco collaboration upgrade.",
        "Assisted in Azure AD administration and implementation of security policies, ensuring client data security.",
        "Designed and deployed scalable and secure cloud solutions using Azure and AWS, enhancing system efficiency and client satisfaction.",
        "Utilized Agile methodologies and tools like Jira and Trello to engage with clients, identify needs, and provide tailored solutions, significantly improving overall client satisfaction.",
      ],
      clients: [
        {
          name: "County Courthouse",
          project: "Project Manager",
          duration: "Feb. 2024 – Mar. 2024",
          responsibilities: [
            "Led a Cisco collaboration upgrade and migration project using Agile methodologies, coordinating with senior architects and stakeholders, delivering on time and within budget.",
            "Held regular meetings using Microsoft Teams to ensure project alignment and addressed any issues promptly, maintaining high client satisfaction.",
          ],
        },
        {
          name: "Leading Firearms Manufacturer",
          project: "Cybersecurity Cloud Migration Consultant",
          duration: "Feb. 2024 – Mar. 2024",
          responsibilities: [
            "Assisted in the seamless integration of Office 365, Teams, and Outlook using Microsoft Azure security features and conducting training sessions, reducing reported technical issues and enhancing cybersecurity measures.",
            "Provided ongoing support and conducted training sessions, significantly reducing reported technical issues and improving user proficiency.",
          ],
        },
        {
          name: "Global Chemical Company",
          project: "Cloud & Data IAM Consultant",
          duration: "Aug. 2023 – Dec. 2023",
          responsibilities: [
            "Reset numerous employee accounts and configured security policies using Azure AD, strengthening system security and user access control.",
            "Implemented robust security measures including policy groups within Azure AD, ensuring compliance with security standards.",
          ],
        },
      ],
    },
    {
      company: "Freelance Client",
      location: "Remote",
      position: "Full Stack Web Developer",
      duration: "Mar. 2023 – May. 2023",
      responsibilities: [
        "Managed full lifecycle of web projects using Python, Flask, React.js, and PostgreSQL, focusing on user engagement and satisfaction.",
        "Implemented Agile methodologies to streamline project execution and team collaboration.",
      ],
    },
    {
      company: "University of Arizona Information Technology (UAITS)",
      location: "Tucson, AZ",
      position: "Web Analyst - Data Migration Specialist",
      duration: "Jan. 2022 – Dec. 2022",
      responsibilities: [
        "Supported data migration projects, ensuring data integrity and improved site functionality.",
        "Conducted comprehensive testing and feedback for site improvements, utilizing Bootstrap for responsive design.",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 h-96 overflow-y-auto">
      <h3 className="text-xl font-semibold mb-2">Professional Experience</h3>
      <p className="text-red-600 text-sm text-center mb-4">
        Scroll down to explore more experiences
      </p>
      {professionalExperienceData.map((exp, index) => (
        <div key={index} className="mb-8">
          <div className="sticky top-0 bg-gray-200 rounded-lg px-4 py-2 mb-4 z-10">
            <p className="text-lg font-semibold">{exp.company}</p>
            <p className="text-gray-600">
              {exp.position} - {exp.location}
            </p>
            <p className="text-gray-600">{exp.duration}</p>
          </div>
          <ul className="list-disc pl-6 mb-4">
            {exp.responsibilities.map((responsibility, idx) => (
              <li
                key={idx}
                className="text-gray-700 mb-2 leading-relaxed"
              >
                {responsibility}
              </li>
            ))}
          </ul>
          {exp.clients &&
            exp.clients.map((client, clientIdx) => (
              <div key={clientIdx} className="ml-4 mb-4">
                <p className="text-md font-semibold text-red-600">
                  {client.name}
                </p>
                <p className="text-red-600">
                  {client.project} - {client.duration}
                </p>
                <ul className="list-disc pl-6">
                  {client.responsibilities.map((clientResp, clientRespIdx) => (
                    <li
                      key={clientRespIdx}
                      className="text-gray-700 mb-2 leading-relaxed"
                    >
                      {clientResp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ProfessionalExperienceCard;
