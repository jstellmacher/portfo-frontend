import React from "react";
import {
  FaUser,
  FaBriefcase,
  FaCommentAlt,
  FaBookOpen,
  FaPaintBrush,
} from "react-icons/fa"; // Import icons

const AboutMeSubnavigation = ({ setActiveSection, activeSection }) => {
  const sections = [
    { id: "aboutMe", label: "About Me", icon: <FaUser /> },
    {
      id: "careerHighlights",
      label: "Career Highlights",
      icon: <FaBriefcase />,
    },
    { id: "myApproach", label: "My Approach", icon: <FaCommentAlt /> },
    {
      id: "filteredInterests",
      label: "Filtered Interests",
      icon: <FaBookOpen />,
    },
    {
      id: "featuredTableau",
      label: "Featured Tableau",
      icon: <FaPaintBrush />,
    },
  ];

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-8">
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className={`cursor-pointer mb-2 px-4 py-2 rounded-md flex items-center ${
              activeSection === section.id
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="mr-2">{section.icon}</span>
            {section.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutMeSubnavigation;
