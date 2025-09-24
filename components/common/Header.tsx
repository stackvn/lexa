"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full fixed top-0 z-50 h-20">
      <div className="w-full max-w-6xl mx-auto py-4 flex items-center justify-between h-full">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-200">
          Lexa
        </h1>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          {theme === "dark" ? (
            <SunIcon className="w-8 h-8 text-yellow-400" />
          ) : (
            <MoonIcon className="w-8 h-8 text-gray-300" />
          )}
        </button>
      </div>
    </header>
  );
}
