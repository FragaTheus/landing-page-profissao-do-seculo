"use client";

const url = "https://pay.kirvano.com/2d8a4f30-1f2b-4bc5-acfc-a57f04ee5913";

type CtaBtnType = {
  text: string;
};

export const CtaBtn = (t: CtaBtnType) => {
  return (
    <button
      id="cta-btn"
      onClick={() => window.open(url, "_blank")}
      className="bg-primary w-2/3 rounded-sm p-3 md:p-5 transition-all hover:scale-110 active:scale-95 text-black hover:drop-shadow-2xl font-semibold"
    >
      {t.text}
    </button>
  );
};
