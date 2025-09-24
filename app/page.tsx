"use client";

import { useState, useRef } from "react";

const fonts = ["sans-serif", "serif", "monospace", "cursive", "fantasy"];

export default function Home() {
  const [text, setText] = useState("Hello World!");
  const [font, setFont] = useState(fonts[0]);
  const [fontSize, setFontSize] = useState(32);
  const [textColor, setTextColor] = useState("#000000");
  const [bg, setBg] = useState("#ffffff");
  const [shadow, setShadow] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <header className="w-full py-6 px-8 flex justify-between items-center border-b bg-white/70 backdrop-blur-sm shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-gray-800">
          Lexa
        </h1>
      </header>

      <div className="flex w-full max-w-6xl flex-1 p-8 gap-8">
        {/* Controls Sidebar */}
        <aside className="w-72 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
          <h2 className="font-semibold text-lg text-gray-700">Controls</h2>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your text..."
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

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">
              Background Color
            </label>
            <input
              type="color"
              value={bg}
              onChange={(e) => setBg(e.target.value)}
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
              backgroundColor: bg,
              fontFamily: font,
              fontSize: `${fontSize}px`,
              color: textColor,
              textShadow: shadow ? "3px 3px 6px rgba(0,0,0,0.25)" : "none",
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
