"use client";

type BackgroundSelectorProps = {
  backgrounds: { name: string; value: string }[];
  onSelect: (value: string) => void;
  selected: string;
};

export default function Backgrounds({
  backgrounds,
  onSelect,
  selected,
}: BackgroundSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {backgrounds.map((preset) => (
          <button
            key={preset.name}
            onClick={() => onSelect(preset.value)}
            className={`min-w-[80px] h-20 rounded-xl border-2 flex-shrink-0 transition ${
              selected === preset.value
                ? "border-blue-600"
                : "border-transparent"
            }`}
            style={{ background: preset.value }}
            title={preset.name}
          />
        ))}
      </div>
    </div>
  );
}
