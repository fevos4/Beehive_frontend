import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Pbutton from "./buttons/Primarybutton";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeNav();
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Features", id: "features" },
    { name: "Impact", id: "impact" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "contact" },
    
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[90px] z-50 bg-white/10 backdrop-blur-md shadow-sm">
      <div className="max-w-[1240px] mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => scrollToSection("home")} className="cursor-pointer">
          <img src="/assets/logos.png" alt="Logo" className="w-32  md:w-40 mt-10" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6 font-semibold font-montserrat text-sm text-black">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-[#F28C28] transition"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Language Dropdown & Sign In (Desktop) */}
        <div className="hidden md:flex items-center space-x-3 relative" ref={dropdownRef}>
          <div className="relative">
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="px-3 py-1 rounded-md text-xs font-bold bg-white text-black border border-black flex items-center space-x-1"
            >
              <span>{language}</span>
              <span className="text-[10px]">▼</span>
            </button>

            {showDropdown && (
              <div className="absolute mt-1 right-0 bg-white border border-gray-300 rounded-md shadow-md z-50">
                {["EN", "AM", "OR"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setShowDropdown(false); // Close dropdown after selection
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      language === lang ? "font-bold text-[#F28C28]" : ""
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Pbutton text="Sign In" to="/Signin" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleNav}>
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {nav && (
        <div className="md:hidden bg-white w-full absolute top-[90px] left-0 shadow-lg z-40">
          <ul className="flex flex-col px-6 py-4 space-y-4 font-semibold font-montserrat text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => scrollToSection(item.id)}
                  className="block hover:text-[#F28C28]"
                >
                  {item.name}
                </a>
              </li>
            ))}
            {/* Mobile Language Dropdown */}
            <div className="relative mt-4">
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="px-3 py-1 rounded-md text-xs font-bold bg-white text-black border border-black flex items-center space-x-1"
              >
                <span>{language}</span>
                <span className="text-[10px]">▼</span>
              </button>

              {showDropdown && (
                <div className="absolute mt-1 bg-white border border-gray-300 rounded-md shadow-md z-50 w-full">
                  {["EN", "AM", "OR"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang); // Set language
                        setShowDropdown(false); // Close dropdown after selecting
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        language === lang ? "font-bold text-[#F28C28]" : ""
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Pbutton text="Sign In" to="/Signin" onClick={closeNav} />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
