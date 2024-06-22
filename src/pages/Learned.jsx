// Learned.jsx
import React, { useState } from "react";
import LearnedTabs from "../components/LearnedTabs";
import LearnedSubfolders from "../components/LearnedSubfolders";

const Learned = () => {
  const tabs = ["College", "Professional", "Self Learning", "Google Doc"];
  const subfolders = {
    College: ["Course 1", "Course 2", "Course 3"],
    Professional: ["Project 1", "Project 2", "Project 3"],
    "Self Learning": ["Skill 1", "Skill 2", "Skill 3"],
  };

  const content = {
    "Course 1": "Content for Course 1",
    "Course 2": "Content for Course 2",
    "Course 3": "Content for Course 3",
    "Project 1": "Content for Project 1",
    "Project 2": "Content for Project 2",
    "Project 3": "Content for Project 3",
    "Skill 1": "Content for Skill 1",
    "Skill 2": "Content for Skill 2",
    "Skill 3": "Content for Skill 3",
  };

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeSubfolder, setActiveSubfolder] = useState(subfolders[tabs[0]][0]);

  return (
    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-lg">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center bg-white rounded-lg p-6">
        The Things I Have Learned
      </h1>

      <LearnedTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab !== "Google Doc") {
            setActiveSubfolder(subfolders[tab][0]);
          }
        }}
      />

      {activeTab === "Google Doc" ? (
        <div className="bg-gray-200 p-6 rounded-lg shadow-md flex justify-center">
          <iframe
            title="Google Doc"
            src="https://docs.google.com/document/d/e/2PACX-1vTAEmNHnKXCZTB7x-yrGpaR5sJ_49ROIWTgGi2lroZTdlQJy20eRMT2fUP8ak7toO9mAHlIgQqqQvsm/pub?embedded=true"
            width="90%"
            height="800"
          ></iframe>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-1/4">
            <LearnedSubfolders
              subfolders={subfolders[activeTab]}
              activeSubfolder={activeSubfolder}
              setActiveSubfolder={setActiveSubfolder}
            />
          </div>
          <div className="w-full sm:w-3/4 bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{activeSubfolder}</h2>
            <p>{content[activeSubfolder]}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learned;
