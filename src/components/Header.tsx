import content from "@/content/heroContent.json";

export const NavBtns = (props: { text: string }) => {
  return (
    <button
      className="hover:bg-foreground 
                      p-2
                      rounded-sm 
                      hover:scale-110 
                      transition-all 
                      hover:drop-shadow-2xl 
                      active:scale-95 
                      active:bg-black 
                      hover:text-background"
    >
      <small>{props.text}</small>
    </button>
  );
};

export const Header = () => {
  return (
    <header className="w-full h-full flex items-center">
      <div className="w-full h-1/2 m-auto grid grid-cols-3 justify-between ">
        <div className="font-bold flex items-start flex-col justify-center">
          <small>Profissao</small>
          <small> do Seculo</small>
        </div>
        <nav className="flex gap-1 md:gap-8 items-center justify-center">
          <NavBtns text="Inicio" />

          <NavBtns text="Beneficio" />

          <NavBtns text="Sobre" />
        </nav>
        <div className="flex items-center justify-end">
          <button
            className="bg-foreground 
                            py-3 
                            px-2 
                            md:px-4 
                            rounded-sm 
                            hover:scale-110 
                            active:scale-95 
                            transition-all 
                            hover:drop-shadow-2xl 
                            text-background
                            font-semibold"
          >
            <small>{content.header.cta}</small>
          </button>
        </div>
      </div>
    </header>
  );
};
