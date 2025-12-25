"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

// components
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

// functions
import { scrollToSection } from "@/app/functions";

export const Navbar = () => {
  const [page, setPage] = React.useState("home");
  const router = useRouter();
  const path = usePathname();

  React.useEffect(() => {
    if (path === "/") {
      setPage("home");
    } else {
      setPage("project");
    }
  }, []);

  const buttons = {
    home: [
      {
        id: "#About",
        name: "About",
        link: null,
      },
      {
        id: "#Projects",
        name: "Projects",
        link: null,
      },
      {
        id: "#Contact",
        name: "Contact",
        link: null,
      },
    ],
    project: [{ id: null, name: "Home", link: "/" }],
  };

  // console.log(page);

  function handleNav(id = null, link = null) {
    if (page === "home") {
      console.log(id)
      scrollToSection(id);
    } else {
      if (link) {
        router.push(link);
      }
    }
  }

  // TODO: Add this to nav className:
  // bg-linear-to-br from-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,0.3)] dark:from-[rgba(255,255,255,0.2)] dark:to-[rgba(0,0,0,0.3)] backdrop-blur-xs dark:backdrop-blur-xl bg-transparent

  return (
    <nav className="absolute top-0 left-0 z-10 flex flex-row justify-between items-center h-24 2xl:h-[12vh] w-full px-10 sm:px-6 md:px-6">
      <div>
        <p className="text-3xl 2xl:text-5xl  font-serif">
          <span>Snehil</span> <span className="sm:hidden">Sinha</span>
        </p>
      </div>

      <div className="flex flex-row justify-between items-center gap-10 sm:gap-4 md:gap-4">
        <div className="sm:hidden md:hidden flex flex-row justify-between items-center gap-14">
          {buttons[page].map((button) => (
            <Button
              variant="link"
              key={button.id}
              onClick={() => handleNav(button.id, button.link)}
            >
              <p className="text-xl 2xl:text-2xl font-light">{button.name}</p>
            </Button>
          ))}
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};
