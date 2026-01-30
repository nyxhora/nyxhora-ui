"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function SimpleModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative h-8 w-8 rounded-full border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md backdrop-blur-sm"
    >
      <div className="relative flex items-center justify-center">
        <Sun
          className="h-4 w-4 rotate-0 scale-100 transition-all duration-500 ease-in-out
                       dark:-rotate-90 dark:scale-0 text-amber-500"
        />
        <Moon
          className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-500 ease-in-out
          dark:rotate-0 dark:scale-100 text-blue-400"
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
