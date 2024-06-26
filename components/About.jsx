// "use client"

// animations
import { Opacity } from "./animations/Opacity";

export const About = () => {
  return (
    <div
      id="About"
      className="sm:px-10 sm:py-6 md:px-10 md:py-6 px-40 flex flex-col justify-center items-center gap-20 text-justify text-3xl sm:text-2xl md:text-2xl 2xl:text-[2.5rem] 2xl:leading-snug font-light h-svh"
    >
      <p className="title text-5xl 2xl:text-[4rem] font-serif italic">About</p>
      <Opacity>
        <p>
          I&apos;m currently a{" "}
          <span className="text-4xl sm:text-3xl md:text-3xl 2xl:text-5xl font-medium">
            Computer Science
          </span>{" "}
          student with a keen interest in{" "}
          <span className="text-4xl sm:text-3xl md:text-3xl 2xl:text-5xl font-medium">
            web development
          </span>
          . I&apos;m passionate about creating dynamic and user-friendly web
          experiences. Besides coding for the web, I love to{" "}
          <span className="text-4xl  sm:text-3xl md:text-3xl 2xl:text-5xl font-medium">
            tinker with hardware
          </span>
        </p>
      </Opacity>
    </div>
  );
};
