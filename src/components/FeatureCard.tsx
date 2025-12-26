import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-card glass-shine rounded-[2rem] p-8 lg:p-10 flex flex-col items-center text-center group border-white/5 bg-white/[0.02]"
    >
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-[1.5rem] bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(var(--primary),0.4)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          <Icon className="w-10 h-10 text-primary-foreground stroke-[2.5]" />
        </div>
      </div>

      <h3 className="font-heading text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
