import { Wallet, Image, ArrowLeftRight, Code } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="use-cases" className="py-24 lg:py-40 relative overflow-hidden bg-background">
      {/* Intense Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
            Powering the Future of
            <br />
            <span className="text-gradient">Web3 Applications</span>
          </h2>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                <useCase.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-heading font-black text-xl text-foreground mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
