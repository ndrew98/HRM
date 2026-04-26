"use client";

import { motion } from "framer-motion";

type AnimatedListItemProps = {
  children: React.ReactNode;
};

export function AnimatedListItem({ children }: AnimatedListItemProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 10,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.22,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
