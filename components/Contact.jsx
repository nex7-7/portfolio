"use client";

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  CopyIcon,
} from "@radix-ui/react-icons";

import toast from "react-hot-toast";

//animations
import { Opacity } from "./animations/Opacity";

export const Contact = () => {
  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
    toast("Copied to Clipboard", {
      style: {
        background: "hsl(var(--background))",
        color: "hsl(var(--primary))",
        border: "2px solid hsl(var(--border))",
      },

      icon: <CopyIcon />,
    });
  };

  return (
    <div id="Contact" className="px-10 py-20 sm:px-10 sm:py-10 md:px-10 md:py-10">
      <Opacity>
        <div className="flex h-20 sm:h-44 md:h-44 flex-row sm:grid md:grid grid-cols-2 grid-rows-2 justify-around items-center gap-5 border rounded-full sm:rounded-3xl md:rounded-3xl border-gray-600 dark:border-gray-300 text-gray-600 dark:text-gray-300">
          <a href="https://github.com/nex7-7" target="_blank">
            <div className="flex flex-row gap-3 items-center justify-center ">
              <GitHubLogoIcon className="h-8 w-8" />
              <p className="text-xl font-light">GitHub</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/snehilsinha77/" target="_blank">
            <div className="flex flex-row gap-3 items-center justify-center ">
              <LinkedInLogoIcon className="h-8 w-8" />
              <p className="text-xl font-light">LinkedIn</p>
            </div>
          </a>
          <div
            onClick={() => copyToClipboard("snehil.sinha784@gmail.com")}
            className="cursor-pointer"
          >
            <div className="flex flex-row gap-3 items-center justify-center ">
              <EnvelopeClosedIcon className="h-8 w-8" />
              <p className="text-xl font-light">Email</p>
            </div>
          </div>
          <a href="https://medium.com/@snehil.sinha784" target="_blank">
            <div className="flex flex-row gap-3 items-center justify-center ">
              <p className="text-xl font-light">Medium</p>
            </div>
          </a>
        </div>
      </Opacity>
    </div>
  );
};
