import { Reveal } from "./animations/Reveal";

export const Projects = () => {
  const textItems = [
    {
      id: 1,
      text: "DRONE",
    },
    {
      id: 2,
      text: "NMIMS MPSTME WEBSITE",
    },
    {
      id: 3,
      text: "TIC-TAC-TOE",
    },
    {
      id: 4,
      text: "PARTICLE DETECTOR",
    },
  ];
  return (
    <div
      id="Projects"
      className="projects flex flex-col items-center justify-between sm:justify-around md:justify-around h-svh px-16 py-20 sm:px-10 sm:py-6 md:px-10 md:py-6"
    >
      <p className="title text-5xl font-serif italic">Projects</p>
      <div className="flex flex-col gap-2 sm:gap-6">
        {textItems.map((textItem) => (
          <Reveal
            key={textItem.id}
            className="sm:text-4xl md:text-4xl text-7xl text-primary font-semibold [--offset-val:4rem] sm:[--offset-val:2.5rem] md:[--offset-val:2.5rem]"
            text={textItem.text}
          ></Reveal>
        ))}
      </div>
    </div>
  );
};
