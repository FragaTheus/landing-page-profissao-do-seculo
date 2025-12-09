import { IntroBullets } from "@/components/IntroBullets";
import content from "@/content/introContent.json";

const IntroContent = () => {
  return (
    <div
      id="content"
      className="w-full h-1/2  grid grid-cols-1 md:grid-cols-2 gap-2"
    >
      <div className="h-full w-full flex items-start justify-center">
        <div>
          <small className="text-secondary">{content.intro.headline}</small>
          <h3 className="font-bold">{content.intro.title}</h3>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center md:px-10">
        <small>{content.intro.description}</small>
      </div>
    </div>
  );
};

export const IntroSection = () => {
  return (
    <section className="w-full min-h-[60svh]">
      <div className="bg-foreground w-full h-full rounded-sm  flex flex-col p-5 md:p-10 text-background gap-10">
        <IntroContent />
        <IntroBullets />
      </div>
    </section>
  );
};
