interface FontSizeProps {
  fontSize: number;
  setFontSize: (fontSize: number) => void;
}

export default function FontSize({ fontSize, setFontSize }: FontSizeProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-600">Font Size</label>
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
  );
}
