import React from "react";
import { Link } from "react-router-dom";

const Pbutton = ({ text, to, onClick, className }) => {
  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      {to ? (
        // If 'to' is provided, render as a Link
        <Link to={to}>
          <button
            className="font-montserrat bg-[#F28C28] text-black hover:bg-orange-300 font-bold px-4 py-2 rounded-lg"
            onClick={onClick}
          >
            {text}
          </button>
        </Link>
      ) : (
        // If 'to' is not provided, render as a regular button
        <button
          className="font-montserrat bg-[#F28C28] text-black hover:bg-orange-300 font-bold px-4 py-2 rounded-lg"
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default Pbutton;
