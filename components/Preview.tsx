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
  return (
    <section className="flex-1 flex flex-col items-start justify-center gap-8">
      <div
        ref={exportRef}
        className="w-full h-[500px] flex items-center justify-center rounded-2xl shadow-lg px-8 py-4"
        style={{
          backgroundColor: bg,
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
        className="bg-orange-400 hover:bg-orange-500 text-white font-normal  px-6 py-[.6rem] rounded-lg transition cursor-pointer"
      >
        Export
      </button>
    </section>
  );
}
