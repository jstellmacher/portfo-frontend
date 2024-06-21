// components/Filter.jsx
import React from 'react';

const Filter = ({ tags, selectedTags, onTagClick }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-white">Filter by Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedTags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
            }`}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
