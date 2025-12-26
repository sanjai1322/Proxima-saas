import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Access to APIs and testnet.",
    features: ["API Access", "Testnet Support", "Community Discord"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$49/mo",
    description: "For startups building scalable dApps.",
    features: ["Everything in Starter", "Priority Support", "Analytics Dashboard", "Custom Endpoints"],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored blockchain infrastructure.",
    features: ["Everything in Pro", "Dedicated Support", "SLA Guarantee", "Custom Solutions"],
    cta: "Get Started",
    featured: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[128px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Transparent & Developer
            <br />
            <span className="text-gradient">Friendly Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Choose the perfect plan for your project's scale and ambition.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`rounded-[2.5rem] p-8 lg:p-12 flex flex-col relative transition-all duration-500 ${plan.featured
                ? "bg-primary text-primary-foreground shadow-[0_0_50px_rgba(var(--primary),0.3)] z-10 scale-105"
                : "glass-card border-white/5 bg-white/[0.02] text-foreground"
                }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-xl">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-10">
                <span className={`text-xs uppercase tracking-widest font-black ${plan.featured ? "text-primary-foreground/80" : "text-primary"}`}>
                  {plan.name}
                </span>
                <div className="font-heading text-5xl lg:text-6xl font-bold mt-4 tracking-tighter">
                  {plan.price}
                </div>
                <p className={`text-sm mt-4 leading-relaxed font-medium ${plan.featured ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-5 mb-12">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4 text-sm font-medium">
                    <Check className={`w-6 h-6 flex-shrink-0 mt-0.5 ${plan.featured ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={plan.featured ? "text-primary-foreground" : "text-muted-foreground"}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.featured ? "default" : "outline"}
                className={`w-full h-14 text-sm font-black uppercase tracking-widest rounded-full transition-all duration-300 glass-shine relative overflow-hidden ${plan.featured
                  ? "bg-foreground text-background hover:bg-foreground/90 shadow-2xl"
                  : "bg-white/5 border-white/10 hover:border-primary/50"
                  }`}
                asChild
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
