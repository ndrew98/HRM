"use client";

import { motion } from "framer-motion";

type AnimatedListProps = {
  children: React.ReactNode;
};

export function AnimatedList({ children }: AnimatedListProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.06,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
