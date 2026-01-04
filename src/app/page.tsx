import Footer from "@/section/Footer";
import IntroSection from "@/section/IntroSection";
import dynamic from "next/dynamic";

const Benefits = dynamic(() => import("@/section/Benfits"), { ssr: false });

const HeroSection = dynamic(() => import("@/section/HeroSection"), {
  ssr: true,
});

const AboutSection = dynamic(() => import("@/section/About"), { ssr: true });

const Cta = dynamic(() => import("@/section/Cta"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="relative">
      <div className="h-screen w-full absolute -z-50 top-0 left-0 bg-surface" />
      <main className="max-w-[1440px] m-auto px-3">
        <HeroSection />
        <IntroSection />
        <Benefits />
        <AboutSection />
        <Cta />
        <Footer />
        <div className="h-[35svh] w-full absolute -z-50 bottom-0 left-0 bg-gray-600" />
      </main>
    </div>
  );
}
