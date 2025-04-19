import React from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

const DemoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-surface text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
          See It In Action: Live Demo
        </h2>
        <p className="text-lg md:text-xl text-textMuted mb-8 max-w-3xl mx-auto">
          Experience the QuickToken Dashboard firsthand. Our live demo on the Sepolia testnet lets you explore all features without any commitment.
        </p>

        {/* Demo screenshot/mockup - Updated src */}
        <div className="max-w-4xl mx-auto bg-background p-3 rounded-lg shadow-xl mb-12 overflow-hidden">
          <div className="relative aspect-video">
            <Image 
              src="/images/demo-deploy-screenshot.jpg"
              alt="QuickToken Dashboard Live Demo Interface"
              fill
              className="object-contain rounded"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-textLight mb-6 font-medium">
            Deploy tokens, configure mint fees, and test the platform's capabilities in a sandboxed environment.
          </p>
          
          {/* Main CTA button */}
          <a 
            href="https://quicktokendashboarddemo.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-opacity-80 text-background font-bold py-4 px-10 rounded-lg transition duration-300 flex items-center"
          >
            Try Live Demo <FaExternalLinkAlt className="ml-2" />
          </a>

          {/* Branded version link */}
          <p className="mt-8 text-textMuted">
            Looking for inspiration? Check out a <a href="https://quick-token-platform.vercel.app/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">fully branded implementation</a> showcasing what's possible when you customize the QuickToken platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
