"use client";

import { motion } from "framer-motion";

export const Opacity = ({ children }) => {
  return (
    <div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};
