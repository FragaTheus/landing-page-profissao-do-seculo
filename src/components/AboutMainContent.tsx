import avatar from "@/assets/avatar1.webp";
import avatar2 from "@/assets/avatar2.webp";
import avatar3 from "@/assets/avatar3.webp";
import content from "@/content/aboutContent.json";
import plus from "@/assets/plus-svgrepo-com.svg";
import "@/app/css/beforebg.css";
import Image from "next/image";
import { Users2 } from "lucide-react";

const avatars = [avatar, avatar2, avatar3, plus];

export const AboutMainContent = () => {
  return (
    <div className=" flex flex-col items-start justify-between gap-3 order-2 md:order-1">
      <div className="w-full bg-surface rounded-sm p-5 flex flex-col gap-5">
        <div className="flex p-3">
          {avatars.map((a, i) => (
            <Image
              key={i}
              src={a}
              alt={`Avatar${i + 1}`}
              sizes="40px"
              className="h-10 w-10 rounded-full -ml-3 border-2"
            />
          ))}
        </div>
        <p>{content.about.avatarsText}</p>
      </div>

      <div className="bg-surface w-full p-5 rounded-sm gap-5 flex flex-col flex-1 justify-between">
        <small className="text-secondary font-black">
          {content.about.headline}
        </small>
        <p>{content.about.text}</p>
        <div className="flex justify-between">
          {content.about.stats.map((s, i) => (
            <div key={i} className="flex flex-col">
              <small className="font-semibold text-secondary">{s.value}</small>
              <small className="font-semibold">{s.label}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
