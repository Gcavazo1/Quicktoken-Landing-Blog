"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Updated FAQ items data
const faqItems = [
  {
    question: "What exactly do I get when I purchase?",
    answer: "You receive the complete source code for the QuickToken Dashboard, including the frontend UI (Next.js), smart contracts (Solidity), and configuration files. All documentation, deployment instructions, and a setup wizard are included to help you launch your own token deployment platform."
  },
  {
    question: "Do I need technical expertise to set this up?",
    answer: "Basic technical familiarity is helpful, but advanced blockchain knowledge isn't required. If you can deploy a Next.js app and understand web3 basics, our low-code setup wizard and detailed guides make installation straightforward. Plus, 30 days of technical and setup email support are included."
  },
  {
    question: "Can I customize the branding and UI?",
    answer: "Yes! You get full source code access. This package includes basic customization via the setup wizard (title, theme) and the admin settings page. For deeper changes (colors, logos, layout), you can modify the code directly. Whitelist functionality for tiered user roles (owner/admin/regular) is also implemented."
  },
  {
    question: "Can I request additional branding and personalization?",
    answer: "Absolutely. As shown in the premium showcase linked on this page, the platform can be extensively customized. For bespoke branding, unique features, or a full DApp build, please contact us directly via the developer's business page for a consultation and personalized quote."
  },
  {
    question: "What blockchains are supported?",
    answer: "The platform is designed for Ethereum and EVM-compatible chains (Polygon, BSC, Avalanche, etc.). This version integrates with browser wallets like Coinbase Wallet and MetaMask via standard web3 providers. Note: WalletConnect for broader mobile support is typically part of custom/premium builds."
  },
  {
    question: "How do I implement the fee collection?",
    answer: "Fee collection is configured easily via the setup wizard and the admin dashboard. You can set the platform fee address and the percentage collected on all minting actions for tokens deployed through your platform. The documentation covers setup details."
  },
  {
    question: "Is the code audited for security?",
    answer: "The core smart contracts leverage OpenZeppelin's battle-tested libraries, the industry standard for security. While we follow best practices, we always recommend an independent security audit of your final, deployed implementation, especially before handling significant user funds or transaction volumes."
  },
];

const FaqSection = () => {
  // Track which FAQ items are expanded
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  // Toggle expansion of an FAQ item
  const toggleExpand = (index: number) => {
    setExpandedIndexes(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-secondary font-title">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-textMuted text-center mb-12 max-w-3xl mx-auto">
          Got questions about the QuickToken Dashboard? Find answers to the most common inquiries below.
        </p>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border border-surface rounded-lg overflow-hidden"
            >
              {/* FAQ Question (always visible) */}
              <button 
                className="w-full px-6 py-4 bg-surface flex justify-between items-center hover:bg-opacity-80 transition-colors duration-200"
                onClick={() => toggleExpand(index)}
              >
                <span className="font-semibold text-textLight text-left font-body">
                  {item.question}
                </span>
                {expandedIndexes.includes(index) ? (
                  <FaChevronUp className="text-primary flex-shrink-0 ml-2" />
                ) : (
                  <FaChevronDown className="text-primary flex-shrink-0 ml-2" />
                )}
              </button>
              
              {/* FAQ Answer (conditionally visible) */}
              {expandedIndexes.includes(index) && (
                <div className="px-6 py-4 bg-background text-textMuted font-body">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-textMuted">
            Still have questions? <a href="#" className="text-primary hover:underline">Contact our support team</a> for further assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
