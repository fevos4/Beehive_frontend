import React from "react";


const Setup = () => {
  return (
    <div className=" bg-white px-6 py-10 text-gray-800 font-montserrat">
      <div className=" mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          Smart Hive <span className="text-orange-500">Setup</span>
        </h1>
        <p className="text-sm md:text-base text-gray-700 md:px-20 mx-auto mb-10">
          The sensors are integrated with the Beehive monitoring device and monitor different
          parameters like weight, temperature, humidity, etc. If there is any declination in the
          honeybee count or sudden changes in the weight, temperature, and humidity conditions
          instant notifications will be sent to the apiarists through our web app.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Web App Section */}
          <div className="text-center">
            <img
              src="assets/setup.png"
              alt="Smart Hive Web App"
              className="w-3/4 mx-auto"
            />
          </div>

        
          
        </div>
      </div>
    </div>
  );
};

export default Setup;
