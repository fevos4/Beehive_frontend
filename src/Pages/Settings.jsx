import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Menus from "./Menus";
import Pbutton from "../Components/buttons/Primarybutton";

const Settings = () => {
  const [ownerName, setOwnerName] = useState("Name");
  const [hiveName, setHiveName] = useState("The red hive");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex font-montserrat " id="settings">
      {/* Sidebar Menu */}
      <Menus isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`p-10 bg-cream min-h-screen transition-all duration-300 ${
          isSidebarVisible ? "ml-[250px] w-[calc(100%-250px)]" : "ml-0 w-full"
        }`}
      >
        <h1 className="md:text-3xl text-2xl font-bold">Settings</h1>
        <p className="text-gray-600 mb-6 md:text-sm text-xs">Configure system parameters and notifications</p>

       

        {/* Hive 1 Settings */}
        <h2 className="md:text-2xl text-xl font-bold mb-4">Hive 1</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Alert Thresholds */}
          <div className="bg-white shadow-md border border-gray-400 rounded-lg p-6">
            <h3 className="font-semibold md:text-lg mb-4">Alert Thresholds</h3>
            <div className="space-y-4">
              <div className="flex justify-between md:text-base text-xs">
                <label>Temperature Range (°C)</label>
                <div className="flex gap-2">
                  <input type="number" defaultValue="20" className="border p-2 w-16 rounded" />
                  <input type="number" defaultValue="35" className="border p-2 w-16 rounded" />
                </div>
              </div>
              <div className="flex justify-between md:text-base text-xs">
                <label>Humidity Range (%)</label>
                <div className="flex gap-2">
                  <input type="number" defaultValue="40" className="border p-2 w-16 rounded" />
                  <input type="number" defaultValue="80" className="border p-2 w-16 rounded" />
                </div>
              </div>
              <div className="flex justify-between md:text-base text-xs">
                <label>Weight Thresholds (kg)</label>
                <div className="flex gap-2">
                  <input type="number" defaultValue="40" className="border p-2 w-16 rounded" />
                  <input type="number" defaultValue="60" className="border p-2 w-16 rounded" />
                </div>
              </div>
              <div className="flex justify-between md:text-base text-xs">
                <label>Minimum Bee Count</label>
                <input type="number" defaultValue="500" className="border p-2 w-24 rounded" />
              </div>
              
            </div>
            <button className="bg-slate-400 font-semibold px-3 py-2 rounded-sm text-xs flex hover:bg-slate-200 mt-4 w-full items-center justify-center">Save Changes</button>
          
           </div>
           

          {/* Notification Preferences */}
          <div className="bg-white shadow-md border border-gray-400 rounded-lg p-6">
            <h3 className="font-semibold md:text-lg mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center md:text-base text-xs">
                <label>Email Notifications</label>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <input type="email" placeholder="Email address" className="border p-2 w-full rounded md:text-base text-xs" />
              <select className="border p-2 w-full rounded md:text-base text-xs">
                <option>Every hour</option>
                <option>Every 6 hours</option>
                <option>Every 12 hours</option>
              </select>

              <div className="flex justify-between items-center md:text-base text-xs">
                <label>SMS Notifications</label>
                <input type="checkbox" className="toggle-checkbox md:text-base text-xs" />
              </div>
              <input type="text" placeholder="Phone number" className="border p-2 w-full rounded md:text-base text-xs" />
              <select className="border p-2 w-full rounded md:text-base text-xs">
                <option>Critical alerts only</option>
                <option>All alerts</option>
              </select>
            </div>
            <button className="bg-slate-400 font-semibold px-3 py-2 rounded-sm text-xs flex hover:bg-slate-200 mt-4 w-full items-center justify-center">Save Changes</button>
          </div>
          
        </div>

        {/* Name Change Section */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold md:text-lg">Change your name</h3>

          <div className="mt-4">
            <label className="block text-gray-700 md:text-base text-xs">Owner Name</label>
            <div className="relative">
              <input type="text" value={ownerName} className="border p-3 w-full rounded md:text-base text-xs" />
              <FaRegEdit className="absolute right-3 top-3 cursor-pointer text-gray-600" />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 md:text-base text-xs">Hive Name</label>
            <div className="relative">
              <input type="text" value={hiveName} className="border p-3 w-full rounded md:text-base text-xs" />
              <FaRegEdit className="absolute right-3 top-3 cursor-pointer text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
