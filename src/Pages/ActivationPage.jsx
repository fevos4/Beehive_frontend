import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const ActivationPage = () => {
  return (
    <div className="flex flex-col min-h-screen md:p-10 font-montserrat bg-cream py-4 " id="active">
    <div className="flex items-center space-x-2 border-b pb-3 mb-6">
          <img src="/assets/logos.png" alt="Logo" className="w-32 md:w-40" />
        </div>


        <div className="flex flex-1 items-center justify-center">
        <Link to="/beeactive">
          <button className="hover:bg-slate-500 bg-gray-300 text-black font-medium rounded-lg px-8 py-3 shadow-md">
            Activate smart hive monitoring system
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ActivationPage;

