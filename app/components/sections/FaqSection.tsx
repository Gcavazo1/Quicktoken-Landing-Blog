"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// FAQ items data
const faqItems = [
  {
    question: "What exactly do I get when I purchase?",
    answer: "You receive the complete source code for the QuickToken Dashboard, including the frontend UI, smart contracts, and configuration files. All documentation and deployment instructions are included to help you set up your own token deployment platform."
  },
  {
    question: "Do I need technical expertise to set this up?",
    answer: "Some technical knowledge is helpful but not advanced blockchain expertise. If you're familiar with deploying a Next.js application and have basic understanding of web3, you should be able to follow our detailed setup guides. We also offer support to help with any difficulties."
  },
  {
    question: "Can I customize the branding and UI?",
    answer: "Absolutely! The codebase is fully customizable. You can change colors, logos, text, and even the entire layout to match your brand identity. Our premium showcase demonstrates what's possible with custom branding."
  },
  {
    question: "What blockchains are supported?",
    answer: "The platform supports Ethereum and any EVM-compatible blockchain like Polygon, Binance Smart Chain, Avalanche, and others. You can configure which networks your deployment platform will support."
  },
  {
    question: "How do I implement the fee collection?",
    answer: "The platform includes built-in mechanisms for both access fees and per-mint fees. The admin dashboard lets you configure fee percentages or fixed amounts, and the documentation explains how to set up payment collection methods."
  },
  {
    question: "Is the code audited for security?",
    answer: "The smart contracts are built on well-tested OpenZeppelin standards, which are the industry standard for secure token implementations. While we emphasize security best practices, we recommend an independent audit of your final implementation before handling significant value."
  },
];

const FaqSection = () => {
  // Track which FAQ items are expanded
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  // Toggle expansion of an FAQ item
  const toggleExpand = (index: number) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter(i => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
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
                <div className="px-6 py-4 bg-background text-textMuted">
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
