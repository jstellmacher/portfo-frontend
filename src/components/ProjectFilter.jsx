import React from 'react';

const ProjectFilter = ({ tags, selectedTags, onTagClick, onClearTags }) => {
  return (
    <div className="">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">Filter by Tags</h3>
      <div className="flex space-x-4 overflow-x-auto">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-md focus:outline-none ${
              selectedTags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
            }`}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </button>
        ))}
        <button
          className="px-4 py-2 rounded-md bg-red-200 text-gray-800 focus:outline-none hover:bg-red-300"
          onClick={onClearTags} 
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ProjectFilter;
