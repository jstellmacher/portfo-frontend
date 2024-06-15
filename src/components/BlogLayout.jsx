// BlogLayout.jsx
import React from "react";

const BlogLayout = ({ title, children }) => {
  return (
    <div className="container mx-auto py-8 bg-green-400">
      <h1 className="text-3xl font-bold mb-4 bg-red-100">{title}</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 bg-blue-700">
        {children}
      </div>
    </div>
  );
};

export default BlogLayout;
