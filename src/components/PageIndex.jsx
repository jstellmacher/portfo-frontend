import React from 'react';

const PageIndex = ({ scrollToSection }) => {
  return (
    <div className="bg-red-400"> {/* Adjusted margin and padding */}
      <h3 className="text-xl font-semibold mb-2">Index</h3>
      <ul className="list-disc"> {/* Adjusted left padding */}
        <li><button className="text-blue-500 hover:underline focus:outline-none" onClick={() => scrollToSection('about-me')}>About Me</button></li>
        <li><button className="text-blue-500 hover:underline focus:outline-none" onClick={() => scrollToSection('interests')}>Interests</button></li>
        <li><button className="text-blue-500 hover:underline focus:outline-none" onClick={() => scrollToSection('active-interest-examples')}>Active Interest Examples</button></li>
        <li><button className="text-blue-500 hover:underline focus:outline-none" onClick={() => scrollToSection('tableau-visualization')}>Featured Tableau Visualization</button></li>
        <li><button className="text-blue-500 hover:underline focus:outline-none" onClick={() => scrollToSection('career-highlights')}>Career Highlights</button></li>
        <li><button className="text-blue-500 hover:underline focus:outline-none" onClick={() => scrollToSection('my-approach')}>My Approach</button></li>
        <li><button className="text-blue-500 hover:underline focus:outline-none" onClick={() => scrollToSection('contact-information')}>Contact Information</button></li>
      </ul>
    </div>
  );
};

export default PageIndex;
