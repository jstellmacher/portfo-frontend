import React from "react";

const ProfessionalSubTabs = ({ subfolders, activeSubfolder, setActiveSubfolder }) => {
  return (
    <div className="space-y-2 overflow-x-auto max-h-[80vh]">
      {subfolders.map((subfolder, index) => (
        <button
          key={index}
          className={`block w-full px-4 py-2 rounded-lg focus:outline-none ${
            activeSubfolder === subfolder ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800 hover:bg-gray-400"
          }`}
          onClick={() => setActiveSubfolder(subfolder)}
        >
          {subfolder}
        </button>
      ))}
    </div>
  );
};

export default ProfessionalSubTabs;
