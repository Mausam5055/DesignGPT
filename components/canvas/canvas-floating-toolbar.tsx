"use client";

import { CameraIcon, ChevronDown, Palette, Save, Wand2 } from "lucide-react";
import { useCanvas } from "@/context/canvas-context";
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import PromptInput from "../prompt-input";
import { useState } from "react";
import { parseThemeColors } from "@/lib/themes";
import ThemeSelector from "./theme-selector";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import {
  useGenerateDesignById,
  useUpdateProject,
} from "@/features/use-project-id";
import { Spinner } from "../ui/spinner";

const CanvasFloatingToolbar = ({
  projectId,
  isScreenshotting,
  onScreenshot,
}: {
  projectId: string;
  isScreenshotting: boolean;
  onScreenshot: () => void;
}) => {
  const { themes, theme: currentTheme, setTheme } = useCanvas();
  const [promptText, setPromptText] = useState<string>("");

  const { mutate, isPending } = useGenerateDesignById(projectId);

  const update = useUpdateProject(projectId);

  const handleAIGenerate = () => {
    if (!promptText) return;
    mutate(promptText);
  };

  const handleUpdate = () => {
    if (!currentTheme) return;
    update.mutate(currentTheme.id);
  };

  return (
    <div
      className="
   fixed 
   bottom-24 left-1/2 -translate-x-1/2 
   md:top-6 md:right-36 md:bottom-auto md:left-auto md:translate-x-0
   z-50
  "
    >
      <div
        className="w-full max-w-2xl bg-background
     dark:bg-gray-950 rounded-full shadow-xl border
     h-14 flex items-center
    "
      >
        <div className="flex flex-row items-center gap-2 px-3 w-full justify-between">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                size="icon-sm"
                className="px-4  bg-linear-to-r
                 from-purple-500 to-indigo-600
                  text-white rounded-2xl
                  shadow-lg shadow-purple-200/50 cursor-pointer"
              >
                <Wand2 className="size-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-80 p-2!
             rounded-xl! shadow-lg border mt-1
            "
            >
              <PromptInput
                promptText={promptText}
                setPromptText={setPromptText}
                className="min-h-[150px] ring-1! ring-purple-500!
                rounded-xl! shadow-none border-muted
                "
                hideSubmitBtn={true}
              />
              <Button
                disabled={isPending}
                className="mt-2 w-full
                  bg-linear-to-r
                 from-purple-500 to-indigo-600
                  text-white rounded-2xl
                  shadow-lg shadow-purple-200/50 cursor-pointer
                "
                onClick={handleAIGenerate}
              >
                {isPending ? <Spinner /> : <>Design</>}
              </Button>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <div className="flex items-center gap-2 px-3 py-2">
                <Palette className="size-4" />
                <div className="flex gap-1.5">
                  {themes?.slice(0, 4)?.map((theme, index) => {
                    const color = parseThemeColors(theme.style);
                    return (
                      <div
                        role="button"
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setTheme(theme.id);
                        }}
                        className={cn(
                          `w-6.5 h-6.5 rounded-full cursor-pointer
                           `,
                          currentTheme?.id === theme.id &&
                            "ring-1 ring-offset-1"
                        )}
                        style={{
                          background: `linear-gradient(135deg, ${color.primary}, ${color.accent})`,
                        }}
                      />
                    );
                  })}
                </div>
                <div
                  className="flex items-center gap-1 text-sm
                "
                >
                  +{themes?.length - 4} more
                  <ChevronDown className="size-4" />
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent
              className="px-0 rounded-xl
            shadow border
            "
            >
              <ThemeSelector />
            </PopoverContent>
          </Popover>

          {/* Divider */}
          <Separator orientation="vertical" className="h-4!" />

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon-sm"
              className="rounded-full cursor-pointer"
              disabled={isScreenshotting}
              onClick={onScreenshot}
            >
              {isScreenshotting ? (
                <Spinner />
              ) : (
                <CameraIcon className="size-4.5" />
              )}
            </Button>
            <Button
              variant="default"
              size="sm"
              className="rounded-full cursor-pointer"
              onClick={handleUpdate}
            >
              {update.isPending ? (
                <Spinner />
              ) : (
                <>
                  <Save className="size-4" />
                  Save
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasFloatingToolbar;
