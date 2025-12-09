import { HeroSection } from "@/section/HeroSection";
import { IntroSection } from "@/section/IntroSection";

export default function Home() {
  return (
    <div className="max-w-[1440px] m-auto px-3">
      <main>
        <HeroSection />
        <IntroSection />
      </main>
    </div>
  );
}
