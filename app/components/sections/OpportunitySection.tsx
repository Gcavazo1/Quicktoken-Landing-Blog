import React from 'react';
// Import icons from react-icons
import { FaCoins, FaNetworkWired } from 'react-icons/fa';

const OpportunitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary font-title">
          Monetize Your Token Platform: Fee Strategies
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Revenue Stream 1: Platform/Deployment Fees */}
          <div className="bg-surface p-6 rounded-lg shadow-lg flex flex-col items-center text-center md:items-start md:text-left">
            <FaNetworkWired className="text-primary text-4xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-primary">Platform Access & Deployment Fees</h3>
            <p className="text-textMuted">
              Charge users a fee simply to access your platform or a one-time fee when they deploy their smart contract token through your service. You set the price, control the access.
            </p>
          </div>

          {/* Revenue Stream 2: Minting Fees */}
          <div className="bg-surface p-6 rounded-lg shadow-lg flex flex-col items-center text-center md:items-start md:text-left">
            <FaCoins className="text-highlight text-4xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-highlight">Per-Token Minting Fees (Optional)</h3>
            <p className="text-textMuted">
              Implement an optional model where you earn a small percentage or a fixed fee every time a token is minted using the contracts deployed via your platform. This creates a continuous potential income stream based on usage.
            </p>
          </div>
        </div>
        <p className="text-center text-textLight mt-12 text-lg">
          By owning the infrastructure, you bypass being just a user and become the <span className="text-primary font-semibold">toll collector</span> on the blockchain highway.
        </p>
      </div>
    </section>
  );
};

export default OpportunitySection;
