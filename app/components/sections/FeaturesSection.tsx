import React from 'react';
// Importing relevant icons
import { FaCogs, FaShieldAlt, FaDollarSign, FaWrench } from 'react-icons/fa'; 

const FeaturesSection = () => {
  const features = [
    {
      icon: FaCogs, // Icon for Setup/Configuration
      title: "Effortless Setup & Deployment",
      description: "Get up and running quickly with clear documentation and a streamlined setup process. Deploy to Vercel or your preferred host.",
      color: "text-primary",
    },
    {
      icon: FaShieldAlt, // Icon for Security
      title: "Security-Focused Contracts",
      description: "Built on battle-tested OpenZeppelin standards. While auditing your final implementation is always recommended, the core contracts are robust.",
      color: "text-highlight", 
    },
    {
      icon: FaDollarSign, // Icon for Revenue/Fees
      title: "Configurable Fee Collection",
      description: "Easily configure platform access fees or per-mint fees directly through the dashboard settings to match your business model.",
      color: "text-secondary", 
    },
    {
      icon: FaWrench, // Icon for Customization
      title: "Fully Customizable Codebase",
      description: "You get the full Next.js/TypeScript source code. Tailor the branding, features, and user experience to your exact needs.",
      color: "text-textLight", // Using a lighter color for this one
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface"> {/* Contrasting background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary font-title">
          Why Choose the QuickToken Dashboard?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
              <feature.icon className={`${feature.color} text-4xl mb-4`} />
              <h3 className={`text-xl font-semibold mb-3 ${feature.color} font-title`}>{feature.title}</h3>
              <p className="text-textMuted flex-grow font-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
