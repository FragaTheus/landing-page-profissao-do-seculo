import { Header } from "@/components/Header";
import { HeroContent } from "@/components/HeroContent";
import { HeroFooter } from "@/components/HeroFooter";

export const HeroSection = () => {
  return (
    <section id="hero-section">
      <div
        id="hero-container"
        className="h-screen w-full grid grid-rows-7 max-w-[1440px] m-auto p-2"
      >
        <div className="flex items-center">
          <Header />
        </div>

        <div className="row-span-5">
          <HeroContent />
        </div>

        <div>
          <HeroFooter />
        </div>
      </div>
    </section>
  );
};
