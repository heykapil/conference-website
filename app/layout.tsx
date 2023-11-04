import { cn } from "@/lib/utils";
import "./globals.css";
import { Readex_Pro as FontSans } from "next/font/google";
import { Footsies } from "@/components/footer";
import { Providers } from "@/components/theme/provider";
import Header from "@/components/header";
import { metadata } from "./metadata";
export { metadata };
export const fontSans = FontSans({
  // weight: ["400", "500", "600", "700"],
  // style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-sans",
  // display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased mx-auto bg-background text-foregound max-w-[100%] mb-20 h-auto min-h-0 mt-0 lg:mx-auto",
          fontSans.variable
        )}
      >
        <Providers>
          <Header />
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
          <main className="min-w-0 flex flex-col md:px-0 min-h-screen h-full">
            <section className="flex-1 child min-h-screen">{children}</section>
          </main>
          <div className="border-b border-input" />
          <Footsies />
        </Providers>
      </body>
    </html>
  );
}
