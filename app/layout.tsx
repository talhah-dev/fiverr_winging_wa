import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Winging WA | AFS Foils & Manta Foil Assist Australia",
  description:
    "WingingWA is the Australian distributor for AFS Foils and the Western Australian dealer for Manta Foil Assist.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} font-sans h-full antialiased`}
    >
      <body className={`${dmSans.className} min-h-full flex flex-col`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
