"use client";

import * as React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

// components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

// functions
import { scrollToSection } from "@/app/functions";

export const Navbar = () => {
  const buttons = [
    {
      id: "#About",
      name: "About",
    },
    {
      id: "#Projects",
      name: "Projects",
    },
    {
      id: "#Contact",
      name: "Contact",
    },
  ];

  return (
    <nav className="flex flex-row justify-between items-center h-24 px-10 sm:px-6 md:px-6">
      <div>
        <p className="text-3xl font-serif">
          <span>Snehil</span> <span className="sm:hidden">Sinha</span>
        </p>
      </div>

      <div className="flex flex-row justify-between items-center gap-10 sm:gap-4 md:gap-4">
        <div className="sm:hidden md:hidden flex flex-row justify-between items-center gap-14">
          {buttons.map((button) => (
            <Button
              variant="link"
              key={button.id}
              onClick={() => scrollToSection(button.id)}
            >
              <p className="text-xl font-light">{button.name}</p>
            </Button>
          ))}
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};
