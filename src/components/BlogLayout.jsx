// BlogLayout.jsx
import React from 'react';

const BlogLayout = ({ title, children }) => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-lg bg-gray-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">{title}</h1>
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
};

export default BlogLayout;
