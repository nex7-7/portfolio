"use client";

import toast from "react-hot-toast";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { heightCalc } from "@/app/functions";
import { useEffect } from "react";

export const CardButton = ({ name, link }) => {
  // useEffect(() => {
  //   heightCalc();
  // },[]);

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
    <div
      className="buttonProj flex flex-row gap-2 justify-center items-center border px-3 py-1"
      onClick={() => projectShow(link)}
    >
      <span className="text-right text-md font-light">{name}</span>
      <ArrowTopRightIcon className="h-5 w-5" viewBox="0 -1 15 15" />
    </div>
  );
};
