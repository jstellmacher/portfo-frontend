// components/BlogFilter.jsx
import React from 'react';

const BlogFilter = ({ tags, activeTag, setActiveTag, filterPosts }) => {
  return (
    <div className="mb-8 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Filter by Tags</h2>
      <div className="flex space-x-4">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-md focus:outline-none ${
              activeTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
            }`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
        <button
          className="px-4 py-2 rounded-md bg-red-200 text-gray-800 focus:outline-none"
          onClick={() => setActiveTag(null)}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default BlogFilter;
