import React from 'react';

// Icons
import { 
  FaSearchDollar, 
  FaRegLightbulb, 
  FaSearch, 
  FaUserCheck, 
  FaMoneyBillWave 
} from 'react-icons/fa';

const SalesFunnel = () => {
  // Funnel stages data
  const funnelStages = [
    {
      name: 'Awareness',
      description: 'Users discover your platform through content, social media, or ads',
      icon: FaSearch,
      color: 'text-textLight',
      width: 'w-full'
    },
    {
      name: 'Interest',
      description: 'They explore your platform features and token possibilities',
      icon: FaRegLightbulb,
      color: 'text-secondary',
      width: 'w-5/6'
    },
    {
      name: 'Consideration',
      description: 'They evaluate your platform against alternatives',
      icon: FaSearchDollar,
      color: 'text-primary',
      width: 'w-4/6'
    },
    {
      name: 'Decision',
      description: 'They try the demo and assess if it meets their needs',
      icon: FaUserCheck,
      color: 'text-highlight',
      width: 'w-3/6'
    },
    {
      name: 'Purchase',
      description: 'They buy access to your platform',
      icon: FaMoneyBillWave,
      color: 'text-highlight',
      width: 'w-2/6'
    }
  ];

  return (
    <div className="bg-surface p-4 rounded-lg shadow-lg">
      <h4 className="text-center text-lg font-semibold text-textLight mb-6">
        Token Platform Customer Journey
      </h4>
      
      <div className="space-y-4">
        {funnelStages.map((stage, index) => (
          <div key={stage.name} className="flex flex-col items-center">
            {/* Funnel section */}
            <div className={`${stage.width} h-12 bg-gradient-to-b from-background to-surface border border-${stage.color} rounded-t-lg flex items-center justify-center relative group transition-all duration-300 hover:from-surface hover:to-background`}>
              {/* Icon */}
              <stage.icon className={`${stage.color} text-xl absolute -top-4 p-1 bg-surface rounded-full border border-${stage.color}`} />
              
              {/* Stage name */}
              <span className={`${stage.color} font-medium`}>
                {stage.name}
              </span>
            </div>
            
            {/* Stage description */}
            <p className="text-xs text-textMuted text-center mt-2 mb-4 max-w-xs">
              {stage.description}
            </p>
            
            {/* Connector (except for the last item) */}
            {index < funnelStages.length - 1 && (
              <div className="w-0 h-4 border-l border-dotted border-textMuted"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesFunnel; 