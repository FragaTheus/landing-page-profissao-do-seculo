import Image from "next/image";
import bgDesktop from "@/assets/desktop.webp";
import { AboutMainContent } from "@/components/AboutMainContent";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="min-h-[60svh] w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        <AboutMainContent />
        <div className=" w-full md:h-full order-1 md:order-2 relative flex">
          <Image
            src={bgDesktop}
            alt="Imagem do autor"
            loading="lazy"
            className="object-cover rounded-sm w-full h-full"
            width={388}
            height={218}
            sizes="(max-width: 768px) 388px, (max-width: 1024px) 720px, 1024px"
          />
        </div>
      </div>
    </section>
  );
}
