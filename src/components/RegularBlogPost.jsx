// RegularBlogPost.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RegularBlogPost = ({ title, date, description, imageUrl, link }) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 transform transition-transform duration-300 hover:shadow-lg hover:scale-105 flex flex-col h-full">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover h-60 w-full"
        />
        <div className="card-body p-6 flex-grow flex flex-col justify-between">
          <div>
            <h2 className="card-title text-xl font-semibold mb-2 text-gray-900">{title}</h2>
            <p className="text-gray-500 mb-2">{date}</p>
            <p className="text-gray-700 mb-4">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RegularBlogPost;
