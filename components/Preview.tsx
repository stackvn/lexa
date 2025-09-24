"use client";

import { fontMap } from "@/util/fonts";

interface PreviewProps {
  exportRef: React.RefObject<HTMLDivElement>;
  handleExport: (ref: React.RefObject<HTMLDivElement>) => void;
  text: string;
  font: string;
  fontSize: number;
  textColor: string;
  bg: string;
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
    <section className="flex-1 flex flex-col items-start justify-center gap-8 w-full">
      <div
        ref={exportRef}
        className="w-full h-[500px] flex items-center justify-center rounded-lg shadow-lg px-10 py-4"
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
        onClick={() =>
          handleExport(exportRef as React.RefObject<HTMLDivElement>)
        }
        className="bg-[#1f9ded] hover:bg-[#18a0f5ff] text-white font-normal  px-6 py-[.6rem] rounded-md transition cursor-pointer"
      >
        Download
      </button>
    </section>
  );
}
