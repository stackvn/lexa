"use client";

import { fontMap } from "@/util/fonts";

interface PreviewProps {
  text: string;
  bg: string;
  font: string;
  textColor: string;
  fontSize: number;
  handleExport: (ref: React.RefObject<HTMLDivElement>) => void;
  exportRef: React.RefObject<HTMLDivElement> | null;
}

export default function Preview({
  text,
  handleExport,
  bg,
  font,
  textColor,
  fontSize,
  exportRef,
}: PreviewProps) {
  console.log(bg);
  return (
    <section className="flex-1 flex flex-col items-start justify-center gap-8">
      <div
        ref={exportRef}
        className="w-full h-[500px] flex items-center justify-center rounded-2xl shadow-lg px-10 py-4"
        style={{
          backgroundColor: bg,
          backgroundImage: bg,
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontFamily: fontMap[font] ?? "sans-serif",
          fontSize: `${fontSize}px`,
          color: textColor,
          whiteSpace: "pre-wrap",
        }}
      >
        <span>{text}</span>
      </div>
      <button
        onClick={() => handleExport(exportRef)}
        className="bg-[#1f9ded] hover:bg-[#18a0f5ff] text-white font-normal  px-6 py-[.6rem] rounded-md transition cursor-pointer"
      >
        Export
      </button>
    </section>
  );
}
