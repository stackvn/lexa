interface TextColorProps {
  textColor: string;
  setTextColor: (color: string) => void;
}

export default function TextColor({ textColor, setTextColor }: TextColorProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-600">Text Color</label>
      <input
        type="color"
        value={textColor}
        onChange={(e) => setTextColor(e.target.value)}
        className="h-10 w-full rounded-2xl"
      />
    </div>
  );
}
