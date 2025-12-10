import Image from "next/image";
import icon from "@/assets/hero-icon.svg";
import content from "@/content/heroContent.json";

const MainContent = () => {
  const CtaBtn = () => {
    return (
      <button className="bg-primary w-2/3 rounded-sm p-3 md:p-5 transition-all hover:scale-110 active:scale-95 text-black hover:drop-shadow-2xl font-semibold">
        {content.content.cta}
      </button>
    );
  };
  return (
    <div className="order-2 md:order-1 m-auto flex flex-col gap-3 md:gap-6 items-start">
      <div>
        <small className="text-secondary ml-1 font-semibold">
          @maverickferreira — Profissão do Século
        </small>
        <h1 className="font-bold tracking-tight">{content.content.title}</h1>
      </div>
      <p>{content.content.description}</p>
      <CtaBtn />
    </div>
  );
};

const DesignContent = () => {
  return (
    <div className="order-1 md:order-2 h-full w-full flex items-center">
      <div className="w-4/7 md:w-full">
        <Image src={icon} alt="Icone de um computador com graficos" />
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
