import React from 'react';

const TrendDiagram = () => {
  // Define years for x-axis
  const years = ['2020', '2021', '2022', '2023', '2024', '2025'];
  
  // Simulate trend data - taller bars for more recent/future years
  const adoptionValues = [15, 25, 40, 60, 80, 100];
  const revenueValues = [10, 20, 45, 70, 90, 120];
  
  // Max value for scaling
  const maxValue = Math.max(...revenueValues, ...adoptionValues);
  
  return (
    <div className="bg-surface p-6 rounded-lg shadow-lg font-body">
      <h4 className="text-center text-lg font-semibold text-textLight mb-6 font-title">
        Blockchain Token Platform Market Growth
      </h4>
      
      {/* Chart area with Y-axis */}
      <div className="relative h-64 flex">
        {/* Y-axis labels */}
        <div className="w-12 flex flex-col justify-between text-xs text-textMuted pr-2">
          <span className="block text-right">High</span>
          <span className="block text-right">Medium</span>
          <span className="block text-right">Low</span>
        </div>
        
        {/* Bars container */}
        <div className="flex-1 flex items-end justify-around border-l border-b border-gray-700 pl-2 pb-6 relative">
          {/* X-axis labels (Years) - Positioned below the bars */}
          {years.map((year, index) => (
            <div key={year} className="absolute text-xs text-textMuted text-center"
                 style={{ left: `${(index / years.length) * 100 + (1 / (years.length * 2)) * 100}%`, bottom: '0', transform: 'translateX(-50%)' }}>
              {year}
            </div>
          ))}

          {/* Actual Bars */}
          {years.map((year, index) => (
            <div key={`${year}-bars`} className="flex items-end mx-auto" style={{ height: 'calc(100% - 1.5rem)' }}> {/* Height minus x-axis padding */}
              {/* Adoption trend bar */}
              <div 
                className="w-5 bg-primary mx-1 rounded-t transition-all duration-300 hover:bg-opacity-80"
                title={`Adoption: ${adoptionValues[index]}`}
                style={{ height: `${(adoptionValues[index] / maxValue) * 100}%` }}
              ></div>
              {/* Revenue trend bar */}
              <div 
                className="w-5 bg-highlight mx-1 rounded-t transition-all duration-300 hover:bg-opacity-80"
                title={`Revenue Potential: ${revenueValues[index]}`}
                style={{ height: `${(revenueValues[index] / maxValue) * 100}%` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex justify-center mt-4 text-sm space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-primary mr-2 rounded-sm"></div>
          <span className="text-textMuted">User Adoption</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-highlight mr-2 rounded-sm"></div>
          <span className="text-textMuted">Revenue Potential</span>
        </div>
      </div>
      
      <p className="text-xs text-textMuted text-center mt-4">
        *Projected market trends based on industry data, showing the growth of token platform adoption and associated revenue opportunity.
      </p>
    </div>
  );
};

export default TrendDiagram; 