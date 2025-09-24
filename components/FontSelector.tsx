import { fontMap } from "@/util/fonts";
import { fonts } from "@/util/fonts";

interface FontSelectorProps {
  font: string;
  setFont: (font: string) => void;
}

export default function FontSelector({ font, setFont }: FontSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-600">Font</label>
      <select
        value={font}
        onChange={(e) => setFont(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-purple-500 text-gray-800"
      >
        {fonts.map((font) => (
          <option
            key={font.name}
            value={font.name}
            style={{ fontFamily: fontMap[font.name] }}
          >
            {font.name}
          </option>
        ))}
      </select>
    </div>
  );
}
