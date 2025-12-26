import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export const SectionWrapper = ({ children, className, delay = 0 }: SectionWrapperProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 1.2,
                delay,
                ease: [0.22, 1, 0.36, 1] // Ease Out Expo
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
