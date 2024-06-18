"use client";

import toast from "react-hot-toast";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export const CardButton = ({ name, link }) => {
  const projectShow = (link) => {
    if (link) {
      window.open(link);
    } else {
      toast("Coming Soon!", {
        style: {
          background: "hsl(var(--background))",
          color: "hsl(var(--primary))",
          border: "2px solid hsl(var(--border))",
        },
      });
    }
  };
  return (
    <div className="flex flex-row justify-end">
      <div
        className="buttonProj flex flex-row gap-2 justify-center items-center border px-3 py-1 cursor-pointer"
        onClick={() => projectShow(link)}
      >
        <span className="text-right text-xl font-light">{name}</span>
        <ArrowTopRightIcon className="h-5 w-5" viewBox="0 -1 15 15" />
      </div>
    </div>
  );
};
