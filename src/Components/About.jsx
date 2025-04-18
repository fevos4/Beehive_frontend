import React from 'react';

const About = () => {
    return (
        <div className="w-full bg-[#FFFFFF] px-6 flex justify-center md:py-16" id='about'>
            <div className="max-w-[1000px] flex flex-col md:flex-row items-center md:items-start ">
                <div className="md:w-1/2  md:text-left md:pr-8">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-center font-montserrat">Introduction</h2>
                    <p className="text-sm md:text-base text-gray-700 font-montserrat">
                    Smart Hive is an advanced smart beehive monitoring system designed to help beekeepers effortlessly track and maintain hive health. Our platform provides real-time data on temperature, humidity, hive weight, and activity, allowing for early detection of potential issues and enhanced hive management. With Smart Hive, beekeepers gain valuable insights that support bee health and productivity, promoting a more sustainable and successful apiary.</p>
                </div>

                <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                    <img 
                        src="/assets/ab.jpg" 
                        alt="Beehive with a bee" 
                        className=" shadow-md w-96 h-96 object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
