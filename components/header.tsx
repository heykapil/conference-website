"use client";
import Image from "next/image";
import ThemeSwitch2 from "./theme/switch";
import { NavigationMenuHeader } from "./Menu";
import { siteMetadata } from "@/lib/data/siteMetadata";
import MobileMenu from "./Menu/mobile";
export default function Header() {
  return (
    <>
      <header className="sticky text-black dark:text-white top-0 z-9999 py-1 backdrop-filter backdrop-blur-sm bg-background/50 border-b border-muted">
        <div className="mt-0 mx-auto rounded-lg w-full flex-row justify-between">
          <div className="flex justify-between w-full max-w-full mx-auto px-2 md:px-10 lg:px-20">
            <div className="flex gap-2">
              <Image
                src="https://www.gujaratuniversity.ac.in/images/logo.png"
                alt="logo"
                width="50"
                height="50"
              />
              <div className="word-break items-center justify-center hidden font-normal lg:flex text-sm text-primary">
                Department of
                <br />
                {siteMetadata.department}
              </div>
            </div>
            <div className="hidden md:flex gap-4">
              <NavigationMenuHeader />
              <ThemeSwitch2 className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
            </div>
            <div className="flex md:hidden gap-4">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
