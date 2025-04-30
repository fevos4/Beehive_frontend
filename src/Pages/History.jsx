import React, { useState, useRef } from "react";
import Menus from "./Menus";

const History = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const data = [
    { time: "00:00", internaltemp: "25 ℃",externaltemp: "25 ℃", humidity: "60 %", weight: "50 kg" },
    { time: "04:00", internaltemp: "24 ℃",externaltemp: "24 ℃", humidity: "62 %", weight: "49 kg"},
    { time: "08:00", internaltemp: "26 ℃",externaltemp: "26 ℃", humidity: "58 %", weight: "51 kg" },
    { time: "12:00", internaltemp: "28 ℃",externaltemp: "28 ℃", humidity: "55 %", weight: "50 kg" },
    { time: "16:00", internaltemp: "27 ℃",externaltemp: "27 ℃", humidity: "57 %", weight: "50 kg" },
    { time: "20:00", internaltemp: "25 ℃",externaltemp: "25 ℃", humidity: "61 %", weight: "49 kg" },
  ];

  return (
    <div className="flex" id="history">
      {/* Sidebar */}
      <Menus isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <div
        className={`p-10 transition-all duration-300 ${isSidebarVisible ? "ml-0 md:ml-[250px]" : "ml-0 w-full"} font-montserrat`}
      >
         <div className="flex items-center space-x-2 border-b pb-3 mb-6">
          <img src="/assets/logos.png" alt="Logo" className="w-32 md:w-40" />
        </div>
        <h1 className="md:text-3xl text-2xl font-bold">History</h1>
        <p className="text-gray-600 md:text-sm text-xs">View and analyze historical data</p>

        <h2 className="md:text-2xl text-xl font-bold mt-6">Hive 1</h2>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3 border border-gray-300 ">Time</th>
                <th className="p-3 border border-gray-300">Internal Temperature</th>
                <th className="p-3 border border-gray-300">External Temperature</th>
                <th className="p-3 border border-gray-300">Humidity</th>
                <th className="p-3 border border-gray-300">Weight</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="text-gray-700 hover:bg-gray-100">
                  <td className="p-3 border border-gray-300">{row.time}</td>
                  <td className="p-3 border border-gray-300">{row.internaltemp}</td>
                  <td className="p-3 border border-gray-300">{row.externaltemp}</td>
                  <td className="p-3 border border-gray-300">{row.humidity}</td>
                  <td className="p-3 border border-gray-300">{row.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
