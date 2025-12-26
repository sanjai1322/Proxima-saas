const partners = [
  { name: "Binance", logo: "BINANCE" },
  { name: "Ethereum", logo: "ETHEREUM" },
  { name: "Polygon", logo: "POLYGON" },
  { name: "Arbitrum", logo: "ARBITRUM" },
];

export const PartnersSection = () => {
  return (
    <section className="py-16 lg:py-20 border-t border-b border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            Backed by <span className="text-primary font-medium">Builders & Innovators</span>
          </p>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <div className="w-4 h-4 bg-primary/50 rounded" />
              </div>
              <span className="font-heading font-semibold text-sm tracking-wider">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
