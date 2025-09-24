interface FontSelectorProps {
  fonts: string[];
  font: string;
  setFont: (font: string) => void;
}

export default function FontSelector({
  fonts,
  font,
  setFont,
}: FontSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-600">Font</label>
      <select
        value={font}
        onChange={(e) => setFont(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        {fonts.map((f) => (
          <option key={f} value={f}>
            {f}
          </option>
        ))}
      </select>
    </div>
  );
}
