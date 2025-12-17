"use client";

import content from "@/content/heroContent.json";

const url = "https://pay.kirvano.com/2d8a4f30-1f2b-4bc5-acfc-a57f04ee5913";

const btnClass =
  "bg-foreground py-3 px-2 md:px-4 rounded-sm transition-all hover:scale-110 active:scale-95 hover:drop-shadow-2xl text-background font-semibold";

export const HeaderCtaBtn = () => {
  return (
    <button
      id="header-cta-btn"
      className={btnClass}
      onClick={() => window.open(url, "_blank")}
    >
      <small>{content.header.cta}</small>
    </button>
  );
};
