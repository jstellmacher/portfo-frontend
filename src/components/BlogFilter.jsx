import React from 'react';

const BlogFilter = ({ tags, activeTag, setActiveTag, filterPosts }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Filter by Tags</h2>
        <button
          className="ml-4 px-4 py-2 rounded-md bg-red-200 text-gray-800 focus:outline-none hover:bg-red-500"
          onClick={() => setActiveTag(null)}
        >
          Clear
        </button>
      </div>
      <div className="flex space-x-4 overflow-x-auto">
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
      </div>
    </div>
  );
};

export default BlogFilter;
