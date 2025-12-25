import React from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { LoginLink, LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { ArrowLeftIcon, LogOutIcon, MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = ({ projectName }: { projectName?: string }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { user } = useKindeBrowserClient();
  const isDark = theme === "dark";

  return (
    <>
      <div className="fixed top-6 left-6 z-40 flex items-center gap-2 pointer-events-none">
        <header className="pointer-events-auto h-14 bg-background/80 backdrop-blur-md border rounded-full shadow-sm px-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-[10px] font-medium text-muted-foreground hidden lg:block pt-1">
              By Mausam Kar
            </span>
          </div>

          <div className="flex items-center gap-2 border-l pl-4 ml-2">
            <Button
              size="icon-sm"
              variant="ghost"
              className="rounded-full bg-muted/50 hover:bg-muted"
              onClick={() => router.push("/")}
            >
              <ArrowLeftIcon className="size-4" />
            </Button>
            <p className="max-w-[200px] truncate font-medium text-sm">
              {projectName || "Untitled Project"}
            </p>
          </div>
        </header>
      </div>

      <div className="fixed top-6 right-6 z-40 flex items-center gap-2 pointer-events-none">
        <div className="pointer-events-auto h-14 bg-background/80 backdrop-blur-md border rounded-full shadow-sm px-2 gap-2 flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="relative rounded-full h-9 w-9"
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

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="h-9 w-9 shrink-0 rounded-full border">
                  <AvatarImage
                    src={user?.picture || ""}
                    alt={user?.given_name || ""}
                  />
                  <AvatarFallback className="rounded-lg">
                    {user?.given_name?.charAt(0)}
                    {user?.family_name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogoutLink className="w-full flex items-center">
                    <LogOutIcon className="size-4 mr-2" />
                    Logout
                  </LogoutLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <LoginLink>
              <Button size="sm" className="rounded-full">
                Sign in
              </Button>
            </LoginLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
