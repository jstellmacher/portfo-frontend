// BlogPost.jsx
import React from 'react';

const BlogPost = ({ title, date, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{date}</p>
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

export default BlogPost;
