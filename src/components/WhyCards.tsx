import content from "@/content/benfitsContent.json";

export const WhyCards = () => {
  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="bg-surface rounded-sm px-5 md:px-10 flex flex-col items-start justify-evenly">
        <h1 className="text-secondary font-black">
          {content.benefits.card1.quantity}
        </h1>
        <h4 className="font-semibold">{content.benefits.card1.content}</h4>
      </div>

      <div className="bg-surface rounded-sm px-5 md:px-10 flex flex-col items-start justify-center">
        <h4 className="font-semibold">
          {content.benefits.card2.content}
          <span className="text-secondary">{content.benefits.card2.span1}</span>
          {content.benefits.card2.content1}
          <span className="text-secondary">{content.benefits.card2.span2}</span>
          {content.benefits.card2.content2}
        </h4>
      </div>
    </div>
  );
};
