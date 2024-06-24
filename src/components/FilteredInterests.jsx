// components/FilteredInterests.jsx
import React from 'react';

const FilteredInterestsSubnavigation = ({ interests, setActiveInterest, activeInterest }) => (
  <div className="flex flex-wrap gap-2">
    {interests.map((interest) => (
      <button
        key={interest}
        onClick={() => setActiveInterest(interest)}
        className={`px-4 py-2 rounded-full ${activeInterest === interest ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-00'} hover:bg-blue-500 hover:text-white transition`}
      >
        {interest}
      </button>
    ))}
  </div>
);

const FilteredInterests = ({ interests, setActiveInterest, activeInterest, interestExamples }) => (
  <div id="interests" className="mt-4">
    <h3 className="text-xl font-semibold mb-4 text-white">Interests</h3>
    <div className="bg-gray-200 p-4 rounded-lg shadow-md ">
      <FilteredInterestsSubnavigation 
        interests={interests} 
        setActiveInterest={setActiveInterest} 
        activeInterest={activeInterest} 
      />
    </div>
    <div id="active-interest-examples" className="mt-4 mb-8">
      <h3 className="text-xl font-semibold mb-4 text-white">{activeInterest} Examples</h3>
      <ul className="flex flex-wrap gap-2 ">
        {interestExamples[activeInterest].map((example, index) => (
          <li key={index} className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full">
            {example}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default FilteredInterests;
