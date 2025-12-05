import content from "@/content/heroContent.json";

export const HeroFooter = () => {
  const SocialProof = (prop: { line1: string; line2: string }) => {
    return (
      <div className="text-foreground opacity-20 flex flex-col items-center justify-center font-bullet">
        <p>{prop.line1}</p>
        <p>{prop.line2}</p>
      </div>
    );
  };
  return (
    <div className="h-full w-full flex items-center">
      <div className="m-auto h-1/2 w-full flex justify-between items-center">
        {content.footer.social_proof.map((t, i) => (
          <SocialProof key={i} line1={t.line1} line2={t.line2} />
        ))}
      </div>
    </div>
  );
};
