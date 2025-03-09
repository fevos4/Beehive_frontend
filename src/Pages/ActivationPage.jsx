import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const ActivationPage = () => {
  return (
    <div className="flex flex-col items-center font-montserrat bg-cream py-4 mt-[80px]" id="active">
      {/* Header */}
      <div className="w-full max-w-[1200px] h-16  bg-gray-200 flex items-center justify-between px-6 rounded-lg shadow-md">
        <span className="text-lg font-medium flex items-center">
          <span className="mr-2">&#128100;</span> Name, Hive 1
        </span>
        <FaDownload className="text-orange-500 cursor-pointer text-lg" />
      </div>

      {/* Button */}
      <Link to="/beeactive">
      <button className="mt-44 hover:bg-slate-500 bg-gray-300 text-black font-medium rounded-lg px-8 py-3 shadow-md">
        Activate smart hive monitoring system
      </button></Link>
    </div>
  );
};

export default ActivationPage;
