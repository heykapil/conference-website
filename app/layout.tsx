import { cn } from "@/lib/utils";
import "./globals.css";
import { Readex_Pro as FontSans } from "next/font/google";
import { Footsies } from "@/components/footer";
import { Providers } from "@/components/theme/provider";
import Header from "@/components/header";
import { metadata } from "./metadata";
export { metadata };
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased mx-auto bg-background text-foregound max-w-[100%] mb-20 h-auto min-h-0 mt-0 lg:mx-auto",
          fontSans.variable
        )}
      >
        <Providers>
          <Header />
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
