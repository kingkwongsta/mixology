"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import userStore from "@/lib/userStore";

import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";
  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(isDarkMode ? "light" : "dark")}
        className={`${isDarkMode ? "dark:text-white" : ""}`}
      >
        {isDarkMode ? (
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
