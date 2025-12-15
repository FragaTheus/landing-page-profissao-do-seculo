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

export const Cta = () => {
  return (
    <div className="w-full">
      <div className="bg-linear-120 from-secondary to bg-primary w-full rounded-sm flex flex-col p-5 md:p-10  gap-5 md:gap-10 items-center">
        <p className="font-semibold text-center">{content.cta.headline}</p>
        <h1 className="font-black text-center">{content.cta.title}</h1>
        <p className="text-center">{content.cta.description}</p>
        <CtaBtn text={content.cta.button} />
      </div>
    </div>
  );
};
