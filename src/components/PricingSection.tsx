import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
    <section id="pricing" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transparent & Developer
            <br />
            <span className="text-gradient">Friendly Pricing</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`gradient-border rounded-2xl p-6 lg:p-8 flex flex-col animate-fade-in ${
                plan.featured ? "border-primary/50 glow-box" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Plan Header */}
              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-wider text-primary font-medium">
                  {plan.name}
                </span>
                <div className="font-heading text-3xl font-bold text-foreground mt-2">
                  {plan.price}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.featured ? "hero" : "outline"}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
