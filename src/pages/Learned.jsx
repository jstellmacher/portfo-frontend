import React from "react";

const Learned = () => {
  return (
    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-lg">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center bg-white rounded-lg p-6">
        The Things I Have Learned
      </h1>

      <div className="bg-gray-200 p-6 rounded-lg shadow-md flex justify-center">
        <iframe
          title="Google Doc"
          src="https://docs.google.com/document/d/e/2PACX-1vTAEmNHnKXCZTB7x-yrGpaR5sJ_49ROIWTgGi2lroZTdlQJy20eRMT2fUP8ak7toO9mAHlIgQqqQvsm/pub?embedded=true"
          width="90%"
          height="800"
        
        ></iframe>
      </div>
    </div>
  );
};

export default Learned;
