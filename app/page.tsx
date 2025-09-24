"use client";

import Backgrounds from "@/components/Backgrounds";
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
    <main className="min-h-[calc(100vh - 20px)] flex flex-col items-center justify-start pt-10">
      <Backgrounds
        backgrounds={backgrounds}
        onSelect={handleBackgroundSelect}
        selected={bg}
      />

      <div className="flex w-full max-w-6xl flex-1 p-8 gap-8">
        <aside className="w-72 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
          <div>
            <label className="text-sm font-medium text-gray-600">Text</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="border p-2 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Type your text here..."
              rows={4}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">Font</label>
            <select
              value={font}
              onChange={(e) => setFont(e.target.value)}
              className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {fonts.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">
              Font Size
            </label>
            <input
              type="range"
              min="16"
              max="100"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="accent-blue-600"
            />
            <span className="text-xs text-gray-500">{fontSize}px</span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">
              Text Color
            </label>
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="h-10 w-full border rounded"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Custom Background
            </label>
            <input
              type="color"
              value={customColor}
              onChange={(e) => {
                setCustomColor(e.target.value);
                setBg(e.target.value);
              }}
              className="h-10 w-full border rounded"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={shadow}
              onChange={() => setShadow(!shadow)}
              className="accent-blue-600"
            />
            <label className="text-sm font-medium text-gray-600">
              Text Shadow
            </label>
          </div>
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
    </main>
  );
}
