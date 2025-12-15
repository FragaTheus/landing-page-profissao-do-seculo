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
          <small className="text-primary font-bold">
            {content.intro.headline}
          </small>
          <h3 className="font-bold">{content.intro.title}</h3>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center md:px-10">
        <p>{content.intro.description}</p>
      </div>
    </div>
  );
};

export const IntroSection = () => {
  return (
    <section className="mt-2" id="intro">
      <div className="bg-gray-600 w-full min-h-[30svh] rounded-sm  flex flex-col p-5 md:p-10 text-white gap-10">
        <IntroContent />
        <IntroBullets />
      </div>
    </section>
  );
};
