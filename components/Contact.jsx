"use client";

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  CopyIcon,
} from "@radix-ui/react-icons";

import toast from "react-hot-toast";

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
    <div id="Contact" className="px-16 py-20">
      <div className="flex flex-row justify-around items-center gap-5">
        <a href="https://github.com/nex7-7" target="_blank">
          <div className="flex flex-row gap-3 item-center p-4">
            <GitHubLogoIcon className="h-8 w-8" />
            <p className="text-2xl font-medium">GitHub</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/snehilsinha77/" target="_blank">
          <div className="flex flex-row gap-3 item-center p-4">
            <LinkedInLogoIcon className="h-8 w-8" />
            <p className="text-2xl font-medium">LinkedIn</p>
          </div>
        </a>
        <div
          onClick={() => copyToClipboard("snehil.sinha784@gmail.com")}
          className="cursor-pointer"
        >
          <div className="flex flex-row gap-3 item-center p-4">
            <EnvelopeClosedIcon className="h-8 w-8" />
            <p className="text-2xl font-medium">Email</p>
          </div>
        </div>
        <a href="https://medium.com/@snehil.sinha784" target="_blank">
          <div className="flex flex-row gap-3 item-center p-4">
            <p className="text-2xl font-medium">Medium</p>
          </div>
        </a>
      </div>
    </div>
  );
};
