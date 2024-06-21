// components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-lg hover:scale-105">
      <img src={imageUrl} alt={title} className="object-cover h-48 w-full" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
