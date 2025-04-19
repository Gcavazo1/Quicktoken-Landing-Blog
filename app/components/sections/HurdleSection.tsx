import React from 'react';
// Maybe import icons related to complexity, cost, time later?
// import { FaCodeBranch, FaShieldAlt, FaClock } from 'react-icons/fa';

const HurdleSection = () => {
  return (
    <section className="py-16 md:py-24 bg-surface"> {/* Contrasting background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary font-title">
          The Reality Check: Why Building From Scratch is Hard
        </h2>
        <p className="text-center text-textMuted mb-12 max-w-2xl mx-auto font-body">
          While the opportunity is clear, creating a secure, user-friendly token platform involves significant hurdles:
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Hurdle 1: Smart Contract Complexity */}
          <div className="bg-background p-6 rounded-lg shadow-lg text-center">
            {/* Icon Placeholder: <FaCodeBranch className="text-danger text-4xl mx-auto mb-4" /> */}
            <h3 className="text-xl font-semibold mb-3 text-danger font-title">Smart Contract Expertise</h3>
            <p className="text-textMuted font-body">
              Writing secure, efficient, and upgradeable smart contracts requires deep blockchain knowledge and rigorous testing to prevent costly vulnerabilities.
            </p>
          </div>

          {/* Hurdle 2: Full-Stack Development */}
          <div className="bg-background p-6 rounded-lg shadow-lg text-center">
            {/* Icon Placeholder: <FaCodeBranch className="text-danger text-4xl mx-auto mb-4" /> */}
            <h3 className="text-xl font-semibold mb-3 text-danger font-title">Full-Stack Web Development</h3>
            <p className="text-textMuted font-body">
              Building an intuitive user interface, managing user data, interacting with wallets, and connecting to the blockchain requires significant web development effort (frontend & backend).
            </p>
          </div>

          {/* Hurdle 3: Security & Maintenance */}
          <div className="bg-background p-6 rounded-lg shadow-lg text-center">
            {/* Icon Placeholder: <FaShieldAlt className="text-danger text-4xl mx-auto mb-4" /> */}
            <h3 className="text-xl font-semibold mb-3 text-danger font-title">Ongoing Security & Maintenance</h3>
            <p className="text-textMuted font-body">
              Ensuring platform security against evolving threats, managing infrastructure, and keeping up with blockchain updates is a continuous, resource-intensive task.
            </p>
          </div>
        </div>
        <p className="text-center text-highlight mt-12 text-lg font-semibold font-body">
          Development costs can easily run into tens of thousands, taking months to launch.
        </p>
      </div>
    </section>
  );
};

export default HurdleSection;
