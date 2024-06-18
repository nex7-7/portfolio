//components
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Navbar } from "../components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectView } from "@/components/ProjectView";

export default function Home() {
  const buttons = [
    { name: "GitHub", link: null },
    { name: "View", link: null },
  ];
  return (
    <main className="flex flex-col justify-start align-top">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ProjectView
        title={"drone"}
        description={
          "An Drone with a Self-Coded flight controller. Based on the Arduino Microcontroller"
        }
        buttons={buttons}
      />
      <Contact />
    </main>
  );
}
