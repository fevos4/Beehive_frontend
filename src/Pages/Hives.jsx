import React from "react";
import { Link } from "react-router-dom";

const HiveCard = ({ hiveNumber, imageSrc, linkTo = "/beehivedashboard", internalTemp, externalTemp, humidity, weight }) => {
  console.log("HiveCard props:", { hiveNumber, imageSrc, linkTo, internalTemp, externalTemp, humidity, weight });
  return (
    <div className="flex flex-col items-center mt-14">
      {/* Hive Button with dynamic link */}
      <Link
        to={linkTo}
        state={{ hiveName: `Hive ${hiveNumber}` }}
      >
        <button className="px-4 py-1 bg-white rounded-full shadow text-gray-800 font-medium">
          Hive {hiveNumber}
        </button>
      </Link>

      {/* Blob + Data */}
      <div className="relative w-80 h-80 mt-4">
        <svg
          viewBox="0 0 200 180"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-14 left-0 w-full h-full z-0"
        >
          <path
            fill="#f0f0f0"
            d="M38.8,-64.7C49.5,-58.4,57.3,-49.6,64.5,-39.5C71.6,-29.3,78.1,-18,75.8,-7.6C73.6,2.8,62.7,12.2,56.5,22.9C50.3,33.5,48.7,45.4,42.4,52.5C36.2,59.6,25.2,61.8,14.4,62.6C3.6,63.3,-6.9,62.5,-16.5,58.6C-26.1,54.7,-34.8,47.7,-43.4,39.7C-52.1,31.6,-60.7,22.4,-64.5,11.3C-68.3,0.1,-67.2,-12.9,-61.8,-23.7C-56.4,-34.5,-46.7,-43.1,-36,-50.7C-25.3,-58.3,-12.6,-64.9,-0.3,-64.5C12,-64.1,24.1,-56.9,38.8,-64.7Z"
            transform="translate(100 100)"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
          <img
            src={imageSrc || "assets/hhive.png"}
            alt={`Hive ${hiveNumber}`}
            className="w-2/3 mb-2"
          />
          <p className="text-sm font-medium text-gray-700">Internal Temperature: {internalTemp ?? "--"}°C</p>
          <p className="text-sm font-medium text-gray-700">External Temperature: {externalTemp ?? "--"}°C</p>
          <p className="text-sm font-medium text-gray-700">Humidity: {humidity ?? "--"}%</p>
          <p className="text-sm font-medium text-gray-700">Weight: {weight ?? "--"}kg</p>
        </div>
      </div>
    </div>
  );
};

export default HiveCard;
