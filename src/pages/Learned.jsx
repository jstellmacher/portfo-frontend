import React, { useState, useEffect } from "react";
import LearnedTabs from "../components/LearnedTabs";
import CollegeSubTabs from "../components/CollegeSubTabs";
import ProfessionalSubTabs from "../components/ProfessionalSubTabs";
import SelfLearningSubTabs from "../components/SelfLearningSubTabs";
import GoogleDocViewer from "../components/GoogleDocViewer";
import coursesData from "../data/courses.json"; // Ensure correct path to your JSON file
import professionalData from "../data/professional.json"; // Assuming correct path to professional.json
import selfLearningData from "../data/selflearning.json"; // Assuming correct path to selflearning.json

const Learned = () => {
  const tabs = ["College", "Professional", "Self Learning", "Google Doc"];
  const [subfolders, setSubfolders] = useState({
    College: [],
    Professional: [],
    "Self Learning": [],
  });
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeSubfolder, setActiveSubfolder] = useState("");
  const [courseDetails, setCourseDetails] = useState([]);

  // Function to fetch and filter course data for "College" tab
  const fetchCollegeData = async () => {
    try {
      console.log("Fetching college data...");
      const filteredCourses = coursesData.filter((course) => {
        return ["MIS", "Marketing", "Management", "Other"].includes(course.Tag);
      });
      console.log("Filtered courses:", filteredCourses);
      setCourseDetails(filteredCourses);

      const collegeSubfolders = filteredCourses.map((course) => course.Title);
      console.log("College subfolders:", collegeSubfolders);
      setSubfolders((prevSubfolders) => ({
        ...prevSubfolders,
        College: collegeSubfolders,
      }));
      setActiveSubfolder(collegeSubfolders[0] || ""); // Set initial subfolder
    } catch (error) {
      console.error("Error fetching data for College tab:", error);
      // Handle error (e.g., set error state, show error message)
    }
  };

  // Function to fetch data for "Professional" tab
  const fetchProfessionalData = async () => {
    try {
      console.log("Fetching professional data...");
      setCourseDetails(professionalData);

      const professionalSubfolders = professionalData.map(
        (course) => course.Title
      );
      console.log("Professional subfolders:", professionalSubfolders);
      setSubfolders((prevSubfolders) => ({
        ...prevSubfolders,
        Professional: professionalSubfolders,
      }));
      setActiveSubfolder(professionalSubfolders[0] || ""); // Set initial subfolder
    } catch (error) {
      console.error("Error fetching data for Professional tab:", error);
      // Handle error (e.g., set error state, show error message)
    }
  };

  // Function to fetch data for "Self Learning" tab
  const fetchSelfLearningData = async () => {
    try {
      console.log("Fetching self-learning data...");
      setCourseDetails(selfLearningData);

      const selfLearningSubfolders = selfLearningData.map(
        (course) => course.Title
      );
      console.log("Self-learning subfolders:", selfLearningSubfolders);
      setSubfolders((prevSubfolders) => ({
        ...prevSubfolders,
        "Self Learning": selfLearningSubfolders,
      }));
      setActiveSubfolder(selfLearningSubfolders[0] || ""); // Set initial subfolder
    } catch (error) {
      console.error("Error fetching data for Self Learning tab:", error);
      // Handle error (e.g., set error state, show error message)
    }
  };

  useEffect(() => {
    switch (activeTab) {
      case "College":
        fetchCollegeData();
        break;
      case "Professional":
        fetchProfessionalData();
        break;
      case "Self Learning":
        fetchSelfLearningData();
        break;
      // Add cases for additional tabs if needed
      default:
        break;
    }
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Reset activeSubfolder when switching tabs, assuming subfolders[tab] exists
    setActiveSubfolder(subfolders[tab][0] || "");
  };

  return (
    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-lg ">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center bg-white rounded-lg p-6">
        The Things I Have Learned
      </h1>

      <LearnedTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      {activeTab === "Google Doc" ? (
        <GoogleDocViewer url="https://docs.google.com/document/d/e/2PACX-1vTAEmNHnKXCZTB7x-yrGpaR5sJ_49ROIWTgGi2lroZTdlQJy20eRMT2fUP8ak7toO9mAHlIgQqqQvsm/pub?embedded=true" />
      ) : (
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-1/4">
            {activeTab === "College" && (
              <CollegeSubTabs
                subfolders={subfolders[activeTab]}
                activeSubfolder={activeSubfolder}
                setActiveSubfolder={setActiveSubfolder}
              />
            )}
            {activeTab === "Professional" && (
              <ProfessionalSubTabs
                subfolders={subfolders[activeTab]}
                activeSubfolder={activeSubfolder}
                setActiveSubfolder={setActiveSubfolder}
              />
            )}
            {activeTab === "Self Learning" && (
              <SelfLearningSubTabs
                subfolders={subfolders[activeTab]}
                activeSubfolder={activeSubfolder}
                setActiveSubfolder={setActiveSubfolder}
              />
            )}
          </div>
          <div className="w-full sm:w-3/4 bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{activeSubfolder}</h2>
            <ul>
              {courseDetails
                .filter((course) => course.Title === activeSubfolder)
                .map((course, index) => (
                  <li key={index}>
                    <p>
                      <strong>Title:</strong> {course.Title}
                    </p>
                    <p>
                      <strong>Tag:</strong> {course.Tag}
                    </p>
                    <p>
                      <strong>Definition:</strong> {course.Definition}
                    </p>
                    <p>
                      <strong>Technologies:</strong>{" "}
                      {course.Technologies.join(", ")}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learned;
