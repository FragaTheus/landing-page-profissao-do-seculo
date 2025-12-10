import { Header } from "@/components/Header";
import { HeroContent } from "@/components/HeroContent";

export const HeroSection = () => {
  return (
    <section id="hero-section">
      <div
        id="hero-container"
        className="min-h-[80svh] w-full grid grid-rows-7 m-auto"
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
