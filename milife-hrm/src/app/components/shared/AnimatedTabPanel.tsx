"use client";

import { motion } from "framer-motion";

type AnimatedTabPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedTabPanel({
  children,
  className,
}: AnimatedTabPanelProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.22,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
