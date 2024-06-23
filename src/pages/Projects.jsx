// pages/ProjectsPage.jsx
import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectFilter from "../components/ProjectFilter";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod velit.",
      imageUrl: "https://picsum.photos/200/309",
      tags: ["Full Stack Development", "Data Analytics"],
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imageUrl: "https://picsum.photos/200/301",
      tags: ["Marketing", "UX/UI"],
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
      imageUrl: "https://picsum.photos/200/302",
      tags: ["Project Management", "Scrum"],
    },
    {
      id: 4,
      title: "Project 4",
      description:
        "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
      imageUrl: "https://picsum.photos/200/303",
      tags: ["Full Stack Development"],
    },
    {
      id: 5,
      title: "Project 5",
      description:
        "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      imageUrl: "https://picsum.photos/200/304",
      tags: ["Data Analytics"],
    },
    {
      id: 6,
      title: "Project 6",
      description:
        "Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt.",
      imageUrl: "https://picsum.photos/200/305",
      tags: ["UX/UI"],
    },
    {
      id: 7,
      title: "Project 7",
      description:
        "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
      imageUrl: "https://picsum.photos/200/306",
      tags: ["Marketing", "Scrum"],
    },
    {
      id: 8,
      title: "Project 8",
      description:
        "Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
      imageUrl: "https://picsum.photos/200/307",
      tags: ["Project Management", "Full Stack Development"],
    },
  ];

  const allTags = [
    "Project Management",
    "Full Stack Development",
    "Marketing",
    "UX/UI",
    "Scrum",
    "Data Analytics",
  ];

  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  const handleClearTags = () => {
    setSelectedTags([]); // Set selectedTags to an empty array
  };

  // Filter projects based on selected tags
  const filteredProjects = projects.filter((project) => {
    if (selectedTags.length === 0) {
      return true; // Show all projects if no tags are selected
    } else if (selectedTags === null) {
      return false; // Explicitly handle null case if needed
    } else {
      return project.tags.some((tag) => selectedTags.includes(tag));
    }
  });

  return (
    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-lg">
      <div className="bg-gray-100 rounded-lg p-4">
      <h2 className="text-3xl font-bold mb-4 text-black">Projects</h2>
      <ProjectFilter
        tags={allTags}
        selectedTags={selectedTags}
        onTagClick={handleTagClick}
        onClearTags={handleClearTags} // Pass handleClearTags function
      /></div>
      <p className="text-red-600 text-sm text-center m-2">
        Scroll Down For More Projects
      </p>
      <div className="overflow-y-auto max-h-[60vh] rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
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
    </div>
  );
};

export default ProjectsPage;
