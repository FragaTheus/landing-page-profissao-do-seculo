"use client";

import dynamic from "next/dynamic";
import { WhyCards } from "@/components/WhyCards";

const BenefitsMainCard = dynamic(() => import("@/components/BenfitsMainCard"), {
  ssr: false,
  loading: () => <div style={{ height: 200 }}>Carregando...</div>,
});

export const Benefits = () => {
  return (
    <section className="py-2" id="benefits">
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
