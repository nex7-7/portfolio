import { Reveal } from "@/components/animations/Reveal";
import { project } from "@/app/data";
import { ProjectTemplate } from "@/components/ProjectTemplate";
import { Navbar } from "@/components/Navbar";

export default function RustFinder() {
  const [selectedProject] = project.filter(
    (project) => project.text === "Rust Finder"
  );
  return (
    <main className="h-svh flex flex-col justify-start align-top">
      <Navbar />
      <ProjectTemplate selectedProject={selectedProject}/>
    </main>
  );
}
