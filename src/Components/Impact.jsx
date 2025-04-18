import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';

const impacts = [
  {
    title: 'Early Detection of Abscondment',
    points: [
      'The system enables early identification of abscondment events.',
      'Beekeepers receive immediate alerts, allowing them to take proactive measures to address the issue.',
    ],
  },
  {
    title: 'Efficiency and Sustainability',
    points: [
      'By automating monitoring processes, the system streamlines beekeeping operations.',
      'Timely alerts and actionable insights empower beekeepers to make informed decisions, promoting the overall health and sustainability of their colonies.',
    ],
  },
  {
    title: 'Data-driven Insights',
    points: [
      'The collected data provides valuable insights into hive dynamics, contributing to a better understanding of bee behavior and environmental factors affecting bee colonies.',
    ],
  },
  {
    title: 'Swift Identification of Feeding Irregularities',
    points: [
      'Anomalies in feeding patterns are detected through AI analysis.',
      'Beekeepers can intervene promptly, ensuring the health and well-being of the bee colony.',
    ],
  },
];

const ImpactCard = ({ title, points }) => (
  <div className="bg-[#FFEEDC] p-6 rounded-md shadow-sm max-w-sm text-left space-y-4">
    <h3 className="font-bold text-lg">{title}</h3>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-start gap-2 text-sm text-gray-800">
          <FaCheckSquare className="text-[#F28C28] text-base mt-0.5 flex-shrink-0" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Impact = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white text-black text-center font-montserrat" id='impact'>
      <h2 className="text-3xl font-bold mb-12">Impact</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {impacts.map((impact, index) => (
          <ImpactCard key={index} {...impact} />
        ))}
      </div>
    </section>
  );
};

export default Impact;
