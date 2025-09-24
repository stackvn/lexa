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
import { ZapIcon } from "lucide-react";
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
    if (!ref?.current) return;

    let watermark: HTMLDivElement | null = null;

    try {
      // Wait for fonts to load
      if (typeof document !== "undefined" && (document as any).fonts) {
        await (document as any).fonts.ready;
      }

      // Create watermark and add it directly to the original element
      watermark = document.createElement("div");
      watermark.innerText = "© Lexa";

      Object.assign(watermark.style, {
        position: "absolute",
        bottom: "10px",
        right: "10px",
        fontSize: "16px",
        color: textColor,
        pointerEvents: "none",
        zIndex: "9999",
        fontFamily: font,
        fontWeight: "500",
      });

      // Store original position style
      const originalPosition = ref.current.style.position;

      // Set relative positioning if not already set
      if (!originalPosition || originalPosition === "static") {
        ref.current.style.position = "relative";
      }

      // Add watermark to original element
      ref.current.appendChild(watermark);

      // Export with watermark
      const dataUrl = await toPng(ref.current, {
        cacheBust: true,
        useCors: true,
        backgroundColor: bg || "white",
      } as any);

      // Create download link
      const link = document.createElement("a");
      link.download = `${title}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed", err);
    } finally {
      // Clean up: remove watermark from original element
      if (watermark && ref.current && ref.current.contains(watermark)) {
        ref.current.removeChild(watermark);
      }
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
          exportRef={exportRef as React.RefObject<HTMLDivElement>}
        />
      </div>
    </div>
  );
}
