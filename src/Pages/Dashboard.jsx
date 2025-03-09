import React, { useState } from "react";
import { FaDownload, FaHistory } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
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


// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Sample data for Weight
  const weightData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Weight (KG)",
        data: [45.0, 46.2, 47.8, 49.0, 50.3, 49.7, 50.0],
        borderColor: "#F28C28",
        backgroundColor: "rgba(242, 140, 40, 0.2)",
        tension: 0.5,
        borderWidth: 2,
      },
    ],
  };

  // Sample data for Temperature
  const tempData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [32.1, 33.0, 32.8, 34.5, 35.0, 33.9, 34.2],
        borderColor: "#FF6347",
        backgroundColor: "rgba(255, 99, 71, 0.2)",
        tension: 0.5,
        borderWidth: 2,
      },
    ],
  };

  // Sample data for Humidity
  const humidityData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Humidity (RM%)",
        data: [48, 50, 49, 51, 52, 49, 50],
        borderColor: "#4682B4",
        backgroundColor: "rgba(70, 130, 180, 0.2)",
        tension: 0.5,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`fixed w-[250px] h-full bg-gray-900 text-white flex flex-col justify-between font-montserrat transition-transform duration-300 ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-8">User Dashboard</h2>
          <ul className="space-y-4">
            <li className="px-6 py-2 hover:bg-gray-700 flex items-center cursor-pointer">
              <MdOutlineDashboard className="mr-3 text-2xl" />
              <span>Dashboard</span>
            </li>
            <li className="px-6 py-2 hover:bg-gray-700 flex items-center cursor-pointer">
              <FaHistory className="mr-3 text-2xl" />
              <span>History</span>
            </li>
            <li className="px-6 py-2 hover:bg-gray-700 flex items-center cursor-pointer">
              <IoIosSettings className="mr-3 text-2xl" />
              <span>Settings</span>
            </li>
            <li className="px-6 py-2 hover:bg-gray-700 flex items-center cursor-pointer">
              <IoLogOut className="mr-3 text-2xl" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        
        <div className="text-center py-4 text-gray-400 text-sm">
          © 2025 Dashboard
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`ml-0 mt-[40px] w-full bg-cream py-4 px-6 font-montserrat transition-margin duration-300 ${
          isSidebarVisible ? "ml-[250px]" : "ml-0"
        }`}
      >
        {/* Header */}
        <div className="flex gap-6">
        <button onClick={toggleSidebar} className="text-gray-900 cursor-pointer h-16 text-lg">
              {isSidebarVisible ? <IoIosArrowDropleft className="w-6 h-6"/> : <IoIosArrowDropright className="w-6 h-6"/>}
            </button>
        <div className="w-full max-w-[1200px] h-16 bg-gray-200 flex items-center justify-between px-6 rounded-lg shadow-md mb-6">
          
          <span className="text-lg font-medium flex items-center">
            <span className="mr-2">&#128100;</span> Name, Hive 1
          </span>
          <div className="flex items-center">
            <FaDownload className="text-gray-900 cursor-pointer text-lg mr-4" />
            
          </div>
        </div>
        </div>
        

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1200px] font-montserrat">
          {/* Weight Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col">
            <h3 className="text-[#F28C28] text-xl font-medium mb-2">Weight</h3>
            <p className="text-4xl font-bold text-gray-800 mb-4">49.7 KG</p>
            <div className="flex-grow">
              <Line data={weightData} options={options} />
            </div>
          </div>

          {/* Temperature Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col">
            <h3 className="text-[#FF6347] text-xl font-medium mb-2">
              Internal Temperature
            </h3>
            <p className="text-4xl font-bold text-gray-800 mb-4">33.9°C</p>
            <div className="flex-grow">
              <Line data={tempData} options={options} />
            </div>
          </div>

          {/* Humidity Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col">
            <h3 className="text-[#4682B4] text-xl font-medium mb-2">
              Humidity
            </h3>
            <p className="text-4xl font-bold text-gray-800 mb-4">49 RM%</p>
            <div className="flex-grow">
              <Line data={humidityData} options={options} />
            </div>
          </div>

          {/* External Temperature Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col">
            <h3 className="text-[#FF6347] text-xl font-medium mb-2">
              External Temperature
            </h3>
            <p className="text-4xl font-bold text-gray-800 mb-4">33.9°C</p>
            <div className="flex-grow">
              <Line data={tempData} options={options} />
            </div>
          </div>
        </div>

        <div className="mt-10 mb-10 font-montserrat">
          <h1>There will be prediction text here</h1>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;