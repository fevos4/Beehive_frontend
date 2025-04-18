import React, { useState, useEffect, useRef } from "react";
import Menus from "./Menus";
import { useLocation } from "react-router-dom";

const BeehiveDashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  // Get hiveName from location state
  const location = useLocation();
  const hiveName = location.state?.hiveName || "Hive 01"; // default fallback

  const data = {
    humidity: "45%",
    internalTemp: "45C",
    externalTemp: "45C",
    weight: "45 KG",
    alert: "Not detected",
    prediction: "Not detected",
  };

  const sensorCards = [
    { label: "Humidity", value: data.humidity },
    { label: "Internal Temperature", value: data.internalTemp },
    { label: "External Temperature", value: data.externalTemp },
    { label: "Weight", value: data.weight },
  ];

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen bg-white font-montserrat"
      ref={sidebarRef}
      id="beehivedashboard"
    >
      <Menus isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      <main
        className={`flex-1 transition-all duration-300 p-4 md:p-10 ${
          isSidebarVisible ? "ml-0 md:ml-[250px]" : "ml-0"
        }`}
      >
        <div className="flex items-center space-x-2 border-b pb-3 mb-6">
          <img src="/assets/logos.png" alt="Logo" className="w-32 md:w-40" />
        </div>

        <div className="bg-gray-100 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            {hiveName}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {sensorCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 shadow-md flex flex-col justify-between"
              >
                <h3 className="text-gray-600 mb-1">{card.label}</h3>
                <p className="text-2xl font-bold">{card.value}</p>
                <div className="mt-3 h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 text-sm">
                  Graph
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-4 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <p>
                <span className="font-semibold">Alert:</span>{" "}
                <span className="text-gray-700">{data.alert}</span>
              </p>
              <p>
                <span className="font-semibold">Prediction:</span>{" "}
                <span className="text-gray-700">{data.prediction}</span>
              </p>
            </div>
            <button className="mt-4 sm:mt-0 bg-transparent border border-gray-400 rounded px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
              Open live cam
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BeehiveDashboard;
