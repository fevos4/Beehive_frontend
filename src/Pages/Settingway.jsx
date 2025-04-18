import React, { useState, useEffect, useRef } from "react";
import HiveCard from "./Hives";
import Menus from "./Menus";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Settingway = () => {
  const hives = [...Array(6)].map((_, i) => i + 1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
  const handleNext = () => setCurrentIndex(prev => (prev + 1) % hives.length);
  const handlePrev = () => setCurrentIndex(prev => (prev - 1 + hives.length) % hives.length);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = e => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex font-montserrat" ref={sidebarRef}>
      <Menus isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      <div className={`p-10 bg-white min-h-screen transition-all duration-300 w-full ${
        isSidebarVisible ? "ml-0 md:ml-[250px]" : "ml-0"
      }`}>
         <div className="flex items-center space-x-2 border-b pb-3 mb-6">
          <img src="/assets/logos.png" alt="Logo" className="w-32 md:w-40" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-500 mb-8">Select a hive to configure</p>

        {/* Mobile Carousel */}
        <div className="md:hidden relative flex items-center justify-center overflow-hidden mb-10 max-w-[500px] mx-auto">
          <button onClick={handlePrev} className="absolute left-0 p-2 bg-white rounded-full shadow z-10">
            <FaAngleLeft />
          </button>
          <div className="w-full max-w-sm overflow-hidden relative h-[400px]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {hives.map((num) => (
                <div key={num} className="flex-shrink-0 w-full">
                  <HiveCard hiveNumber={num} linkTo="/settings" />
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleNext} className="absolute right-0 p-2 bg-white rounded-full shadow z-10">
            <FaAngleRight />
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {hives.map((num) => (
            <HiveCard key={num} hiveNumber={num} linkTo="/settings" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settingway;
