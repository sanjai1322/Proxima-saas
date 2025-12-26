import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const MissionSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 11,
    minutes: 1,
    seconds: 2,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-40 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-black text-primary uppercase tracking-widest mb-8">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 font-medium">
                Proxima was founded to push the limits of blockchain technology. We believe in open, decentralized,
                and borderless systems that empower the next billion users.
              </p>

              {/* Countdown Timer */}
              <div className="flex flex-wrap gap-4 lg:gap-6">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Mins" },
                  { value: timeLeft.seconds, label: "Secs" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass border border-white/5 rounded-2xl px-6 py-5 lg:px-8 lg:py-6 min-w-[100px] text-center shadow-lg group hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="font-heading text-3xl lg:text-4xl font-black text-foreground mb-1 group-hover:text-primary transition-colors">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Side Image */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/20 blur-[60px] rounded-full animate-pulse" />
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1000"
                alt="Visionary Technology"
                className="w-full max-w-[500px] mx-auto rounded-[3rem] shadow-2xl border border-white/10 grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
