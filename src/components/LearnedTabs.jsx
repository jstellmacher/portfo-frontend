// LearnedTabs.jsx
import React from "react";

const LearnedTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-lg focus:outline-none ${
            activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default LearnedTabs;
