import React from 'react';
import TrendDiagram from '../ui/TrendDiagram';
import SalesFunnel from '../ui/SalesFunnel';

const BlogContentSectionPart2 = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary font-title">
          Building Your Business: Revenue, Audience & Marketing
        </h2>

        <article className="text-textLight font-body space-y-6">
            
            <h3 className="text-2xl text-primary font-title font-semibold pt-4">
              Monetization Models (Your Platform's Fees)
            </h3>
            <p className="text-textMuted leading-relaxed">
              Now that you understand the mechanics and have the tool (like QuickToken), how do you actually structure your revenue? Here are common approaches:
            </p>
            <ul className="list-disc space-y-4 pl-5 text-textMuted leading-relaxed">
              <li>
                <strong className="text-textLight font-medium block mb-1">Platform Subscription/Access Fee:</strong>
                Charge users a recurring (monthly/yearly) or one-time fee just to use your platform to deploy tokens. Simple and predictable income.
              </li>
              <li>
                <strong className="text-textLight font-medium block mb-1">One-Time Deployment Fee:</strong>
                Charge a flat fee each time a user deploys a new token contract through your service. Good for project-based users.
              </li>
              <li>
                <strong className="text-textLight font-medium block mb-1">Percentage-Based Minting Fee:</strong>
                Take a small percentage (e.g., 0.5-2%) of the tokens minted through contracts deployed on your platform. This aligns your income with your users' success but requires more complex off-chain tracking or specialized contract logic.
              </li>
               <li>
                <strong className="text-textLight font-medium block mb-1">Fixed Minting Fee:</strong>
                Charge a small, fixed fee (in native currency like ETH/MATIC or stablecoin) per mint transaction. Easier to implement than percentage fees.
              </li>
               <li>
                <strong className="text-textLight font-medium block mb-1">Hybrid Models:</strong>
                Combine approaches, like a basic access fee plus optional premium features or lower deployment fees for subscribers.
              </li>
            </ul>

            <div className="my-12 max-w-2xl mx-auto">
              <TrendDiagram />
            </div>
            <p className="text-textMuted text-center italic text-sm leading-relaxed">
              As shown in the chart above, the token platform market continues to grow, creating significant revenue opportunities for platform owners.
            </p>

            <h3 className="text-2xl text-primary font-title font-semibold pt-4">
              Who is Your Target Audience?
            </h3>
            <p className="text-textMuted leading-relaxed">
              Who would pay to use <em>your</em> token deployment platform? Consider these groups:
            </p>
             <ul className="list-disc space-y-4 pl-5 text-textMuted leading-relaxed">
              <li>
                <strong className="text-textLight font-medium block mb-1">Community Leaders & Creators:</strong>
                Individuals building online communities, DAOs, or fan clubs who want a token for governance, membership, or rewards without coding.
              </li>
              <li>
                <strong className="text-textLight font-medium block mb-1">Small Businesses & Startups:</strong>
                Companies exploring loyalty programs, simple utility tokens, or promotional tokens.
              </li>
               <li>
                <strong className="text-textLight font-medium block mb-1">Event Organizers:</strong>
                Using tokens for ticketing, access control, or in-event activities.
              </li>
              <li>
                <strong className="text-textLight font-medium block mb-1">Educational Projects:</strong>
                Bootcamps or courses teaching blockchain concepts might use your platform for practical exercises.
              </li>
               <li>
                <strong className="text-textLight font-medium block mb-1">NFT Projects (Simple Tokens):</strong>
                While complex NFT platforms are different, some projects might need a basic associated utility token.
              </li>
            </ul>

             <h3 className="text-2xl text-primary font-title font-semibold pt-4">
               Marketing Your Platform
             </h3>
            <p className="text-textMuted leading-relaxed">
              Once built, how do you attract users?
            </p>

            <div className="my-8 max-w-2xl mx-auto">
              <SalesFunnel />
            </div>
            <p className="text-textMuted text-center italic text-sm leading-relaxed mb-6">
              Understanding the customer journey helps you target your marketing efforts at each stage of the funnel.
            </p>
            
             <ul className="list-disc space-y-4 pl-5 text-textMuted leading-relaxed">
              <li>
                <strong className="text-textLight font-medium block mb-1">Content Marketing:</strong>
                Create blog posts, tutorials, and guides (like this one!) about token use cases, targeting keywords your audience searches for.
              </li>
               <li>
                <strong className="text-textLight font-medium block mb-1">Community Engagement:</strong>
                Participate in relevant Discord servers, forums (Reddit), and social media groups (Twitter/X, Farcaster) where potential users hang out. Offer value, don't just shill.
              </li>
               <li>
                <strong className="text-textLight font-medium block mb-1">Partnerships:</strong>
                Collaborate with complementary services (e.g., community platforms, NFT marketplaces with simple token needs).
              </li>
              <li>
                <strong className="text-textLight font-medium block mb-1">Paid Ads:</strong>
                Targeted ads on platforms like Twitter or search engines can work if you have a clear value proposition and budget.
              </li>
               <li>
                <strong className="text-textLight font-medium block mb-1">Offer a Demo/Testnet:</strong>
                Let users try before they buy, reducing friction.
              </li>
            </ul>

            <p className="text-textLight leading-relaxed pt-4">
              Building a successful SaaS platform involves more than just code; it requires understanding your market, providing value, and effectively reaching your audience. QuickToken gives you the technical foundation, allowing you to focus on these crucial business aspects.
            </p>

          </article>
      </div>
    </section>
  );
};

export default BlogContentSectionPart2; 