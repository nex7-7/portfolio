import { Reveal } from "@/components/animations/Reveal";
import { project } from "@/app/data";
import { ProjectTemplate } from "@/components/ProjectTemplate";
import { Navbar } from "@/components/Navbar";
import { ParticleDetectorDiagram } from "@/components/ParticleDetectorDiagram"

export default function ParticleDetector() {
  const [selectedProject] = project.filter(
    (project) => project.text === "Particle Detector"
  );
  const backgroundBlur =
    " bg-gradient-to-r from-[rgba(255,255,255,0.5)] via-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.3)] dark:from-[rgba(0,0,0,0.9)] dark:via-[rgba(0,0,0,0.7)] dark:to-[rgba(0,0,0,0.6)] backdrop-blur-sm dark:backdrop-blur-xl bg-transparent";
  const customAspectRatio = `${selectedProject.imgWidth}/${selectedProject.imgHeight}`;
  return (
    <main className="flex flex-col justify-start align-top">
      <section className="h-svh">
        <Navbar />
        <ProjectTemplate selectedProject={selectedProject}/>
      </section>
      <ParticleDetectorDiagram />
    </main>
  );
}