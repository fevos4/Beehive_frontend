import React, { useState, useEffect, useRef } from "react";
import Menus from "./Menus";
import { useLocation } from "react-router-dom";
import SensorCard from "./SensorChart"; // Import the new component

const BeehiveDashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [sensorData, setSensorData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const sidebarRef = useRef(null);

  // Get hiveName from location state
  const location = useLocation();
  const hiveName = location.state?.hiveName || "Hive 01"; // default fallback

  const userId = localStorage.getItem("userId"); // or from auth context
  const API_ENDPOINT = `http://127.0.0.1:8000/sensors/api/beehive/${userId}/`;  

  const fetchSensorData = async () => {
    try {
      const token = localStorage.getItem("token"); // or from cookies, context, etc.
  
      const response = await fetch(API_ENDPOINT, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // or `Token ${token}` depending on your backend
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      setSensorData(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      console.error("Error fetching sensor data:", err);
    }
  };
  
  

  useEffect(() => {
    fetchSensorData();
    
    // Set up polling every 10 seconds
    const intervalId = setInterval(fetchSensorData, 10000);
    
    return () => clearInterval(intervalId);
  }, []);

  // Process data for display
  const getLatestValue = (dataKey) => {
    if (!sensorData || !sensorData[dataKey] || sensorData[dataKey].length === 0) {
      return "N/A";
    }
    const latestEntry = sensorData[dataKey][sensorData[dataKey].length - 1];
    return latestEntry.value;
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

  // Default data structure in case API hasn't responded yet
  const defaultData = {
    humidity: "N/A",
    internalTemp: "N/A",
    externalTemp: "N/A",
    weight: "N/A",
    alert: "Not detected",
    prediction: "Not detected",
  };

  const data = {
    humidity: isLoading ? "Loading..." : getLatestValue("humidity") + "%",
    internalTemp: isLoading ? "Loading..." : getLatestValue("internalTemp") + "°C",
    externalTemp: isLoading ? "Loading..." : getLatestValue("externalTemp") + "°C",
    weight: isLoading ? "Loading..." : getLatestValue("weight") + " KG",
    alert: defaultData.alert,
    prediction: defaultData.prediction,
  };

  const sensorCards = [
    { 
      label: "Humidity", 
      value: data.humidity,
      dataKey: "humidity",
      color: "#3b82f6", // blue-500
      unit: ""
    },
    { 
      label: "Internal Temperature", 
      value: data.internalTemp,
      dataKey: "internalTemp",
      color: "#ef4444", // red-500
      unit: ""
    },
    { 
      label: "External Temperature", 
      value: data.externalTemp,
      dataKey: "externalTemp",
      color: "#f59e0b", // amber-500
      unit: ""
    },
    { 
      label: "Weight", 
      value: data.weight,
      dataKey: "weight",
      color: "#10b981", // emerald-500
      unit: ""
    },
  ];

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
              <SensorCard
                key={i}
                label={card.label}
                value={card.value}
                data={sensorData ? sensorData[card.dataKey] : []}
                dataKey="value"
                color={card.color}
                unit={card.unit}
              />
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