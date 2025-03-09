import React from "react";
import { Link } from "react-router-dom";

const BeehiveActivation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-2 bg-gray-100 font-montserrat" id="beeactive">
      <div className="bg-white w-full max-w-lg shadow-lg rounded-lg   border  p-8">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src="/assets/logos.png"
            alt="SmartHive Logo"
            className="w-24 h-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Beehive Activation</h2>
        </div>

        {/* Form Title */}
       
        <p className="text-sm text-gray-600 text-center mt-2">
          Please follow the instructions in the manual for a successful setup.
        </p>

        {/* Form */}
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="systemId"
              className="block text-sm font-medium text-gray-700"
            >
              System ID
            </label>
            <input
              id="systemId"
              type="text"
              placeholder="System Id"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name (e.g., hive 1)
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name (e.g., hive 1)"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F28C28] focus:border-transparent"
            />
          </div>
          <Link to = "/dashboard">
          <button
            type="submit"
            className="w-full bg-[#F28C28]  hover:bg-orange-300 text-black font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Activate
          </button>
          </Link>
          
        </form>
        
      </div>
    </div>
  );
};

export default BeehiveActivation;
