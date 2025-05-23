import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaHistory }            from "react-icons/fa";
import { IoIosSettings, IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { IoLogOut }             from "react-icons/io5";

const Menus = ({ isSidebarVisible, toggleSidebar }) => {
  return (
    <aside
      className={`fixed w-[250px] h-full bg-gray-900 text-white flex flex-col justify-between font-montserrat transition-transform duration-300 ${
        isSidebarVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-7 top-10 bg-gray-900 text-white p-2 rounded-full shadow-md"
      >
        {isSidebarVisible ? <IoIosArrowDropleft /> : <IoIosArrowDropright />}
      </button>

      <div className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-8">User Dashboard</h2>
        <ul className="space-y-4">

          <li>
            <Link
              to="/hives"
              onClick={toggleSidebar}
              className="px-6 py-2 hover:bg-gray-700 flex items-center"
            >
              <MdOutlineDashboard className="mr-3 text-2xl" />
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              to="/history"
              onClick={toggleSidebar}
              className="px-6 py-2 hover:bg-gray-700 flex items-center"
            >
              <FaHistory className="mr-3 text-2xl" />
              <span>History</span>
            </Link>
          </li>

          <li>
            <Link
              to="/settingway"
              onClick={toggleSidebar}
              className="px-6 py-2 hover:bg-gray-700 flex items-center"
            >
              <IoIosSettings className="mr-3 text-2xl" />
              <span>Settings</span>
            </Link>
          </li>

          <li>
            <button
              onClick={() => {
                // your logout logic here
                toggleSidebar();
              }}
              className="px-6 py-2 hover:bg-gray-700 flex items-center w-full text-left"
            >
              <IoLogOut className="mr-3 text-2xl" />
              <span>Logout</span>
            </button>
          </li>

        </ul>
      </div>

      <div className="text-center py-4 text-gray-400 text-sm">
        © 2025 Dashboard
      </div>
    </aside>
  );
};

export default Menus;
