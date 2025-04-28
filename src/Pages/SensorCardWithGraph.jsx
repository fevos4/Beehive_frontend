import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { FaSpinner } from 'react-icons/fa';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const SensorCardWithGraph = ({ label, data, unit, loading }) => {
  const chartData = {
    labels: data?.map((_, i) => i + 1) || [],
    datasets: [
      {
        label: label,
        data: data || [],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
        pointRadius: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: { display: true, beginAtZero: true },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-md flex flex-col justify-between">
      <h3 className="text-gray-600 mb-1">{label}</h3>
      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <FaSpinner className="animate-spin text-gray-400 text-2xl" />
        </div>
      ) : (
        <>
          <p className="text-2xl font-bold">{data[data.length - 1]} {unit}</p>
          <div className="mt-3 h-40 bg-gray-100 rounded-md overflow-hidden">
            <Line data={chartData} options={chartOptions} />
          </div>
        </>
      )}
    </div>
  );
};

export default SensorCardWithGraph;
