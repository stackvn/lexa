"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type BackgroundSelectorProps = {
  backgrounds: { name: string; value: string }[];
  onSelect: (value: string) => void;
  selected: string;
};

export default function Backgrounds({
  backgrounds,
  onSelect,
  selected,
}: BackgroundSelectorProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="flex flex-col gap-2 w-full relative mt-14">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center bg-white/80 dark:bg-gray-300 p-2 rounded-full shadow-md z-10 hover:scale-110 transition cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-700" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
      >
        {backgrounds.map((preset) => (
          <button
            key={preset.name}
            onClick={() => onSelect(preset.value)}
            className={`min-w-[80px] h-20 rounded-xl border-2 flex-shrink-0 transition ${
              selected === preset.value
                ? "border-blue-600"
                : "border-transparent"
            }`}
            style={{ background: preset.value }}
            title={preset.name}
          />
        ))}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center bg-white/80 dark:bg-gray-200 p-2 rounded-full shadow-md z-10 hover:scale-110 transition cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-700" />
      </button>
    </div>
  );
}
