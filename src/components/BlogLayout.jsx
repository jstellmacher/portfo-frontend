import React from 'react';

const BlogLayout = ({ children }) => {
  return (
    <div className="bg-red-500 rounded-lg shadow-lg p-6 transform transition-transform duration-500 max-w-screen-md h-5/6 mx-auto">
      <div className="blog-content">
        {children}
      </div>
    </div>
  );
}

export default BlogLayout;
