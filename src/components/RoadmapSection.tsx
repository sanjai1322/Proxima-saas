import { Check, Clock, Rocket } from "lucide-react";

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
      return "bg-primary/20 text-primary border-primary/50";
    case "current":
      return "bg-primary text-primary-foreground border-primary animate-pulse";
    default:
      return "bg-secondary text-muted-foreground border-border";
  }
};

export const RoadmapSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            Roadmap
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Journey to
            <br />
            <span className="text-gradient">Decentralization</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow our progress as we build the future of Web3 infrastructure
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Roadmap Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {roadmapItems.map((item, index) => (
              <div
                key={item.phase}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Node - Desktop */}
                <div className="hidden lg:flex justify-center mb-6">
                  <div
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${getStatusStyles(
                      item.status
                    )}`}
                  >
                    {getStatusIcon(item.status)}
                  </div>
                </div>

                {/* Card */}
                <div className="gradient-border rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300 group">
                  {/* Mobile Timeline Node */}
                  <div className="flex lg:hidden items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${getStatusStyles(
                        item.status
                      )}`}
                    >
                      {getStatusIcon(item.status)}
                    </div>
                    <div>
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">
                        {item.phase}
                      </span>
                      <p className="text-sm text-muted-foreground">{item.quarter}</p>
                    </div>
                  </div>

                  {/* Desktop Phase & Quarter */}
                  <div className="hidden lg:block mb-4">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {item.phase}
                    </span>
                    <p className="text-sm text-muted-foreground">{item.quarter}</p>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-2">
                    {item.items.map((listItem) => (
                      <li
                        key={listItem}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 flex-shrink-0" />
                        {listItem}
                      </li>
                    ))}
                  </ul>

                  {/* Status Badge */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                        item.status === "completed"
                          ? "bg-primary/10 text-primary"
                          : item.status === "current"
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {item.status === "completed" && "Completed"}
                      {item.status === "current" && "In Progress"}
                      {item.status === "upcoming" && "Upcoming"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
