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
            <SunIcon className="relative py-[0.2rem] px-[0.6rem] rounded-lg bg-accent h-[70%] w-[70%]" />
          ) : (
            <MoonIcon className="relative py-[0.2rem] px-[0.6rem] rounded-lg bg-neutral-200 h-[70%] w-[70%]" />
          )}
        </>
      )}
    </div>
  );
};

export default ThemeSwitch2;
