"use client";

import Backgrounds from "@/components/Backgrounds";
import FontSelector from "@/components/FontSelector";
import FontSize from "@/components/FontSize";
import Preview from "@/components/Preview";
import TextColor from "@/components/TextColor";
import TextInput from "@/components/TextInput";
import { fonts } from "@/util/fonts";
import { backgrounds } from "@/util/helper";
import { toPng } from "html-to-image";
import { useState, useRef } from "react";

export default function Home() {
  const [text, setText] = useState("Hello World!");
  const [font, setFont] = useState(fonts[0].name);
  const [fontSize, setFontSize] = useState(32);
  const [textColor, setTextColor] = useState("#000000");
  const [title, setTitle] = useState(text.split(" ")[0]);

  const [bg, setBg] = useState("#f9fafb");
  const exportRef = useRef<HTMLDivElement>(null);

  function getContrastColor(bgColor: string) {
    // Remove '#' if present
    const hex = bgColor.replace("#", "");

    // Parse hex to RGB
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Calculate brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Return black for light bg, white for dark bg
    return brightness > 125 ? "#000000" : "#FFFFFF";
  }

  const handleBackgroundSelect = (value: string) => {
    setBg(value);
    setTextColor(getContrastColor(value));
  };

  const handleExport = async (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;

    try {
      if (typeof document !== "undefined" && (document as any).fonts) {
        await (document as any).fonts.ready;
      }

      const dataUrl = await toPng(ref.current, {
        cacheBust: true,
        useCors: true,
        backgroundColor: bg || "white",
      } as any);

      const link = document.createElement("a");
      link.download = `${title}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed", err);
    }
  };

  return (
    <div className="min-h-[calc(100vh - 20px)] flex flex-col items-center justify-start pt-10">
      <Backgrounds
        backgrounds={backgrounds}
        onSelect={handleBackgroundSelect}
        selected={bg}
      />

      <div className="flex w-full max-w-6xl flex-1 p-8 gap-8">
        <aside className="w-72 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
          <TextInput text={text} setText={setText} setTitle={setTitle} />
          <FontSelector font={font} setFont={setFont} />
          <FontSize fontSize={fontSize} setFontSize={setFontSize} />
          <TextColor textColor={textColor} setTextColor={setTextColor} />
        </aside>
        <Preview
          text={text}
          font={font}
          fontSize={fontSize}
          textColor={textColor}
          bg={bg}
          handleExport={handleExport}
          exportRef={exportRef}
        />
      </div>
    </div>
  );
}
