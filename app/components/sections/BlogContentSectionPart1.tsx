import React from 'react';
import Image from 'next/image';

const BlogContentSectionPart1 = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary font-title">
          Understanding the Engine: Smart Contracts & Token Actions
        </h2>

        <article className="text-textLight font-body space-y-6 max-w-3xl mx-auto">

          <h3 className="text-2xl text-primary font-title font-semibold pt-4">
            What Exactly is a Smart Contract?
          </h3>
          <p className="text-textMuted leading-relaxed">
            Think of a smart contract like a digital vending machine operating on the blockchain. It's a piece of code that automatically executes actions based on pre-defined rules when certain conditions are met. Once deployed on a blockchain (like Ethereum, Polygon, or Binance Smart Chain), it's transparent, immutable (can't be easily changed), and operates without needing a middleman.
          </p>
          <p className="text-textMuted leading-relaxed">
            For tokens, smart contracts define the rules: the token's name, symbol, total supply, and crucially, how tokens can be created, destroyed, and transferred.
          </p>

          <figure className="my-8">
            <div className="bg-surface p-1 rounded-lg overflow-hidden max-w-[500px] mx-auto">
              <Image 
                src="/images/contract-interface.jpg" 
                alt="ERC20 Token Contract Interface Diagram" 
                width={500} 
                height={250} 
                className="mx-auto rounded w-full h-auto"
              />
            </div>
            <figcaption className="text-textMuted text-center mt-2 text-sm">
              A typical ERC20 token contract interface showing how owners, controllers, and users interact with the smart contract functions.
            </figcaption>
          </figure>

          <h3 className="text-2xl text-primary font-title font-semibold pt-4">
            Key Token Actions Explained
          </h3>
          <ul className="list-disc space-y-4 pl-5 text-textMuted leading-relaxed">
            <li>
              <strong className="text-textLight font-medium block mb-1">Deployment:</strong>
              This is the act of publishing the smart contract onto the blockchain. It's like launching the vending machine – making it live and operational. Once deployed, the contract gets a unique address.
            </li>
            <li>
              <strong className="text-textLight font-medium block mb-1">Minting:</strong>
              This is the process of creating new tokens according to the rules defined in the smart contract. Think of it as stocking the vending machine with new items (tokens). This might happen all at once during deployment or gradually over time based on specific triggers.
            </li>
            <li>
              <strong className="text-textLight font-medium block mb-1">Burning:</strong>
              The opposite of minting – permanently removing tokens from circulation. This is like the vending machine having a function to destroy items, often used to reduce supply and potentially increase the value of remaining tokens.
            </li>
            <li>
              <strong className="text-textLight font-medium block mb-1">Transferring:</strong>
              Moving tokens from one digital wallet address to another. This is the core function – like a customer buying an item from the vending machine, which then moves from the machine's inventory to the customer's possession.
            </li>
          </ul>

          <p className="text-textLight leading-relaxed pt-4">
            Understanding these core mechanics is the first step towards seeing how you can leverage this technology. The ability to control the deployment and minting process is where the revenue opportunity begins to take shape...
          </p>

        </article>
      </div>
    </section>
  );
};

export default BlogContentSectionPart1; 