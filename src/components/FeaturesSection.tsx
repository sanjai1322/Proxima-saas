import { FeatureCard } from "./FeatureCard";
import { Link2, Zap, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Cross-Chain Interoperability",
    description: "Seamless integration between multiple blockchain networks.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Transactions",
    description: "Built for speed with ultra-low latency.",
  },
  {
    icon: Shield,
    title: "Smart Security Layer",
    description: "Encrypted and safeguarded with AI-based protection.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Empowering developers and users worldwide.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">Proxima?</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
