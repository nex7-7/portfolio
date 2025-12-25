import { Reveal } from "./animations/Reveal";
import { CardButton } from "./ui/CardButton";
import Image from "next/image";

export const ProjectTemplate = ({ selectedProject }) => {
  const backgroundBlur =
    " bg-gradient-to-r from-[rgba(255,255,255,0.5)] via-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.3)] dark:from-[rgba(0,0,0,0.9)] dark:via-[rgba(0,0,0,0.7)] dark:to-[rgba(0,0,0,0.6)] backdrop-blur-sm dark:backdrop-blur-xl bg-transparent";
  const customAspectRatio = `${selectedProject.imgWidth}/${selectedProject.imgHeight}`;

  return (
    <div className="mt-[6rem] 2xl:mt-[12vh] sm:px-10 sm:py-6 md:px-10 md:py-6 px-16 py-10 w-full h-[calc(100%-6rem)]">
      <div className="flex flex-row sm:flex-col md:flex-col justify-between gap-5 h-full">
        <div className="w-1/3 sm:w-full md:w-full flex flex-col justify-center gap-2">
          <Reveal
            text={selectedProject.text}
            className="title sm:text-5xl md:text-5xl text-7xl 2xl:text-[5rem] 2xl:leading-none [--offset-val:4rem] sm:[--offset-val:2.5rem] md:[--offset-val:2.5rem] font-serif"
          ></Reveal>
          <span className="text-xl font-semibold text-muted-foreground">
            {selectedProject.description}
          </span>
          <div className={"text-2xl"}>
            {selectedProject.buttons[0]["name"] == "GitHub" && (
              <CardButton
                name={selectedProject.buttons[0].name}
                link={selectedProject.buttons[0].link}
                className={"border-accent-foreground"}
              ></CardButton>
            )}
          </div>
        </div>
        <div
          className={`flex flex-row justify-center items-center max-w-[60%] sm:max-w-full md:max-w-full`}
          style={{ aspectRatio: customAspectRatio }}
        >
          <div className="shadow-md dark:shadow-test">
            {selectedProject.img !== null && (
              <Image
                src={selectedProject.img}
                height={selectedProject.imgHeight}
                width={selectedProject.imgWidth}
                alt={`${selectedProject.text} Image`}
                className={`object-contain`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
