import { FeatureCard } from "./FeatureCard";
import { Link2, Zap, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">Proxima?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the future of decentralized finance with our cutting-edge infrastructure.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
