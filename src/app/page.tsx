import { Benefits } from "@/section/Benfits";
import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/section/HeroSection").then((mod) => mod.HeroSection),
  { ssr: true }
);

const IntroSection = dynamic(
  () => import("@/section/IntroSection").then((mod) => mod.IntroSection),
  { ssr: true }
);

const AboutSection = dynamic(
  () => import("@/section/About").then((mod) => mod.AboutSection),
  { ssr: true }
);

const Cta = dynamic(() => import("@/section/Cta").then((mod) => mod.Cta), {
  ssr: true,
});

const Footer = dynamic(
  () => import("@/section/Footer").then((mod) => mod.Footer),
  { ssr: true }
);

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
      <div className="max-w-[1440px] m-auto px-3">
        <Cta />
        <Footer />
      </div>
    </div>
  );
}
