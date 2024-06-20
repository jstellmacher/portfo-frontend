// AboutMeSubnavigation.jsx
import React from 'react';

const AboutMeSubnavigation = ({ interests, setActiveInterest, activeInterest }) => {
  return (
    <ul className="flex space-x-4">
      {interests.map((interest) => (
        <li
          key={interest}
          className={`cursor-pointer px-4 py-2 rounded-md ${activeInterest === interest ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'}`}
          onClick={() => setActiveInterest(interest)}
        >
          {interest}
        </li>
      ))}
    </ul>
  );
};

export default AboutMeSubnavigation;
