import React, { useState, useEffect, useRef } from "react";
import Menus from "./Menus";
import { useLocation } from "react-router-dom";
import SensorCardWithGraph from "./SensorCardWithGraph"; // Import the card component
import axios from "axios";

const BeehiveDashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const [allSensorData, setAllSensorData] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const hiveName = location.state?.hiveName || "Hive 01"; // default fallback

  const staticData = {
    alert: "Not detected",
    prediction: "Not detected",
  };

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/sensor-data"); 
        setAllSensorData(response.data); // Expect { humidity: [...], internalTemp: [...], externalTemp: [...], weight: [...] }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching sensor data:", error);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 8000); // Refresh every 8 seconds
    return () => clearInterval(interval);
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

          {/* Sensor Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {allSensorData && (
              <>
                <SensorCardWithGraph label="Humidity" data={allSensorData.humidity} unit="%" loading={loading} />
                <SensorCardWithGraph label="Internal Temperature" data={allSensorData.internalTemp} unit="°C" loading={loading} />
                <SensorCardWithGraph label="External Temperature" data={allSensorData.externalTemp} unit="°C" loading={loading} />
                <SensorCardWithGraph label="Weight" data={allSensorData.weight} unit="KG" loading={loading} />
              </>
            )}
          </div>

          {/* Alert and Prediction */}
          <div className="bg-white rounded-xl p-4 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <p>
                <span className="font-semibold">Alert:</span>{" "}
                <span className="text-gray-700">{staticData.alert}</span>
              </p>
              <p>
                <span className="font-semibold">Prediction:</span>{" "}
                <span className="text-gray-700">{staticData.prediction}</span>
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
