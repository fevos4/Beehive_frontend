import React, { useState, useEffect, useRef } from "react";
import HiveCard from "./Hives";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Menus from "./Menus";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HiveGrid = () => {
  const [hives, setHives] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % hives.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + hives.length) % hives.length);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Fetch hive data from API
  useEffect(() => {
    const fetchHives = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://127.0.0.1:8000/sensors/api/beehive/1/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setHives([response.data]); // Wrap in array if single object
      } catch (error) {
        console.error("Failed to fetch hive data:", error);
      }
    };

    fetchHives();
  }, []);

  // Handle click outside sidebar
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

  const handleCardClick = (hive) => {
    navigate(`/beehivedashboard/${hive.id}`, { state: { hiveName: hive.name } });
  };

  return (
    <div className="flex flex-col md:flex-row relative font-montserrat" ref={sidebarRef}>
      {/* Sidebar */}
      <Menus isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 p-4 md:p-6 ${isSidebarVisible ? "ml-0 md:ml-[250px]" : "ml-0"}`}>
        {/* Logo and Heading */}
        <div className="mb-6 px-6 md:px-20">
          <h1 className="text-3xl border-b pb-3 font-bold flex space-x-2">
            <img
              src="/assets/logos.png"
              alt="Smart Hive Logo"
              className="w-32 md:w-40 mt-5"
            />
          </h1>
          <p className="text-lg px-2 mt-2 md:px-6 text-gray-600">
            Welcome to{" "}
            <span className="text-[#F28C28]">
              <strong>Smart Hive</strong>
            </span>
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative flex items-center justify-center px-4 overflow-hidden mb-10 max-w-[500px] mx-auto">
          <button onClick={handlePrev} className="absolute left-0 p-2 bg-white rounded-full shadow z-10">
            <FaAngleLeft size={24} />
          </button>
          <div className="w-full max-w-sm overflow-hidden relative h-[450px]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {hives.map((hive, index) => (
                <div
                  key={hive.id || index}
                  className="flex-shrink-0 w-full cursor-pointer"
                  onClick={() => handleCardClick(hive)}
                >
                  <HiveCard
                    hivename={hive.name}
                    imageSrc={hive.image || "/assets/hhive.png"}
                    linkTo="#" // No link needed as we handle navigation manually
                    internalTemp={hive.Temperature}
                    externalTemp={hive.ExternalTemperature}
                    humidity={hive.Humidity}
                    weight={hive.Weight}
                  />
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleNext} className="absolute right-0 p-2 bg-white rounded-full shadow z-10">
            <FaAngleRight size={24} />
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-16 max-w-[1200px] px-10">
          {hives.map((hive, i) => (
            <div key={hive.id || i} onClick={() => handleCardClick(hive)} className="cursor-pointer">
              <HiveCard
                hivename={hive.name}
                imageSrc={hive.image || "/assets/hhive.png"}
                linkTo="#" // No navigation here
                internalTemp={hive.Temperature}
                externalTemp={hive.ExternalTemperature}
                humidity={hive.Humidity}
                weight={hive.Weight}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HiveGrid;
