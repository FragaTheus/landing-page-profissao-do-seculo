import content from "@/content/heroContent.json";

export const HeroFooter = () => {
  const SocialProof = (prop: { line1: string; line2: string }) => {
    return (
      <div className="text-background flex flex-col items-center justify-center font-semibold">
        <small>{prop.line1}</small>
        <small>{prop.line2}</small>
      </div>
    );
  };
  return (
    <div className="h-full w-full flex items-center bg-foreground p-2 rounded-sm">
      <div className="m-auto h-1/2 w-full flex justify-evenly items-center">
        {content.footer.social_proof.map((t, i) => (
          <SocialProof key={i} line1={t.line1} line2={t.line2} />
        ))}
      </div>
    </div>
  );
};
