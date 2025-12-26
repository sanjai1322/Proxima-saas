import { useEffect, useState } from "react";

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
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Label */}
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              Our Mission
            </span>
          </div>

          {/* Mission Statement */}
          <p className="text-center text-lg lg:text-xl text-muted-foreground leading-relaxed mb-12">
            Proxima was founded to push the limits of blockchain technology. We believe in open, decentralized, 
            and borderless systems that empower the next billion users.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 lg:gap-6">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Mins" },
              { value: timeLeft.seconds, label: "Secs" },
            ].map((item) => (
              <div
                key={item.label}
                className="gradient-border rounded-xl px-4 py-3 lg:px-6 lg:py-4 min-w-[70px] lg:min-w-[80px] text-center"
              >
                <div className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
