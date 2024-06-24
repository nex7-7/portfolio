"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const Video = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <video
      src={theme === "dark" ? "/heroBg.mp4" : "heroBgLight.mp4"}
      autoPlay
      loop
      muted
      className="h-full w-full object-cover"
      type="video/MP4"
    ></video>
  );
};
