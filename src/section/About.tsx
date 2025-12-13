import content from "@/content/aboutContent.json";
import Image from "next/image";
import bgDesktop from "@/assets/desktop.webp";
import { AboutMainContent } from "@/components/AboutMainContent";
import { Users } from "lucide-react";

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
          <div className="absolute bottom-1 w-full">
            <div className="m-auto w-11/12 bg-surface rounded-sm flex items-center justify-evenly p-2">
              <Users className="text-secondary size-15" />
              <small className="font-semibold">{content.about.title}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
