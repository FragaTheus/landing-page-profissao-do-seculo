import { WhyCards } from "@/components/WhyCards";
import { BenefitsMainCard } from "@/components/BenfitsMainCard";

export const Benefits = () => {
  return (
    <section className="py-5">
      <div className="min-[60svh] w-full grid grid-rows-6 gap-2">
        <div className="row-span-3">
          <WhyCards />
        </div>

        <div className="h-full w-full row-span-3">
          <BenefitsMainCard />
        </div>
      </div>
    </section>
  );
};
