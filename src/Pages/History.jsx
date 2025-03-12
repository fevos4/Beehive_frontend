import React, { useState, useRef } from "react";
import Menus from "./Menus";

const History = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const data = [
    { time: "00:00", temp: "25 ℃", humidity: "60 %", weight: "50 kg", count: "1000" },
    { time: "04:00", temp: "24 ℃", humidity: "62 %", weight: "49 kg", count: "950" },
    { time: "08:00", temp: "26 ℃", humidity: "58 %", weight: "51 kg", count: "1100" },
    { time: "12:00", temp: "28 ℃", humidity: "55 %", weight: "50 kg", count: "1200" },
    { time: "16:00", temp: "27 ℃", humidity: "57 %", weight: "50 kg", count: "1150" },
    { time: "20:00", temp: "25 ℃", humidity: "61 %", weight: "49 kg", count: "1050" },
  ];

  return (
    <div className="flex" id="history">
      {/* Sidebar */}
      <Menus isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <div
        className={`p-10 transition-all duration-300 ${isSidebarVisible ? "ml-[250px] w-[calc(100%-250px)]" : "ml-0 w-full"} font-montserrat`}
      >
        <h1 className="md:text-3xl text-2xl font-bold">History</h1>
        <p className="text-gray-600 md:text-sm text-xs">View and analyze historical data</p>

        <h2 className="md:text-2xl text-xl font-bold mt-6">Hive 1</h2>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3 border border-gray-300 ">Time</th>
                <th className="p-3 border border-gray-300">Temperature</th>
                <th className="p-3 border border-gray-300">Humidity</th>
                <th className="p-3 border border-gray-300">Weight</th>
                <th className="p-3 border border-gray-300">Bee Count</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="text-gray-700 hover:bg-gray-100">
                  <td className="p-3 border border-gray-300">{row.time}</td>
                  <td className="p-3 border border-gray-300">{row.temp}</td>
                  <td className="p-3 border border-gray-300">{row.humidity}</td>
                  <td className="p-3 border border-gray-300">{row.weight}</td>
                  <td className="p-3 border border-gray-300">{row.count}</td>
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
