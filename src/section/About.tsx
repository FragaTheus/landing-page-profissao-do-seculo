import Image from "next/image";
import bgDesktop from "@/assets/desktop.webp";
import { AboutMainContent } from "@/components/AboutMainContent";

export const AboutSection = () => {
  return (
    <section className="w-full max-w-[1440px] m-auto p-4">
      <div className="min-h-[60svh] w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        <AboutMainContent />
        <div className=" w-full md:h-full order-1 md:order-2 relative flex">
          <Image
            src={bgDesktop}
            alt="Descrição da imagem"
            loading="lazy"
            sizes="(max-width: 768px) 720px,
           (max-width: 1024px) 1024px,
           1920px"
            className="object-cover rounded-sm h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};
