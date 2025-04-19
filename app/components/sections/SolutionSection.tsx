import React from 'react';
import Image from 'next/image'; // To potentially show a product screenshot later
import { FaRocket } from 'react-icons/fa'; // Icon for solution/launch

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background"> {/* Match Opportunity section bg */}
      <div className="container mx-auto px-4 text-center">
        <FaRocket className="text-primary text-5xl mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary font-title">
          The Shortcut: Pre-Built ERC20 Token Platform Codebase
        </h2>
        <p className="text-lg md:text-xl text-textMuted mb-8 max-w-3xl mx-auto">
          Stop wrestling with complexity. The QuickToken Dashboard provides a <span className="text-highlight font-semibold">complete, pre-built, and customizable solution</span> to launch your own token deployment platform in a fraction of the time and cost.
        </p>
        
        {/* Optional Placeholder for a product image/mockup */}
        {/* 
        <div className="my-12 max-w-4xl mx-auto bg-surface rounded-lg shadow-lg overflow-hidden">
          <Image 
            src="/images/quicktoken-dashboard-mockup.png" // Replace with your actual image path
            alt="QuickToken Dashboard Mockup"
            width={1000} 
            height={600} 
            layout="responsive"
          />
        </div> 
        */}

        <p className="text-lg md:text-xl text-textLight max-w-3xl mx-auto">
          Focus on your business model and user acquisition, not on reinventing the wheel. Get the foundation you need, ready to deploy and customize.
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
