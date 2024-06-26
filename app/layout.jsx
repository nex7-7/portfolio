import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { fontSans } from "./fonts";
import { Toaster } from "react-hot-toast";
// import { Cursor } from "@/components/ui/cursor";

//components

export const metadata = {
  title: "Snehil Sinha",
  description: "Snehil Sinha's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      <body
        className={cn(
          "min-h-screen bg-background transition-colors ease-out duration-500 font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster />
          {/* <Cursor /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
