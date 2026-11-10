"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.startsWith("/dashboard")) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
    });

    return () => {
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
