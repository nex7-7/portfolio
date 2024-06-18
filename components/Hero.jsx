// "use client"

import { Reveal } from "./animations/Reveal";

export const Hero = () => {
  const textItems = [
    {
      id: 1,
      text: "COMPUTER SCIENCE STUDENT",
    },
    {
      id: 2,
      text: "WEB DEVELOPER",
    },
    {
      id: 3,
      text: "TINKERER",
    },
  ];

  const getHeight = (id) => {
    return document.getElementById(id).clientHeight - 5;
  };

  return (
    <div className="sm:px-10 sm:py-6 md:px-10 md:py-6 px-16 py-10 hero flex flex-col justify-start gap-4 sm:gap-8 h-[calc(100svh-6rem)]">
      <span className="sm:text-3xl md:text-3xl text-5xl text-primary font-serif italic">
        I'm a
      </span>
      {textItems.map((textItem) => (
        <Reveal
          key={textItem.id}
          className="sm:text-5xl md:text-5xl text-7xl text-primary font-semibold [--offset-val:4rem] sm:[--offset-val:2.5rem] md:[--offset-val:2.5rem]"
          text={textItem.text}
        ></Reveal>
      ))}
    </div>
  );
};
