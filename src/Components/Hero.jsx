import React from "react";
import Pbutton from "./buttons/Primarybutton";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="w-full flex items-center justify-center px-4 md:px-24 bg-[#E5E5E0]"
      style={{
        backgroundImage: `url('/assets/bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // Full viewport height
      }}
      id="home"
    >
      {/* Center Content */}
      <div className="flex flex-col justify-center items-center text-center">
      <h1
  className="text-4xl md:text-8xl font-montserrat font-bold text-transparent bg-clip-text"
  style={{
    backgroundImage: "linear-gradient(to bottom, #F28C28, #000000)", 
  }}
>
  SMART <br />HIVE
</h1>

        <p className="text-lg md:text-xl font-montserrat mt-4 mb-4 text-black" >
          Smart beehive monitoring system
        </p>

        <Pbutton text="Get Started" to="/Signin" />

      </div>
    </div>
  );
};

export default Hero;
