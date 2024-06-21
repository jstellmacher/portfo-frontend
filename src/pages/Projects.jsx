// pages/ProjectsPage.jsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Filter from '../components/Filter';

const ProjectsPage = () => {
  // Dummy project data (replace with real data from server later)
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod velit.',
      imageUrl: 'https://picsum.photos/200/309',
      tags: ['Full Stack Development', 'Data Analytics'],
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      imageUrl: 'https://picsum.photos/200/301',
      tags: ['Marketing', 'UX/UI'],
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
      imageUrl: 'https://picsum.photos/200/302',
      tags: ['Project Management', 'Scrum'],
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      imageUrl: 'https://picsum.photos/200/303',
      tags: ['Full Stack Development'],
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
      imageUrl: 'https://picsum.photos/200/304',
      tags: ['Data Analytics'],
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt.',
      imageUrl: 'https://picsum.photos/200/305',
      tags: ['UX/UI'],
    },
    {
      id: 7,
      title: 'Project 7',
      description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
      imageUrl: 'https://picsum.photos/200/306',
      tags: ['Marketing', 'Scrum'],
    },
    {
      id: 8,
      title: 'Project 8',
      description: 'Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
      imageUrl: 'https://picsum.photos/200/307',
      tags: ['Project Management', 'Full Stack Development'],
    },
  ];

  const allTags = [
    'Project Management',
    'Full Stack Development',
    'Marketing',
    'UX/UI',
    'Scrum',
    'Data Analytics',
  ];

  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  const filteredProjects = projects.filter((project) =>
    selectedTags.length === 0
      ? true
      : project.tags.some((tag) => selectedTags.includes(tag))
  );

  return (
    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-lg">
      <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
      <Filter tags={allTags} selectedTags={selectedTags} onTagClick={handleTagClick} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
