import { AnimatedCounter } from "./AnimatedCounter";
import { motion } from "framer-motion";

const stats = [
  { value: 80, suffix: "K+", label: "Active Wallets" },
  { value: 150, suffix: "+", label: "Partner Integrations" },
  { prefix: "$", value: 25, suffix: "M+", label: "Transactions Processed" },
];

export const StatsSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-12 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex-1 min-w-[200px] text-center lg:text-left border-l-2 border-white/5 pl-8 hover:border-primary transition-all duration-300"
            >
              <div className="font-heading text-6xl lg:text-7xl font-black text-primary mb-3 tracking-tighter drop-shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2500}
                />
              </div>
              <div className="text-sm font-black text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
