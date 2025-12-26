import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="py-24 lg:py-48 relative overflow-hidden bg-background">
      {/* Intense Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Glowing Sphere Visualization */}
          <div className="relative mb-20">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: 360,
              }}
              transition={{
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
              className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-tr from-primary/40 to-primary shadow-[0_0_100px_rgba(var(--primary),0.4)] relative"
            >
              {/* Internal Sphere Details */}
              <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-white/10" />
              <div className="absolute inset-[45%] bg-white rounded-full blur-[2px]" />
            </motion.div>

            {/* Outer Glows */}
            <div className="absolute -inset-10 bg-primary/20 blur-[60px] rounded-full -z-10" />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-8 tracking-tighter uppercase">
              Be Part of the
              <br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(var(--primary),0.4)]">Proxima Network</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Start building the future of decentralized finance with Proxima's open-source Web3 infrastructure.
            </p>
            <Button
              variant="hero"
              size="xl"
              className="min-w-[240px] h-16 text-lg font-black tracking-[0.2em] uppercase rounded-full glass-shine relative overflow-hidden"
              asChild
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                JOIN THE BETA
              </motion.button>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
