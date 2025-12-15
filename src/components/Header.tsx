import { HeaderCtaBtn } from "./HeaderCta";

export const NavBtns = (props: { text: string; href: string }) => {
  return (
    <a
      href={props.href}
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
    </a>
  );
};

export const Header = () => {
  return (
    <header className="w-full h-full flex items-center">
      <div className="w-full h-1/2 m-auto justify-between items-center flex">
        <nav className="flex gap-1 md:gap-8 items-center justify-center">
          <NavBtns text="Intro" href="#intro" />

          <NavBtns text="Beneficio" href="#benefits" />

          <NavBtns text="Sobre" href="#about" />
        </nav>
        <div className="flex items-center justify-end">
          <HeaderCtaBtn />
        </div>
      </div>
    </header>
  );
};
