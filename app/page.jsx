//components
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Navbar } from "../components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col justify-start align-top">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
