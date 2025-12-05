import Image from "next/image";
import icon from "@/assets/hero-icon.svg";
import content from "@/content/heroContent.json";

const MainContent = () => {
  const CtaBtn = () => {
    return (
      <button className="bg-primary w-2/3 rounded-sm p-3 md:p-5 transition-all hover:scale-110 active:scale-95 text-black hover:drop-shadow-2xl font-bold">
        {content.content.cta}
      </button>
    );
  };
  return (
    <div className="order-2 md:order-1 m-auto flex flex-col gap-2 md:gap-5 items-start">
      <h1 className="font-bold">{content.content.title}</h1>
      <p>{content.content.description}</p>
      <CtaBtn />
    </div>
  );
};

const DesignContent = () => {
  return (
    <div className="order-1 md:order-2 h-full w-full flex items-center">
      <div className="w-11/12">
        <Image src={icon} alt="Icone de um computador com graficos" />
      </div>
    </div>
  );
};

export const HeroContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full h-full items-center">
      <MainContent />
      <DesignContent />
    </div>
  );
};
