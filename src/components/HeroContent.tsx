"use client";

import Image from "next/image";
import icon from "@/assets/hero-icon.svg";
import content from "@/content/heroContent.json";
import dynamic from "next/dynamic";
import "@/app/css/titlegradient.css";

const CtaBtn = dynamic(
  () => import("@/components/CtaButton").then((mod) => mod.CtaBtn),
  {
    ssr: false,
    loading: () => <p className="text-secondary p-2">Carregando...</p>,
  }
);

const MainContent = () => {
  return (
    <div className="order-2 md:order-1 m-auto flex flex-col gap-3 md:gap-6 items-start">
      <div>
        <small className="text-secondary ml-1 font-semibold">
          @maverickferreira — Profissão do Século
        </small>
        <h1 className="font-bold tracking-tight bg-clip-text animate-shimmer">
          {content.content.title}
        </h1>
      </div>
      <p>{content.content.description}</p>
      <CtaBtn text={content.content.cta} />
    </div>
  );
};

const DesignContent = () => {
  return (
    <div className="order-1 md:order-2 h-full w-full flex items-center">
      <div className="w-5/7 md:w-full">
        <Image
          src={icon}
          alt="Icone de um computador com graficos"
          priority
          fetchPriority="high"
        />
      </div>
    </div>
  );
};

export const HeroContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full items-center">
      <MainContent />
      <DesignContent />
    </div>
  );
};
