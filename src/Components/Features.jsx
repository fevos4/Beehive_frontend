import React from 'react';
import { MdMonitor, MdAnalytics, MdSensors, MdFavorite } from 'react-icons/md';
import { FaCheckSquare } from 'react-icons/fa';

const features = [
  {
    icon: <MdMonitor className="text-4xl text-black" />,
    title: 'Real-time Monitoring',
    points: [
      'The system continuously monitors hive conditions in real-time.',
      'Cameras capture live footage, allowing beekeepers to observe the hive remotely.',
    ],
  },
  {
    icon: <MdAnalytics className="text-4xl text-black" />,
    title: 'Historical Analysis',
    points: [
      'Data collected over time enables historical analysis.',
      'Trends and patterns are identified, aiding in understanding the long-term health of the bee colony.',
    ],
  },
  {
    icon: <MdSensors className="text-4xl text-black" />,
    title: 'Sensor Suite',
    points: [
      'Smart sensors measure various parameters such as temperature, humidity, and bee activity.',
      'These sensors provide detailed insights into the hive environment.',
    ],
  },
  {
    icon: <MdFavorite className="text-4xl text-black" />,
    title: 'User-friendly Interface',
    points: [
      'The system offers a user-friendly interface accessible via a web application.',
      'Beekeepers can receive alerts, view real-time data, and access historical information effortlessly.',
    ],
  },
];

const FeatureCard = ({ icon, title, points }) => (
  <div className="flex flex-col items-start text-left space-y-4 max-w-sm">
    {icon}
    <h3 className="font-bold text-lg">{title}</h3>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-start text-sm text-gray-800">
          <FaCheckSquare className="text-[#F28C28] text-base mt-1 mr-2 flex-shrink-0" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Features = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white text-black text-center font-montserrat" id='features'>
      <h2 className="text-3xl font-bold mb-12">Key Features</h2>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
