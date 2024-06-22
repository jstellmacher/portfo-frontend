import React from "react";

const FeaturedBlogPost = ({ title, date, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 transform transition-transform duration-300 hover:shadow-lg hover:scale-105 flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/3">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover h-48 lg:h-48 w-full" // Adjusted image height
        />
      </div>
      <div className="p-6 w-full lg:w-2/3 flex flex-col justify-between">
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2 text-gray-900">{title}</h2> {/* Adjusted text size */}
          <p className="text-gray-500 mb-2">{date}</p> {/* Reduced bottom margin */}
          <p className="text-gray-700 leading-snug lg:leading-relaxed line-clamp-3">{description}</p> {/* Added line-clamp for description */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogPost;
