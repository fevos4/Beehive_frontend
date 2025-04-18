import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <footer className="bg-[#202020] text-white py-12 font-montserrat" id='contact'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Grid layout for content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <div className="cursor-pointer">
              <img src="/assets/logos.png" alt="Logo" className="w-32 md:w-40 mt-10" />
            </div>
            <p className="text-gray-300">
              By real-time monitoring of traffic enhance the pollination productivity and number of flights of your bees.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center justify-center ">
            <h3 className="text-xl font-bold mb-4 text-amber-400">Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-[#F28C28] transition">Home</a></li>
              <li><a href="#about" className="hover:text-[#F28C28] transition">About</a></li>
              <li><a href="#features" className="hover:text-[#F28C28] transition">Features</a></li>
              <li><a href="#impact" className="hover:text-[#F28C28] transition">Impact</a></li>
              <li><a href="#team" className="hover:text-[#F28C28] transition">Team</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center justify-center ">
            <h3 className="text-xl font-bold mb-4 text-amber-400">Contact Us</h3>
            <p className="mb-2 text-gray-300">0987654321</p>
            <p className="mb-4 text-gray-300">smartbeehive@gmail.com</p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="hover:text-[#F28C28] transition">
              <FaFacebook />
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-[#F28C28] transition">
              <AiFillInstagram />
              </a>
              {/* Twitter */}
              <a href="#" className="hover:text-[#F28C28] transition">
              <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-amber-700 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} SmartBeehive. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
