import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { MissionSection } from "@/components/MissionSection";
import { StatsSection } from "@/components/StatsSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Proxima | Next-Gen Protocols for Decentralized Tomorrow</title>
        <meta 
          name="description" 
          content="Proxima connects blockchain networks and enables ultra-fast DeFi transactions through secure, scalable Web3 architecture." 
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <PartnersSection />
          <FeaturesSection />
          <UseCasesSection />
          <MissionSection />
          <StatsSection />
          <RoadmapSection />
          <PricingSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
