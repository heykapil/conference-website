"use client";
import Image from "next/image";
import ThemeSwitch2 from "./theme/switch";
import { NavigationMenuHeader } from "./Menu";
export default function Header() {
  return (
    <>
      <header className="sticky text-black dark:text-white top-0 z-9999 py-1 backdrop-filter backdrop-blur-sm bg-background/50 border-b border-muted">
        <div className="mt-0 z-9999 mx-auto rounded-lg w-full flex-row justify-between  hidden md:flex">
          <div className="flex justify-between w-full max-w-full mx-auto px-20">
            <div className="flex">
              <Image
                src="https://www.gujaratuniversity.ac.in/images/logo.png"
                alt="logo"
                width="50"
                height="50"
              />
            </div>
            <div className="flex gap-4">
              <NavigationMenuHeader />
              <ThemeSwitch2 />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
