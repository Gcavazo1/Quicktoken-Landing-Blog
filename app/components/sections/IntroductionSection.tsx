import React from 'react';

const IntroductionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary font-title">
          Smart Contracts for Revenue: Opportunity or Hype?
        </h2>
        <p className="text-lg md:text-xl text-textMuted mb-8 max-w-3xl mx-auto font-body">
          Smart contracts offer exciting automated revenue streams. But building a secure token platform involves technical hurdles and costs.
        </p>
        <p className="text-lg md:text-xl text-textLight max-w-3xl mx-auto">
          What if you could tap into this potential <span className="text-highlight font-semibold">without being a blockchain guru</span> or spending months on development? What if you could own the platform itself?
        </p>
      </div>
    </section>
  );
};

export default IntroductionSection;
