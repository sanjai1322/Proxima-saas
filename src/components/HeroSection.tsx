import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      {/* Energy Streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[150%] h-[50%] bg-primary/10 blur-[120px] rotate-[15deg] -z-10"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.2, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-1/4 w-[150%] h-[40%] bg-primary/5 blur-[100px] -rotate-[10deg] -z-10"
        />

        {/* Animated Accent Streaks */}
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <motion.path
            d="M -100 200 Q 400 100 1200 400"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M -100 600 Q 600 500 1200 700"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(var(--primary),0.2)]">
              Revolutionizing Web3
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-foreground mb-8 tracking-tight"
          >
            Next-Gen Protocols for a
            <br />
            <span className="text-gradient drop-shadow-[0_0_30px_rgba(var(--primary),0.3)]">Decentralized Tomorrow</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Proxima connects blockchain networks and enables ultra-fast DeFi transactions through secure, scalable Web3 architecture.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              variant="hero"
              size="xl"
              className="min-w-[200px] h-14 text-base tracking-widest uppercase rounded-full glass-shine relative overflow-hidden"
              asChild
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Get Started
              </motion.button>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="min-w-[200px] h-14 text-base tracking-widest uppercase bg-white/5 border-white/10 hover:border-primary/50 rounded-full relative overflow-hidden group"
              asChild
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Explore Docs
              </motion.button>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
