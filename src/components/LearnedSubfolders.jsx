// LearnedSubfolders.jsx
import React from "react";

const LearnedSubfolders = ({ subfolders, activeSubfolder, setActiveSubfolder }) => {
  return (
    <div className="flex flex-col space-y-2 mb-4">
      {subfolders.map((subfolder) => (
        <button
          key={subfolder}
          className={`px-4 py-2 rounded-lg focus:outline-none ${
            activeSubfolder === subfolder ? "bg-green-500 text-white" : "bg-gray-300 text-gray-800"
          }`}
          onClick={() => setActiveSubfolder(subfolder)}
        >
          {subfolder}
        </button>
      ))}
    </div>
  );
};

export default LearnedSubfolders;
