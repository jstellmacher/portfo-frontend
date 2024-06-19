// FeaturedBlogPost.jsx
import React from "react";

const FeaturedBlogPost = ({ title, date, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 transform transition-transform duration-300 hover:shadow-lg hover:scale-105 flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/3">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover h-60 lg:h-auto w-full"
        />
      </div>
      <div className="p-6 w-full lg:w-2/3 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h2>
          <p className="text-gray-500 mb-4">{date}</p>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogPost;
