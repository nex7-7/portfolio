"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";

export const Cursor = () => {
  const { x, y } = useMousePosition();
  const variants = {
    default: {
      x: x - 4,
      y: y - 4,
    },
  };

  return (
    <>
      <motion.span
        variants={variants}
        animate="default"
        transition={{ type: "smooth", ease: "linear", duration: 0}}
        className="-z-1000 h-2 w-2 bg-primary rounded-full fixed top-0 left-0"
      ></motion.span>
    </>
  );
};
