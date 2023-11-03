"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
const ThemeSwitch2 = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="flex w-full h-full items-center justify-center cursor-pointer"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {mounted && (
        <>
          {theme === "dark" ? (
            <SunIcon className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
          ) : (
            <MoonIcon className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
          )}
        </>
      )}
    </div>
  );
};

export default ThemeSwitch2;
