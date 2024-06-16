"use client";

import Link from "next/link";
import { scrollToSection } from "@/app/functions";

// components
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center h-24 px-10">
      <div>
        <p className="text-4xl font-serif">Snehil Sinha</p>
      </div>

      <div className="flex flex-row justify-between items-center gap-10">
        <div className="flex flex-row justify-between items-center gap-14">
          <Button variant="link" onClick={() => scrollToSection("#About")}>
            <p className="text-xl font-light">About</p>
          </Button>
          <Button variant="link" onClick={() => scrollToSection("#Projects")}>
            <p className="text-xl font-light">Projects</p>
          </Button>
          <Button variant="link" onClick={() => scrollToSection("#Contact")}>
            <p className="text-xl font-light">Contact</p>
          </Button>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};
