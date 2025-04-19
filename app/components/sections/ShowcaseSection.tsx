import React from 'react';
import { FaRocket, FaPalette, FaBolt, FaMobileAlt } from 'react-icons/fa';

const ShowcaseSection = () => {
  // Premium features to showcase
  const premiumFeatures = [
    {
      title: "Custom Branding",
      description: "Apply your brand colors, logos, and design elements to create a unique platform identity.",
      icon: FaPalette,
    },
    {
      title: "Optimized User Experience",
      description: "A polished interface with intuitive navigation designed to convert visitors to users.",
      icon: FaMobileAlt,
    },
    {
      title: "Marketing Pages",
      description: "Dedicated landing pages for different features and use cases to better capture leads.",
      icon: FaRocket,
    },
    {
      title: "Performance Optimized",
      description: "Fast loading, responsive design, and smooth interactions across all devices.",
      icon: FaBolt,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary font-title">
          Premium Implementation Showcase
        </h2>
        <p className="text-lg md:text-xl text-textMuted text-center mb-12 max-w-3xl mx-auto font-body">
          See what's possible when you take QuickToken to the next level with professional design and branding.
        </p>

        {/* Premium Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {premiumFeatures.map((feature, index) => (
            <div key={index} className="bg-surface p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <feature.icon className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-textLight font-title">
                {feature.title}
              </h3>
              <p className="text-textMuted font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visit Showcase CTA */}
        <div className="text-center">
          <p className="text-textLight mb-6 max-w-2xl mx-auto font-body">
            Our fully branded example showcases how the QuickToken codebase can be transformed into a professional platform complete with marketing pages and conversion-optimized design.
          </p>
          
          <a 
            href="https://quick-token-platform.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-secondary hover:bg-opacity-80 text-background font-bold py-3 px-8 rounded-lg transition duration-300 font-body"
          >
            Visit Showcase Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
