"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="w-full fixed top-0 left-0 z-50 h-20 dark:bg-gradient-to-b from-gray-950 via-black to-gray-950">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors relative z-50"
        >
          {theme === "dark" ? (
            <SunIcon className="w-8 h-8 text-yellow-400" />
          ) : (
            <MoonIcon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>
    </header>
  );
}
