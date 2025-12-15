type CtaBtnType = {
  text: string;
};

export const CtaBtn = (t: CtaBtnType) => {
  return (
    <button className="bg-primary w-2/3 rounded-sm p-3 md:p-5 transition-all hover:scale-110 active:scale-95 text-black hover:drop-shadow-2xl font-semibold">
      {t.text}
    </button>
  );
};
