"use client";

import { useTheme } from "next-themes";

export const Video = () => {
  const { theme } = useTheme();
  // console.log(theme);
  return (
    <video
      src={theme === "light" ? "/heroBgLight.mp4" : "heroBg.mp4"}
      autoPlay
      loop
      muted
      className="h-full w-full object-cover"
      type="video/MP4"
    ></video>
  );
};
