import { Reveal } from "@/components/animations/Reveal";
import { project } from "@/app/data";
import { ProjectTemplate } from "@/components/ProjectTemplate";
import { Navbar } from "@/components/Navbar";

export default function Portal() {
  const [selectedProject] = project.filter(
    (project) => project.text === "NMIMS Portal"
  );
  const backgroundBlur =
    " bg-linear-to-r from-[rgba(255,255,255,0.5)] via-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.3)] dark:from-[rgba(0,0,0,0.9)] dark:via-[rgba(0,0,0,0.7)] dark:to-[rgba(0,0,0,0.6)] backdrop-blur-xs dark:backdrop-blur-xl bg-transparent";
  const customAspectRatio = `${selectedProject.imgWidth}/${selectedProject.imgHeight}`;
  return (
    <main className="h-svh flex flex-col justify-start align-top">
      <Navbar />
      <ProjectTemplate selectedProject={selectedProject}/>
    </main>
  );
}