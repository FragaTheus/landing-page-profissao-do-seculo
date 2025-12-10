import content from "@/content/introContent.json";
import { ClipboardCheck, Map, PieChart } from "lucide-react";

type BulletProps = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

const bullets: BulletProps[] = [
  {
    title: content.intro.bullets[0].title,
    text: content.intro.bullets[0].content,
    icon: <ClipboardCheck className="text-primary size-8" />,
  },
  {
    title: content.intro.bullets[1].title,
    text: content.intro.bullets[1].content,
    icon: <Map className="text-primary size-8" />,
  },
  {
    title: content.intro.bullets[2].title,
    text: content.intro.bullets[2].content,
    icon: <PieChart className="text-primary size-8" />,
  },
];

const Bullets = (prop: BulletProps) => {
  return (
    <div className="w-full h-full flex justify-start flex-col items-start gap-2 md:gap-5">
      {prop.icon}
      <p className="font-bold">{prop.title}</p>
      <p>{prop.text}</p>
    </div>
  );
};

export const IntroBullets = () => {
  return (
    <div
      id="cards"
      className="w-full h-1/2 grid grid-cols-1 md:grid-cols-3 gap-5"
    >
      {bullets.map((b, i) => (
        <Bullets key={i} title={b.title} text={b.text} icon={b.icon} />
      ))}
    </div>
  );
};
