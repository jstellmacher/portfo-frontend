// PortfolioCard.jsx
import React from 'react';

const PortfolioCard = ({ children }) => {
  return (
    <div className="rounded-lg shadow-xl shadow-black p-6 transform transition-transform duration-500 sm:px-6 lg:px-8 max-w-screen-lg min-h-[60vh] mx-auto bg-red-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default PortfolioCard;
