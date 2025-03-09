import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import AuthPage from "../Pages/Signin";
import { Link } from "react-router-dom";
import Pbutton from "./buttons/Primarybutton";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [language, setLanguage] = useState("EN");

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false); // Closes the mobile menu
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeNav(); // Close the mobile menu after navigating
  };

  return (
    <>
      <div className="w-full h-[90px] bg-white/10 backdrop-blur-md fixed top-0 left-0 z-50">
        <div className="max-w-[1140px] h-full mx-auto flex justify-between items-center">
          <div
            onClick={() => scrollToSection("home")}
            className="cursor-pointer flex items-center space-x-6"
          >
            <img src="/assets/logos.png" alt="logo" className="w-40 mt-10" />
            <div className="flex space-x-2">
              {["EN", "AM", "OR"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-md text-sm font-bold ${
                    language === lang
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
          {/* Desktop menu */}
          <ul className="hidden md:flex font-montserrat">
            <li className="p-4 cursor-pointer text-sm font-bold hidden lg:block">
            <Link to="/" className="hover:text-[#F28C28]" onClick={closeNav}>
              <a
                onClick={() => scrollToSection("home")}
                className="hover:text-[#F28C28]"
              >
                Home</a>
              </Link>
            </li>
            <li className="p-4 cursor-pointer text-sm font-bold hidden lg:block">
              <a
                onClick={() => scrollToSection("about")}
                className="hover:text-[#F28C28]"
              >
                About
              </a>
            </li>
            <Pbutton text="Sign In" to="/Signin" />
          </ul>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              className="text-sm font-bold py-2 px-7 hover:duration-300"
              onClick={handleNav}
            >
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </button>
          </div>

          {/* Mobile menu */}
          <ul
            className={`${
              nav ? "flex" : "hidden"
            } flex-col bg-white w-full absolute top-24 left-0 p-4 shadow-md`}
          >
            <li className="p-4 text-sm font-bold font-montserrat">
              <Link to="/" className="hover:text-[#F28C28]" onClick={closeNav}>
              <a
                onClick={() => scrollToSection("home")}
                className="hover:text-[#F28C28]"
              >
                Home</a>
              </Link>
            </li>
            <li className="p-4 text-sm font-bold font-montserrat">
            <Link to="/" className="hover:text-[#F28C28]" onClick={closeNav}>
              <a
                onClick={() => scrollToSection("about")}
                className="hover:text-[#F28C28]"
              >
                About
              </a> </Link>
            </li>
            <Pbutton text="Sign In" to="/Signin" onClick={closeNav} />
          </ul>
        </div>
      </div>

      {/* Overlay for Sign In */}
      {showSignin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-black/10 rounded-lg p-8 shadow-lg w-full">
            <button
              onClick={() => setShowSignin(false)}
              className="absolute top-12 right-4 bg-gray-300 hover:bg-[#F28C28] text-gray-800 font-bold py-1 px-1 rounded-full shadow-md"
            >
              <AiOutlineClose size={24} />
            </button>
            <AuthPage />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
