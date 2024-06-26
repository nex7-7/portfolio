"use client";

import { useState } from "react";

// components
import { ProjectCard } from "./ProjectCard";
import { ProjectText } from "./ProjectText";

import { motion } from "framer-motion";

export const Projects = () => {
  const [active, setActive] = useState(1);

  const textItems = [
    {
      id: 1,
      text: "DRONE",
      description:
        "A Drone with a self coded Flight Controller, based on the Arduino Microcontroller Platform",
      img: null,
      vid: null,
      buttons: [
        { name: "GitHub", link: null },
        { name: "View", link: null },
      ],
    },
    {
      id: 2,
      text: "NMIMS PORTAL",
      description:
        "A Full Stack Website using Firebase for backend and Firestore for Authentication",
      img: "/images/nmimsProj.jpg",
      vid: null,
      buttons: [
        {
          name: "GitHub",
          link: "https://github.com/PrabirKalwani/NMIMS-Student-Portal",
        },
        { name: "View", link: "https://portal.prabir.in/" },
      ],
    },
    {
      id: 3,
      text: "TIC-TAC-TOE",
      description:
        "A Simple game of tic-tac-toe implemented using Vanilla JS, CSS, HTML",
      img: "/images/ticTacToe.png",
      vid: null,
      buttons: [
        { name: "GitHub", link: "https://github.com/nex7-7/Tic-Tac-Toe-Game" },
        { name: "View", link: "https://nex7-7.github.io/Tic-Tac-Toe-Game/" },
      ],
    },
    {
      id: 4,
      text: "PARTICLE DETECTOR",
      description: "An actively cooled cloud chamber which detects particles",
      img: null,
      vid: null,
      buttons: [{ name: "View", link: null }],
    },
  ];

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
