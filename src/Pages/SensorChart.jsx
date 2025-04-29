import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SensorCard = ({ label, value, data, dataKey, color, unit }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div className="bg-white rounded-xl p-4 shadow-md flex flex-col justify-between">
      <h3 className="text-gray-600 mb-1">{label}</h3>
      <p className="text-2xl font-bold">
        {value}
        {unit && <span className="text-sm font-normal ml-1">{unit}</span>}
      </p>
      <div className="mt-3 h-40 bg-gray-100 rounded-md flex items-center justify-center">
        {isLoading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
            <p className="text-gray-500 mt-2">Loading data...</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis 
                dataKey="timestamp" 
                tick={{ fontSize: 10 }}
                tickFormatter={(timestamp) => {
                  const date = new Date(timestamp);
                  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
                }}
              />
              <YAxis 
                tick={{ fontSize: 10 }}
                domain={['auto', 'auto']}
                width={30}
              />
              <Tooltip 
                formatter={(value) => [`${value} ${unit}`, label]}
                labelFormatter={(timestamp) => {
                  const date = new Date(timestamp);
                  return date.toLocaleTimeString();
                }}
              />
              <Line 
                type="monotone" 
                dataKey={dataKey} 
                stroke={color} 
                strokeWidth={2} 
                dot={false} 
                activeDot={{ r: 4 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default SensorCard;