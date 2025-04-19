import Hero from "@/app/components/sections/Hero";
import IntroductionSection from "@/app/components/sections/IntroductionSection";
import OpportunitySection from "@/app/components/sections/OpportunitySection";
import BlogContentSectionPart1 from "@/app/components/sections/BlogContentSectionPart1";
import HurdleSection from "@/app/components/sections/HurdleSection";
import SolutionSection from "@/app/components/sections/SolutionSection";
import BlogContentSectionPart2 from "@/app/components/sections/BlogContentSectionPart2";
import FeaturesSection from "@/app/components/sections/FeaturesSection";
import DemoSection from "@/app/components/sections/DemoSection";
import ShowcaseSection from "@/app/components/sections/ShowcaseSection";
import PricingSection from "@/app/components/sections/PricingSection";
import FaqSection from "@/app/components/sections/FaqSection"; // Import FAQ Section

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Add an offset to all sections to account for the fixed header */}
      <div className="h-16"></div>
      <Hero />
      <IntroductionSection />
      <OpportunitySection />
      <BlogContentSectionPart1 />
      <HurdleSection />
      <SolutionSection />
      <BlogContentSectionPart2 />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="demo">
        <DemoSection />
      </div>
      <div id="showcase">
        <ShowcaseSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="faq">
        <FaqSection />
      </div>
    </main>
  );
}