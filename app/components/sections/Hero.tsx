import React from 'react';
import Image from 'next/image'; // Import Image component if needed for foreground images

const Hero = () => {
  return (
    <section 
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      // Add the placeholder background image here
      // The user will replace 'hero-background.jpg' with the actual image file
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }} 
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-background opacity-70"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-textLight font-title">
          Unlock Recurring Revenue Streams with Smart Contracts
        </h1>
        <p className="text-lg md:text-xl text-textMuted mb-8 max-w-3xl mx-auto font-body">
          Discover how owning a token deployment platform can create automated income through platform fees, without the complexities of building from scratch.
        </p>
        {/* Placeholder for a Call to Action button */}
        <button className="bg-primary hover:bg-opacity-80 text-background font-bold py-3 px-8 rounded-lg transition duration-300 font-body">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero; 