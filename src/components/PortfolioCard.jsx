// PortfolioCard.jsx
import React from 'react';

const PortfolioCard = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-500 sm:px-6 lg:px-8 max-w-screen-lg min-h-[60vh] mx-auto bg-clip-padding bg-opacity-60 border-gray-800">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default PortfolioCard;
