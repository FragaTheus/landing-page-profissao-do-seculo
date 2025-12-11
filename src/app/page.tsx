import { AboutSection } from "@/section/About";
import { Benefits } from "@/section/Benfits";
import { HeroSection } from "@/section/HeroSection";
import { IntroSection } from "@/section/IntroSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main className="max-w-[1440px] m-auto px-3">
        <HeroSection />
        <IntroSection />
        <Benefits />
      </main>
      <div className="about-bg relative">
        <AboutSection />
      </div>
    </div>
  );
}
