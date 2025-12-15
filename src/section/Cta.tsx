import { CtaBtn } from "@/components/CtaButton";
import content from "@/content/ctaContent.json";

export const Cta = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-600 w-full rounded-sm flex flex-col p-5 md:p-10 text-white gap-5 md:gap-10 items-center">
        <small className="font-semibold text-primary text-center">
          {content.cta.headline}
        </small>
        <h1 className="font-black text-center">{content.cta.title}</h1>
        <p className="text-center">{content.cta.description}</p>
        <CtaBtn text={content.cta.button} />
      </div>
    </div>
  );
};
