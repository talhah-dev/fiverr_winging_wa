"use client";

import { useEffect, useRef } from "react";
import "./afs-silk-detail.css";
import { silkHtml } from "./silkHtml";

const AfsSilkDetailContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const rangeSection = containerRef.current.querySelector("#range");
    if (!rangeSection) return;

    const buttons = rangeSection.querySelectorAll<HTMLButtonElement>("button");
    const tabPanels = rangeSection.querySelectorAll<HTMLDivElement>(
      ".w-full.py-\\[60px_20px\\] > div",
    );

    if (buttons.length > 0 && tabPanels.length > 0) {
      const activateTab = (index: number) => {
        buttons.forEach((btn, idx) => {
          if (idx === index) {
            btn.classList.add("!text-white", "border-b-2", "!border-[#ef0e0a]");
            btn.classList.remove("!text-[#777777]", "!border-white");
          } else {
            btn.classList.remove("!text-white", "border-b-2", "!border-[#ef0e0a]");
            btn.classList.add("!text-[#777777]");
          }
        });

        tabPanels.forEach((panel, idx) => {
          if (idx === index) {
            panel.classList.remove("hidden");
          } else {
            panel.classList.add("hidden");
          }
        });
      };

      buttons.forEach((btn, idx) => {
        btn.addEventListener("click", () => activateTab(idx));
      });

      activateTab(2);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#4A505B] text-white overflow-hidden"
      dangerouslySetInnerHTML={{ __html: silkHtml }}
    />
  );
};

export default AfsSilkDetailContent;

