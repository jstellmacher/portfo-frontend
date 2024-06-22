import React from "react";

const Maps = () => (
  <div id="maps" className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-500 max-w-screen-md min-h-[60vh] mx-auto bg-clip-padding bg-opacity-80 border-gray-800">
    <h3 className="text-lg font-semibold mb-4 text-center">Google Maps Integration</h3>
    <div className="w-full h-[50vh]">
      <iframe
        className="rounded-lg w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207446.32915866256!2d139.57605892391703!3d35.6684103065217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1719025777771!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
);

export default Maps;
