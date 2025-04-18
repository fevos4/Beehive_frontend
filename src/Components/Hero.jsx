import React from "react";
import { FaBook } from "react-icons/fa";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-36 bg-[#FFFFFF]  gap-12"
    >
      {/* Left Text */}
      <div className="flex flex-col justify-center items-start text-left flex-[1.3]">
        <h1
          className="text-5xl md:text-7xl  font-bold font-montserrat text-transparent bg-clip-text leading-tight"
          style={{
            backgroundImage: "linear-gradient(to bottom, #F28C28, #000000)",
          }}
        >
          Smart Beehive Monitoring System
        </h1>

        <p className="text-lg md:text-base mt-4 text-black font-montserrat">
          Smart beehive monitoring system
        </p>

        <button
          onClick={() => scrollToSection("features")}
          className="mt-6 bg-[#F28C28] hover:bg-[#d97a1f] text-black font-montserrat py-2 px-6 rounded-full transition"
        >
          Explore
        </button>

        <div className="mt-4 flex items-center gap-2 text-xs text-black cursor-pointer font-montserrat hover:underline">
          <FaBook />
          <span>User manual</span>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 w-full max-w-md">
        <img
          src="/assets/bgggg.png"
          alt="Smart Hive"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
