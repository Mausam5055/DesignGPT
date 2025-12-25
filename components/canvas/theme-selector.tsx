"use client";

import { useCanvas } from "@/context/canvas-context";
import { parseThemeColors, ThemeType } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

const ThemeSelector = () => {
  const { themes, theme: currentTheme, setTheme } = useCanvas();

  return (
    <div className="flex flex-col max-h-96">
      <div className="flex-1 pb-2 px-3 overflow-y-auto">
        <h3 className="font-semibold text-sm mb-2">Choose a theme</h3>
        <div className="py-2 space-y-3">
          {themes?.map((theme) => (
            <ThemeItem
              key={theme.id}
              theme={theme}
              isSelected={currentTheme?.id === theme.id}
              onSelect={() => setTheme(theme.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function ThemeItem({
  theme,
  isSelected,
  onSelect,
}: {
  theme: ThemeType;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const color = parseThemeColors(theme.style);
  return (
    <button
      onClick={onSelect}
      className={cn(
        `flex items-center justify-between w-full
        p-1 rounded-xl border gap-4 bg-background
        hover:border-primary/50 hover:bg-accent/50
        `,
        isSelected ? "border-2" : "border"
      )}
      style={{
        borderColor: isSelected ? color.primary : "",
      }}
    >
      <div className="flex gap-2">
        {["primary", "secondary", "accent", "muted"].map((key) => (
          <div
            key={key}
            className="w-4 h-4 rounded-full border"
            style={{
              backgroundColor: color[key],
              borderColor: "#ccc",
            }}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 flex-[0.9]">
        <span className="text-sm">{theme.name}</span>
        {isSelected && <CheckIcon size={16} color={color.primary} />}
      </div>
    </button>
  );
}

export default ThemeSelector;
