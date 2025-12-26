import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { value: 80, suffix: "K+", label: "Active Wallets" },
  { value: 150, suffix: "+", label: "Partner Integrations" },
  { prefix: "$", value: 25, suffix: "M+", label: "Transactions Processed" },
];

export const StatsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="gradient-border rounded-2xl px-8 py-6 min-w-[180px] text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-1">
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2000}
                />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
