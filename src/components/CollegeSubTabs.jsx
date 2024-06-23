// LearnedSubfolders.jsx
import React from "react";

const CollegeLearnedSubfolders = ({ subfolders, activeSubfolder, setActiveSubfolder }) => {
  return (
    <div>
      <ul className="space-y-2 overflow-x-auto max-h-[80vh]">
        {subfolders.map((subfolder) => (
          <li key={subfolder}>
            <button
              className={`block w-full px-4 py-2 rounded-lg focus:outline-none ${
                activeSubfolder === subfolder ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setActiveSubfolder(subfolder)}
            >
              {subfolder}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollegeLearnedSubfolders;
