"use client";

import { useState } from "react";

// components
import { ProjectCard } from "./ProjectCard";
import { ProjectText } from "./ProjectText";

import { motion } from "framer-motion";
import {project} from "@/app/data";

export const Projects = () => {
  const [active, setActive] = useState(1);

  const textItems = project

  return (
    <div
      id="Projects"
      className="projects flex flex-col items-center h-svh px-4 py-4"
    >
      <div className="h-1/6 flex justify-center items-center">
        <p className="title text-5xl  font-serif italic">Projects</p>
      </div>
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 h-5/6 w-full"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ProjectText
          textItems={textItems}
          active={active}
          setActive={setActive}
        />
        <ProjectCard
          textItems={textItems}
          active={active}
          setActive={setActive}
        />
      </motion.div>
    </div>
  );
};
