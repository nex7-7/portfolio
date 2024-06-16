import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontSerif = localFont({
  src: [
    {
      path: "../public/fonts/Redaction-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Redaction-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
});
