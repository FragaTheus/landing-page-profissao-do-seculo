import { HeroSection } from "@/section/HeroSection";

export default function Home() {
  return (
    <div className="max-w-[1440px] m-auto">
      <main>
        <HeroSection />
        <section className="h-svh w-full"></section>
      </main>
    </div>
  );
}
