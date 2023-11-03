"use client";
import Image from "next/image";
import ThemeSwitch2 from "./theme/switch";
import { NavigationMenuHeader } from "./Menu";
export default function Header() {
  return (
    <>
      <svg
        className="pointer-events-none fixed top-0 left-0 isolate z-50 opacity-25 mix-blend-normal"
        width="100%"
        height="100%"
      >
        <filter id="pedroduarteisalegend">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.70"
            numOctaves="5"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#pedroduarteisalegend)"
        ></rect>
      </svg>
      <header className="sticky text-black dark:text-white top-0 z-9999 py-1 backdrop-filter backdrop-blur-sm dark:bg-[#0a0a0a] bg-[#f6f6f6] border-b border-muted">
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
