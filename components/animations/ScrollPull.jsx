"use client";

import { motion } from "framer-motion";

export const ScrollPull = ({ children }) => {
  return (
    <motion.div
      variants={{ initial: { y: 100 }, inView: { y: 0 } }}
      initial="initial"
      whileInView="inView"
      transition={{ type: "spring", duration: 0.5, delay: 0, ease: "backOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
