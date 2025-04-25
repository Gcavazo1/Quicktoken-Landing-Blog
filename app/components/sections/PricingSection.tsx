import React from 'react';
import { FaCheck, FaEnvelope, FaShoppingCart } from 'react-icons/fa';

const PricingSection = () => {
  // Features included in the package
  const includedFeatures = [
    "Complete Source Code Access",
    "Admin Dashboard & Config Panel",
    "Revenue Fee Management",
    "ERC-20 Smart Contracts Included",
    "Detailed Documentation",
    "Deployment Instructions",
  ];

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary font-title">
          Ready to Launch Your Platform?
        </h2>
        <p className="text-lg text-textMuted text-center mb-12 max-w-3xl mx-auto font-body">
          Get everything you need to launch your own token deployment platform and start generating revenue.
        </p>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto bg-background rounded-lg shadow-xl overflow-hidden">
          <div className="bg-primary bg-opacity-10 p-6 text-center border-b border-primary">
            <h3 className="text-2xl font-bold text-primary font-title">QuickToken Dashboard</h3>
            <p className="text-textMuted mt-2 font-body">Complete Platform Codebase</p>
            
            <div className="mt-6 mb-4">
              <span className="text-4xl font-bold text-highlight">$49</span>
              <span className="text-textMuted font-body"> USD</span>
            </div>
            
            <p className="text-textMuted text-sm font-body">One-time payment, lifetime access</p>
          </div>
          
          <div className="p-6">
            <ul className="space-y-3 font-body">
              {includedFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-textLight">
                  <FaCheck className="text-primary mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <div className="mt-8 text-center">
              <a 
                href="https://gigacode-nodus-hub.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-opacity-80 text-background font-bold py-4 px-10 rounded-lg transition duration-300 flex items-center justify-center mx-auto font-body"
              >
                <FaShoppingCart className="mr-2" />
                View Purchase Options
              </a>
              
              <p className="mt-4 text-textMuted text-sm font-body">
                Click to view purchase options.
              </p>
            </div>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="mt-12 text-center max-w-3xl mx-auto font-body">
          <p className="text-textMuted">
            Need a custom solution or have questions? <a href="https://personal-link-tree-mu.vercel.app/contact.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Contact us</a> for personalized assistance.
          </p>
          <p className="text-textMuted mt-2">
            All purchases come with detailed documentation and setup instructions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
