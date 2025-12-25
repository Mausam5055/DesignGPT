import React from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = ({ projectName }: { projectName?: string }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="sticky top-0">
      <header
        className="border-b border-border/40
    bg-card/50 backdrop-blur-sm
    "
      >
        <div
          className="flex items-center justify-between px-4
          py-2
        "
        >
          <div className="flex items-center gap-4">
            <Logo />
            <Button
              size="icon-sm"
              variant="ghost"
              className="rounded-full bg-muted!"
              onClick={() => router.push("/")}
            >
              <ArrowLeftIcon className="size-4" />
            </Button>
            <p className="max-w-[200px] truncate font-medium">
              {projectName || "Untitled Project"}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="relative rounded-full h-8 w-8"
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              <SunIcon
                className={cn(
                  "absolute h-5 w-5 transition",
                  isDark ? "scale-100" : "scale-0"
                )}
              />
              <MoonIcon
                className={cn(
                  "absolute h-5 w-5 transition",
                  isDark ? "scale-0" : "scale-100"
                )}
              />
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
