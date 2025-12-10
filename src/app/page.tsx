import { Benefits } from "@/section/Benfits";
import { HeroSection } from "@/section/HeroSection";
import { IntroSection } from "@/section/IntroSection";

export default function Home() {
  return (
    <div>
      <main className="max-w-[1440px] m-auto px-3">
        <HeroSection />
        <IntroSection />
        <Benefits />
      </main>
    </div>
  );
}
