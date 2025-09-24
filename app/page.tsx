"use client";

import Backgrounds from "@/components/Backgrounds";
import FontSelector from "@/components/FontSelector";
import FontSize from "@/components/FontSize";
import TextColor from "@/components/TextColor";
import TextInput from "@/components/TextInput";
import { backgrounds } from "@/util/helper";
import { useState, useRef } from "react";

const fonts = ["sans-serif", "serif", "monospace", "cursive", "fantasy"];

export default function Home() {
  const [text, setText] = useState("Hello World!");
  const [font, setFont] = useState(fonts[0]);
  const [fontSize, setFontSize] = useState(32);
  const [textColor, setTextColor] = useState("#000000");
  const [shadow, setShadow] = useState(false);

  const [bg, setBg] = useState("#f9fafb"); // current background
  const [customColor, setCustomColor] = useState("#f9fafb"); // only for <input type="color">
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

  return (
    <div className="min-h-[calc(100vh - 20px)] flex flex-col items-center justify-start pt-10">
      <Backgrounds
        backgrounds={backgrounds}
        onSelect={handleBackgroundSelect}
        selected={bg}
      />

      <div className="flex w-full max-w-6xl flex-1 p-8 gap-8">
        <aside className="w-72 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
          <TextInput text={text} setText={setText} />
          <FontSelector fonts={fonts} font={font} setFont={setFont} />
          <FontSize fontSize={fontSize} setFontSize={setFontSize} />
          <TextColor textColor={textColor} setTextColor={setTextColor} />
        </aside>

        {/* Preview Canvas */}
        <section className="flex-1 flex flex-col items-start justify-center gap-8">
          <div
            ref={exportRef}
            className="w-full h-[500px] flex items-center justify-center rounded-2xl shadow-lg px-8 py-4"
            style={{
              background: bg,
              fontFamily: font,
              fontSize: `${fontSize}px`,
              color: textColor,
              textShadow: "3px 3px 6px rgba(0,0,0,0.25)",
              whiteSpace: "pre-wrap", // ✅ keeps newlines
            }}
          >
            <span>{text}</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition cursor-pointer">
            Export
          </button>
        </section>
      </div>
    </div>
  );
}
