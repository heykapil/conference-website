import { Metadata, Viewport } from "next";
import { siteMetadata } from "@/lib/data/siteMetadata";
export const metadata: Metadata = {
  title: `${siteMetadata.title}`,
  description: `${siteMetadata.university}`,
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: `${siteMetadata.title}`,
    description: `${siteMetadata.university}`,
    url: "https://heykapil.in",
    siteName: "heykapil.in",
    images: [
      {
        url: `https://heykapil.in/og?title=${siteMetadata.title}`,
        width: 1920,
        height: 1080,
        alt: "",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
