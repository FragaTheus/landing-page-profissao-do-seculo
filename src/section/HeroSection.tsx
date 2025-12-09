import { Header } from "@/components/Header";
import { HeroContent } from "@/components/HeroContent";

export const HeroSection = () => {
  return (
    <section id="hero-section" className="h-[78svh] md:h-[75svh]">
      <div
        id="hero-container"
        className="h-full w-full grid grid-rows-7 m-auto"
      >
        <div className="flex items-center">
          <Header />
        </div>

        <div className="row-span-6">
          <HeroContent />
        </div>
      </div>
    </section>
  );
};
