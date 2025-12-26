import { Wallet, Image, ArrowLeftRight, Code } from "lucide-react";

const useCases = [
  {
    icon: Wallet,
    title: "DeFi Platforms",
    description: "Enable instant swaps and yield farming.",
  },
  {
    icon: Image,
    title: "NFT Marketplaces",
    description: "Build scalable token ecosystems.",
  },
  {
    icon: ArrowLeftRight,
    title: "Crypto Exchanges",
    description: "Secure and low-fee trading solutions.",
  },
  {
    icon: Code,
    title: "Developers",
    description: "APIs and SDKs for rapid integration.",
  },
];

export const UseCasesSection = () => {
  return (
    <section className="py-20 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Powering the Future of
            <br />
            <span className="text-gradient">Web3 Applications</span>
          </h2>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="flex flex-col items-center text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center mb-4 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                <useCase.icon className="w-7 h-7 text-primary icon-glow" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
