import React, { useState, useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { IoMdAddCircleOutline } from "react-icons/io";
import Menus from "./Menus";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Close sidebar when clicking outside
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

  const weightData = { labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], datasets: [{ label: "Weight (KG)", data: [45.0, 46.2, 47.8, 49.0, 50.3, 49.7, 50.0], borderColor: "#F28C28", backgroundColor: "rgba(242, 140, 40, 0.2)", tension: 0.5, borderWidth: 2 }] };
  const tempData = { labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], datasets: [{ label: "Temperature (°C)", data: [32.1, 33.0, 32.8, 34.5, 35.0, 33.9, 34.2], borderColor: "#FF6347", backgroundColor: "rgba(255, 99, 71, 0.2)", tension: 0.5, borderWidth: 2 }] };
  const humidityData = { labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], datasets: [{ label: "Humidity (RM%)", data: [48, 50, 49, 51, 52, 49, 50], borderColor: "#4682B4", backgroundColor: "rgba(70, 130, 180, 0.2)", tension: 0.5, borderWidth: 2 }] };
  
  const options = { responsive: true, plugins: { legend: { position: "top" } }, scales: { y: { beginAtZero: true } } };

  return (
    <div className="flex flex-col md:flex-row relative" ref={sidebarRef} id="dashboard">
      {/* Sidebar */}
      <Menus isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 p-4 md:p-6 ${isSidebarVisible ? "ml-0 md:ml-[250px]" : "ml-0"}`}>
        {/* Header */}
        <div className={`max-w-[1200px] h-16 ml-10 bg-gray-200 flex items-center justify-between px-6 rounded-lg shadow-md  top-0 z-20 mb-10 transition-all duration-300 ${isSidebarVisible ? "ml-64 md:ml-0" : "ml-0"}`}>
          
          <span className="text-lg font-medium flex items-center">
            <span className="mr-2">&#128100;</span> Name, Hive 1
          </span>
          <div className="flex gap-4">
            <IoMdAddCircleOutline className="w-5 h-5" />
            <FaDownload />
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[1200px] font-montserrat">
          <ChartCard title="Weight" color="#F28C28" value="49.7 KG" data={weightData} options={options} />
          <ChartCard title="Internal Temperature" color="#FF6347" value="33.9°C" data={tempData} options={options} />
          <ChartCard title="Humidity" color="#4682B4" value="49 RM%" data={humidityData} options={options} />
          <ChartCard title="External Temperature" color="#FF6347" value="33.9°C" data={tempData} options={options} />
        </div>

        <div className="mt-10 mb-10 font-montserrat text-center">
          <h1>There will be prediction text here</h1>
        </div>
      </main>
    </div>
  );
};

const ChartCard = ({ title, color, value, data, options }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col">
    <h3 className="text-xl font-medium mb-2" style={{ color }}>{title}</h3>
    <p className="text-4xl font-bold text-gray-800 mb-4">{value}</p>
    <div className="flex-grow">
      <Line data={data} options={options} />
    </div>
  </div>
);

export default Dashboard;
