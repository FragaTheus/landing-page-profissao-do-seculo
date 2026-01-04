"use client";

import content from "@/content/ctaContent.json";
import dynamic from "next/dynamic";

const CtaBtn = dynamic(
  () => import("@/components/CtaButton").then((mod) => mod.CtaBtn),
  {
    ssr: false,
    loading: () => <p className="text-secondary">Carregadndo...</p>,
  }
);

export default function Cta() {
  return (
    <div className="w-full mt-2">
      <div className="bg-surface rounded-sm flex flex-col p-5 md:p-10  gap-5 md:gap-10 items-center">
        <h1 className="font-black text-center animate-shimmer">
          {content.cta.title}
        </h1>
        <p className="text-center">{content.cta.description}</p>
        <CtaBtn text={content.cta.button} />
      </div>
    </div>
  );
}
