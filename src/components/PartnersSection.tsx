const partners = [
  { name: "FTX", logo: "FTX" },
  { name: "Binance", logo: "BINANCE" },
  { name: "Litecoin", logo: "LITECOIN" },
];

export const PartnersSection = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-background/50">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h3 className="text-xl md:text-2xl font-heading font-black text-primary uppercase tracking-[0.2em] mb-16">
          Backed by <span className="text-foreground">Builders & Innovators</span>
        </h3>

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group flex items-center gap-3 transition-all duration-300 hover:opacity-100 hover:scale-110"
            >
              <div className="w-2 h-2 rotate-45 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
              <span className="font-heading font-black text-2xl lg:text-3xl tracking-tighter text-foreground group-hover:text-primary transition-colors">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
