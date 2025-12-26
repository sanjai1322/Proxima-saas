import { Check, Clock, Rocket } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Foundation",
    quarter: "Q1 2024",
    status: "completed",
    items: [
      "Core protocol development",
      "Security audits completed",
      "Testnet launch",
      "Community building",
    ],
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    quarter: "Q2 2024",
    status: "completed",
    items: [
      "Mainnet beta release",
      "Cross-chain bridge v1",
      "First partner integrations",
      "Governance token launch",
    ],
  },
  {
    phase: "Phase 3",
    title: "Growth",
    quarter: "Q3 2024",
    status: "current",
    items: [
      "Multi-chain support",
      "Developer SDK release",
      "DEX aggregator integration",
      "Mobile wallet support",
    ],
  },
  {
    phase: "Phase 4",
    title: "Maturity",
    quarter: "Q4 2024",
    status: "upcoming",
    items: [
      "Enterprise solutions",
      "Advanced analytics dashboard",
      "DAO governance v2",
      "Global expansion",
    ],
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <Check className="w-5 h-5" />;
    case "current":
      return <Clock className="w-5 h-5" />;
    default:
      return <Rocket className="w-5 h-5" />;
  }
};

const getStatusStyles = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-primary/20 text-primary border-primary/50 shadow-[0_0_10px_rgba(var(--primary),0.3)]";
    case "current":
      return "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(var(--primary),0.5)]";
    default:
      return "bg-secondary/50 text-muted-foreground border-border";
  }
};

export const RoadmapSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 lg:py-36 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -translate-y-1/2 -z-10" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[128px] -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
            Future Roadmap
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Journey to
            <br />
            <span className="text-gradient">Decentralization</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Follow our progress as we build the future of Web3 infrastructure
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-1 bg-white/5 overflow-hidden">
            <motion.div
              className="h-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.8)]"
              style={{ scaleX }}
            />
          </div>

          {/* Roadmap Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Node - Desktop */}
                <div className="hidden lg:flex justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all ${getStatusStyles(
                      item.status
                    )}`}
                  >
                    {getStatusIcon(item.status)}
                  </motion.div>
                </div>

                {/* Card */}
                <div className="glass-card rounded-3xl p-8 h-full group">
                  {/* Mobile Timeline Node */}
                  <div className="flex lg:hidden items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${getStatusStyles(
                        item.status
                      )}`}
                    >
                      {getStatusIcon(item.status)}
                    </div>
                    <div>
                      <span className="text-xs text-primary font-bold uppercase tracking-widest">
                        {item.phase}
                      </span>
                      <p className="text-sm font-medium text-muted-foreground">{item.quarter}</p>
                    </div>
                  </div>

                  {/* Desktop Phase & Quarter */}
                  <div className="hidden lg:block mb-6">
                    <span className="text-xs text-primary font-bold uppercase tracking-widest">
                      {item.phase}
                    </span>
                    <p className="text-sm font-medium text-muted-foreground">{item.quarter}</p>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-foreground mb-5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-3 mb-8">
                    {item.items.map((listItem) => (
                      <li
                        key={listItem}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 flex-shrink-0" />
                        {listItem}
                      </li>
                    ))}
                  </ul>

                  {/* Status Badge */}
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <span
                      className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${item.status === "completed"
                          ? "bg-primary/10 text-primary"
                          : item.status === "current"
                            ? "bg-primary text-primary-foreground animate-pulse"
                            : "bg-white/5 text-muted-foreground"
                        }`}
                    >
                      {item.status === "completed" && "Completed"}
                      {item.status === "current" && "In Progress"}
                      {item.status === "upcoming" && "Upcoming"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
