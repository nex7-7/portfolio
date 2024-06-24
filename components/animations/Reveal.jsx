"use client";

import { motion } from "framer-motion";

export const Reveal = ({ text, className, offset }) => {
  // const inputText = text;
  // console.log(inputText);
  return (
    <div className="flex flex-row flex-wrap">
      {text.split(" ").map((t, index) => (
        <div className="overflow-y-hidden" key={index}>
          <motion.div
            className={className}
            variants={{
              hidden: { opacity: 0, y: "var(--offset-val)" },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t}
            <span>&nbsp;</span>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
