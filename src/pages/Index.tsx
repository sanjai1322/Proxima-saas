import { ScrollProgress } from "@/components/ScrollProgress";
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
import { SectionWrapper } from "@/components/SectionWrapper";
import { SmoothScroll } from "@/components/SmoothScroll";

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
      <SmoothScroll>
        <div className="min-h-screen bg-background">
          <ScrollProgress />
          <Navbar />
          <main className="scroll-smooth">
            <section id="home">
              <HeroSection />
            </section>

            <SectionWrapper>
              <PartnersSection />
            </SectionWrapper>

            <SectionWrapper>
              <section id="features">
                <FeaturesSection />
              </section>
            </SectionWrapper>

            <SectionWrapper>
              <section id="use-cases">
                <UseCasesSection />
              </section>
            </SectionWrapper>

            <SectionWrapper>
              <section id="mission">
                <MissionSection />
              </section>
            </SectionWrapper>

            <SectionWrapper>
              <StatsSection />
            </SectionWrapper>

            <SectionWrapper>
              <section id="roadmap">
                <RoadmapSection />
              </section>
            </SectionWrapper>

            <SectionWrapper>
              <section id="pricing">
                <PricingSection />
              </section>
            </SectionWrapper>

            <SectionWrapper>
              <CTASection />
            </SectionWrapper>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
};

export default Index;
